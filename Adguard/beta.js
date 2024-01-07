/*********************
[rewrite_local]
# 播放器会员皮肤
^https:\/\/interface3?\.music\.163\.com\/eapi\/playermode\/ url script-request-header https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js
# 搜索结果会员歌曲
^https:\/\/interface3?\.music\.163\.com\/eapi\/search\/complex\/(page|rec\/song\/get) url script-request-header https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js
# 播放器会员歌曲
^https:\/\/interface3?\.music\.163\.com\/eapi\/song\/(chorus|enhance\/|play\/|type\/detail\/get) url script-request-header https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js
^https:\/\/interface3?\.music\.163\.com\/eapi\/(v1\/artist\/top\/song|v3\/discovery\/recommend\/songs) url script-request-header https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js
# 侧边栏会员等级
^https:\/\/interface3?\.music\.163\.com\/eapi\/vipnewcenter\/app\/resource\/newaccountpage url script-request-header https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js
# 首页歌单会员歌曲
^https?:\/\/interface3?\.music\.163\.com\/eapi\/(homepage\/|v6\/)?playlist\/ url script-request-header https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js
# 会员认证
^https?:\/\/interface3?\.music\.163\.com\/eapi\/vipauth\/app\/auth\/(soundquality\/)?query url script-request-header https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js
[mitm] 
hostname = *.music.163.com
*********************/
headers = $request.headers;

  header["MConfig-Info"] = '{"zr4bw6pKFDIZScpo":{"version":1216512,"appver":"8.20.30"},"tPJJnts2H31BZXmp":{"version":2605056,"appver":"2.0.30"},"c0Ve6C0uNl2Am0Rl":{"version":595968,"appver":"1.7.50"},"IuRPVVmc3WWul9fT":{"version":28702720,"appver":"8.20.30"}}';
  header["User-Agent"] = 'NeteaseMusic 8.20.30/4630 (iPhone; iOS 15.3.1; zh_CN)';
  header["Cookie"] = 'EVNSM=1.0.0; NMCID=kmvsxp.1696074137000.01.3; NMDI=Q1NKTQcBDACXqvF0w2wyyI2bOQOVAAAAOMjpNaohCwftzlfSg3qGc52i%2FxX6jVdkqa%2B2%2BoOqPPrjp2OFAae%2FjG4lLKzz8QMY1O89vNfIz42KU4F7OvUraQw3eCH8I%2BGKS7%2BwW9YOyy0UOLNIUBKJjhuMtjckYb9Qq7fw40nfjG845FFA5gxOzVVN9NnoTSVcn%2F5Sewxgj1NEG8oeRiERf0sl9uJJvVfywQwW%2Fds%3D; URS_APPID=74B9D67231160CE3B88500AC631537E2BBEC1F1F945C990EB411DB01742D76B59CC2821647BBF7FC67D9350F9678A060; appkey=IuRPVVmc3WWul9fT; appver=8.20.30; buildver=4630; caid={"lastIyunId":"c188fda5639eb7665faa8f12acce7976","iyunId":"8b2f57388088a1c2c7134fa625ad9375","iyunVersion":"20230330","lastIyunVersion":"20220111"}; channel=distribution; deviceId=9ec0847264c088b44ca5c2b5ee94cdab; idfa=00000000-0000-0000-0000-000000000000; idfv=B2B23496-210B-40C0-B47B-C5AF4DADE41B; machineid=iPhone14.2; os=iPhone OS; osver=15.3.1; packageType=release; sDeviceId=9ec0847264c088b44ca5c2b5ee94cdab; ntes_kaola_ad=1; MUSIC_U=0059FC2762FF3142BFB6B67A7DD588215FE5628C031D39703F489ADB134798468D547FCC892FB029F000F40B9C6BC9839C5E2F57E94A82228B6A74057157DE703E60C5F73B73D05A8A64FF4DFDA17BCB13A1E09B630DC54ADC3858D4321630004C7531853BE8AB554389D516FF70EBFA3C9BB1596D8B3330B4EBD887561C6AF9D160C6E11BD9818DC352355312F5C804FFD2D3DEB7B08943DC0F2A6E84A68EBEC4373C23F468B7DF57E74197E654F76714CC83CDBC7AFB36A3BB61599639A49136C0670FAA7487410D224C292070FEA61D1D6744A7E0963178408B611A64E3CDC46EC8A5374CE111F241CB2924844A816C28A4C2B1E94F6563C99F4BEF9B9F57CD8F3CB9E9E73E497AE938A46846EC1A6D10CA29F6ABF16EEC7FE6671380D2B2D8; __csrf=8aac1219c057f835c9a73b1b0be8db6d; JSESSIONID-WYYY=nuyFOmZyzDIDxaXfMQxW%5CUFs%5CFc9i22R%2BlAd0edB6alrDbZZ8DFmlGpMhOn82SXQ%2ByjyGRryBnmHlTue1N3frr4zjcYl0Mar2wvSUoa7cOo%2F5bIvqcoFCZSfNyEiQgR0MyqyYFsuCS%2Fkk1o26VIc1uWsa%5CNNcdi8SbAIY97DnY%2B9XDy9%3A1704645525740; _iuqxldmzr_=33; _ntes_nnid=e9f73220bea3e863376b141404e0d578,1704112288240; _ntes_nuid=e9f73220bea3e863376b141404e0d578; NMTID=00Ok2KdECMqJDQrZk50i-b7k1Yd6vEAAAGMf3hUgA';
/*
  headers["mconfig-info"] = '{"zr4bw6pKFDIZScpo":{"version":1216512,"appver":"8.20.30"},"tPJJnts2H31BZXmp":{"version":2605056,"appver":"2.0.30"},"c0Ve6C0uNl2Am0Rl":{"version":595968,"appver":"1.7.50"},"IuRPVVmc3WWul9fT":{"version":28702720,"appver":"8.20.30"}}';
  headers["user-agent"] = 'NeteaseMusic 8.20.30/4630 (iPhone; iOS 15.3.1; zh_CN)';
  headers["cookie"] = 'EVNSM=1.0.0; NMCID=kmvsxp.1696074137000.01.3; NMDI=Q1NKTQcBDACXqvF0w2wyyI2bOQOVAAAAOMjpNaohCwftzlfSg3qGc52i%2FxX6jVdkqa%2B2%2BoOqPPrjp2OFAae%2FjG4lLKzz8QMY1O89vNfIz42KU4F7OvUraQw3eCH8I%2BGKS7%2BwW9YOyy0UOLNIUBKJjhuMtjckYb9Qq7fw40nfjG845FFA5gxOzVVN9NnoTSVcn%2F5Sewxgj1NEG8oeRiERf0sl9uJJvVfywQwW%2Fds%3D; URS_APPID=74B9D67231160CE3B88500AC631537E2BBEC1F1F945C990EB411DB01742D76B59CC2821647BBF7FC67D9350F9678A060; appkey=IuRPVVmc3WWul9fT; appver=8.20.30; buildver=4630; caid={"lastIyunId":"c188fda5639eb7665faa8f12acce7976","iyunId":"8b2f57388088a1c2c7134fa625ad9375","iyunVersion":"20230330","lastIyunVersion":"20220111"}; channel=distribution; deviceId=9ec0847264c088b44ca5c2b5ee94cdab; idfa=00000000-0000-0000-0000-000000000000; idfv=B2B23496-210B-40C0-B47B-C5AF4DADE41B; machineid=iPhone14.2; os=iPhone OS; osver=15.3.1; packageType=release; sDeviceId=9ec0847264c088b44ca5c2b5ee94cdab; ntes_kaola_ad=1; MUSIC_U=0059FC2762FF3142BFB6B67A7DD588215FE5628C031D39703F489ADB134798468D547FCC892FB029F000F40B9C6BC9839C5E2F57E94A82228B6A74057157DE703E60C5F73B73D05A8A64FF4DFDA17BCB13A1E09B630DC54ADC3858D4321630004C7531853BE8AB554389D516FF70EBFA3C9BB1596D8B3330B4EBD887561C6AF9D160C6E11BD9818DC352355312F5C804FFD2D3DEB7B08943DC0F2A6E84A68EBEC4373C23F468B7DF57E74197E654F76714CC83CDBC7AFB36A3BB61599639A49136C0670FAA7487410D224C292070FEA61D1D6744A7E0963178408B611A64E3CDC46EC8A5374CE111F241CB2924844A816C28A4C2B1E94F6563C99F4BEF9B9F57CD8F3CB9E9E73E497AE938A46846EC1A6D10CA29F6ABF16EEC7FE6671380D2B2D8; __csrf=8aac1219c057f835c9a73b1b0be8db6d; JSESSIONID-WYYY=nuyFOmZyzDIDxaXfMQxW%5CUFs%5CFc9i22R%2BlAd0edB6alrDbZZ8DFmlGpMhOn82SXQ%2ByjyGRryBnmHlTue1N3frr4zjcYl0Mar2wvSUoa7cOo%2F5bIvqcoFCZSfNyEiQgR0MyqyYFsuCS%2Fkk1o26VIc1uWsa%5CNNcdi8SbAIY97DnY%2B9XDy9%3A1704645525740; _iuqxldmzr_=33; _ntes_nnid=e9f73220bea3e863376b141404e0d578,1704112288240; _ntes_nuid=e9f73220bea3e863376b141404e0d578; NMTID=00Ok2KdECMqJDQrZk50i-b7k1Yd6vEAAAGMf3hUgA';
*/

$done({
    headers
});