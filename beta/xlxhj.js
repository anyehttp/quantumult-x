#!name=xl
#!desc=xl

[MITM]
hostname = %APPEND% *.xgfipub.cn

[Script]
xl = type=http-request, pattern=https?:\/\/[\w.]+\/videos3\/[a-f0-9]+\/[a-f0-9]+\.m3u8, script-path=https://raw.githubusercontent.com/anyehttp/quantumult-x/main/beta/xl.js, timeout=60
