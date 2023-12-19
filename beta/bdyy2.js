[rewrite_local]
^https:\/\/bd-api\.kuwo\.cn\/api\/service\/home\/index url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/bdyy2.js


[mitm]
hostname = bd-api.kuwo.cn


var body = $response.body;
var anye = JSON.parse(body);

const ay = /api\/service\/home\/index/;

if(ay.test($request.url))
{
    anye.data.list = [];
    if(anye.data.list && anye.data.list.length >0)
    {
        anye.data.list = anye.data.list.filter(home => home.name !== "波点排行榜" && home.name !== "偶遇心动歌单" && home.name !== "个性化歌单");
    }
}

$done({body: JSON.stringify(anye)});
