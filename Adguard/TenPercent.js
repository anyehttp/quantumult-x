/*************************************

项目名称：TenPercent
下载地址：https://too.st/71x
更新日期：2023-12-24
脚本作者：@anyeyey
指导: @ios151
使用声明：⚠️仅供参考，🈲转载与售卖！
群组：https://t.me/IPAs_share
**************************************

[rewrite_local]
^https:\/\/api\.changecollective\.com\/api\/v3\/user url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/TenPercent.js 

[mitm]
hostname = api.changecollective.com

*************************************/


var body = $response.body;
var anye = JSON.parse(body);
    
    anye.user.subscription_period = "P1Y";
    anye.user.expiration_date = "12/31/2099, 06:21:58 PM UTC";
    anye.user.subscription_in_trial = true;
    anye.user.completed_trial = true;
    anye.user.display_name = "暗夜";
    anye.user.subscription_end_date = "12/30/2099, 08:21:58 PM UTC";
    anye.user.subscription_is_auto_renewing = true;
    anye.user.first_name = "暗夜";
    anye.user.subscription_source = "Apple";

$done({body : JSON.stringify(anye)});