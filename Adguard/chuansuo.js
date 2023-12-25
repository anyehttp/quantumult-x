/*************************************

项目名称：穿梭
下载地址：https://too.st/71y
更新日期：2023-12-24
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
群组：https://t.me/IPAs_share
**************************************

[rewrite_local]
^https:\/\/abscf2\.fobwifi\.com\/api\/1\/user\/misc-info url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/chuansuo.js 

[mitm]
hostname = abscf2.fobwifi.com

*************************************/


var anye = JSON.parse($response.body);
    
    anye.ads_free = true;
    anye.apple_subscription_status = 1;
    anye.is_new_user = true;
    anye.expire_at = "2099-12-28 14:23:43";
    anye.ads_free_before_time = 1;
    anye.google_subscription_status = 1;
    anye.expire_at_time = 4101863216;
    anye.expired = false;
    anye.is_pro_user = true;
    anye.remaining_days = 9999;
    anye.ads_free_before = "2970-01-01 08:00:01";
    anye.ads_remaining_days = 9999;

$done({body : JSON.stringify(anye)});