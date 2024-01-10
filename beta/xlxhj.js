#!name=xl
#!desc=xl
#@anyeyey
#@ios151
#小蓝视频网址:https://p4.gv009.fun/
#GTV :https://bda.qgtexa.com
#blued视频:blued.tips
#海角社区:http://haijiao.fun

[MITM]
hostname = %APPEND% *.xgfipub.cn, *yangyang4.cn

[Script]
#gv系列 (GTV Blued视频 小蓝视频)  =*.xgfipub.cn
xl = type=http-request, pattern=https?:\/\/[\w.]+\/videos3\/[a-f0-9]+\/[a-f0-9]+\.m3u8, script-path=https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/xl.js, timeout=60

#海角社区  =*yangyang4.cn
xl = type=http-request, pattern=https?:\/\/[\w.]+\/watch7\/[a-f0-9]+\/[a-f0-9]+\.m3u8, script-path=https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/xl.js, timeout=60
