/*************************************
项目名称：DanceFitme
下载地址：
更新日期：2024-01-07
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https:\/\/api\.dancefit\.me\/h2oapi\/dance\/user\/detail url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/DanceFitme.js

[mitm]
hostname = api.dancefit.me
*************************************/


var anye = JSON.parse($response.body);
    anye.result.plus_vip_start_time = "2019-01-07";
    anye.result.vip_end_time = "2099-01-07";
    anye.result.is_plus_vip = 1;
    anye.result.vip_start_time = "2019-01-07";
    anye.result.plus_vip_end_time = "2099-01-07";
    anye.result.is_super_vip = 1;
    
    
$done({body: JSON.stringify(anye)});