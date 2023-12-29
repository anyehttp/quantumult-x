/*

Persona 1.8.24

[rewrite_local]

https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js

[mitm] 

hostname = api.revenuecat.com

*/

var objc = JSON.parse($response.body);

    objc = {
  "request_date_ms" : 1703880024609,
  "request_date" : "2023-12-29T20:00:24Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-12-29T19:57:06Z",
    "original_application_version" : "433",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.hello.german.yearly" : {
        "original_purchase_date" : "2023-12-29T20:00:05Z",
        "expires_date" : "2099-01-05T20:00:04Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "500001586568718",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2023-12-29T20:00:04Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "Premium" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-12-29T20:00:04Z",
        "product_identifier" : "com.hello.german.yearly",
        "expires_date" : "2099-01-05T20:00:04Z"
      }
    },
    "original_purchase_date" : "2023-12-29T19:56:18Z",
    "original_app_user_id" : "1a85d709-5a08-41ab-87d7-7c193ca9b66f",
    "last_seen" : "2023-12-29T19:57:06Z"
  }
}

$done({body : JSON.stringify(objc)});