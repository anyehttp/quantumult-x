/*************************************
项目名称：MOJiyd
下载地址：
更新日期：2024-01-14
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https:\/\/api\.mojidict\.com\/app\/mojiread\/parse\/functions\/(target-fetch|reading-article-detail) url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/MOJiyd.js 

[mitm]
hostname = api.mojidict.com
*************************************/
var anye = JSON.parse($response.body);
    anye.1.isVIP = false;
    anye.result.isVIP = false;
$done({body : JSON.stringify(anye)});