/*************************************
项目名称：DLabelybq
下载地址：
更新日期：2024-01-13
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https:\/\/dlabel\.ctaiot\.com\/api\/config\/list\.json\?mcontext url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/DLabelybq.js

[mitm]
hostname = dlabel.ctaiot.com
*************************************/


var anye = JSON.parse($response.body);
    anye.data.vipInfo.baseInfo = {
        "levelName" : "高级会员",
        "equityCount" : 24,
        "forever" : 1,
        "levelDesc" : "高级会员",
        "levelNo" : 2
      }
    
$done({body: JSON.stringify(anye)});