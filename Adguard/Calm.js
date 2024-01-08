/*************************************
项目名称：Calm
下载地址：https://too.st/7lu
更新日期：2024-01-08
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https:\/\/api\.calm\.com\/me url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/Calm.js

[mitm]
hostname = api.calm.com
*************************************/


var anye = JSON.parse($response.body);
    anye = {
  "groups" : [
    "0-default"
  ],
  "id" : "tIupkZlXrF",
  "created_at" : "2024-01-08T09:30:50.541Z",
  "email_confirmation_status" : "unconfirmed",
  "has_opted_in_limited_data_use" : true,
  "email" : "2468f6ntnw@privaterelay.appleid.com",
  "language" : "en",
  "token" : "Z2x45YZnHf3aovK9BegxIqBKdSQ",
  "is_hipaa_compliant" : false,
  "name" : "暗夜夜夜",
  "subscription" : {
    "is_refunded" : false,
    "ios_details" : {
      "id" : "500001596605080",
      "began" : "2024-01-08T09:31:44.000Z",
      "purchaser_platform" : "ios",
      "is_free_trial" : true,
      "is_renewable" : true,
      "is_in_billing_retry_period" : false,
      "will_renew" : true,
      "expires" : "2099-01-15T09:31:44.000Z",
      "is_canceled" : false,
      "payment_processor" : "itunes",
      "free_trial_began" : "2024-01-08T09:31:44.000Z",
      "original_transaction_id" : "500001596605080",
      "plan_duration" : "year",
      "product_id" : "com.calm.yearly.trial.one_week.usd_70",
      "free_trial_length_in_days" : 9999,
      "free_trial_ended" : "2099-01-15T09:31:44.000Z"
    },
    "subscription_plan" : "com.calm.yearly.trial.one_week.usd_70",
    "has_ever_had_android_subscription" : false,
    "has_ever_done_free_trial" : true,
    "user_id" : "tIupkZlXrF",
    "plan_duration" : "year",
    "free_trial_ended" : "2099-01-15T09:31:44.000Z",
    "purchaser_platform" : "ios",
    "is_in_billing_retry_period" : false,
    "free_trial_began" : "2024-01-08T09:31:44.000Z",
    "has_ever_had_ios_subscription" : true,
    "is_canceled" : false,
    "will_renew" : true,
    "is_lifetime" : false,
    "type" : "ios",
    "free_trial_length_in_days" : 9999,
    "is_free" : false,
    "id" : "500001596605080",
    "expires" : "2099-01-15T09:31:44.000Z",
    "valid" : true,
    "payment_processor" : "itunes",
    "began" : "2024-01-08T09:31:44.000Z",
    "in_free_trial_window" : true,
    "is_renewable" : true,
    "has_ever_done_second_free_trial" : false
  }
}

$done({body: JSON.stringify(anye)});