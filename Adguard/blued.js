/*************************************

项目名称：blued
下载地址：
更新日期：2024.1.04
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https:\/\/pay\.blued\.cn\/pay\/config\/vip_v2 url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js 
^https:\/\/social\.blued\.cn\/users\/85028758\/flash url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js
[mitm]
hostname = pay.blued.cn,social.blued.cn
*************************************/


var anye = JSON.parse($response.body);
const vip1 = /^https:\/\/pay\.blued\.cn\/pay\/config\/vip_v2/;
const vip2 = /^https:\/\/social\.blued\.cn\/users\/85028758\/flash/;


if(vip1.test(request.url)){
   anye.forEach(item => {
       // 会员等级
       item.data.user_info.vip_exp_lvl = 999;
       // 会员是否
       item.data.user_info.is_svip = 1;
       // 会员经验差值
       item.data.user_info.exp_lvl_diff = 0;
       // 到期类型
       item.data.user_info.expire_type = 1;
       // 到期时间
       item.data.user_info.vip_endtime = 4071216264;
       // svip到期时间
       item.data.user_info.svip_endtime = 4071216264;
       // 显示到期时间
       item.data.user_info.is_show_expire = 1;
       // 年费是否
       item.data.user_info.is_vip_annual = 1;
       // 会员是否
       item.data.user_info.is_vip = 1;
       // 会员等级
       item.data.user_info.grade = 999;
       // 到期时间
       item.data.user_info.expire_time = 4071216264;
   });
}

if(vip2.test($request.url)){
    //vip
    anye.data.is_vip = 1;
    //闪照次数
    anye.data.flash_left_times = 9999;
    //是否可以用闪照
    anye.data.stimulate_flash = 1;
}
    
    
    
$done({body : JSON.stringify(anye)});