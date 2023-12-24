/*************************************

项目名称：毛豆爱古诗
下载地址：https://too.st/71L
更新日期：2023-12-24
脚本作者：@anyeyey
指导: @ios151
使用声明：⚠️仅供参考，🈲转载与售卖！

解锁部分功能
**************************************

[rewrite_local]
^https:\/\/newdrugs\.dxy\.cn\/app\/user\/init url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js 

[mitm]
hostname = newdrugs.dxy.cn

*************************************/


var anye = JSON.parse($response.body);
    anye.data.userProInfoVO.placeholderVip = true;
    anye.data.userProInfoVO.expiredTime = 4101808842000;
    anye.data.userProInfoVO.expiredTime = 4101808842000;
    anye.data.userProInfoVO.subscribeExpiresDate = 4101808842000;
    anye.data.userProInfoVO.expiredDay = 4101808842000;
    anye.data.uname = "暗夜";



$done({ body: anye });
