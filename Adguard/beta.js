/*
if(vip1.test($request.url))

var anye = JSON.parse($response.body);
for (var i = 0; i < anye.obj.buyLst.length; i++) {
    anye.obj.buyLst[i].payAmount = "0";
}
$done({body : JSON.stringify(anye)}); 


Persona 1.8.24

[rewrite_local]

^https:\/\/api\.maoyan\.com\/sns\/user\/1873536104\/profile url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js

[mitm] 

hostname = api.maoyan.com

*/


var anye = JSON.parse($response.body);
    anye.data.user.currentExp = 12900;
    anye.data.user.vipType = 1;
    anye.data.user.totalExp = 0;
    anye.data.user.username = "暗夜";
    
$done({body : JSON.stringify(anye)}); 