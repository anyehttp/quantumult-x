/*************************************
项目名称：ChatGadget
下载地址：
更新日期：2024-01-08
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https:\/\/greatios\.xitengtech\.cn\/api\/visitors\/sign-in url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/ChatGadget.js 
[mitm]
hostname = greatios.xitengtech.cn

*************************************/
var anye = JSON.parse($response.body);
    anye.data.identity.nickname = "暗夜";
    anye.data.identity.vip_expire_time = 4071522823;
    anye.data.identity.vip_period_type = 1;
    anye.data.identity.vip = 1;
    anye.data.identity.vip_period_text = 2024-01-08 10:25:51;
$done({body : JSON.stringify(anye)});