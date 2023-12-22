/*

[rewrite_local]
^https:\/\/api\.zhuishushenqi\.com\/user\/account url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/7.js
^https:\/\/api\.zhuishushenqi\.com\/user\/account\/vip url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/7.js
^https:\/\/api\.zhuishushenqi\.com\/user\/detail-info url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/7.js

[MITM]
hostname = api.zhuishushenqi.com

*/
var anye = JSON.parse($response.body);

var vip1 = /^https:\/\/api\.zhuishushenqi\.com\/user\/account/
var vip2 = /^https:\/\/api\.zhuishushenqi\.com\/user\/account\/vip/
var vip3 = /^https:\/\/api\.zhuishushenqi\.com\/user\/detail-info/


if(vip1.test($request.url)){
    anye = {
  "isFree" : true,
  "time" : 99,
  "isNewUser" : true,
  "superMonthlyExpire" : 0,
  "vipId" : "999",
  "isSVIPUser" : true,
  "isNewUserVip" : true,
  "isMonthly" : true,
  "vipStatus" : 99,
  "isAppstoreAutoMonthly" : true,
  "expiresDay" : 99
 };
}
if(vip2.test($request.url)){
    anye.vipExpire = "2099-12-22T17:29:04.072Z"
}

if(vip3.test($request.url)){
    anye.vipLv = 99,
    anye.lastDay = 99,
    anye.exp = 99,
    anye.type = "vip",
    anye.lv = 99,
    anye.vipExp = 99
}

$done({ body: JSON.stringify(anye) });