/*************************************

项目名称：OKMath全科启蒙
下载地址：https://too.st/71y
更新日期：2023-12-24
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/app\.coding61\.com\/server\/code_orange\/get_user_property\/ url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/OKMath.js 

[mitm]
hostname = app.coding61.com

*************************************/


var anye = JSON.parse($response.body);
    
    anye.user_property.remain_data = 99;
    anye.user_property.exp_date = "2099-01-01T00:00:00";

$done({body : JSON.stringify(anye)});