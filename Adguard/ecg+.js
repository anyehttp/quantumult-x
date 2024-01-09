/*************************************

项目名称：ecg+.js
下载地址：
更新日期：2024-01-10
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
解锁
**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/ecg+.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/
var anye = JSON.parse($response.body);
    anye.receipt.in_app = [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1704085677000",
        "expires_date" : "2099-01-08 05:07:57 Etc/GMT",
        "expires_date_pst" : "2099-01-07 21:07:57 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "500001589077215",
        "is_trial_period" : "true",
        "original_transaction_id" : "500001589077215",
        "purchase_date" : "2024-01-01 05:07:57 Etc/GMT",
        "product_id" : "alarm.me.vip.year.tier1",
        "original_purchase_date_pst" : "2023-12-31 21:07:58 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1704085678000",
        "web_order_line_item_id" : "500000748649149",
        "expires_date_ms" : "4092599349000",
        "purchase_date_pst" : "2023-12-31 21:07:57 America/Los_Angeles",
        "original_purchase_date" : "2024-01-01 05:07:58 Etc/GMT"
      }
    ];

$done({body: JSON.stringify(anye)});