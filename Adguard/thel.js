/*************************************

项目名称：
下载地址：
更新日期：2024-01-04
脚本作者：@ios151
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.rela\.me\/v3\/interface\/stay\/myInfoForFriend url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/thel.js
^https:\/\/api\.rela\.me\/v3\/payment\/ios-vip-status url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/thel.js
^https:\/\/api\.rela\.me\/v3\/users\/vip\/detail url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/thel.js
[mitm]
hostname = api.rela.me


*************************************/

var anye = JSON.parse($response.body);
const vip1 = /^https:\/\/api\.rela\.me\/v3\/interface\/stay\/myInfoForFriend/;
const vip2 = /^https:\/\/api\.rela\.me\/v3\/payment\/ios-vip-status/;
const vip3 = /^https:\/\/api\.rela\.me\/v3\/users\/vip\/detail/;

if(vip1.test($request.url)){
    anye.data.nickName = "1暗夜1";
    anye.data.vipType = 1;
    anye.data.vipIconLevel = 1;
    anye.data.levelExpireTime = "2099-01-01";
}
if(vip2.test($request.url)){
    anye.data = {
    "status" : 1,
    "endTime" : "2099-01-01 08:00:00",
    "vipType" : 1,
    "level" : 99,
    "vipIconLevel" : 1,
    "expirationVipStatus" : 1,
  };
}
if(vip3.test($request.url)){
    anye.data.vipSetting.expireTime = "2099-01-01";
    anye.data.vipSetting.endTimestamp = 4071216264;
    anye.data.vipSetting.startTimestamp = 1704374665;
    anye.data.vipSetting.vipType = 1;
}
$done({ body: JSON.stringify(anye) });