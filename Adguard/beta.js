/*

Persona 1.8.24

[rewrite_local]

^http:\/\/101\.201\.146\.165:8088\/App-EH\/app\/phone\.do\?getCourseDetail_new url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js

[mitm] 

hostname = 101.201.146.165:8088

*/



var anye = JSON.parse($response.body);
for (var i = 0; i < anye.obj.buyLst.length; i++) {
    anye.obj.buyLst[i].payAmount = "0";
}
$done({body : JSON.stringify(anye)}); 