/*************************************
项目名称：听阅
下载地址：
更新日期：2024-01-14
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
解锁会员
**************************************

[rewrite_local]
^https:\/\/api\.eareyereading\.com\/1\.1\/classes\/BRTransactionInfo\?keys url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/ty.js

[mitm]
hostname = api.eareyereading.com
*************************************/
var anye = JSON.parse($response.body);
    anye = {
  "results" : [
    {
      "updatedAt" : "2024-01-14T08:44:23.329Z",
      "purchase_date_ms" : "1705221820000",
      "is_in_intro_offer_period" : false,
      "is_trial_period" : true,
      "original_transaction_id" : "460001770467865",
      "is_expired" : false,
      "product_id" : "com.xuehu.words.pro.subscription2",
      "modified_date_ms" : "1705221863000",
      "objectId" : "65a39ec5bb133643d228e9fb",
      "createdAt" : "2024-01-14T08:43:49.207Z",
      "latest_expires_date_ms" : "4071927102000",
      "sign" : "4bd34e6f35700c2d7476037505423b5f"
    }
  ]
};

$done({body: JSON.stringify(anye)});