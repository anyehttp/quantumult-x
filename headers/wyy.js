let header = $request.headers;
const isQuanX = typeof $task !== "undefined";
const MConfig = '{"zr4bw6pKFDIZScpo":{"version":1355776,"appver":"8.20.30"},"tPJJnts2H31BZXmp":{"version":2715648,"appver":"2.0.30"},"c0Ve6C0uNl2Am0Rl":{"version":595968,"appver":"1.7.50"},"IuRPVVmc3WWul9fT":{"version":31627264,"appver":"8.20.30"}}';
const User = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 CloudMusic/0.1.1 NeteaseMusic/8.20.30';
const cookie = 'ntes_kaola_ad=1; JSESSIONID-WYYY=8muY%5CrYx2gePxFwrlb6TF6u7Zau%2FvuDDH1nxG62i%5CowKnyvfBgxqqTXGxEafiFi%2FDnD%5CNHYx%5CGzi8ttFjzpCOAVxZemjj5%2BlZNHYIectipNc5QNaZD%2BKCSIo7jG9VFh2bsR81zc%2FJQU8jjSBa%2B%5CEwrvCe4fgtr65ZT8GQ01EhZq%5C9e9T%3A1706028036412; _iuqxldmzr_=33; EVNSM=1.0.0; NMCID=kmvsxp.1696074137000.01.3; NMDI=Q1NKTQcBDAArivXSr1ZdywBF9QeVAAAAzf%2BJoM8wxcfFkMQ3HGArQBN%2F4WX6Frzldy1gw3nmilJ9SZEuk2npt4s%2Bl1uK%2FyunQyvSgtBPzMl85XZe8AMN4HDtu4qyxumyDYFvssbO%2BJioQCF6de6eZEHM8mWFfInTt%2BvbMB%2F0r1HQb7oq45MtD%2FndW88alcxAbCNt0lXVnZH80y%2Fu1XhELl7Xf%2BRqiCp5iU6OjEY%3D; URS_APPID=74B9D67231160CE3B88500AC631537E2BBEC1F1F945C990EB411DB01742D76B59CC2821647BBF7FC67D9350F9678A060; appkey=IuRPVVmc3WWul9fT; appver=8.20.30; buildver=4630; caid={"lastIyunId":"c188fda5639eb7665faa8f12acce7976","iyunId":"8b2f57388088a1c2c7134fa625ad9375","iyunVersion":"20230330","lastIyunVersion":"20220111"}; channel=distribution; deviceId=9ec0847264c088b44ca5c2b5ee94cdab; idfa=00000000-0000-0000-0000-000000000000; idfv=B2B23496-210B-40C0-B47B-C5AF4DADE41B; machineid=iPhone14.2; os=iPhone OS; osver=15.3.1; packageType=release; sDeviceId=9ec0847264c088b44ca5c2b5ee94cdab; WEVNSM=1.0.0; WNMCID=vsvgve.1705638809937.01.0; _ntes_nnid=be9e15511cc26707a82fe1d029ee4759,1705638726890; _ntes_nuid=be9e15511cc26707a82fe1d029ee4759; MUSIC_U=009DB42DF80E07114C837D4F8E9E2ABEF88CC27E5E03A41B753224929FFC0F54659FE7C2B5621031343F1AB3FFC7E59A6D43D6610F24F4D1C1719C6DF053DB24ABE3EF2F0D950305FF278D589F67EB24F3169066988862ECD3E22F10F3E3AA4A572B6E8977C0795FE09905F6BCB0F6C72AE0F4FD88BA8852C2407DD05F834C8D289D7C343B4273A84A1AD8DAE1C3C50C415F54BA0DEEE2102C703257C58B1F5B122BB9E60C15E216EEDE0E1E67B0A765071DE09D45C6A29F17484EF91087CAC95B3F16CCE25D0C605DBA7252D9E731F30B5A105BE6FF72BCA53ABCDD821BAE140926FAA25A5B1AE2957CCEB90D8F52DC2C9D1E48360EC4DB9A8BBE6708F8FBD198C2DB4CF9FB8F249E9AF321FB1B85C55E41D67C3A1F441C7A1239BCA71A130264; __csrf=790fadc1dd4b3387a7e66ba09615262b; NMTID=00OwAO2-U7mAbVHZUxXgfCTpE-qzQsAAAGNAi6-6g';



if (isQuanX) {
  header["MConfig-Info"] = MConfig;
  header["User-Agent"] = User;
  header["Cookie"] = cookie;
} else {
  header["mconfig-info"] = MConfig;
  header["user-agent"] = User;
  header["cookie"] = cookie;
}

$done({ headers: header });