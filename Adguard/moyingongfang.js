./*************************************

项目名称：魔音工坊
下载地址：https://too.st/723
更新日期：2023-12-24
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/moyin-gateway\.moyin\.com\/moyin-account\/v1\/vip\/status url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/moyingongfang.js 

[mitm]
hostname = moyin-gateway.moyin.com

*************************************/


var anye = JSON.parse($response.body);
    
    anye.data.expireDays = 4101794198000;
    anye.data.realVip = true;
    
$done({body : JSON.stringify(anye)});