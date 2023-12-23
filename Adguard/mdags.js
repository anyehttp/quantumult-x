/*************************************

项目名称：TenPercent
下载地址：https://too.st/71x
更新日期：2023-12-24
脚本作者：@anyeyey
指导: @ios151
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.feihua100\.com\/api\/feihua\/v2\/course\/session\/verifySession url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/mdags.js 

[mitm]
hostname = api.feihua100.com

*************************************/


var anye = JSON.parse($response.body);
let array = anye.data;
    array.map(e => {
        e.isOpen = 1;
    });

$done({body : JSON.stringify(anye)});