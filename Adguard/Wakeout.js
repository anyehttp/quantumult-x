/*************************************

项目名称：Wakeout
下载地址：https://too.st/71x
更新日期：2023-12-24
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.revenuecat.com\/v1\/subscribers\/* url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/Wakeout.js 

[mitm]
hostname = api.revenuecat.com

*************************************/


var anye = JSON.parse($response.body);
    
    anye = {
              "request_date_ms" : 1703828856584,
              "request_date" : "2023-12-29T05:47:36Z",
              "subscriber" : {
                "non_subscriptions" : {
            
                },
                "first_seen" : "2023-12-29T05:36:10Z",
                "original_application_version" : "20137",
                "other_purchases" : {
            
                },
                "management_url" : "https://apps.apple.com/account/subscriptions",
                "subscriptions" : {
                  "com.AndresCanella.Wakeouts.standard.yearly" : {
                    "original_purchase_date" : "2023-12-29T05:43:09Z",
                    "expires_date" : "209l-01-05T05:43:08Z",
                    "is_sandbox" : false,
                    "refunded_at" : null,
                    "store_transaction_id" : "500001585931888",
                    "unsubscribe_detected_at" : "2023-12-29T05:47:09Z",
                    "grace_period_expires_date" : null,
                    "period_type" : "trial",
                    "purchase_date" : "2023-12-29T05:43:08Z",
                    "billing_issues_detected_at" : null,
                    "ownership_type" : "PURCHASED",
                    "store" : "app_store",
                    "auto_resume_date" : null
                  }
                },
                "entitlements" : {
                  "general" : {
                    "grace_period_expires_date" : null,
                    "purchase_date" : "2023-12-29T05:43:08Z",
                    "product_identifier" : "com.AndresCanella.Wakeouts.standard.yearly",
                    "expires_date" : "2099-01-05T05:43:08Z"
                  }
                },
                "original_purchase_date" : "2023-12-29T05:43:10Z",
                "original_app_user_id" : "$RCAnonymousID:7ec50b723550490791f095351e774c5c",
                "last_seen" : "2023-12-29T05:37:10Z"
              }
}


$done({body : JSON.stringify(anye)});
