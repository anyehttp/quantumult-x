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
[mitm]
hostname = *.beijingcj.cn
*************************************/
var anye = JSON.parse($response.body);
    anye.dataInfo.vipType = 7;
    anye.dataInfo.vipState = true;
    anye.dataInfo.newUser = true;
	anye.dataInfo.vipExpireTime = 4072440476;
	anye.dataInfo.setting.redNameSwitch = true;
	console.log("viptype = " + anye.dataInfo.vipType);
	console.log("nickName = " + anye.dataInfo.nickName);
    console.log("vipState = " + anye.dataInfo.vipState);
	console.log("newUser = " + anye.dataInfo.newUser);
    console.log("vipExpireTime = " + anye.dataInfo.vipExpireTime);
    console.log("redNameSwitch = " + anye.dataInfo.setting.redNameSwitch);

$done({body: JSON.stringify(anye)});