/*************************************

项目名称：WorldTalk
下载地址：
更新日期：2024-01-07
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/www\.zerophil\.com\/services\/v1\/query_user_message_num url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/WorldTalk.js

[mitm]
hostname = www.zerophil.com
*************************************/


var anye = JSON.parse($response.body);
    anye.data.number = 1;
$done({body: JSON.stringify(anye)});