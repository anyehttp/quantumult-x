#!url=http://script.hub/file/_start_/https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js/_end_/blued.sgmodule?type=qx-rewrite&target=shadowrocket-module&del=true
#!name=blued
#!desc=群组：https://t.me/IPAs_Dd 频道：https://t.me/IPAs_share 作者@anyeyey

[Script]
blued = type=http-response, pattern=^https:\/\/social\.blued\.cn\/users\/.*\/setting, script-path=https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js, requires-body=true, max-size=-1, timeout=60

blued = type=http-response, pattern=^https:\/\/social\.blued\.cn\/users\/shadow, script-path=https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js, requires-body=true, max-size=-1, timeout=60

blued = type=http-response, pattern=^https:\/\/social\.blued\.cn\/users\/.*\/basi, script-path=https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/blued.js, requires-body=true, max-size=-1, timeout=60

[MITM]
hostname = %APPEND% social.blued.cn