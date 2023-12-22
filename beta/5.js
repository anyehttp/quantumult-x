/*

[rewrite_local]
^https:\/\/memoryhelper\.fujianjin6471\.com\/api\/v4\.7\/sts_token url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/5.js
^https:\/\/memoryhelper\.fujianjin6471\.com\/api\/v4\.7\/expiration_date url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/5.js

[MITM]
hostname = memoryhelper.fujianjin6471.com

*/
var anye = JSON.parse($response.body);

var vip1 = /^https:\/\/memoryhelper\.fujianjin6471\.com\/api\/v4\.7\/sts_token/
var vip1 = /^https:\/\/memoryhelper\.fujianjin6471\.com\/api\/v4\.7\/expiration_date/

if(vip1.test($request.url)){
    anye.Expiration = "2099-12-22T04:48:59Z";
}

if(vip2.test($request.url)){
    anye.decrease_subscription_from_server = true;
    anye.expiration_date = 9999;
}
$done({ body: JSON.stringify(anye) });