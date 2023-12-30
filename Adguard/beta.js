/*****************************


^https:\/\/api\.widgetbox\.top\/v1\/payment\/products\/vip\/list url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js

[mitm] 
hostname = api.widgetbox.top
********************************/
var anye = JSON.parse($response.body);

anye.data.forEach(function(entry) {
    entry.isDefault = true;
});

$done({body : JSON.stringify(anye)});
