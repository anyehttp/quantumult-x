/*************************************
[rewrite_local]
^https:\/\/pdfapi\.soouya\.com\/v1\/mobile\/priceConfig\/list url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/bd1.js


[mitm]
hostname = pdfapi.soouya.com
*************************************/

var anye = JSON.parse($response.body);

anye.obj = [
  {
    "description": "0.01",
    "discount": 60,
    "realPayPrice": 0,
    "deviceType": 4,
    "title": "128元/终身",
    "code": "v1_ios_1200_default",
    "apkId": 1,
    "originalPrice": 0,
    "discountPrice": 0,
    "apkChannel": "ios",
    "sortNum": 1,
    "duration": 1200,
    "remark": "20230414",
    "name": "终身会员"
  },
  {
    "description": "0.13",
    "discount": 0,
    "realPayPrice": 0,
    "deviceType": 4,
    "title": "98元/两年",
    "code": "v1_ios_24_default",
    "apkId": 1,
    "originalPrice": 0,
    "discountPrice": 0,
    "apkChannel": "ios",
    "sortNum": 2,
    "duration": 24,
    "remark": "20230413",
    "name": "买1年送1年"
  },
  {
    "description": "0.76",
    "discount": 0,
    "realPayPrice": 0,
    "deviceType": 4,
    "title": "68元/季度",
    "code": "v1_ios_1_default",
    "apkId": 1,
    "originalPrice": 0,
    "discountPrice": 0,
    "apkChannel": "ios",
    "sortNum": 3,
    "duration": 3,
    "remark": "20230412",
    "name": "季度会员"
  },
  {
    "description": "多端通用，随时随地办公",
    "discount": 0,
    "realPayPrice": 0,
    "deviceType": 4,
    "title": "",
    "code": "v1_ios_12_all_device_default",
    "apkId": 1,
    "originalPrice": 0,
    "discountPrice": 0,
    "apkChannel": "ios",
    "sortNum": 4,
    "duration": 12,
    "remark": "20230918",
    "name": "多端年会员"
  }
];

$done({ body: JSON.stringify(anye) });
