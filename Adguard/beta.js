/*
[rewrite_local]

^https:\/\/www\.doctorsclass\.com\/api\/v1\.wechatUser\/getUserInfo url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js

[mitm] 

hostname = doctorsclass.com

*/

var anye = JSON.parse($response.body);

    anye.vip_expire = 1;
    anye.nick_name = "暗夜";
    anye.vip = 2099.12.30;
    anye.vip_id = 1;
    
$done({body : JSON.stringify(anye)}); 