/*************************************

项目名称：魔音工坊
下载地址：https://too.st/723
更新日期：2023-12-24
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
群组：https://t.me/IPAs_share
**************************************

[rewrite_local]
^https:\/\/iosapi\.peiyinxiu\.com\/Api\/user\/GetMyInfo url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/pyx.js 

[mitm]
hostname = iosapi.peiyinxiu.com

*************************************/


var anye = JSON.parse($response.body);
        anye.data.vip_end_time = 2099-09-09;
        anye.data.gold2 = 99999;
        anye.data.vipLevel = 9999,
        anye.data.is_complete_info = 1;
        anye.data.is_vip = 1;
        anye.data.user_name = "暗夜";
        
$done({body: JSON.stringify(anye)});