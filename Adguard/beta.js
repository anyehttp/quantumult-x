/*
[rewrite_local]
# > 网易云解锁VIP
^http[s]?:\/\/.+music.+(player\/url|playlist|entrance|\/eapi\/search\/).*$ url script-request-header https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js
^https?:\/\/interface3\.music\.163\.com\/eapi\/vipauth\/app\/auth\/(soundquality\/)?query url script-request-header https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js
^https:\/\/interface3\.music\.163\.com\/eapi\/vipnewcenter\/app\/resource\/newaccountpage url script-request-header https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js
^https:\/\/interface3\.music\.163\.com\/eapi\/playermode\/ url script-request-header https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js
[mitm] 
hostname = *.music.163.com
*/
headers = $request.headers;

headers['Cookie'] = 'MUSIC_U=005FA76DF72058D39597ADF6D50152464301225CDE8181F5CD2A4D856EE1DEDB1309F2265D8C0EDFAD4FBA5305593C8DF9A9329EAC8F1273617FB061A64C9F192333B4D69A8506D1CC025F4EDC90F48B700DA849668ADACD9F8C3791154315A5C76CBA8B2C75830A0356938588B9C7DDC7DF13FF52D6FACD7C86E6B999ED89CB32A58561FE68DD4FFE0FC1D7D585D8C7D8410E8E491341B601FECF35D38AD7E3D215A0E9BD70C91122426C415BD2F7055CD29355C5898914BDD14B360762F3B39C39FACFBA96D092DA84616CFCAFC7F56E69B3B47A64E9C403D5476C8977BC30AD620D688E98E439C7D52C9956B7E14F6124F40E3ED4D12749F707E22708DFB506E94FDCA3503154FA61C36A4FB9181DEEA64B2FD8C94B16BF7AF2FDA13337D6A6; NMTID=00Ok2KdECMqJDQrZk50i-b7k1Yd6vEAAAGMf3hUgA; caid={"lastIyunId":"c188fda5639eb7665faa8f12acce7976","iyunId":"8b2f57388088a1c2c7134fa625ad9375","iyunVersion":"20230330","lastIyunVersion":"20220111"}; buildver=4630; sDeviceId=9ec0847264c088b44ca5c2b5ee94cdab; channel=distribution; idfa=00000000-0000-0000-0000-000000000000; packageType=release; appver=8.20.30; deviceId=9ec0847264c088b44ca5c2b5ee94cdab; EVNSM=1.0.0; os=iPhone OS; osver=15.3.1; machineid=iPhone14.2; NMCID=kmvsxp.1696074137000.01.3; appkey=IuRPVVmc3WWul9fT; idfv=B2B23496-210B-40C0-B47B-C5AF4DADE41B; URS_APPID=74B9D67231160CE3B88500AC631537E2BBEC1F1F945C990EB411DB01742D76B59CC2821647BBF7FC67D9350F9678A060; NMDI=Q1NKTQcBDAAucD0aLzEBPkEYRFuVAAAAye3Ei%2F%2BTs97Adju1d6X5hZu50VtymWg9q57pdaPHg5xT4kZAn3nJnSAngA4eoOFykIv%2FLjychiL11M1o1sCbePAV49y957l8hol%2BKWP3YqjFMpkSeyswWMme9cUXgHkB0Ol8PAztcCoOhwzOWO2Pw3CeyE6YZubDjpQm5OXgM9atgKvSP4kx6AwXNMXgYpZN6uPhdFk%3D';
headers['User-Agent'] = 'NeteaseMusic 8.20.30/4630 (iPhone; iOS 15.3.1; zh_CN)';
headers['MConfig-Info'] = '{"zr4bw6pKFDIZScpo":{"version":1202176,"appver":"8.20.30"},"tPJJnts2H31BZXmp":{"version":2590720,"appver":"2.0.30"},"c0Ve6C0uNl2Am0Rl":{"version":595968,"appver":"1.7.50"},"IuRPVVmc3WWul9fT":{"version":27936768,"appver":"8.20.30"}}';

$done({headers});