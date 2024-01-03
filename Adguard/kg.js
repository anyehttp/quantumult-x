/*************************************

项目名称：微信小程序.金麦客专业k歌
下载地址：微信小程序
更新日期：2024-01-03
脚本作者：@ios151
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
https:\/\/portal-global\.j-make\.cn\/h5 url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/kg.js

[mitm]
hostname = portal-global.j-make.cn

*************************************/
var body = $response.body;

body = body.replace(/"charge":\s*1/g, "\"charge\": 0");
body = body.replace(/"vipStatus":\s*\d+/g, "\"vipStatus\": 1");
body = body.replace(/"type":\s*\d+/g, "\"type\": 1");
body = body.replace(/"purchaseStatus":\s*\d+/g, "\"purchaseStatus\": 1");
body = body.replace(/"vipExpireTime":\s*".*?"/g, "\"vipExpireTime\": \"2099-01-03 19:44:58\"");

$done({ body });