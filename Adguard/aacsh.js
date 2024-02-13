/*************************************
项目名称：安安车生活
下载地址：
更新日期：2024-02-13
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https:\/\/lifeserver\.clifes\.cn\/exam\/vip\/info url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/aacsh.js
[mitm]
hostname = lifeserver.clifes.cn
*************************************/
var anye = JSON.parse($response.body);
anye.data = {
    "flag": true,
    "vVip": true,
    "buy": true
  }
$done({body : JSON.stringify(anye)});;