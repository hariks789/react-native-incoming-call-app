# iOS

Uses react-native-callkeep package to present incoming call with fcm data only messages



# Android

Uses fcm for data only message to wake the app in quit state or lock state.
Presents a local notification with android USE_FULL_SCREEN_INTENT to launch rn app even in lock screen. 
While the device is unlocked app presents a headsup notification with action buttons

Refer https://github.com/zo0r/react-native-push-notification/pull/2112


```
curl --location --request POST 'https://fcm.googleapis.com/fcm/send' \
--header 'Authorization: key=fcm server key' \
--header 'Content-Type: application/json' \
--data-raw '    {
"to": "device_token",
"data":{
    "channel_id":"incoming_call",
    "title": "Incoming call",
    "body": "Alexe is calling",
    "phone": "554-456-5676",
    "not_id": "16721",
    "callId": "6810703a-c178-4253-8c8c-425e775fb1a3"
},
"priority": "high",
"topic":"all"
}'
        
```

# ToDo
Add android side of code
