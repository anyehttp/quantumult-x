/*************************************
[rewrite_local]
^https:\/\/pdfapi\.soouya\.com\/v1\/mobile\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/2.js
^https:\/\/pdfapi\.soouya\.com\/v1\/mobile\/trialNumber\/getRemainNum url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/2.js


[mitm]
hostname = pdfapi.soouya.com
*************************************/

var anye = JSON.parse($response.body);
const vip1 = /^https:\/\/pdfapi\.soouya\.com\/v1\/mobile\/user\/getUserInfo/;
const vip2 = /^https:\/\/pdfapi\.soouya\.com\/v1\/mobile\/trialNumber\/getRemainNum/;
if(vip1.test($request.url)){
anye.obj = {
    "forever" : 1,
    "expireTime" : 99,
    "id" : 132756,
    "headImgUrl" : "https://thirdwx.qlogo.cn/mmopen/vi_32/G2JuvdJrdhbw2bnUiaUcorQS3C5cRAFqezSPiaTmsLVn7GSgo1LG9rhcJlRQlHy6TVI6ltMZhmSCbykQAoapCeFHIcpa86nZAaX0ibqsJPPjEE/132",
    "uuid" : "765302c5-5ca7-44cb-a7ff-de472ad9843d",
    "mobile" : "",
    "qrCode" : "",
    "hasLoginDeviceCount" : 1,
    "deviceType" : 4,
    "loginType" : "wxauth",
    "token" : "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdWIiLCJjbGFpbV9rZXlfdXNlcl9pZCI6MTMyNzU2LCJjbGFpbV9rZXlfYXBrX2lkIjoxLCJjbGFpbV9rZXlfZGV2aWNlIjoiaW9zIiwiY2xhaW1fa2V5X2NyZWF0ZWQiOjE3MDMxNjIwNDY0MTMsImNsYWltX2tleV91dWlkIjoiNjU0NDYyYzUtNWNhNy00NGNiLWE3ZmYtZGU0NzJhZDk4NDNkIn0.e1HFJ1aYVscNL70b2bxrpMKJV2fhAFQ8fx9XXgGPvO96rQPoOxUgZ7hntyN7DrDhJDT2ohh-W3KBR9Mf6PXEMQ",
    "apkId" : 1,
    "nickName" : "暗夜破解",
    "userCode" : "WYYTXXZH7Q",
    "sceneId" : 1,
    "allowLoginDeviceCount" : 1,
    "paid" : 1
  };
}
if(vip2.test($request.url)){
anye.obj = {
    "trialCount" : 9999,
    "remainNum" : 9999
  };
}



$done({ body: JSON.stringify(anye) });
