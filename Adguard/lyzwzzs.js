/*************************************

项目名称：Wakeout
下载地址：https://too.st/77Q
更新日期：2023-12-24
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.luyingou\.com\/user\/getAppUser url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/lyzwzzs.js 

[mitm]
hostname = api.luyingou.com

*************************************/


var anye = JSON.parse($response.body);
    
    anye.data.user.vipExpire = 9999;
    anye.data.user.vipMonthConvertTime = 9999;
    anye.data.user.isVip = true;
    anye.data.user.alias = "暗夜";
    anye.data.user.name = "暗夜";

$done({body : JSON.stringify(anye)});