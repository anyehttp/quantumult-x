/*************************************
[rewrite_local]
^https:\/\/social\.blued\.cn\/users\?birth url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/blued3.js

[mitm]
hostname = social.blued.cn
*************************************/

// 正则表达式匹配 URL


if (/^https:\/\/social\.blued\.cn\/users\?birth.test($request.url)) {
    var anye = JSON.parse($response.body);
    function deleteFields(data) {
        for (var key in data) {
            if (typeof data[key] === 'object') {
                deleteFields(data[key]);
            } else if (key === 'show_url'  key === 'ads_id'  key === 'id') {
                delete data[key];
            } else if (key === 'is_ads') {
                data["is_ads"] = 0;
            }
        }
    }

    deleteFields(anye);

    $done({ body: JSON.stringify(anye) }); // 输出处理后的 JSON 数据
} else {
    $done({}); // 不符合正则匹配规则的 URL 原样返回
}
