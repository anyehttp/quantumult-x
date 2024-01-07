/*************************************
项目名称：快点阅读
下载地址：
更新日期：2024-01-07
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https:\/\/api\.crucio\.hecdn\.com\/v12\/user url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/kdyd.js
[mitm]
hostname = api.crucio.hecdn.com
*************************************/
var anye = JSON.parse($response.body);
    anye.data.users[0].svip_expire_time = 4071480609000;
    anye.data.users[0].is_official = true;
    anye.data.users[0].name = "暗夜11";
    anye.data.users[0].is_svip = true;
$done({body: JSON.stringify(anye)});