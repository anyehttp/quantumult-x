/*************************************

项目名称：Readle(学习德语)
下载地址：https://too.st/7aW
更新日期：2023-12-30
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
解锁会员无效恢复购买
**************************************

[rewrite_local]
^http:\/\/mmm\.tcmmooc\.com\/mapi_v3\/User\/loginWithToken url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/zyzx.js

[mitm] 
hostname = mmm.tcmmooc.com
*************************************/

var anye = JSON.parse($response.body);
    anye.data.user.nickname = "暗夜";
    anye.data.user.vip = 1;
    
$done({body : JSON.stringify(anye)});