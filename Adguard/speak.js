/*************************************

项目名称：speak
下载地址：https://too.st/7ej
更新日期：2024-01-02
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
解锁会员
**************************************

[rewrite_local]
^https:\/\/api\.usespeak\.com\/v1\/users\/user url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/speak.js

[mitm]
hostname = api.usespeak.com
*************************************/


var anye = JSON.parse($response.body);
	anye.info.premium = true;
	anye.info.joinDate = "1924-01-02T07:09:02.000Z";
	//anye.info.progress.todaySentencesCount.lastRecordingDate = "1924-01-02T07:10:47.259Z";
	anye.info.name = "暗夜";
$done({body: JSON.stringify(anye)});