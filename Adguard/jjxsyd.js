/*************************************
项目名称：晋江小说去开屏
下载地址：
更新日期：2024-01-013
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https:\/\/ios\.jjwxc\.com\/app\.jjwxc\/ios\/reading\/WapAdvertises\/getAd? url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/jjxsyd.js

[mitm]
hostname = ios.jjwxc.com
*************************************/
var anye = JSON.parse($response.body);
    anye.data = [];
$done({body: JSON.stringify(anye)});