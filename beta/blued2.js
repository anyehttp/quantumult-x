/*************************************
[rewrite_local]
^https:\/\/social\.blued\.cn\/users\?birth_time url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/blued2.js

[mitm]
hostname = social.blued.cn
*************************************/
var anye = JSON.parse($response.body);

if (/users\?birth_time/.test($request.url)) {
    const data = anye.data;

    for (const key in data) {
        if (data.hasOwnProperty(key) && data[key].hasOwnProperty('extra') && typeof data[key]['extra'] === 'object') {
            const extra = data[key]['extra'];

            for (const item of extra) {
                if (item.hasOwnProperty('adms_user') && Array.isArray(item['adms_user'])) {
                    item['adms_user'].forEach(ad => {
                        ad.ranking = 0;
                        ad.ranking_banner_one = 0;
                        ad.is_ads = 0;
                    });
                }
            }
        }
    }

    $done({ body: JSON.stringify(anye) }); // 输出处理后的 JSON 数据
} else {
    $done({});
}