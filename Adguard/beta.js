/*************************************

项目名称：毛豆爱古诗
下载地址：https://too.st/71L
更新日期：2023-12-24
脚本作者：@anyeyey
指导: @ios151
使用声明：⚠️仅供参考，🈲转载与售卖！

解锁部分功能
**************************************

[rewrite_local]
^https:\/\/api\.finka\.cn\/user\/profile\/view\/v3 url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js 

[mitm]
hostname = api.finka.cn

*************************************/


var anye = JSON.parse($response.body);
    anye.data.user.vipAd = 3;
    anye.data.user.vip = true;
    anye.data.user.pro = true;
    anye.data.user.isVideoAvatarValid = true;
    anye.data.user.officialAccount = true;
    anye.data.user.aloha = true;
    anye.data.user.match = true;
    anye.data.user.ssvip = true;
    anye.data.user.name = "暗夜";
    anye.data.user.svip = true;
    anye.data.user.annualSsvip = true;
    anye.data.user.annualVip = true;
    anye.data.user.summary = "暗夜暗夜暗夜暗夜暗夜";

$done({body : JSON.stringify(anye)});
