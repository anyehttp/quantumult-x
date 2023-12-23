/*************************************

项目名称：TenPercent
下载地址：
更新日期：2023-12-24
脚本作者：@anyeyey
指导: @ios151
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.changecollective\.com\/api\/v3\/user url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/TenPercent.js 

[mitm]
hostname = api.changecollective.com

*************************************/


var body = $response.body;
var anye = JSON.parse(body);
    anye.user = {
    "subscription_period" : 2099-12-23T17:57:36Z,
    "admin" : true,
    "expiration_date" : 2099-12-23T17:57:36Z,
    "display_name" : "暗夜",
    "subscription_end_date" : 2099-12-23T17:57:36Z,
    "first_name" : "暗夜",
  }

$done({body : JSON.stringify(anye)});