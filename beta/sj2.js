/*************************************
[rewrite_local]
^http:\/\/login\.user\.kugou\.com\/v5\/login_by_token url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/sj2.js


[mitm]
hostname = login.user.kugou.com
*************************************/

var anye = JSON.parse($response.body);

const vip1 = /^http:\/\/login\.user\.kugou\.com\/v5\/login_by_token/;

    anye.data = {
            "vip_token" : "99999999",
            "vip_end_time" : "9999-99-99 17:32:25",
            "su_vip_end_time" : "9999-99-99 17:32:25",
            "is_vip" : 1,
            "su_vip_clearday" : "9999-99-99 17:32:25",
    }


$done({body: JSON.stringify(anye)});
