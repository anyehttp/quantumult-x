/*
GitHub
功能未测试
2023.12.21

[rewrite_local]
https://api.github.com/graphql url script-response-body https://github.com/anyehttp/quantumult-x/blob/main/beta/GitHub.js

[mitm]
hostname = api.github.com

*/

let obj = JSON.parse($response.body);
if (obj.data && obj.data.viewer) {
  obj.data.viewer.isProPlan = true;
  obj.data.viewer.isEmployee = true;
  obj.data.viewer.hasAppleIapSubscription = true;

  $done({
    body: JSON.stringify(obj)
  });
} else {
  $done({});
}