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
^https:\/\/moyin-gateway\.moyin\.com\/tts-web-api\/v1\/storeSpeakerV2\/searchSpeakerForMini url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js 

[mitm]
hostname = moyin-gateway.moyin.com

*************************************/


var anye = $response.body;

anye = anye.replace(/"isUsable"\s*:\s*false/g, '"isUsable": true');
anye = anye.replace(/"expiredAt"\s*:\s*null/g, '"expiredAt": "2099-12-25T19:01:47.000+0800"');
anye = anye.replace(/"wordNum"\s*:\s*null/g, '"wordNum": 99999');

$done({ body: anye });
