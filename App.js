/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import 'react-native-get-random-values';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {v4 as uuidv4} from 'uuid';

import RNCallKeep from 'react-native-callkeep';

messaging().onMessage(async remoteMessage => {
  const id = uuidv4();
  console.log(remoteMessage, id);
  try {
    RNCallKeep.displayIncomingCall(
      id,
      '+919497641816',
      'Hariks',
      'number',
      false,
      null,
    );
  } catch (error) {
    console.log(error);
  }
});

messaging().setBackgroundMessageHandler(async message => {
  // const {callId, callerPhone} = message?.data;
  // console.log({message, callId});
  // RNCallKeep.displayIncomingCall(callId, callerPhone);
  const id = uuidv4();
  console.log(message, id);
  try {
    RNCallKeep.displayIncomingCall(
      id,
      '+919497641816',
      'Hariks',
      'number',
      false,
      null,
    );
  } catch (error) {
    console.log(error);
  }
});

RNCallKeep.setup({
  ios: {
    appName: 'App name',
  },
  android: {
    alertTitle: 'Permissions required',
    alertDescription: 'This application needs to access your phone accounts',
    cancelButton: 'Cancel',
    okButton: 'ok',
  },
}).then(accepted => {
  if (Platform.android) {
    RNCallKeep.setActive(true);
  }
  RNCallKeep.addEventListener('answerCall', ({callUUID, ...o}) => {
    // to hide the native "accepted call" screen
    RNCallKeep.rejectCall(callUUID);
  });
  RNCallKeep.addEventListener('endCall', ({callUUID}) => {
    console.log('endCall.', callUUID);
  });
});

const checkToken = async () => {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
    console.log('fcmToken:', fcmToken);
  }
};

checkToken();

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
