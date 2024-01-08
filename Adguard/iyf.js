/*
^https:\/\/api\.iyf\.tv\/api\/Video\/GetAdsDataList\?typeList url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/iyf.js
^https:\/\/api\.iyf\.tv\/api\/List\/IndexPageRecomData\?IsNewEdition url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/iyf.js

hostname = api.iyf.tv
*/


anye = JSON.parse($response.body);
    anye.data = {};
$done({body: JSON.stringify(anye)});