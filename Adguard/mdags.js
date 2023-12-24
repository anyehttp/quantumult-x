/*************************************

项目名称：TenPercent
下载地址：https://too.st/71x
更新日期：2023-12-24
脚本作者：@anyeyey
指导: @ios151
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.feihua100\.com\/api\/feihua\/v4\/course\/radio\/userRadio\? url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/mdags.js 
^https:\/\/api\.feihua100\.com\/api\/feihua\/v2\/poemAlbum\/chapter\/course\/list\? url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/mdags.js
^https:\/\/api\.feihua100\.com\/api\/feihua\/v2\/course url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/mdags.js

[mitm]
hostname = api.feihua100.com

*************************************/


var body = $response.body;

//关卡
body = body.replace(/"isOpen"\s*:\s*0/g, '"isOpen": 1');

//畅学包
body = body.replace(/"isEnable"\s*:\s*2/g, '"isEnable": 1');

//畅学包
body = body.replace(/"isExperiential"\s*:\s*2/g, '"isExperiential": 1');

//听儿歌
body = body.replace(/"is_exp_class"\s*:\s*0/g, '"is_exp_class": 1');

//听儿歌
body = body.replace(/"radio_order"\s*:\s*1/g, '"radio_order": 2');

$done({ body });
