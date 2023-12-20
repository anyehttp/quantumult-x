/*************************************
[rewrite_local]
^https:\/\/usercenter\.kugou\.com\/v3\/get_my_info url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/bdyy3.js
^https:\/\/kugouvip\.kugou\.com\/v1\/get_union_vip url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/bdyy3.js

[mitm]
hostname = bd-api.kuwo.cn, kugouvip.kugou.com
*************************************/

var body = $response.body;
var anye = JSON.parse(body);

const vip1 = /v3\/get_my_info/;
const vip2 = /v1\/get_union_vip/;

if (vip1.test($request.url)) {
    anye.data = {
            "k_nickname" : "暗夜",
            "nickname" : "暗夜",
            "svip_level" : 999999,   //等级
            "su_vip_y_endtime" : "999999",  //vip到期时间
            "fx_nickname" : "暗夜",
            "su_vip_clearday" : "9999999", //SVIP（超级 VIP）用户的清零日期或者特定的清零时间
            "su_vip_end_time" : "9999999",  //同上
            "union_vipinfo" : {
                "ext_vip" : [
                  {
                    "vip_limit_quota" : {
                      "total" : 9999999
                    },
                    "vip_clearday" : "1999-01-13 17:32:25",
                    "vip_begin_time" : "1999-01-13 17:32:25",
                    "is_vip" : 1,
                    "vip_end_time" : "9999-99-99 17:32:25",
                    "is_paid_vip" : 1
                  }
                ],
                "is_vip" : 1
              },
              "vip_type" : 1,
    }
}
if (vip2.test($request.url)) {
    anye.data = {
        "busi_vip":[{
            "vip_begin_time":"1999-09-09 17:32:25",
            "is_vip": 1,
            "vip_end_time":"1999-09-09 17:32:25",
        
        }]
    }
}


$done({body: JSON.stringify(anye)});
