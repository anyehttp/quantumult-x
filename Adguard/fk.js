/*************************************
项目名称：翻咔
下载地址：
更新日期：2024-01-04
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https:\/\/api\.finka\.cn\/vas\/nearby\/v2 url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/fk.js
[mitm]
hostname = api.finka.cn
*************************************/
let body = $response.body;
let obj = JSON.parse(body);

if (obj.list && obj.list.length > 0) {
    obj.list.forEach(item => {
        if (item.hasOwnProperty("hide")) {
            item.hide = false;
        }
    });
}

$done({ body: JSON.stringify(obj) });
