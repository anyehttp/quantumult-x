/*****************************


^http:\/\/mmm\.tcmmooc\.com\/mapi_v3\/Course\/getTagCourses url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js

[mitm] 
hostname = mmm.tcmmooc.com
********************************/



var anye = JSON.parse($response.body);

for (var i = 0; i < anye.data.courses.length; i++) {
    anye.data.courses[i].text = "0";
    anye.data.courses[i].price = 0;
    anye.data.courses[i].level2Price = 0;
    anye.data.courses[i].originPrice = 0;
    anye.data.courses[i].preferentialPrice = 0;
}


$done({body : JSON.stringify(anye)});