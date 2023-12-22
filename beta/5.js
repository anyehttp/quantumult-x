/*

[rewrite_local]
^https:\/\/memoryhelper\.fujianjin6471\.com\/api\/v4\.7\/sts_token url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/5.js


[MITM]
hostname = memoryhelper.fujianjin6471.com

*/
var anye = JSON.parse($response.body);
anye.Expiration = "2099-12-22T04:48:59Z";
$done({ body: JSON.stringify(anye) });