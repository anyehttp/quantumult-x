
/*************************************

项目名称：穿梭
下载地址：https://too.st/72S
更新日期：2023-12-24
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
群组：https://t.me/IPAs_share
**************************************

[rewrite_local]
^https:\/\/mbd\.baidu\.com\/userx\/v1\/info\/get url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js 

[mitm]
hostname = mbd.baidu.com

*************************************/


var anye = JSON.parse($response.body);
    
    anye.data.fields.displayname = "暗夜";
    anye.data.fields.username = "暗夜";
    anye.data.fields.member = {
        "is_vip" : 1,
        "end_time" : 4101995901,
      };
    

$done({body : JSON.stringify(anye)});