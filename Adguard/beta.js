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

headers['Cookie'] = 'MUSIC_A_T=1550224660438; MUSIC_R_T=1550225196036; ntes_kaola_ad=1; EVNSM=1.0.0; NMCID=kmvsxp.1696074137000.01.3; NMDI=Q1NKTQcBDAAVuN%2BHL2TZb64XSxGVAAAArW%2Fas6OQmhir4CexL7eiPZvdggQD4O%2Bx9XVGzKJh7U%2Bm7gRU1IgV0x307YaK%2B1v5lhsS%2FioxGFMe3z%2Fl2o8QIjnYV4%2FKLcqC2YXJ4ewN%2Ft8rkxQorjQlRR8%2Bd8VFXGQ5UC1oAH9zUlmXJclEP9srLhDB9WevuPL3RXiA0b0SRjEhXzdxY7HQs9sjvFVX7m7KH3nojgc%3D; URS_APPID=74B9D67231160CE3B88500AC631537E2BBEC1F1F945C990EB411DB01742D76B59CC2821647BBF7FC67D9350F9678A060; appkey=IuRPVVmc3WWul9fT; appver=8.20.30; buildver=4630; caid={"lastIyunId":"c188fda5639eb7665faa8f12acce7976","iyunId":"8b2f57388088a1c2c7134fa625ad9375","iyunVersion":"20230330","lastIyunVersion":"20220111"}; channel=distribution; deviceId=9ec0847264c088b44ca5c2b5ee94cdab; idfa=00000000-0000-0000-0000-000000000000; idfv=B2B23496-210B-40C0-B47B-C5AF4DADE41B; machineid=iPhone14.2; os=iPhone OS; osver=15.3.1; packageType=release; sDeviceId=9ec0847264c088b44ca5c2b5ee94cdab; MUSIC_U=00FCFA0C1E8273705D49DD5554B21044730A1DD4BE6FE8C946DD182EA5AC6E4D0B93F574B5C7E593C18FEA0F2FC571B97DCEC1785BC9A9A2106458C3F6D993497292FCDE216769AD01155CD31240BF058C9531E965ECAE67C0169F10D494B19963989C587A4EB61E6DFA9EF2CC8380B112DF8DE651A40874C999524CAD113BC3504793F0F0DC8A6A3185E00E6A13180F3FE7EFB93EEE5251B2C158A6A09D66D4BAD2EDF55BF158E5BF95625B7020DD114017EA3CCD6BC612EA73984D1597E786315B223A3F1122735AC77B9CC9A12289F12FEEAA61509902B872376752E13F4746BA609CE2C823FBD4218C234B624F5910F3FE5811528BCCCB79A271912A708A16315CE0B5FC7FD909640466FBC0790A2CBEC80DC0EB955DD1A04FC68EF67CE895; __csrf=77977a9b767a6e58e912b35345ec51f9; _ntes_nnid=72057da7aeb0a3ff0049967105d5fd78,1703500483976; _ntes_nuid=72057da7aeb0a3ff0049967105d5fd78; JSESSIONID-WYYY=llip706ri0vfeKsw%2FeNEYR58VS84%2BqCFMbP8iw9GNgKOx7ezve%5CO86FdMv4Tfl0OJ9gzn26rsD1Jv4%5Cc07lJdtXVQ8T%2BZi%2Ficehc%2BFD8prYCl3e%5Cdiyg%2BJyPkyOxtZKCOHakaQNPdO37HCS75dFTx8W9px%5CcVoF%2Fo9IlAGqWOIvICJzH%3A1703502283845; _iuqxldmzr_=33; NMTID=00Ok2KdECMqJDQrZk50i-b7k1Yd6vEAAAGMf3hUgA';

headers['User-Agent'] = 'neteasemusic/8.20.30 (iPhone; iOS 15.3.1; Scale/3.00)';
headers['MConfig-Info'] = '{"zr4bw6pKFDIZScpo":{"version":1202176,"appver":"8.20.30"},"tPJJnts2H31BZXmp":{"version":2590720,"appver":"2.0.30"},"c0Ve6C0uNl2Am0Rl":{"version":595968,"appver":"1.7.50"},"IuRPVVmc3WWul9fT":{"version":27940864,"appver":"8.20.30"}}';

$done({headers});