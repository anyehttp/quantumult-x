/*

[rewrite_local]
^https:\/\/learning\.quark\.cn\/api\/home_data url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/8.js

[MITM]
hostname = learning.quark.cn

*/
var anye = JSON.parse($response.body);

var vip1 = /^https:\/\/learning\.quark\.cn\/api\/home_data/;

    anye.initialState = {
        "isVip" : true,
    }

$done({ body: JSON.stringify(anye) });