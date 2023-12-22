/*

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/receipts url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/wpzn.js

[MITM]
hostname = api.revenuecat.com

*/
var anye = JSON.parse($response.body);
anye.request_date_ms = 148204937166000,
anye.request_date = "9999-12-22T03:19:30Z",
anye.subscriber = {
    "first_seen" : "9999-12-22T03:17:51Z",
    "original_purchase_date" : "9999-12-22T03:17:41Z",
    "last_seen" : "9999-12-22T03:17:51Z"
}
$done({ body: JSON.stringify(anye) });