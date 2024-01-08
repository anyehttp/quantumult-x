/*
^https:\/\/api\.iyf\.tv\/api\/Video\/GetAdsDataList url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/iyf.js
^https:\/\/api\.iyf\.tv\/api\/List\/IndexPageRecomData url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/iyf.js


hostname = api.iyf.tv
*/


anye = JSON.parse($response.body);
    anye.data = {};
$done({body: JSON.stringify(anye)});