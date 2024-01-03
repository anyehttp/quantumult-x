/*************************************

项目名称：桌面猫
下载地址：https://too.st/7dn
更新日期：2024-01-03
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/gs\.gateway\.gameley\.cn\/np-user\/user\/coin\/info url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/zmm.js
^https:\/\/gs\.gateway\.gameley\.cn\/np-user\/shopping\/buy url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/zmm.js
[mitm]
hostname = gs.gateway.gameley.cn
*************************************/
var anye = JSON.parse($response.body);
const vip1 = /^https:\/\/gs\.gateway\.gameley\.cn\/np-user\/user\/coin\/info/;
const vip2 = /^https:\/\/gs\.gateway\.gameley\.cn\/np-user\/shopping\/buy/;


if(vip1.test($request.url)){
    anye.info.coinNumber = 9999;
}

if(vip2.test($request.url)){
    anye.info.number = 999;
    anye.info.status.isNeeds = true;
    anye.info.status.isNeeds = true;
}

$done({body : JSON.stringify(anye)});