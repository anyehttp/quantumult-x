/*************************************
[rewrite_local]
^https:\/\/kugouvip\.kugou\.com\/v1\/get_union_vip url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/sj3.js


[mitm]
hostname = kugouvip.kugou.com
*************************************/

var anye = JSON.parse($response.body);

const vip1 = /^https:\/\/kugouvip\.kugou\.com\/v1\/get_union_vip/;

    anye.data = {
            "svip_score" : 0,
    "userid" : 662516352,
    "su_vip_y_endtime" : "",
    "su_vip_clearday" : "",
    "roam_begin_time" : "",
    "vip_clearday" : "",
    "m_begin_time" : "",
    "vip_type" : 0,
    "m_y_endtime" : "",
    "vip_end_time" : "",
    "busi_vip" : [
      {
        "latest_product_id" : "",
        "purchased_ios_type" : 0,
        "y_type" : 0,
        "vip_clearday" : "",
        "vip_begin_time" : "2023-01-13 17:32:25",
        "is_paid_vip" : 0,
        "userid" : 662516352,
        "busi_type" : "concept",
        "purchased_type" : 0,
        "product_type" : "svip",
        "is_vip" : 1,
        "vip_end_time" : "9999-04-17 17:32:25",
        "vip_limit_quota" : {
          "total" : 500
        }
      }
    ],
    "roam_end_time" : "",
    "m_clearday" : "",
    "m_end_time" : "",
    "m_is_old" : 0,
    "su_vip_begin_time" : "",
    "user_y_type" : 0,
    "m_type" : 0,
    "y_type" : 0,
    "is_vip" : 1,
    "user_type" : 0,
    "su_vip_end_time" : "",
    "roam_type" : 0,
    "vip_begin_time" : "",
    "m_reset_time" : "",
    "vip_y_endtime" : "",
    "svip_level" : 0
  },
  "error_code" : 0
}




$done({body: JSON.stringify(anye)});
