/*************************************

项目名称：OKMath全科启蒙
下载地址：https://too.st/71y
更新日期：2023-12-24
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
群组：https://t.me/IPAs_share
**************************************

[rewrite_local]
^https:\/\/d1hzbu30hrhkoe\.cloudfront\.net\/mobile\/verify\/ios\/v2\/ url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/RainViewer.js 

[mitm]
hostname = d1hzbu30hrhkoe.cloudfront.net

*************************************/


var anye = JSON.parse($response.body);
    
    anye.data.purchased = true;
    anye.data.is_cancelled = true;
    anye.data.has_orders = true;
    anye.data.expiration = 4073121495;
    anye.data.is_expired = false;

$done({body : JSON.stringify(anye)});