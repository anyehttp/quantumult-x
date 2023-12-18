#波点音乐    去掉开屏 两个轮播图 精简播放页面侧边栏推荐和搜索推荐

#频道@IPAs_share  群组:https://t.me/IPAs_share
#群组@IPAs_Dd



[rewrite_local]
^https:\/\/bd-api\.kuwo\.cn\/api\/voice\/room\/sidebar\?uid url reject-dict

^https:\/\/bd-api\.kuwo\.cn\/api\/search\/topic\/word\/list\?uid url reject-dict

^https?:\/\/bd-api\.kuwo\.cn\/api\/service\/banner\/myPage\?uid url reject-dict

https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/ddddddd.js
[mitm]
hostname = pgdt.gtimg.cn

  *************************************/


var body = $response.body;
var chxm1023 = JSON.parse(body);
const ad = /api\/service\/(home\/index|banner\/myPage)/;
const advert = /api\/service\/advert\/watch/;

if(ad.test($request.url)){
  chxm1023.data.bannerList = [];
  if (chxm1023.data.moduleList && chxm1023.data.moduleList.length > 0) {
   chxm1023.data.moduleList = chxm1023.data.moduleList.filter(item => item.name !== "轮播图" && item.name !== "波点实验室");
  };
}

if(advert.test($request.url)){
  chxm1023.data = {
    "mvGuide" : "看广告，解锁所有VIP歌曲\n解锁后可畅听%s",
    "expireTime" : 0,
    "mvDuration" : 0
  };
}

$done({body : JSON.stringify(chxm1023)});
