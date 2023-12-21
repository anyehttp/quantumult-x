/*************************************
[rewrite_local]
https://social.blued.cn/users? url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/blued2.js

[mitm]
hostname = social.blued.cn
*************************************/
var anye = JSON.parse($response.body);

const data = anye.data;
const extra = anye.extra;

function setFieldsToZero(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (key === 'ranking' || key === 'ranking_banner_one' || key === 'is_ads') {
                obj[key] = 0;
            } else if (typeof obj[key] === 'object') {
                setFieldsToZero(obj[key]);
            }
        }
    }
}

setFieldsToZero(data);
setFieldsToZero(extra);

$done({ body: JSON.stringify(anye) }); // 输出处理后的 JSON 数据
