/*************************************
微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录
微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录
微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录
微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录
微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录
微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录
微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录
微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录微信登录
*************************************
项目名称：the L
下载地址：https://too.st/7hI
更新日期：2024-01-04
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
*************************************
人脸需要女生人脸需要女生人脸需要女生人脸需要女生人脸需要女生人脸需要女生
人脸需要女生人脸需要女生人脸需要女生人脸需要女生人脸需要女生人脸需要女生
人脸需要女生人脸需要女生人脸需要女生人脸需要女生人脸需要女生人脸需要女生
人脸需要女生人脸需要女生人脸需要女生人脸需要女生人脸需要女生人脸需要女生
人脸需要女生人脸需要女生人脸需要女生人脸需要女生人脸需要女生人脸需要女生
人脸需要女生人脸需要女生人脸需要女生人脸需要女生人脸需要女生人脸需要女生
新注册的号发不了消息卡住是因为有一个人脸关掉脚本才可以弹出来
新注册的号发不了消息卡住是因为有一个人脸关掉脚本才可以弹出来
新注册的号发不了消息卡住是因为有一个人脸关掉脚本才可以弹出来
新注册的号发不了消息卡住是因为有一个人脸关掉脚本才可以弹出来
新注册的号发不了消息卡住是因为有一个人脸关掉脚本才可以弹出来
新注册的号发不了消息卡住是因为有一个人脸关掉脚本才可以弹出来
新注册的号发不了消息卡住是因为有一个人脸关掉脚本才可以弹出来
新注册的号发不了消息卡住是因为有一个人脸关掉脚本才可以弹出来
新注册的号发不了消息卡住是因为有一个人脸关掉脚本才可以弹出来
新注册的号发不了消息卡住是因为有一个人脸关掉脚本才可以弹出来
新注册的号发不了消息卡住是因为有一个人脸关掉脚本才可以弹出来
新注册的号发不了消息卡住是因为有一个人脸关掉脚本才可以弹出来
新注册的号发不了消息卡住是因为有一个人脸关掉脚本才可以弹出来
新注册的号发不了消息卡住是因为有一个人脸关掉脚本才可以弹出来
**************************************

[rewrite_local]
^https:\/\/api\.rela\.me\/v3\/interface\/stay\/myInfoForFriend url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/thel.js
^https:\/\/api\.rela\.me\/v3\/payment\/ios-vip-status url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/thel.js
^https:\/\/api\.rela\.me\/v3\/users\/vip\/detail url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/thel.js
^https:\/\/api\.rela\.me\/v2\/params\/init\?apptype url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/thel.js
[mitm]
hostname = api.rela.me
*************************************/

var anye = JSON.parse($response.body);
const vip1 = /^https:\/\/api\.rela\.me\/v3\/interface\/stay\/myInfoForFriend/;
const vip2 = /^https:\/\/api\.rela\.me\/v3\/payment\/ios-vip-status/;
const vip3 = /^https:\/\/api\.rela\.me\/v3\/users\/vip\/detail/;
const vip4 = /^https:\/\/api\.rela\.me\/v2\/params\/init\?apptype/;
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
    anye.data.vipSetting = {
      "expireTime" : "2099-01-01",
      "distanceHiding" : 1,
      "followRemind" : 1,
      "endTimestamp" : 4071216264,
      "autoSubscribe" : 1,
      "winkHiding" : 1,
      "startTimestamp" : 1704374665,
      "userId" : 0,
      "level" : 99,
      "incognito" : 1,
      "vipHiding" : 1,
      "onlineHiding" : 1,
      "fansHiding" : 1,
      "hiding" : 1,
      "vipType" : 1,
      "liveHiding" : 1,
      "vipIconLevel" : 1,
      "msgHiding" : 1
    };
}
if(vip4.test($request.url)){
  anye.data.vipSetting = {
      "hiding" : 1,
      "vipHiding" : 1,
      "onlineHiding" : 1,
      "winkHiding" : 1,
      "incognito" : 1,
      "liveHiding" : 1,
      "msgHiding" : 1,
      "fansHiding" : 1,
      "followRemind" : 1,
      "distanceHiding" : 1
    };
  anye.data.useFiveSDK = false;
  anye.data.vipType = 1;
}


$done({ body: JSON.stringify(anye) });