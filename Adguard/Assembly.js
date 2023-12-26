/*************************************

项目名称：OKMath全科启蒙
下载地址：https://too.st/71y
更新日期：2023-12-24
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
群组：https://t.me/IPAs_share
**************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/subscribers/* url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/Assembly.js 

[mitm]
hostname = api.revenuecat.com

*************************************/


var anye = JSON.parse($response.body);
    
    anye = {
  "request_date_ms" : 1703570618045,
  "request_date" : "2023-12-26T06:03:38Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-12-26T05:55:53Z",
    "original_application_version" : "16",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.pixite.assembly.1weekq" : {
        "original_purchase_date" : "2023-12-26T06:03:13Z",
        "expires_date" : "2099-01-02T06:03:12Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "500001582951240",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : 4101948793,
        "period_type" : "trial",
        "purchase_date" : "2023-12-26T06:03:12Z",
        "billing_issues_detected_at" : 4101948793,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : 4101948793
      }
    },
    "entitlements" : {
      "premium_access" : {
        "grace_period_expires_date" : 4101948793,
        "purchase_date" : "2023-12-26T06:03:12Z",
        "product_identifier" : "com.pixite.assembly.1weekq",
        "expires_date" : "2099-01-02T06:03:12Z"
      }
    },
    "original_purchase_date" : "2023-12-26T05:55:26Z",
    "original_app_user_id" : "357DEB93-F134-44E3-8C99-8CD513D44EE3",
    "last_seen" : "2023-12-26T05:55:53Z"
  }
};


$done({body : JSON.stringify(anye)});