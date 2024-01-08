/*
^https:\/\/api\.iyf\.tv\/api\/Video\/GetAdsDataList\?typeList=1,2,3,4,5,6,8&mediaKey=i6qZq1HKc47&System=h5&AppVersion=1\.0&SystemVersion=h5&version=H3&DeviceId url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/iyf.js
^https:\/\/api\.iyf\.tv\/api\/List\/IndexPageRecomData\?IsNewEdition=true&System=h5&AppVersion=1\.0&SystemVersion=h5&version=H3&DeviceId url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/iyf.js

hostname = api.iyf.tv
*/


anye = JSON.parse($response.body);
    anye.data = {};
$done({body: JSON.stringify(anye)});