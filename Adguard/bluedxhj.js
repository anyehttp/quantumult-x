#!url=http://script.hub/file/_start_/https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js/_end_/blued.sgmodule?type=qx-rewrite&target=shadowrocket-module&del=true
#!name=blued
#!desc=blued

[URL Rewrite]
https://social.blued.cn/users/recommend - reject-dict
^https:\/\/social\.blued\.cn\/users\/no_auth\/benefit - reject-dict

[Script]
blued = type=http-response, pattern=^https:\/\/social\.blued\.cn\/users\/.*\/setting, script-path=https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js, requires-body=true, max-size=-1, timeout=60

blued = type=http-response, pattern=^https:\/\/social\.blued\.cn\/users\/.*\/flash, script-path=https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js, requires-body=true, max-size=-1, timeout=60

blued = type=http-response, pattern=^https:\/\/social\.blued\.cn\/users\?birth_time, script-path=https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js, requires-body=true, max-size=-1, timeout=60

blued = type=http-response, pattern=^https:\/\/social\.blued\.cn\/users\/call\/state\?detail, script-path=https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js, requires-body=true, max-size=-1, timeout=60

blued = type=http-response, pattern=^https:\/\/argo\.blued\.cn\/users\/, script-path=https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js, requires-body=true, max-size=-1, timeout=60

blued = type=http-response, pattern=^https:\/\/social\.blued\.cn\/users\/shadow, script-path=https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js, requires-body=true, max-size=-1, timeout=60

blued = type=http-response, pattern=^https:\/\/social\.blued\.cn\/users\/.+\/more\/ios\?v, script-path=https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js, requires-body=true, max-size=-1, timeout=60

[MITM]
hostname = %APPEND% social.blued.cn, argo.blued.cn
