/*
headers['MConfig-Info'] = '';
****************************
[rewrite_local]
^https:\/\/www\.doctorsclass\.com\/api\/v1 url script-request-header https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/beta.js

[mitm] 
hostname = doctorsclass.com
*/
headers = $request.headers;

headers['Cookie'] = 'dMYGUvJAeBkbU7WgxUyDrKj+gjkVqqJH8c73Po1sj9ktkKmobz/NVsfSJ3C06Icv';
headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Html5Plus/1.0 (Immersed/20) uni-app';


$done({headers});