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
^https:\/\/api\.cikelink\.com\/fm\/v2\/fm\/userInfo url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js 

[mitm]
hostname = api.cikelink.com

*************************************/


var body = $response.body.replace(/status":\d/g,'status":1')
.replace(/expireTime":\d+/g,'expireTime":4567891456')
.replace(/expireUnixTime":\d+/g,'expireUnixTime":4567891456')
.replace(/canPlay":\w+/g,'canPlay":true')
$done({ body });