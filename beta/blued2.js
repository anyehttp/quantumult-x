/*************************************
[rewrite_local]
^https:\/\/social\.blued\.cn\/users\?birth_time.*$ url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/blued2.js

[mitm]
hostname = social.blued.cn
*************************************/

// 正则表达式匹配 URL
if (/^https:\/\/social\.blued\.cn\/users\?birth_time.*$/.test($request.url)) {
    var anye = JSON.parse($response.body);

    // 删除字段
    anye.extra.adms_user.forEach(item => {
        delete item.show_url;
        delete item.ads_id;
        delete item.id;
        item.is_ads = 0;
    });

    $done({ body: JSON.stringify(anye) }); // 输出处理后的 JSON 数据
} else {
    $done({}); // 不符合正则匹配规则的 URL 原样返回
}
