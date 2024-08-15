const $ = new Env('Steampy Price Checker');

// 从环境变量获取数据
const cookie = $.getdata('Steampy_Cookie');
const accessToken = $.getdata('Steampy_accessToken');
const steampyIds = $.getdata('Steampy_id').split('&');
const steampyNames = $.getdata('Steampy_name').split('&');
const notice = $.getdata('Steampy_notice') === 'true';

// 模拟浏览器请求的请求头
const headers = {
    'Host': 'steampy.com',
    'Content-Type': 'application/json;charset=UTF-8',
    'Cookie': cookie,
    'APP_TOKEN': 'App',
    'User-Agent': 'BuniOS/1.2.19 (com.com.bun.www; build:0; iOS 15.3.1) Alamofire/4.9.1',
    'accessToken': accessToken
};

// 异步请求 URL 获取 JSON 内容
async function requestUrl(url) {
    console.log(`请求 URL: ${url}`);
    return new Promise((resolve, reject) => {
        $.get({ url, headers }, (err, resp, body) => {
            if (err) {
                console.log(`请求错误: ${err}`);
                reject(err);
            } else {
                console.log(`请求成功: ${url}`);
                resolve(JSON.parse(body));
            }
        });
    });
}

// 读取本地数据
function readLocalData() {
    const data = $.getdata('steampy_data') || '{}';
    console.log('读取本地数据');
    return JSON.parse(data);
}

// 写入本地数据
function writeLocalData(data) {
    $.setdata(JSON.stringify(data, null, 4), 'steampy_data');
    console.log('写入本地数据');
}

// 获取游戏数据并处理价格
async function getList(id, name) {
    const url = `https://steampy.com/xboot/steamKeySale/listSale?pageNumber=1&pageSize=20&sort=keyPrice&order=asc&startDate=&endDate=&gameId=${id}`;
    const resp = await requestUrl(url);

    if (!resp.result || !resp.result.content || resp.result.content.length === 0) {
        return `${name} 查询不到 cdkey 信息`;
    }

    const { steamName, ccy, keyPrice, stock } = resp.result.content[0];

    let steampyData = readLocalData();
    let steampyId = steampyData.Steampy_id || {};

    if (!steampyId[id]) {
        // ID 不存在，添加到数据中
        steampyId[id] = {
            appname: name,
            appid: id,
            price: keyPrice
        };
        steampyData.Steampy_id = steampyId;
        writeLocalData(steampyData);
        return `${name}-id:${id}-${steamName}-${ccy}-${keyPrice}-库存 ${stock}`;
    } else {
        // ID 存在，检查价格是否改变
        const previousPrice = steampyId[id].price;
        if (previousPrice !== keyPrice) {
            // 价格发生变化，更新价格
            steampyId[id].price = keyPrice;
            writeLocalData(steampyData);
            return `价格变化 ${name}-id:${id}-${steamName}-${ccy}-从 ${previousPrice} 变为 ${keyPrice}-库存 ${stock}`;
        } else if (notice) {
            // 价格无变化且通知开启
            return `${name}-id:${id} 无变化`;
        }
    }

    return '';
}

// 主函数
async function main() {
    const tasks = steampyIds.map((id, index) => getList(id, steampyNames[index]));
    const results = await Promise.all(tasks);

    const noticeMsg = results.filter(msg => msg).join('\n');
    if (noticeMsg) {
        $.msg('Steampy Price Checker', '', noticeMsg);
        console.log(noticeMsg);
    } else {
        console.log('所有价格无变化');
    }
}

main().catch(err => {
    $.msg('Steampy Price Checker', '', `脚本执行出错: ${err.message}`);
    console.log(`脚本执行出错: ${err.message}`);
});
