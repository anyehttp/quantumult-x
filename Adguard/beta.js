/*****************************


^https:\/\/api\.widgetbox\.top\/v1\/payment\/products\/vip\/list url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js

[mitm] 
hostname = api.widgetbox.top
********************************/
let anye = JSON.parse($response.body);

Object.keys(anye).forEach(key => {
    if (anye[key] === true && key === "needVip") {
        anye[key] = false;
    }
});

$done({body: JSON.stringify(anye)});