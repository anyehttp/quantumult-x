/*************************************

项目名称：一路健康
下载地址：https://too.st/7br
更新日期：2023-12-30
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
0元购买课程
**************************************

[rewrite_local]

^http:\/\/101\.201\.146\.165:8088\/App-EH\/app\/phone\.do\?getCourseDetail_new url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/yljk.js

[mitm] 

hostname = 101.201.146.165:8088

**************************************/



var anye = JSON.parse($response.body);
for (var i = 0; i < anye.obj.buyLst.length; i++) {
    anye.obj.buyLst[i].payAmount = "0";
}
$done({body : JSON.stringify(anye)}); 