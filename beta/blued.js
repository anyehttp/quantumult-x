/*************************************
项目名称：blued
下载地址：https://too.st/7vj
更新日期：2024-01-15
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！

失效请反馈
群组：https://t.me/IPAs_Dd
频道：https://t.me/IPAs_share

哪些功能不能用我不知道记得反馈

blued破解脚本   功能有:无需开通会员和展示头像定位即可查看展示定位用户.闪照次数，黑名单9999➕.悄悄查看消息， 无痕访问， 消息页面的呼唤， 解锁身边人主页信息私密
**************************************

[rewrite_local]
^https:\/\/social\.blued\.cn\/users\/.*\/setting url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/blued.js
^https:\/\/social\.blued\.cn\/users\/.*\/flash url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/blued.js
^https:\/\/social\.blued\.cn\/users\/call\/state\?detail url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/blued.js
^https:\/\/social\.blued\.cn\/users\/shadow url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/blued.js
[mitm]
hostname = social.blued.cn, argo.blued.cn
*************************************/
var anye = JSON.parse($response.body);
const vip1 = /^https:\/\/social\.blued\.cn\/users\/.*\/setting/;
const vip2 = /^https:\/\/social\.blued\.cn\/users\/.*\/flash/;
const vip4 = /^https:\/\/social\.blued\.cn\/users\/call\/state\?detail/;
const vip6 = /^https:\/\/social\.blued\.cn\/users\/shadow/;
if(vip1.test($request.url) {
    anye.data[0].is_global_view_secretly = 1;
    anye.data[0].is_traceless_access = 1;
    anye.data[0].is_hide_distance = 1;
    anye.data[0].black_allowed_count = 999999;
}

if(vip2.test($request.url){
    anye.data[0].is_vip = 1;
    anye.data[0].flash_left_times = 9999;
    anye.data[0].stimulate_flash = 1;
    anye.data[0].adms_type = 6;
}


if(vip4.test($request.url) {
    anye.data[0].promote_person_num = 99999;
    anye.data[0].pay_count = 9999;
    anye.data[0].free_count = 9999;
    anye.data[0].call_type = 1;
    anye.data[0].call_status = 1
}

if(vip6.test($request.url) {
    anye.data[0].is_open_shadow = 1;
    anye.data[0].has_right = 1;
}

$done({body: JSON.stringify(anye)});