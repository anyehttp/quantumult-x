
/*************************************

项目名称：穿梭
下载地址：https://too.st/72S
更新日期：2023-12-24
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https:\/\/api\.qiandurebo\.com\/v2\/users url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js 

[mitm]
hostname = api.qiandurebo.com

*************************************/


var anye = JSON.parse($response.body);
    
    anye.viplevel = "999";

$done({body : JSON.stringify(anye)});