/*************************************

项目名称：中医在线
下载地址：
更新日期：2023-12-30
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
解锁会员无效恢复购买
**************************************

[rewrite_local]
^http:\/\/mmm\.tcmmooc\.com\/mapi_v3\/User\/loginWithToken url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/zyzx.js
^http:\/\/mmm\.tcmmooc\.com\/mapi_v3\/User\/getUserCenterInfo url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/zyzx.js
^http:\/\/mmm\.tcmmooc\.com\/mapi_v3\/User\/getApprovalInfo url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/zyzx.js
^http:\/\/mmm\.tcmmooc\.com\/mapi_v3\/User\/getUserCoin url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/zyzx.js
[mitm] 
hostname = mmm.tcmmooc.com
*************************************/
var anye = JSON.parse($response.body);
const vip1 = /^http:\/\/mmm\.tcmmooc\.com\/mapi_v3\/User\/loginWithToken/;
const vip2 = /^http:\/\/mmm\.tcmmooc\.com\/mapi_v3\/User\/getUserCenterInfo/;
const vip3 = /^http:\/\/mmm\.tcmmooc\.com\/mapi_v3\/User\/getApprovalInfo/;
const vip4 = /^http:\/\/mmm\.tcmmooc\.com\/mapi_v3\/User\/getUserCoin/;
if (vip1.test($request.url)) {
    anye.data.user.vipExpireDate = "4071261955";
    anye.data.user.nickname = "暗夜11";
    anye.data.user.vip = 1;
}
if (vip2.test($request.url)) {
    anye.data.nickName = "暗夜11";
    anye.data.vip = 1;
}
if (vip3.test($request.url)) {
    anye.data.truename = "暗夜";
    anye.data.vip = 1;
}
if (vip4.test($request.url)) {
    anye.data.coin = "9999.99";
}
$done({body: JSON.stringify(anye)});
