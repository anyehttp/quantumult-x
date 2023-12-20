/*************************************
[rewrite_local]
^https:\/\/bd-api\.kuwo\.cn\/api\/play\/listening\/user url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/bd1.js
^https:\/\/bd-api\.kuwo\.cn\/api\/ucenter\/users\/login url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/bd1.js

[mitm]
hostname = bd-api.kuwo.cn
*************************************/

var anye = JSON.parse($response.body);

const vip1 = /^https:\/\/bd-api\.kuwo\.cn\/api\/play\/listening\/user/;
const vip2 = /^https:\/\/bd-api\.kuwo\.cn\/api\/ucenter\/users\/login/;

if (vip1.test($request.url)) {
    anye.data.userInfo = {
        "expireDate" : 4092599349000,
        "isSigned" : 1,
        "lastPayType" : 1,
        "isVip" : 1,
        "authType" : 3,
        "status" : 1,
        "isBind" : 1
    };
}

if (vip2.test($request.url)) {
    anye.data.userInfo = {
        "expireDate" : 4092599349000,
        "isSigned" : 1,
        "lastPayType" : 1,
        "isVip" : 0,
        "authType" : 3,
        "status" : 1,
        "isBind" : 1
    };
}

$done({ body: JSON.stringify(anye) });
