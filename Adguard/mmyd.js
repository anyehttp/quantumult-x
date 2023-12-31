/*************************************

项目名称：喵喵阅读
下载地址：https://t.cn/R9CIJLb
更新日期：2023-12-31
脚本作者：暗夜
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.miaoread\.net\/book\/config\/getAdsSettings url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/mmyd.js
^https:\/\/mi\.gdt\.qq\.com\/gdt_mview\.fcg url reject-dict

[mitm]
hostname = api.miaoread.net, mi.gdt.qq.com
*************************************/


var anye = JSON.parse($response.body);

    anye.result.readRewardTime = 9999;
    anye.result.listenFirstTime = 9999;
    anye.result.listenRewardTime = 9999;
    anye.result.useDownloadReward = true;
    anye.result.insetScreenTime = 0;

$done({body: JSON.stringify(anye)});