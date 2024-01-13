/*************************************
项目名称：blued
下载地址：
更新日期：2024-01-13
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https:\/\/mi\.gdt\.qq\.com\/gdt_mview\.fcg\?posid url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/blued.js

[mitm]
hostname = mi.gdt.qq.com
*************************************/


var anye = JSON.parse($response.body);
    anye = {};
$done({body: JSON.stringify(anye)});