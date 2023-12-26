/*************************************

项目名称：OKMath全科启蒙
下载地址：https://too.st/71y
更新日期：2023-12-24
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
群组：https://t.me/IPAs_share
**************************************

[rewrite_local]
^https:\/\/d1hzbu30hrhkoe\.cloudfront\.net\/mobile\/verify\/ios\/v2 url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/RainViewer.js 

[mitm]
hostname = d1hzbu30hrhkoe.cloudfront.net

*************************************/


var anye = JSON.parse($response.body);
    
    anye = {
  "message" : "",
  "data" : {
    "is_grace" : false,
    "is_test" : false,
    "products" : [
      "PREMIUM_FEATURES_3_1MONTH"
    ],
    "id" : "480001752637582",
    "purchased" : true,
    "is_trial" : false,
    "is_cancelled" : true,
    "type" : 2,
    "has_orders" : true,
    "expiration" : 1706279895,
    "is_expired" : false
  },
  "code" : 0
}

$done({body : JSON.stringify(anye)});