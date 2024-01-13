/*************************************
项目名称：微博
下载地址：
更新日期：2024-01-13
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https:\/\/api\.weibo\.cn\/2\/users\/show\?wm url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/wb.js

[mitm]
hostname = api.weibo.cn
*************************************/


var anye = JSON.parse($response.body);
    anye.mb_expire_time = 4071927102000;
    anye.vvip = 1;
    anye.svip = 1;
    anye.screen_name = "暗夜啊mmmm";
    
    
$done({body: JSON.stringify(anye)});