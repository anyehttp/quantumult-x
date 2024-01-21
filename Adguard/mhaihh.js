/*************************************
项目名称：梦幻AI绘画
下载地址：
更新日期：2024-01-15
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/aiservice\.xsdr\.top\/expression\/api\/signin\/getSigninStatus url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/mhaihh.js
^https:\/\/aiservice\.xsdr\.top\/expression\/api\/gold\/getDetailById url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/mhaihh.js
[mitm]
hostname = aiservice.xsdr.top
*************************************/
var anye = JSON.parse($response.body);
const vip1 = /^https:\/\/aiservice\.xsdr\.top\/expression\/api\/signin\/getSigninStatus/;
const vip2 = /^https:\/\/aiservice\.xsdr\.top\/expression\/api\/gold\/getDetailById/;

if(vip1.test($request.url){
    anye.data.todaySignin = false;
    anye.data.todayGetGold = 999999;
    anye.data.todayContinueSignin = 99;
    anye.data.dayGapGold = 9999;
    anye.data.showSignin = true;
    anye.data.tomorrowGetGold = 9999;
};
if(vip2.test($request.url){
    anye.data.gold = 99999;
};


$done({body: JSON.stringify(anye)});