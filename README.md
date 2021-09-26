# rn-callkeep-android

```
curl --location --request POST 'https://fcm.googleapis.com/fcm/send' \
--header 'Authorization: key=AAAAfvEkm3k:APA91bFp_b0cBtLh6SfU3LRjGBQujN7FZDtB1SWEP5jUm_jL1lR9Tgsb7naiPk-9TpxnsFwHu3ajcADEtbgmgL5VRirBv9kWdQoQQo_nVC2G7WjPkGlK9z3402rg8ufN3aSdV6MeI0I_' \
--header 'Content-Type: application/json' \
--data-raw '    {
            "to": "fIVhp1RJQByY_EitNC2FPW:APA91bHZTAYlLbisdjiDtSoyiSd-zkkDsBfpJK2V-D-syHK91foP0iaOT9YoKJKej92OwFylnL1TohOycpPlMTr0niUKAJKSNOhDFcYyXgyyUga00C8niVB4cont-ZziB_MrA29lU5tV",
            "data":{
                "channel_id":"incoming_call",
                "title": "44w call",
                "body": "Alexewwe is calling",
                "phone": "565",
                "not_id": "16721",
                "callId": "6810703a-c178-4253-8c8c-425e775fb1a3"
            },
    
            "priority": "high",
            "topic":"all"
        }'
        
```
