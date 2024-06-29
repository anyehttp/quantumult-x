// vx植物星球
// zwxq
// Author: Mist
// Date: 2024-06-25
// cron "30 9 * * *" zwxq.js
// 注册：https://www.pftp2012.com
// const zwxq = '账号&密码'; // Surge 环境变量

const zwxq = $persistentStore.read('zwxq'); // 获取 Surge 环境变量
const Notify = 1; // 是否通知, 1通知, 0不通知. 默认通知
const debug = 0; // 是否调试, 1调试, 0不调试. 默认不调试
let scriptVersionNow = "1.0.0"; // 脚本版本号
let msg = "";

// ==================================异步顺序==============================================================================
!(async () => {
    await getNotice();  // 远程通知
    await getVersion("yang7758258/ohhh154@main/zwxq.js");
    await main(); // 主函数
    await SendMsg(msg); // 发送通知

})()
.catch((e) => console.log(e))
.finally(() => $done());

// ==================================脚本入口函数main()==============================================================
async function main() {
    if (!zwxq) {
        console.log(`没有填写变量, 请查看脚本说明: zwxq`);
        return;
    }
    let user_ck = zwxq.split('\n');
    console.log(`\n========== 共找到 ${user_ck.length} 个账号 ==========`);
    let index = 1;
    for (let ck of user_ck) {
        if (!ck) continue;
        let [userName, userPwd] = ck.split('&');
        let user = { index, userName, userPwd };
        index++;
        await userTask(user);
        let rnd_time = Math.floor(Math.random() * 4000) + 1000;
        console.log(`账号[${user.index}]随机等待${rnd_time / 1000}秒...`);
        await wait(rnd_time);
    }
}

// ======================================开始任务=========================================
async function userTask(user) {
    console.log(`\n============= 账号[${user.index}]开始任务 =============`);
    let ck = await Login(user);
    await wait(1);
    await Sign(user, ck);
    await wait(1);
    await mission(user, '10', ck);
    await wait(1);
    await mission(user, '60', ck);
}

// =============================================================================================================================
// 登入
async function Login(user) {
    return new Promise((resolve, reject) => {
        let userPwd = md5(user.userPwd);
        let options = {
            url: `https://api.pftp2012.com/api/Member/Login`,
            method: 'POST',
            headers: {
                'Host': 'api.pftp2012.com',
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Mozilla/5.0 ...', // 略
            },
            body: `userName=${user.userName}&userPwd=${userPwd}&keepAlive=true&channel=10`
        };
        $httpClient.post(options, (error, response, data) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                let result = JSON.parse(data);
                if (result?.Data) {
                    console.log(`🌸账号[${result.Data.MemberInfo.MemberName}]🕊登入成功-当前[${result.Data.MemberInfo.MemberPollen}]积分🎉`);
                    resolve(result.Data.MemberInfo.Token);
                } else {
                    console.log(`🌸账号[${user.index}]登入-失败:${result.Msg}❌`);
                    resolve(null);
                }
            }
        });
    });
}

// 签到
async function Sign(user, Token) {
    return new Promise((resolve, reject) => {
        let options = {
            url: `https://api.pftp2012.com/api/Member/SignIn?channel=10`,
            method: 'GET',
            headers: {
                'Host': 'api.pftp2012.com',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${Token}`,
                'User-Agent': 'Mozilla/5.0 ...', // 略
            },
        };
        $httpClient.get(options, (error, response, data) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                let result = JSON.parse(data);
                if (result.Status == 100) {
                    console.log(`🌸账号[${user.index}]🕊签到成功-获得${result.Data.PollenNum}积分-连续签到${result.Data.ContinuouNum}天🎉`);
                } else {
                    console.log(`🌸账号[${user.index}]🕊签到:${result.Msg}❌`);
                }
                resolve();
            }
        });
    });
}

// 任务
async function mission(user, id, Token) {
    return new Promise((resolve, reject) => {
        let options = {
            url: `https://api.pftp2012.com/api/Member/CompleteMemberMission`,
            method: 'POST',
            headers: {
                'Host': 'api.pftp2012.com',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${Token}`,
                'User-Agent': 'Mozilla/5.0 ...', // 略
            },
            body: `type=${id}&channel=40`
        };
        $httpClient.post(options, (error, response, data) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                let result = JSON.parse(data);
                if (result?.Status == '100') {
                    console.log(`🌸账号[${user.index}]🕊浏览任务id:${id}成功,获得${result.Data}积分🎉`);
                } else {
                    console.log(`🌸账号[${user.index}]浏览任务失败:${result.Msg}❌`);
                }
                resolve();
            }
        });
    });
}

// 发送消息
async function SendMsg(message) {
    if (!message) return;
    if (Notify > 0) {
        $notification.post('vx植物星球', '', message);
    } else {
        console.log(message);
    }
}

// 等待 X 秒
function wait(n) {
    return new Promise((resolve) => setTimeout(resolve, n * 1000));
}

// 随机等待 1-5 秒
function sjwait() {
    return new Promise((resolve) => {
        let waitTime = Math.floor(Math.random() * 4000 + 1000);
        setTimeout(resolve, waitTime);
    });
}

// 13位时间戳
function getTimestamp() {
    return new Date().getTime();
}

// 获取远程通知
async function getNotice() {
    const urls = [
        "https://gitee.com/ohhhooh/jd_haoyangmao/raw/master/Notice.json",
    ];
    for (const url of urls) {
        await new Promise((resolve, reject) => {
            $httpClient.get({ url }, (error, response, data) => {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    let result = JSON.parse(data);
                    if (result && "notice" in result) {
                        console.log(result.notice.replace(/\\n/g, "\n"));
                    }
                    resolve();
                }
            });
        });
    }
}

// 获取远程版本
function getVersion(scriptUrl) {
    return new Promise((resolve) => {
        $httpClient.get({ url: `https://fastly.jsdelivr.net/gh/${scriptUrl}` }, (error, response, data) => {
            if (error) {
                console.log(error);
            } else {
                const regex = /scriptVersionNow\s*=\s*(["'`])([\d.]+)\1/;
                const match = data.match(regex);
                const scriptVersionLatest = match ? match[2] : "";
                console.log(`\n============= 当前版本：${scriptVersionNow} 🌟 最新版本：${scriptVersionLatest} =============`);
            }
            resolve();
        });
    });
}





               
//===============================================================================================================================================
//================================================固定API===============================================================================================
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return ("POST" === e && (s = this.post), new Promise((e, a) => { s.call(this, t, (t, s, r) => { t ? a(t) : e(s) }) })) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new (class { constructor(t, e) { this.userList = []; this.userIdx = 0; (this.name = t), (this.http = new s(this)), (this.data = null), (this。dataFile = "box.dat"), (this.logs = []), (this.isMute = !1), (this.isNeedRewrite = !1), (this.logSeparator = "\n"), (this.encoding = "utf-8"), (this.startTime = new Date().getTime()), Object.assign(this, e), this.log("", `🔔${this.name},开始!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const a = this.getdata(t); if (a) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise((e) => { this.get({ url: t }, (t, s, a) => e(a)) }) } runScript(t, e) { return new Promise((s) => { let a = this.getdata("@chavy_boxjs_userCfgs.httpapi"); a = a ? a.replace(/\n/g, "").trim() : a; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); (r = r ? 1 * r : 20), (r = e && e.timeout ? e.timeout : r); const [i, o] = a.split("@"), n = { url: `http://${o}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": i, Accept: "*/*" }, timeout: r, }; this.post(n, (t, e, a) => s(a)) }).catch((t) => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { (this.fs = this.fs ? this.fs : require("fs")), (this.path = this.path ? this.path : require("path")); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), a = !s && this.fs.existsSync(e); if (!s && !a) return {}; { const a = s ? t : e; try { return JSON.parse(this.fs.readFileSync(a)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { (this.fs = this.fs ? this.fs : require("fs")), (this.path = this.path ? this.path : require("path")); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), a = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : a ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const a = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of a) if (((r = Object(r)[t]), void 0 === r)) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), (e.slice(0, -1).reduce((t, s, a) => Object(t[s]) === t[s] ? t[s] : (t[s] = Math.abs(e[a + 1]) >> 0 == +e[a + 1] ? [] : {}), t)[e[e.length - 1]] = s), t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, a] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, a, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, a, r] = /^@(.*?)\.(.*?)$/.exec(e), i = this.getval(a), o = a ? ("null" === i ? null : i || "{}") : "{}"; try { const e = JSON.parse(o); this.lodash_set(e, r, t), (s = this.setval(JSON.stringify(e), a)) } catch (e) { const i = {}; this.lodash_set(i, r, t), (s = this.setval(JSON.stringify(i), a)) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return (this.data = this.loaddata()), this.data[t]; default: return (this.data && this.data[t]) || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return ((this.data = this.loaddata()), (this.data[e] = t), this.writedata(), !0); default: return (this.data && this.data[e]) || null } } initGotEnv(t) { (this.got = this.got ? this.got : require("got")), (this.cktough = this.cktough ? this.cktough : require("tough-cookie")), (this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()), t && ((t.headers = t.headers ? t.headers : {}), void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = () => { }) { switch ((t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), this.getEnv())) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && ((t.headers = t.headers || {}), Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, a) => { !t && s && ((s.body = a), (s.statusCode = s.status ? s.status : s.statusCode), (s.status = s.statusCode)), e(t, s, a) }); break; case "Quantumult X": this.isNeedRewrite && ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then((t) => { const { statusCode: s, statusCode: a, headers: r, body: i, bodyBytes: o, } = t; e(null, { status: s, statusCode: a, headers: r, body: i, bodyBytes: o, }, i, o) }, (t) => e((t && t.error) || "UndefinedError")); break; case "Node.js": let s = require("iconv-lite"); this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), (e.cookieJar = this.ckjar) } } catch (t) { this.logErr(t) } }).then((t) => { const { statusCode: a, statusCode: r, headers: i, rawBody: o, } = t, n = s.decode(o, this.encoding); e(null, { status: a, statusCode: r, headers: i, rawBody: o, body: n, }, n) }, (t) => { const { message: a, response: r } = t; e(a, r, r && s.decode(r.rawBody, this.encoding)) }) } } post(t, e = () => { }) { const s = t.method ? t.method.toLocaleLowerCase() : "post"; switch ((t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), this.getEnv())) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && ((t.headers = t.headers || {}), Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[s](t, (t, s, a) => { !t && s && ((s.body = a), (s.statusCode = s.status ? s.status : s.statusCode), (s.status = s.statusCode)), e(t, s, a) }); break; case "Quantumult X": (t.method = s), this.isNeedRewrite && ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then((t) => { const { statusCode: s, statusCode: a, headers: r, body: i, bodyBytes: o, } = t; e(null, { status: s, statusCode: a, headers: r, body: i, bodyBytes: o, }, i, o) }, (t) => e((t && t.error) || "UndefinedError")); break; case "Node.js": let a = require("iconv-lite"); this.initGotEnv(t); const { url: r, ...i } = t; this.got[s](r, i).then((t) => { const { statusCode: s, statusCode: r, headers: i, rawBody: o, } = t, n = a.decode(o, this.encoding); e(null, { status: s, statusCode: r, headers: i, rawBody: o, body: n }, n) }, (t) => { const { message: s, response: r } = t; e(s, r, r && a.decode(r.rawBody, this.encoding)) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date(); let a = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds(), }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in a) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[e] : ("00" + a[e]).substr(("" + a[e]).length))); return t } queryStr(t) { let e = ""; for (const s in t) { let a = t[s]; null != a && "" !== a && ("object" == typeof a && (a = JSON.stringify(a)), (e += `${s}=${a}&`)) } return (e = e.substring(0, e.length - 1)), e } msg(e = t, s = "", a = "", r) { const i = (t) => { switch (typeof t) { case void 0: return t; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: t }; case "Loon": case "Shadowrocket": return t; case "Quantumult X": return { "open-url": t }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } case "Loon": { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } case "Quantumult X": { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl, a = t["update-pasteboard"] || t.updatePasteboard; return { "open-url": e, "media-url": s, "update-pasteboard": a, } } case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(e, s, a, i(r)); break; case "Quantumult X": $notify(e, s, a, i(r)); break; case "Node.js": }if (!this.isMuteLog) { let t = ["", "==============📣系统通知📣==============",]; t.push(e), s && t.push(s), a && t.push(a), console.log(t.join("\n")), (this.logs = this.logs.concat(t)) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `❗️${this.name},错误!`, t); break; case "Node.js": this.log("", `❗️${this.name},错误!`, t.stack) } } wait(t) { return new Promise((e) => setTimeout(e, t)) } DoubleLog(d) { if (this.isNode()) { if (d) { console.log(`${d}`); msg += `\n ${d}` } } else { console.log(`${d}`); msg += `\n ${d}` } } async SendMsg(m) { if (!m) return; if (Notify > 0) { if (this.isNode()) { var notify = require("./sendNotify"); await notify.sendNotify(this.name, m) } else { this.msg(this.name, "", m) } } else { console.log(m) } } done(t = {}) { const e = new Date().getTime(), s = (e - this.startTime) / 1e3; switch ((this.log("", `🔔${this.name},结束!🕛${s}秒`), this.log(), this.getEnv())) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } })(t, e) }
//Env rewrite:smallfawn Update-time:23-6-30 newAdd:DoubleLog & SendMsg
