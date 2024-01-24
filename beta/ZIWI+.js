function Env(name) {
  this.name = name;
  this.data = {};

  this.log = function(msg) {
      console.log(this.name + ": " + msg);
  };

  this.setdata = function(key, val) {
      this.data[key] = val;
  };

  this.getdata = function(key) {
      return this.data[key];
  };

  this.msg = function(title, subtitle, message) {
      $notification.post(title, subtitle, message);
  };

  this.done = function(val) {
      console.log(this.name + " done!");
  };
}

const $ = new Env("签到脚本");
const ckName = "sign_in_cookie";
let savedAuthHeader = "";

function captureAuthHeader() {
  let url = $request.url;
  const targetUrl = "https://ziwixcx.escase.cn/json-rpc?__method=GetTaskList";

  if (url.includes(targetUrl)) {
      let authHeader = $request.headers["Authorization"];
      if (authHeader) {
          console.log("Captured Authorization Header: " + authHeader);
          savedAuthHeader = authHeader;
          $.setdata(ckName, authHeader);
          $.msg("签到脚本", "获取Cookie成功", "");
      }
  }
  $done({});
}



function signIn() {
  console.log("执行signIn函数");
  if (!savedAuthHeader) {
      savedAuthHeader = $.getdata(ckName);
      console.log("从存储中获取的Authorization: " + savedAuthHeader);
  }

  if (!savedAuthHeader) {
      console.log("没有找到有效的Authorization头，无法签到");
      $.msg("签到脚本", "签到失败", "没有找到有效的Authorization头");
      return;
  }

  const options = {
      url: "https://ziwixcx.escase.cn/json-rpc?__method=GetTaskList",
      headers: { "Authorization": savedAuthHeader }
  };

  console.log("发送签到请求");
  httpRequest(options, 'get').then(result => {
      console.log("签到响应:", JSON.stringify(result));
      // 根据result的内容执行签到成功或失败的逻辑
  }).catch(error => {
      console.log("签到请求失败:", error);
  });
}



if (typeof $request !== "undefined") {
  captureAuthHeader();
} else {
  console.log("开始执行签到操作");
  signIn();
}

function httpRequest(options, method) {
  method = method || ('body' in options ? 'post' : 'get');
  return new Promise((resolve, reject) => {
      $[method](options, (err, resp, data) => {
          try {
              if (err) {
                  console.log(`${method}请求失败`);
                  $.logErr(err);
                  reject(err);
              } else {
                  if (data) {
                      resolve(typeof JSON.parse(data) == 'object' ? JSON.parse(data) : data);
                  } else {
                      console.log(`请求api返回数据为空，请检查自身原因`);
                      resolve();
                  }
              }
          } catch (e) {
              $.logErr(e, resp);
              reject(e);
          }
      });
  });
}
