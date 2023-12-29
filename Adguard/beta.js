
/*************************************

项目名称：穿梭
下载地址：https://too.st/72S
更新日期：2023-12-24
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https:\/\/api-sub\.meitu\.com\/v2\/user\/vip url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js 

[mitm]
hostname = api-sub.meitu.com

*************************************/


var anye = JSON.parse($response.body);
    
    anye.data.is_vip = true;
    anye.data.have_valid_contract = true;
    anye.data.use_vip = true;
    

$done({body : JSON.stringify(anye)});