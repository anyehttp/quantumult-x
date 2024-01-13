/*************************************
项目名称：DLabelybq
下载地址：https://too.st/7qH
更新日期：2024-01-13
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
解锁功能不显示有会员解锁功能不显示有会员
解锁功能不显示有会员解锁功能不显示有会员
解锁功能不显示有会员解锁功能不显示有会员
解锁功能不显示有会员解锁功能不显示有会员
解锁功能不显示有会员解锁功能不显示有会员
**************************************

[rewrite_local]
^https:\/\/dlabel\.ctaiot\.com\/api\/config\/list\.json\?mcontext url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/DLabelybq.js

[mitm]
hostname = dlabel.ctaiot.com
*************************************/


var anye = JSON.parse($response.body);
anye.data.vipInfo.baseInfo = {
    "levelName" : "高级会员",
    "equityCount" : 24,
    "forever" : 1,
    "levelDesc" : "高级会员",
    "levelNo" : 3
};
anye.data.vipInfo.funcInfo.forEach((item) => {
    item.enable = 1;
    item.limits = 999;
});
$done({body: JSON.stringify(anye)});