/*************************************
项目名称：潮汐
下载地址：
更新日期：2024-01-23
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************
[rewrite_local]
^https:\/\/oceantides\.9oc\.net\/goc_member\/v2\/_allow\/getMemberInfo url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/cx.js
[mitm]
hostname = oceantides.9oc.net
*************************************/
var anye = JSON.parse($response.body);
    anye.result.level.configJson = "{\"ad\":false,\"tide\":{\"enable\":true,\"beginDay\":-7,\"endDay\":7},\"vmap\":{\"enable\":true},\"collectionPoint\":{\"edit\":true,\"maxCount\":9999}}";
	anye.result.member.nickName = "暗夜11111";
$done({body: JSON.stringify(anye)});