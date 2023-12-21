/*************************************
[rewrite_local]
^https:\/\/social\.blued\.cn\/users url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/blued2.js

[mitm]
hostname = social.blued.cn
*************************************/
var anye = JSON.parse($response.body);

if (/^https:\/\/social\.blued\.cn\/users/.test($request.url)) {
    const ad = anye.extra;

    for (const key in ad) {
        if (ad.hasOwnProperty(key) && Array.isArray(ad[key])) {
            ad[key].forEach(item => {
                item.ranking = 0;
                item.ranking_banner_one = 0;
                item.is_ads = 0;
            });
        }
    }

    $done({ body: JSON.stringify(anye) }); // 输出处理后的 JSON 数据
} else {
    $done({});
}
