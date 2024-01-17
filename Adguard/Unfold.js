/*************************************

项目名称：Unfold
下载地址：https://too.st/7o5
更新日期：2024-1-11
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
失效请反馈
群组：https://t.me/IPAs_Dd
频道：https://t.me/IPAs_share
**************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/subscribers\/ url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/Unfold.js 
[mitm]
hostname = api.revenuecat.com

*************************************/
var anye = JSON.parse($response.body);
    anye = {
  "request_date_ms" : 1704954622267,
  "request_date" : "2024-01-11T06:30:22Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2024-01-11T06:28:01Z",
    "original_application_version" : "53942",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "UNFOLD_FOR_BRANDS_YEAR" : {
        "original_purchase_date" : "2024-01-11T06:28:38Z",
        "expires_date" : "2099-01-18T06:28:37Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "460001766854464",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2024-01-11T06:28:37Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "BIRTHDAY1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "PRO" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "CS3_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "RP1_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "CS2_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "RP1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "LOVE3_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "TUTORIAL1_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "CS4_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "LOVE2_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "JN1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "CS2_AN_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "LOVE1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "RP2_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "CS3_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "RP2_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "TUTORIAL1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "DW1_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "FF1_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "PL1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "JN2_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "PRO_YEARLY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "SB1_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "MOODBOARD_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "RP3_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "CS4_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "DW2_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "FF2_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "FF1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "LOVE3_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "RED1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "SB1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "BESTDRESSED1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "ZD1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "FF2_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "FF3_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "JN1_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "PROMOTION1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "DW1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "PRIDE1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "MOODBOARD1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "EFFECTS1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "CS2_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "FF3_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "PL1_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "JN2_POST" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "FS1_FONT" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "DW2_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "CS1_AN_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      },
      "PC1_STORY" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-01-11T06:28:37Z",
        "product_identifier" : "UNFOLD_FOR_BRANDS_YEAR",
        "expires_date" : "2099-01-18T06:28:37Z"
      }
    },
    "original_purchase_date" : "2024-01-11T06:27:28Z",
    "original_app_user_id" : "$RCAnonymousID:c1dd56df4c71424fa3ba1963bd21899b",
    "last_seen" : "2024-01-11T06:28:01Z"
  }
}
$done({body : JSON.stringify(anye)});