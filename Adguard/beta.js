
/*************************************

项目名称：穿梭
下载地址：https://too.st/72S
更新日期：2023-12-24
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https:\/\/iosapi\.peiyinxiu\.com\/Api\/Film\/HomeData url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js 
^https:\/\/iosapi\.peiyinxiu\.com\/Api\/user\/GetMyInfo url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js
[mitm]
hostname = iosapi.peiyinxiu.com

*************************************/
var anye = JSON.parse($response.body);
const vip1 = /^https:\/\/iosapi\.peiyinxiu\.com\/Api\/Film\/HomeData/;
const vip2 = /^https:\/\/iosapi\.peiyinxiu\.com\/Api\/user\/GetMyInfo/;

    if(vip1.test($request.url)){
        anye.data.film.is_vip = true;
}
    if(vip2.test($request.url)){
        anye.data.is_vip = 1;
}

$done({body : JSON.stringify(anye)});