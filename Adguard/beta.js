/*************************************

项目名称：毛豆爱古诗
下载地址：https://too.st/71L
更新日期：2023-12-24
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
群组：https://t.me/IPAs_share
解锁部分功能
**************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/subscribers\/$RCAnonymousID url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js 
^https:\/\/api\.revenuecat\.com\/v1\/receipts url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js

[mitm]
hostname = api.revenuecat.com

*************************************/


var anye = JSON.parse($response.body);

var vip1 = /^https:\/\/api\.revenuecat\.com\/v1\/subscribers\/$RCAnonymousID/
var vip2 = /^https:\/\/api\.revenuecat\.com\/v1\/receipts/

if(vip1.test($request.url)){
    anye = {
  "request_date_ms" : 1703493890218,
  "request_date" : "2023-12-25T08:44:50Z",
  "subscriber" : {
    "non_subscriptions" : {
      "lifetime" : [
        {
          "id" : "cd922147e3",
          "is_sandbox" : false,
          "purchase_date" : "2023-12-25T08:43:55Z",
          "original_purchase_date" : "2023-12-25T08:43:55Z",
          "store" : "app_store",
          "store_transaction_id" : "460001746951430"
        }
      ]
    },
    "first_seen" : "2023-12-25T08:42:59Z",
    "original_application_version" : "161",
    "other_purchases" : {
      "lifetime" : {
        "purchase_date" : "2023-12-25T08:43:55Z"
      }
    },
    "management_url" : null,
    "subscriptions" : {

    },
    "entitlements" : {
      "pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-12-25T08:43:55Z",
        "product_identifier" : "lifetime",
        "expires_date" : null
      }
    },
    "original_purchase_date" : "2023-12-25T08:42:47Z",
    "original_app_user_id" : "$RCAnonymousID:39f304851bfb47e490477c29b7a5f1ca",
    "last_seen" : "2023-12-25T08:42:59Z"
  }
};

}

if(vip2.test($request.url)){
    anye = {
  "request_date_ms" : 1703493893093,
  "request_date" : "2023-12-25T08:44:53Z",
  "subscriber" : {
    "non_subscriptions" : {
      "lifetime" : [
        {
          "id" : "cd922147e3",
          "is_sandbox" : false,
          "purchase_date" : "2023-12-25T08:43:55Z",
          "original_purchase_date" : "2023-12-25T08:43:55Z",
          "store" : "app_store",
          "store_transaction_id" : "460001746951430"
        }
      ]
    },
    "first_seen" : "2023-12-25T08:42:59Z",
    "original_application_version" : "161",
    "other_purchases" : {
      "lifetime" : {
        "purchase_date" : "2023-12-25T08:43:55Z"
      }
    },
    "management_url" : null,
    "subscriptions" : {

    },
    "entitlements" : {
      "pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-12-25T08:43:55Z",
        "product_identifier" : "lifetime",
        "expires_date" : null
      }
    },
    "original_purchase_date" : "2023-12-25T08:42:47Z",
    "original_app_user_id" : "$RCAnonymousID:39f304851bfb47e490477c29b7a5f1ca",
    "last_seen" : "2023-12-25T08:42:59Z"
  }
};

}
$done({ body: JSON.stringify(anye) });