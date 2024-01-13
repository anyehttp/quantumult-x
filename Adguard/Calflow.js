/*************************************

项目名称：Calflow
下载地址：
更新日期：2023-12-24
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/subscribers\/ url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/Calflow.js 

[mitm]
hostname = api.revenuecat.com

*************************************/


var anye = JSON.parse($response.body);
    
    anye.subscriber.subscriptions = {
      "kike.calflow.pro.yearly" : {
        "original_purchase_date" : "2024-01-13T06:05:03Z",
        "expires_date" : "209l-01-20T06:05:00Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "500001601363664",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2024-01-13T06:05:00Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    };
    anye.subscriber.entitlements = {
      "pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-13T06:05:00Z",
        "product_identifier" : "kike.calflow.pro.yearly",
        "expires_date" : "2099-01-20T06:05:00Z"
      }
    };
$done({body : JSON.stringify(anye)});
