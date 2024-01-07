/*************************************
项目名称：媒关系
下载地址：https://too.st/7kA
更新日期：2024-01-07
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/mgx.js

[mitm]
hostname = buy.itunes.apple.com
*************************************/
var anye = JSON.parse($response.body);
    anye = {
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 6447597315,
    "receipt_creation_date" : "2024-01-07 13:18:59 Etc/GMT",
    "bundle_id" : "com.meiguanxi.videohelper",
    "original_purchase_date" : "2024-01-07 13:17:38 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1704633538000",
        "expires_date" : "2024-01-10 13:18:58 Etc/GMT",
        "expires_date_pst" : "2024-01-10 05:18:58 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "460001762677882",
        "is_trial_period" : "true",
        "original_transaction_id" : "460001762677882",
        "purchase_date" : "2024-01-07 13:18:58 Etc/GMT",
        "product_id" : "vip_service",
        "original_purchase_date_pst" : "2024-01-07 05:18:59 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1704633539000",
        "web_order_line_item_id" : "460000840352738",
        "expires_date_ms" : "4071475465000",
        "purchase_date_pst" : "2024-01-07 05:18:58 America/Los_Angeles",
        "original_purchase_date" : "2024-01-07 13:18:59 Etc/GMT"
      }
    ],
    "adam_id" : 6447597315,
    "receipt_creation_date_pst" : "2024-01-07 05:18:59 America/Los_Angeles",
    "request_date" : "2024-01-07 13:20:11 Etc/GMT",
    "request_date_pst" : "2024-01-07 05:20:11 America/Los_Angeles",
    "version_external_identifier" : 856293433,
    "request_date_ms" : "1704633611634",
    "original_purchase_date_pst" : "2024-01-07 05:17:38 America/Los_Angeles",
    "application_version" : "2",
    "original_purchase_date_ms" : "1704633458000",
    "receipt_creation_date_ms" : "1704633539000",
    "original_application_version" : "2",
    "download_id" : 503106753963016176
  },
  "pending_renewal_info" : [
    {
      "product_id" : "vip_service",
      "original_transaction_id" : "460001762677882",
      "auto_renew_product_id" : "vip_service",
      "auto_renew_status" : "1"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1704633538000",
      "expires_date" : "2099-01-10 13:18:58 Etc/GMT",
      "expires_date_pst" : "2099-01-10 05:18:58 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "460001762677882",
      "is_trial_period" : "true",
      "original_transaction_id" : "460001762677882",
      "purchase_date" : "2024-01-07 13:18:58 Etc/GMT",
      "product_id" : "vip_service",
      "original_purchase_date_pst" : "2024-01-07 05:18:59 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "21313482",
      "original_purchase_date_ms" : "1704633539000",
      "web_order_line_item_id" : "460000840352738",
      "expires_date_ms" : "4071475465000",
      "purchase_date_pst" : "2024-01-07 05:18:58 America/Los_Angeles",
      "original_purchase_date" : "2024-01-07 13:18:59 Etc/GMT"
    }
  ],
  "latest_receipt" : "MIIUggYJKoZIhvcNAQcCoIIUczCCFG8CAQExCzAJBgUrDgMCGgUAMIIDwAYJKoZIhvcNAQcBoIIDsQSCA60xggOpMAoCARQCAQEEAgwAMAsCAQMCAQEEAwwBMjALAgETAgEBBAMMATIwCwIBGQIBAQQDAgEDMAwCAQoCAQEEBBYCNCswDAIBDgIBAQQEAgIA/jANAgENAgEBBAUCAwJLHTAOAgEJAgEBBAYCBFAzMDIwDgIBCwIBAQQGAgQHgo5CMA4CARACAQEEBgIEMwoAOTAPAgEBAgEBBAcCBQGATocDMBICAQ8CAQEECgIIBvtk7VoQv/AwFAIBAAIBAQQMDApQcm9kdWN0aW9uMBgCAQQCAQIEECW4GvSZbv4EYwdXwQOHUnMwHAIBBQIBAQQUKqfB7v6NaK7Z9CZOePrtMLrPvN4wHgIBCAIBAQQWFhQyMDI0LTAxLTA3VDEzOjE4OjU5WjAeAgEMAgEBBBYWFDIwMjQtMDEtMDdUMTM6MjA6MTFaMB4CARICAQEEFhYUMjAyNC0wMS0wN1QxMzoxNzozOFowIwIBAgIBAQQbDBljb20ubWVpZ3VhbnhpLnZpZGVvaGVscGVyMEYCAQYCAQEEPsGS5wq9SKiZ8EbEqnSniNb6PBsEqoKp0z+xltTjPTllLQqhx47T4WsUOt9L2yWVIBC/4jl7eCkguJz4Fhf2ME0CAQcCAQEEReaH4WxtRmkuA9ttb7crqKQL3bSHTWHssidVmh527cvH7VSrLWXZ/maqlxylF8iCLYMxdlWlAj/6qxpbQ8qqg7x4gEvsljCCAYgCARECAQEEggF+MYIBejALAgIGrQIBAQQCDAAwCwICBrACAQEEAhYAMAsCAgayAgEBBAIMADALAgIGswIBAQQCDAAwCwICBrQCAQEEAgwAMAsCAga1AgEBBAIMADALAgIGtgIBAQQCDAAwDAICBqUCAQEEAwIBATAMAgIGqwIBAQQDAgEDMAwCAgaxAgEBBAMCAQEwDAICBrcCAQEEAwIBADAMAgIGugIBAQQDAgEAMBACAgauAgEBBAcCBQGATqF8MBICAgavAgEBBAkCBwGiXkqvg+IwFgICBqYCAQEEDQwLdmlwX3NlcnZpY2UwGgICBqcCAQEEEQwPNDYwMDAxNzYyNjc3ODgyMBoCAgapAgEBBBEMDzQ2MDAwMTc2MjY3Nzg4MjAfAgIGqAIBAQQWFhQyMDI0LTAxLTA3VDEzOjE4OjU4WjAfAgIGqgIBAQQWFhQyMDI0LTAxLTA3VDEzOjE4OjU5WjAfAgIGrAIBAQQWFhQyMDI0LTAxLTEwVDEzOjE4OjU4WqCCDuIwggXGMIIErqADAgECAhBY97rkwoJBCyfWVn1RgKjxMA0GCSqGSIb3DQEBBQUAMHUxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMQswCQYDVQQLDAJHODFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwHhcNMjMwNzEzMTgyMTE5WhcNMjQwODExMTgzMTE5WjCBiTE3MDUGA1UEAwwuTWFjIEFwcCBTdG9yZSBhbmQgaVR1bmVzIFN0b3JlIFJlY2VpcHQgU2lnbmluZzEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxEzARBgNVBAoMCkFwcGxlIEluYy4xCzAJBgNVBAYTAlVTMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvlQd8+3kCdLEMfoHYJ/gXVdLogEdaLx0MsgXJw6S56iUY120CBroaenbAI9WhVhEO0dIL2JfKnxdPq6ilSqxVv4+mZhkQQvHCsxni7d5H0CybVbo/FntwlrRoaOEt3OyYTFohmWHKkM7BSTdVC4msDueM0wGVnbC0WkREfJjolWaRpdVckY/hvhRVPcTUZPS0NqNvEtiCyXqPsqakIR1HcU3TJtgRiOgrl17COmifZfNxunFFWGk068A2Wj6iN243DtzMPTYv5tYckwCoNAE0yi4mVlaMreKhSxfBcRs4eaxfI/eEkTmR47/Xrerk7+WQGQeSWW+BJJpnV2sHnPn7wIDAQABo4ICOzCCAjcwDAYDVR0TAQH/BAIwADAfBgNVHSMEGDAWgBS1vbyAxAzjOKT0t60js+9EzrlahTBwBggrBgEFBQcBAQRkMGIwLQYIKwYBBQUHMAKGIWh0dHA6Ly9jZXJ0cy5hcHBsZS5jb20vd3dkcmc4LmRlcjAxBggrBgEFBQcwAYYlaHR0cDovL29jc3AuYXBwbGUuY29tL29jc3AwMy13d2RyZzgwMTCCAR8GA1UdIASCARYwggESMIIBDgYKKoZIhvdjZAUGATCB/zA3BggrBgEFBQcCARYraHR0cHM6Ly93d3cuYXBwbGUuY29tL2NlcnRpZmljYXRlYXV0aG9yaXR5LzCBwwYIKwYBBQUHAgIwgbYMgbNSZWxpYW5jZSBvbiB0aGlzIGNlcnRpZmljYXRlIGJ5IGFueSBwYXJ0eSBhc3N1bWVzIGFjY2VwdGFuY2Ugb2YgdGhlIHRoZW4gYXBwbGljYWJsZSBzdGFuZGFyZCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UsIGNlcnRpZmljYXRlIHBvbGljeSBhbmQgY2VydGlmaWNhdGlvbiBwcmFjdGljZSBzdGF0ZW1lbnRzLjAwBgNVHR8EKTAnMCWgI6Ahhh9odHRwOi8vY3JsLmFwcGxlLmNvbS93d2RyZzguY3JsMB0GA1UdDgQWBBQCsjtTG43xlAu4Hsi+9OMrxsZ9RDAOBgNVHQ8BAf8EBAMCB4AwEAYKKoZIhvdjZAYLAQQCBQAwDQYJKoZIhvcNAQEFBQADggEBAEIACiFh10UyCuVkOOYCJvBPytCHy9/pM7kOoGK1koN/y8bLfASAg0L3zZnKll5D3gxOXF74lJqBepX/yHG+IW3RzQ45COE+Xe8G+hNrRecxxRZUeDqqbX3Q9A2ts2+sxqsbMjO4GLPyyvQT+XTvw9Ma91TD56TGY34Z8ivjThsgw87uB4a/TOHcIhmaiXW7jgxPb/5aGMv0SUnE8Bfpyg/0yhmD92s4iyIMY+coEZXRrPVu1c+st0mmdJIao00vZ/MXX/4sdHBH6yx8LPRDaHWdjK4Iv6LJNkn2vfux+n4VVJmwVL3Q0FF/v2tTDMV6kW8qHKqqAVwFv53TYivFYHkwggRVMIIDPaADAgECAhRUtQuveQ2Nf4yvaExWL1BpChq6XzANBgkqhkiG9w0BAQUFADBiMQswCQYDVQQGEwJVUzETMBEGA1UEChMKQXBwbGUgSW5jLjEmMCQGA1UECxMdQXBwbGUgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkxFjAUBgNVBAMTDUFwcGxlIFJvb3QgQ0EwHhcNMjMwNjIwMjMzNzE1WhcNMjUwMTI0MDAwMDAwWjB1MQswCQYDVQQGEwJVUzETMBEGA1UECgwKQXBwbGUgSW5jLjELMAkGA1UECwwCRzgxRDBCBgNVBAMMO0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0EAQ1Aj5UiFjTzxo99ScggKMg2i8t41/iOdCTSzvIqXCid69DNdNYVAtOeQwc6XS1WiaM/Lv2SqtLh8Duvil8UILVy5GxtBY03Bf97I372ofPr+JOcKt/vUF+1iWMciHLNUjunWwLPWroLryIAxM6yRjaekiQPCOWFveZHuJG1ESBOAXslnN3/Hnzq8sMuhpwdAIfh2iR3PRSzv9uYXcR6cognkpSIkCKOLB7CwfW4b82LbLccBzAUv8BRERbAEDNFr2gcJeH3wUDt4/ayHLT/XXYeaEA5K85yUpns1bDMHb48Q62XZXrC84FBnIt7GiVU9fTo4ZWana/XLasAQhBQIDAQABo4HvMIHsMBIGA1UdEwEB/wQIMAYBAf8CAQAwHwYDVR0jBBgwFoAUK9BpR5R2Cf70a40uQKb3R01/CF4wRAYIKwYBBQUHAQEEODA2MDQGCCsGAQUFBzABhihodHRwOi8vb2NzcC5hcHBsZS5jb20vb2NzcDAzLWFwcGxlcm9vdGNhMC4GA1UdHwQnMCUwI6AhoB+GHWh0dHA6Ly9jcmwuYXBwbGUuY29tL3Jvb3QuY3JsMB0GA1UdDgQWBBS1vbyAxAzjOKT0t60js+9EzrlahTAOBgNVHQ8BAf8EBAMCAQYwEAYKKoZIhvdjZAYCAQQCBQAwDQYJKoZIhvcNAQEFBQADggEBAEyz63o5lEqVZvoWMeoNio9dQjjGB83oySKs/AhCfl+TXzEqqCLBdhkr7q5y6b1Wz0kkkgj3zRl1w/kaJw0O3CmNP7bbpU9McsRgkYkRfiSVQyJgZ7zf/6vlPBYXnYIUTp30df5Qua0Fsrh59pXWEOX2U/TPI+Z3D+y4S2n44p4CMdmO2cq+Y15f4aBpzsHNbkmjeGGvOTxqSwo0JWTVMLU8q90RgTlx6MDDWIAREBoR0sK8WfCK2TVzwOZt5Ml9YhQ+ggKpEGk3eWFv8EaUPjX1q6xj0NheWVdp0bhLbl3UXxOccE4lEdwkLB4WnpZaBO1F7jruZ12Pw4aw9UwfaBAwggS7MIIDo6ADAgECAgECMA0GCSqGSIb3DQEBBQUAMGIxCzAJBgNVBAYTAlVTMRMwEQYDVQQKEwpBcHBsZSBJbmMuMSYwJAYDVQQLEx1BcHBsZSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEWMBQGA1UEAxMNQXBwbGUgUm9vdCBDQTAeFw0wNjA0MjUyMTQwMzZaFw0zNTAyMDkyMTQwMzZaMGIxCzAJBgNVBAYTAlVTMRMwEQYDVQQKEwpBcHBsZSBJbmMuMSYwJAYDVQQLEx1BcHBsZSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEWMBQGA1UEAxMNQXBwbGUgUm9vdCBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAOSRqQkfkdseR1DrBe1eeYQt6zaiV0xV7IsZid75S2z1B6siMALoGD74UAnTf0GomPnRymacJGsR0KO75Bsqwx+VnnoMpEeLW9QWNzPLxA9NzhRp0ckZcvVdDtV/X5vyJQO6VY9NXQ3xZDUjFUsVWR2zlPf2nJ7PULrBWFBnjwi0IPfLrCwgb3C2PwEwjLdDzw+dPfMrSSgayP7OtbkO2V4c1ss9tTqt9A8OAJILsSEWLnTVPA3bYharo3GSR1NVwa8vQbP4++NwzeajTEV+H0xrUJZBicR0YgsQg0GHM4qBsTBY7FoEMoxos48d3mVz/2deZbxJ2HafMxRloXeUyS0CAwEAAaOCAXowggF2MA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQr0GlHlHYJ/vRrjS5ApvdHTX8IXjAfBgNVHSMEGDAWgBQr0GlHlHYJ/vRrjS5ApvdHTX8IXjCCAREGA1UdIASCAQgwggEEMIIBAAYJKoZIhvdjZAUBMIHyMCoGCCsGAQUFBwIBFh5odHRwczovL3d3dy5hcHBsZS5jb20vYXBwbGVjYS8wgcMGCCsGAQUFBwICMIG2GoGzUmVsaWFuY2Ugb24gdGhpcyBjZXJ0aWZpY2F0ZSBieSBhbnkgcGFydHkgYXNzdW1lcyBhY2NlcHRhbmNlIG9mIHRoZSB0aGVuIGFwcGxpY2FibGUgc3RhbmRhcmQgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdXNlLCBjZXJ0aWZpY2F0ZSBwb2xpY3kgYW5kIGNlcnRpZmljYXRpb24gcHJhY3RpY2Ugc3RhdGVtZW50cy4wDQYJKoZIhvcNAQEFBQADggEBAFw2mUwteLftjJvc83eb8nbSdzBPwR+Fg4UbmT1HN/Kpm0COLNSxkBLYvvRzm+7SZA/LeU802KI++Xj/a8gH7H05g4tTINM4xLG/mk8Ka/8r/FmnBQl8F0BWER5007eLIztHo9VvJOLr0bdw3w9F4SfK8W147ee1Fxeo3H4iNcol1dkP1mvUoiQjEfehrI9zgWDGG1sJL5Ky+ERI8GA4nhX1PSZnIIozavcNgs/e66Mv+VNqW2TAYzN39zoHLFbr2g8hDtq6cxlPtdk2f8GHVdmnmbkyQvvY1XGefqFStxu9k0IkEirHDx22TZxeY8hLgBdQqorV2uT80AkHN7B1dSExggGxMIIBrQIBATCBiTB1MQswCQYDVQQGEwJVUzETMBEGA1UECgwKQXBwbGUgSW5jLjELMAkGA1UECwwCRzgxRDBCBgNVBAMMO0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENlcnRpZmljYXRpb24gQXV0aG9yaXR5AhBY97rkwoJBCyfWVn1RgKjxMAkGBSsOAwIaBQAwDQYJKoZIhvcNAQEBBQAEggEAJaoiD/y4wXOPn2yiDzYTMvNuy+3wOxegmMeobG7bjmLdhZzLuBxA8Dnb3U7cSRGt8tQ/OR9bPwk3pNYcJm6+gW1mrsqQ/jFtUSozjnA/fJgZjv3XhUXHV3bnPdNhA0lrfA97vDZdbJxkVl0sXHTrz2gy+ujxYGfaykJSjbDCa2BRmW2LsiDaZDRuFvYf3oDtoI++Ju9wS/hLjLRWwD/IropBNLKTsDQTnhiM5L9l6eTDgfQOCPD59VB4HhIuoljUMt2UzXSxLZEWTrZUNF83FLBQk4d9WR89zL7Z/c7QIWvsCdEsEVjrtmvubfED3zbp/kfQomgajN/EsA104Q9sxw=="
}

$done({body: JSON.stringify(anye)});