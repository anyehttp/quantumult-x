/*****************************


^http:\/\/mmm\.tcmmooc\.com\/mapi_v3\/Course\/getTagCourses url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js

[mitm] 
hostname = mmm.tcmmooc.com
********************************/



var anye = JSON.parse($response.body);

for (var i = 0; i < anye.data.length; i++) {
    anye.data[i].text = "0";
    anye.data[i].price = 0;
    anye.data[i].level2Price = 0;
    anye.data[i].originPrice = 0;
    anye.data[i].preferentialPrice = 0;
}

$done({body: JSON.stringify(anye)});