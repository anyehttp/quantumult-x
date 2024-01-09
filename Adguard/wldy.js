/*************************************
项目名称：威力导演
下载地址：
更新日期：2024-01-09
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https:\/\/app-service\.cyberlink\.com\/service\/ios\/verifyReceipt url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/wldy.js

[mitm]
hostname = app-service.cyberlink.com
*************************************/


var anye = JSON.parse($response.body);
    anye = {
  "status" : "OK",
  "data" : {
    "status" : 0,
    "environment" : "Production",
    "receipt" : {
      "request_date_ms" : "4071638007000",
      "bundle_id" : "com.cyberlink.ios.powerdirector"
    },
    "latest_receipt_info" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "4071638007000",
        "expires_date" : "2099-01-16 10:27:23 Etc/GMT",
        "expires_date_pst" : "2099-01-16 02:27:23 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "460001764780446",
        "is_trial_period" : "true",
        "original_transaction_id" : "460001764780446",
        "purchase_date" : "2024-01-09 10:27:23 Etc/GMT",
        "product_id" : "annual_subscription_usd34.99_202209",
        "original_purchase_date_pst" : "2024-01-09 02:27:23 America/Los_Angeles",
        "original_purchase_date_ms" : "1704796043000",
        "web_order_line_item_id" : "460000841463895",
        "expires_date_ms" : "4071638007000",
        "purchase_date_pst" : "2024-01-09 02:27:23 America/Los_Angeles",
        "original_purchase_date" : "2024-01-09 10:27:23 Etc/GMT"
      }
    ],
    "pending_renewal_info" : [
      {
        "product_id" : "annual_subscription_usd34.99_202209",
        "original_transaction_id" : "460001764780446",
        "auto_renew_product_id" : "annual_subscription_usd34.99_202209",
        "auto_renew_status" : "1"
      }
    ]
  }
}
$done({body: JSON.stringify(anye)});