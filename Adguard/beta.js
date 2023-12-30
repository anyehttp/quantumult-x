/*****************************


^https:\/\/api\.widgetbox\.top\/v1\/payment\/products\/vip\/list url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/yk2.js

[mitm] 
hostname = api.widgetbox.top
********************************/
var anye = JSON.parse($response.body);
    anye.data.isDefault = true;
$done({body : JSON.stringify(anye)});
