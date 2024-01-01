/*************************************

项目名称：Me+
下载地址：https://too.st/7dn
更新日期：2024-01-01
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^http:\/\/new\.360pyq\.com\/Main\/Member\/SearchUserInfo url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/ttpyq.js
^http:\/\/new\.360pyq\.com\/Main\/Member\/member_info url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/ttpyq.js

[mitm]
hostname = new.360pyq.com

*************************************/


var anye = JSON.parse($response.body);
const vip1 = /^http:\/\/new\.360pyq\.com\/Main\/Member\/SearchUserInfo/;
const vip2 = /^http:\/\/new\.360pyq\.com\/Main\/Member\/member_info/;


if(vip1.test($request.url)){
    //vip
    anye.result.is_vip = 1;
    //经验
    anye.result.exp = 999;
    //到期时间戳
    anye.result.vip_expire = "4070946489";
    //等级
    anye.result.lv = 99;
}
if(vip2.test($request.url)){
    anye.member.admin_type = "1";
    anye.member.vip_expire = "4070946489";
    anye.member.name = "暗夜";
    anye.member.exp = 999;
    anye.member.is_vip = 1;
    anye.member.lv = 99;
}


$done({ body: JSON.stringify(anye) });