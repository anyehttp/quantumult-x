/*************************************
项目名称：blued
下载地址：https://too.st/7vj
更新日期：2024-01-15
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！

失效请反馈
群组：https://t.me/IPAs_Dd
频道：https://t.me/IPAs_share

已知只有小火箭脚本生效.qx和surge脚本不能用

哪些功能不能用我不知道记得反馈

blued破解脚本   功能有:无需开通会员和展示头像定位即可查看展示定位用户.闪照次数，黑名单9999➕.悄悄查看消息， 无痕访问， 消息页面的呼唤， 解锁身边人主页信息私密
**************************************

[rewrite_local]
^https:\/\/social\.blued\.cn\/users\/.*\/setting url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js
^https:\/\/social\.blued\.cn\/users\/.*\/flash url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js
^https:\/\/social\.blued\.cn\/users\?birth_time url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js
^https:\/\/social\.blued\.cn\/users\/call\/state\?detail url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js
^https:\/\/argo\.blued\.cn\/users\/ url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js
^https:\/\/social\.blued\.cn\/users\/shadow url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js
^https:\/\/social\.blued\.cn\/users\/.+\/more\/ios\?v url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js
//主页推荐直播 
https://social.blued.cn/users/recommend url reject-dict
//未登录时个人界面广告
^https:\/\/social\.blued\.cn\/users\/no_auth\/benefit url reject-dict
[mitm]
hostname = social.blued.cn, argo.blued.cn
*************************************/
var anye = JSON.parse($response.body);
const vip1 = /^https:\/\/social\.blued\.cn\/users\/.*\/setting/;
const vip2 = /^https:\/\/social\.blued\.cn\/users\/.*\/flash/;
const vip3 = /^https:\/\/social\.blued\.cn\/users\?birth_time/;
const vip4 = /^https:\/\/social\.blued\.cn\/users\/call\/state\?detail/;
const vip5 = /^https:\/\/argo\.blued\.cn\/users\//;
const vip6 = /^https:\/\/social\.blued\.cn\/users\/shadow/;
const vip7 = /^https:\/\/social\.blued\.cn\/users\/.+\/more\/ios\?v/;
    if(vip1.test($request.url)){
        //全局私密查看
        anye.data[0].is_global_view_secretly = 1;
        //无痕模式访问
        anye.data[0].is_traceless_access = 1;
        //黑名单数量
        anye.data[0].black_allowed_count = 999999;
    };
    if(vip2.test($request.url)){
        anye.data[0].is_vip = 1;
        anye.data[0].flash_left_times = 9999;
        anye.data[0].stimulate_flash = 1;
        anye.data[0].adms_type = 6;
    };
    if(vip3.test($request.url)){
        anye.data.forEach((item) => {
            item.is_invisible_half_delay = 0;
            item.is_hide_last_operate = 0;
            item.show_activity = 0;
            item.is_invisible_all = 0;
            item.is_invisible_half = 0;
            item.is_hide_city_settled = 0;
            item.is_stealth_distance = 0;
            item.is_hide_distance = 0;
        })
    };
    if(vip4.test($request.url)){
        anye.data[0].promote_person_num = 99999;
        anye.data[0].pay_count = 9999;
        anye.data[0].free_count = 9999;
        anye.data[0].call_type = 1;
        anye.data[0].call_status = 1
    };
    if(vip5.test($request.url)){
        anye.data[0].super_call_status = 1;
        anye.data[0].vip_exp = 9999;
        anye.data[0].expire_time = 4072189018;
        anye.data[0].is_show_vip_page = 1;
        anye.data[0].is_vip_annual = 1;
        anye.data[0].vip_exp_lvl = 9999;
        anye.data[0].black_allowed_count = 9999;
        anye.data[0].is_filter_ads = 1;
        //账号是否封锁
        anye.data[0].is_locked = 0;
    };
    if(vip6.test($request.url)){
        anye.data[0].is_open_shadow = 1;
        anye.data[0].has_right = 1;
    };
    if(vip7.test($request.url)){
        anye.data[0].banner={};
        anye.data[0].service=[];
        anye.data[0].healthy={};
        anye.data[0].healthy_banner=[];
        anye.data[0].emotions=[];
    }
$done({body: JSON.stringify(anye)});