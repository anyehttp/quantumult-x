/*************************************

项目名称：魔音工坊
下载地址：https://too.st/723
更新日期：2023-12-24
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
群组：https://t.me/IPAs_share
**************************************

[rewrite_local]
^https:\/\/api-service\.chanmama\.com\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/cmm.js 

[mitm]
hostname = api-service.chanmama.com

*************************************/

var anye = JSON.parse($response.body);
        anye.data.vip_overdue_time = 4101881048;
        anye.data.display_vip_privilege = true;
        anye.data.is_sub = true;
$done({body: JSON.stringify(anye)});