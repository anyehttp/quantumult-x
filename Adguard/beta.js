
/*************************************

项目名称：穿梭
下载地址：https://too.st/72S
更新日期：2023-12-24
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
群组：https://t.me/IPAs_share
**************************************

[rewrite_local]
^https:\/\/fapi\.zduhxck\.com\/vpn\/user_info url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js 

[mitm]
hostname = fapi.zduhxck.com

*************************************/


var anye = JSON.parse($response.body);
    
    anye.result.vip_type = 2;
    anye.result.invite_valid = true;
    anye.result.is_new_user = 1;
    anye.result.isTodayVip = 1;
    anye.result.every_day_time = 9999;
    anye.result.vip_time = 4102069110;
    

$done({body : JSON.stringify(anye)});