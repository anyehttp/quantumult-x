/*
[rewrite_local]
^https:\/\/api\.club\.lenovo\.cn\/common\/open_ad url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/lx.js
[MITM]
hostname = api.club.lenovo.cn

*/
var anye = JSON.parse($response.body);
anye. res =｛"residence_Time" = 0｝
$done({ body: JSON.stringify(anye) });
