/*
if(vip1.test($request.url))

var anye = JSON.parse($response.body);
for (var i = 0; i < anye.obj.buyLst.length; i++) {
    anye.obj.buyLst[i].payAmount = "0";
}
$done({body : JSON.stringify(anye)}); 


Persona 1.8.24

[rewrite_local]

^https:\/\/www\.doctorsclass\.com\/api\/v1\.wechatUser\/getUserInfo url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js

[mitm] 

hostname = doctorsclass.com

*/

var anye = JSON.parse($response.body);

    anye.vip_expire = 1;
    anye.update_time = "2099-12-30 19:48:13";
    anye.nick_name = "暗夜";
    anye.vip = 4102314836;
    anye.vip_id = 1;
    
$done({body : JSON.stringify(anye)}); 