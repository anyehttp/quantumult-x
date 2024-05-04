/*************************************
项目名称：柜柜
下载地址：https://too.st/7Ay
更新日期：2024-01-19
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！

失效请反馈
群组：https://t.me/IPAs_Dd
频道：https://t.me/IPAs_share
**************************************

[rewrite_local]
^https:\/\/yt-user-api\.beijingcj\.cn\/\?_app url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/gg.js
^https:\/\/yt-friend-api\.beijingcj\.cn\/get_apply_num url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/gg.js

[mitm]
hostname = *.beijingcj.cn
*************************************/
var anye = JSON.parse($response.body);
const vip1 = /^https:\/\/yt-user-api\.beijingcj\.cn\/\?_app/;
const vip2 = /^https:\/\/yt-friend-api\.beijingcj\.cn\/get_apply_num/;
if(vip1.test($request.url)){
    anye.dataInfo.vipType = 7;
    anye.dataInfo.vipState = true;
    anye.dataInfo.newUser = true;
    anye.dataInfo.vipExpireTime = 4072440476;
	 anye.dataInfo.setting.redNameSwitch = true;
    anye.dataInfo.vipRefundDays = 9999999;
    anye.dataInfo.colorfulNameId = 1;
    anye.dataInfo.useRedName = true;
    anye.dataInfo.useRedName = 1;
    
}
    if(vip2.test($request.url)){
        
}

$done({body : JSON.stringify(anye)});
$done({body: JSON.stringify(anye)});