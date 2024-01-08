/*
获取视频播放原地址

URL:https://api.iyf.tv/api/Video/getPlayInfo

quantumultx

[rewrite_local]
^https:\/\/api\.iyf\.tv\/api\/Video\/getPlayInfo url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/iyf.js

[mitm]
hostname = api.iyf.tv
*/

/*
var url = $request.url;
if (url.includes('/Video/getPlayInfo')) {
    var body = JSON.parse($response.body);

    if (body.data && body.data.list && body.data.list.length > 2) {
        var episode = body.data.list[2];
        var m3u8Match = episode.mediaUrl.match(/(https?:\/\/[^\/]+\/[^\/]+\.m3u8)/);
        var m3u8Url = m3u8Match ? m3u8Match[1] : episode.mediaUrl;
        $notify("获取视频播放地址成功", episode.title + "第" + episode.episodeTitle + "集", m3u8Url);
    }

    $done({});
}
*/
var url = $request.url;
if (url.includes('/Video/getPlayInfo')) {
    var body = JSON.parse($response.body); 

    if (body.data && body.data.list && body.data.list.length > 2) {
        var episode = body.data.list[2];
        $notify("获取视频播放地址成功", episode.title + "第" + episode.episodeTitle + "集", episode.mediaUrl);
    }

    $done({});
}
