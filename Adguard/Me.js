/*************************************

项目名称：Me+
下载地址：http://gg.gg/18bfyz
更新日期：2024-01-01
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/Me.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/


var anye = JSON.parse($response.body);
	anye = {
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1596403446,
    "receipt_creation_date" : "2024-01-01 05:07:59 Etc/GMT",
    "bundle_id" : "alarm.smart.awake.sleep.health",
    "original_purchase_date" : "2024-01-01 04:58:00 Etc/GMT",
    "in_app" : [
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
    ],
    "adam_id" : 1596403446,
    "receipt_creation_date_pst" : "2023-12-31 21:07:59 America/Los_Angeles",
    "request_date" : "2024-01-01 05:08:53 Etc/GMT",
    "request_date_pst" : "2023-12-31 21:08:53 America/Los_Angeles",
    "version_external_identifier" : 862522686,
    "request_date_ms" : "1704085733998",
    "original_purchase_date_pst" : "2023-12-31 20:58:00 America/Los_Angeles",
    "application_version" : "96",
    "original_purchase_date_ms" : "1704085080000",
    "receipt_creation_date_ms" : "1704085679000",
    "original_application_version" : "96",
    "download_id" : 503088785114247236
  },
  "pending_renewal_info" : [
    {
      "product_id" : "alarm.me.vip.year.tier1",
      "original_transaction_id" : "500001589077215",
      "auto_renew_product_id" : "alarm.me.vip.year.tier1",
      "auto_renew_status" : "1"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1704085677000",
      "expires_date" : "2099-01-08 05:07:57 Etc/GMT",
      "expires_date_pst" : "2099-01-07 21:07:57 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "500001589077215",
      "app_account_token" : "AB8AA083-09EE-4B72-AB41-0A37B5A94B7B",
      "is_trial_period" : "true",
      "original_transaction_id" : "500001589077215",
      "purchase_date" : "2024-01-01 05:07:57 Etc/GMT",
      "product_id" : "alarm.me.vip.year.tier1",
      "original_purchase_date_pst" : "2023-12-31 21:07:58 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "20926137",
      "original_purchase_date_ms" : "1704085678000",
      "web_order_line_item_id" : "500000748649149",
      "expires_date_ms" : "4092599349000",
      "purchase_date_pst" : "2023-12-31 21:07:57 America/Los_Angeles",
      "original_purchase_date" : "2024-01-01 05:07:58 Etc/GMT"
    }
  ],
  "latest_receipt" : "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"
}

$done({body: JSON.stringify(anye)});