/*************************************

项目名称：Popai
下载地址：
更新日期：2023-12-24
脚本作者：@anyeyey
指导: @ios151
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.popai\.pro\/api\/v1\/user\/currentUser url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/popai.js 


hostname = api.popai.pro

*************************************/


var body = $response.body;
var anye = JSON.parse(body);
    anye.data = {
    "membershipExpDate" : 4100375349000,
    "membershipStartDate" : 4100375349000,
    "username" : "暗夜",
    "isNew" : 2,
    "membershipId" : 3
  }

$done({body : JSON.stringify(anye)});