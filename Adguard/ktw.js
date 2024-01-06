/*************************************

项目名称：快推文
下载地址：
更新日期：2024-01-06
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.itui\.cc\/api\/user url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/ktw.js

[mitm]
hostname = api.itui.cc
*************************************/


var anye = JSON.parse($response.body);
    anye.data.vip_date_type = 1;
    /*
    anye.data.vip_score_today = 999;
    anye.data.shifu_id = 1;
    anye.data.free_repaint_num = 999;
    anye.data.text_to_video = 9999999999999;
    anye.data.free_num_reading_list_to_video = 99999;
    anye.data.text_to_video_repaint = 999999;
    anye.data.expiration_time = 4071384494;
    anye.data.video_free_num = 99999;
    anye.data.free_num_audio_to_video = 999999;
    anye.data.buy_time = 4071384494;
    */
    anye.data.vip_score_forever = 9999;
    anye.data.vip_score_forever_history = 9999;
    anye.data.vip_channel_num = 1;
    anye.data.repaint_score = 99999;
    anye.data.vip_score = 9999;
    anye.data.balance = "9999999.99";
    
$done({body: JSON.stringify(anye)});