// 兼容多种代理软件的 JavaScript 脚本
const $ = new Env('App Price Checker');

// 通知函数，使用 env 通知
function notify(notice) {
    $.msg($.name, '', notice);
}

// 模拟浏览器请求的请求头
const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0',
};

// 异步请求 URL 获取 HTML 内容
async function requestUrl(url) {
    return new Promise((resolve, reject) => {
        const options = { url, headers };
        $.get(options, (err, resp, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        });
    });
}

// 解析 app 本体价格
function parseAppBodyPrice(html) {
    const priceElement = html.match(/<li class="inline-list__item inline-list__item--bulleted app-header__list__item--price">([\s\S]*?)<\/li>/);
    return priceElement ? priceElement[1].trim() : null;
}

// 解析 app 内购项目
function parseAppInAppPurchases(html) {
    const appTitles = [...html.matchAll(/<span class="truncate-single-line truncate-single-line--block">([\s\S]*?)<\/span>/g)].map(m => m[1].trim());
    const appPrices = [...html.matchAll(/<span class="list-with-numbers__item__price small-hide medium-show-tablecell">([\s\S]*?)<\/span>/g)].map(m => m[1].trim());
    return { appTitles, appPrices };
}

// 读取本地数据
function readLocalData() {
    const data = $.getdata('app_data') || '{}';
    return JSON.parse(data);
}

// 写入本地数据
function writeLocalData(data) {
    $.setdata(JSON.stringify(data, null, 4), 'app_data');
}

// 获取 app 数据并解析价格
async function fetchAppData(region, name, id, purchaseType) {
    const url = `https://apps.apple.com/${region}/app/${name}/id${id}`;
    const html = await requestUrl(url);

    if (purchaseType === '本体') {
        const price = parseAppBodyPrice(html);
        return price ? { name, type: purchaseType, id, price } : null;
    } else {
        const { appTitles, appPrices } = parseAppInAppPurchases(html);
        if (appTitles.length && appPrices.length) {
            return appTitles.map((title, index) => ({
                name,
                type: purchaseType,
                id,
                price: appPrices[index],
                title
            }));
        }
    }
    return null;
}

// 主函数
async function main() {
    const appDataStr = $.getdata('app_data_json');
    if (!appDataStr) {
        notify('环境变量 app_data_json 未设置，请检查');
        return;
    }

    const appData = JSON.parse(appDataStr);
    const localData = readLocalData();

    const tasks = appData.地区.map((region, index) =>
        fetchAppData(region, appData.名字[index], appData.id[index], appData.购买方式[index])
    );

    const results = await Promise.all(tasks);
    const notice = [];

    results.forEach(result => {
        if (result) {
            if (Array.isArray(result)) {
                result.forEach((item, index) => {
                    const key = `${item.name}-${item.title}-${index}`;
                    if (localData[key]) {
                        if (localData[key].price !== item.price) {
                            notice.push(`${item.name} ${item.title} ${localData[key].price} -> ${item.price}`);
                        }
                    } else {
                        notice.push(`添加 ${item.name} ${item.title} ${item.price}`);
                    }
                    localData[key] = item;
                });
            } else {
                const key = `${result.name}-${result.id}`;
                if (localData[key]) {
                    if (localData[key].price !== result.price) {
                        notice.push(`${result.name} ${localData[key].price} -> ${result.price}`);
                    }
                } else {
                    notice.push(`添加 ${result.name} ${result.price}`);
                }
                localData[key] = result;
            }
        }
    });

    if (notice.length) {
        notify(notice.join('\n'));
    } else {
        notify('所有价格无变化');
    }

    writeLocalData(localData);
}

main().catch(err => {
    notify(`脚本执行出错: ${err.message}`);
});
