/*************************************
项目名称：翻咔
下载地址：https://too.st/7vk
更新日期：2024-01-16
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
解锁会员功能 隐藏我的活跃时间.隐藏距离.隐藏访问足迹.悄悄查看消息    设置 隐私设定内查看
**************************************

[rewrite_local]
^https:\/\/api\.finka\.cn\/v1\/user\/setting\/privacy\?_t url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/fk.js
^https:\/\/api\.finka\.cn\/user\/profile\/view\/v3\?_t url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/fk.js
[mitm]
hostname = api.finka.cn
*************************************/
var anye = JSON.parse($response.body);
const vip1 = /^https:\/\/api\.finka\.cn\/v1\/user\/setting\/privacy\?_t/;
const vip2 = /^https:\/\/api\.finka\.cn\/user\/profile\/view\/v3\?_t/;
if(vip1.test($request.url)){
    anye.data.hiddenActive = true;
    anye.data.stealthMessage = true;
    anye.data.advertising = false;
    anye.data.hiddenFootmark = true;
    anye.data.hidden = true;
    anye.data.footmarkDelPerMonth = 99999;
    };
if(vip2.test($request.url)){
    anye.data.user.annualSvip = false;
    anye.data.user.vipAd = 1;
    anye.data.user.vip = true;
    anye.data.user.pro = true;
    anye.data.user.isVideoAvatarValid = true;
    anye.data.user.ssvip = true;
    anye.data.user.inProbationPeriod = true;
    anye.data.user.svip = true;
    anye.data.user.annualSsvip = true;
    anye.data.user.annualVip = true;
    };
$done({body : JSON.stringify(anye)});