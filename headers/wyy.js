let header = $request.headers;
const isQuanX = typeof $task !== "undefined";
const MConfig = '{"zr4bw6pKFDIZScpo":{"version":1591296,"appver":"9.0.95"},"tPJJnts2H31BZXmp":{"version":3096576,"appver":"2.0.30"},"c0Ve6C0uNl2Am0Rl":{"version":598016,"appver":"1.7.50"},"IuRPVVmc3WWul9fT":{"version":40013888,"appver":"9.0.95"}}';
const User = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 CloudMusic/0.1.1 NeteaseMusic/8.20.30';
const cookie = 'ntes_kaola_ad=1; EVNSM=1.0.0; NMCID=kmvsxp.1696074137000.01.3; NMDI=Q1NKTQcBDABG%2Bwi%2F9rk%2FsEbKYOWVAAAA0nTNvQqTJ9lsHXo50DJS10QJYApEPCX3r686g62P4D8MYHVPcCP8iUEsa82F%2F6QJgCqcSDsdQeuUalVf%2Bt9YEAom7ZXuw6kKrymVeMSA%2FHTzKtdTJUX5Cc7lXiHhL2iPiRhH%2FU%2BKSmmNifFaCKWZyWud22Z9GVNSEa%2F3ECKIf5B%2FRHIayS6UtbEBIuTg7LxmqvFdhB4%3D; URS_APPID=74B9D67231160CE3B88500AC631537E2BBEC1F1F945C990EB411DB01742D76B59CC2821647BBF7FC67D9350F9678A060; appkey=IuRPVVmc3WWul9fT; appver=9.0.95; buildver=5042@jsk; caid={"lastIyunId":"c188fda5639eb7665faa8f12acce7976","iyunId":"8b2f57388088a1c2c7134fa625ad9375","iyunVersion":"20230330","lastIyunVersion":"20220111"}; channel=distribution; deviceId=YD-9Ax%2FxiQscpNFGlFUREaQ6SU1wt1sfjoY; idfa=00000000-0000-0000-0000-000000000000; idfv=B2B23496-210B-40C0-B47B-C5AF4DADE41B; machineid=iPhone14.2; os=iPhone OS; osver=15.3.1; packageType=release; sDeviceId=YD-9Ax%2FxiQscpNFGlFUREaQ6SU1wt1sfjoY; NMTID=00Oa8EeXqCV4rFZ5ULRsTUksUnN68cAAAGQDHz0AQ; JSESSIONID-WYYY=XDpM9mcvRpIhcYYWtenyYHu3%2F7YH1bQAbmAfgPp3BQfpydE5UAvDfRPPGAt%5Coz%2BEhnpARwQvuPpeOmDRg%2FRf09%2BgC4ygz4TJknVbIyjlozvDwUdlR6hsqIVCwF%5Cc%2BKy4fCArcoFGc%2BjQcWu4Zb9DM50NpRI%2BbSsc7g6CXIjz4p5Y4TtI%3A1718197811908; _iuqxldmzr_=33; _ntes_nnid=d8f9c94fd1571f56355832e67a493e7c,1718190318375; _ntes_nuid=d8f9c94fd1571f56355832e67a493e7c; MUSIC_U=00622DD02B0EE8897AC5A90B5E8A0662BF99273E762AB59B8FB59156361A03D50E36BEB55F4EE7CBA98ECC7CAA49027B7468EEC7E170966603CC8A8AFBD7C2522F31227CE7DC63ABA7BCCF3370E90EDFD46A8C16F33E5D8F930EB7B3697B4638E4210857BC621AB6791FFB04C9C23BCE118F0F5B428D3623DBC7B0EACEB9462F00E907039FBD262A04B15564398970C9BF67B6472D8AAA04215BCC4A95D4D945A103DA6AC74E389730B8F4DD74D9B063EB65F0745A8FAC23EF2084B243EEA2A9FECFF644E5C42297E1D8AB1D2FD0D79259A1DE783D12DC38E4E04E7244BBA82425C3A222F363EF415ABCE872E114BCF8A3750E3F2E48EF80B86C46A013E225CC62804666C222BB65B90F60F317B4855592E3CAFED424EDB29E6B9B1A08C3F93AAD; __csrf=e87a0741bdb2d936510a0b50553ac8cc';

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
