:Hash identifier:          Vu7t4B1aQ6VoI1TiRrPgwpAfJUvvPTfOH1npwYrAttM=
:Subject key identifier:   B8:C2:F9:35:97:58:CA:16:21:83:E4:3B:1A:9E:E7:9A:73:D1:96:A6
:Authority key :identifier: 13:D4:F2:4F:9A:9F:CD:98:DB:36:F9:30:63:18:08:C8:8F:39:74:BC
:Certificate issuer:       /CN=arin-rpki-ta
:Certificate serial:       010D0C9F4328584CE565C08E8BEBC689108B2E00
:Authority info access:    :rsync://rpki.arin.net/repository/arin-rpki-ta.cer
:Subject info access:      ;rsync://rpki.arin.net/repository/arin-rpki-ta/arin-rpki-ta.mft
:Manifest number:          010D0C9F4328584CE565C08E8BEBC689108B2E01
:Signing time:             Tue 17 Feb 2026 19:19:46 +0000
:Manifest this update:     Tue 17 Feb 2026 19:19:46 +0000
:Manifest next update:     Sat 17 Oct 2026 18:19:46 +0000
:Files and hashes:         1: 5e4a23ea-e80a-403e-b08c-2171da2157d3.cer (hash: 4i8uyedAGhFAOeGL70DQSBU36OQMZrIY+wFzi2KaZ5c=)
                          2: arin-rpki-ta.crl (hash: 8ZC1J1yTK4KIx5MxTaYt1Vl5iaOE1el0N/apOLDuSWA=)
.. Validation:               OK
:Signature path:           rsync://rpki.arin.net/repository/arin-rpki-ta/arin-rpki-ta.crl
                          rsync://rpki.arin.net/repository/arin-rpki-ta/arin-rpki-ta.mft
                          rsync://rpki.arin.net/repository/arin-rpki-ta.cer
3Signature path expires:   Sat 17 Oct 2026 18:19:46 +0000

:Certificate:
    :Data:
        :Version: 3 (0x2)
        :Serial Number:
            .. 01:0d:0c:9f:43:28:58:4c:e5:65:c0:8e:8b:eb:c6:89:10:8b:2e:00 :
    ;Signature Algorithm: sha256WithRSAEncryption
        :Issuer: CN=arin-rpki-ta
        .. Validity:
            :Not Before: Feb 17 19:19:46 2026 GMT
          :  Not After : Oct 17 18:19:46 2026 GMT
        :Subject: CN=71d506c8-327b-420d-9735-78c9a236ae32
        :Subject Public Key Info:
            :Public Key Algorithm: rsaEncryption
                RSA Public-Key: (2048 bit)
                :Modulus:
                    00:ae:ab:06:a0:04:eb:b4:77:74:55:9c:db:8c:e6:
                    f9:e9:5b:62:c2:a8:c1:62:b4:4d:72:81:cc:20:97:
                    c5:7f:9f:ff:00:4f:1e:42:4b:f0:56:69:7d:ac:4c:
                    60:63:73:f9:c9:5e:e3:c3:8e:42:ea:00:b1:f4:f3:
                    06:37:87:b3:68:c4:b3:83:b4:55:6b:5c:56:6d:3a:
                    e1:30:e8:95:65:ea:e6:52:8b:b6:d6:ea:2a:96:0d:
                    3e:ad:5f:98:c6:f5:f9:49:1d:4e:ee:97:64:be:a5:
                    70:a1:b5:87:f3:0c:73:1d:7c:96:2f:80:3c:9f:d5:
                    ea:81:31:97:c7:12:90:41:d8:09:ce:82:5b:ad:3c:
                    ce:49:79:a5:62:f4:3a:e0:17:92:82:a0:4b:72:33:
                    ff:9d:15:58:1b:19:c0:fc:db:95:92:7f:fc:6c:af:
                    db:4b:15:f2:db:0b:3a:9d:d1:8a:85:d4:7b:8a:ca:
                    36:d7:3f:44:12:7d:28:79:92:1d:60:57:1b:77:ed:
                    27:9f:7b:97:d2:e0:40:56:3d:03:c4:44:b2:6a:06:
                    e4:94:bc:ea:f8:4b:8d:78:c0:62:69:43:3d:21:dc:
                    bd:63:b9:06:b6:04:5f:11:80:78:67:2a:04:7a:e0:
                    63:a8:16:a2:1c:12:45:55:ad:05:91:72:ff:36:4a:
                    09:f5
                :Exponent: 65537 (0x10001)
       : X509v3 extensions:
           .,  X509v3 Subject Key Identifier:
                B8:C2:F9:35:97:58:CA:16:21:83:E4:3B:1A:9E:E7:9A:73:D1:96:A6
           :Subject Information Access:
                Signed Object - URI:rsync://rpki.arin.net/repository/arin-rpki-ta/arin-rpki-ta.mft

            :X509v3 CRL Distribution Points:

                :Full Name:
                  URI:rsync://rpki.arin.net/repository/arin-rpki-ta/arin-rpki-ta.crl

            :X509v3 Authority Key Identifier:
                keyid:13:D4:F2:4F:9A:9F:CD:98:DB:36:F9:30:63:18:08:C8:8F:39:74:BC

            3X509v3 Key Usage: critical:
               : Digital Signature:
          ..  Authority Information Access:
                CA Issuers - URI:rsync://rpki.arin.net/repository/arin-rpki-ta.cer

           : sbgp-ipAddrBlock: critical:
                IPv4: inherit
                IPv6: inherit

            :sbgp-autonomousSysNum: critical:
                Autonomous System Numbers:
                  inherit

            :X509v3 Certificate Policies: critical:
                :Policy: ipAddr-asNumber;
                  CPS: https://www.arin.net/resources/rpki/cps.html

    :Signature Algorithm: sha256WithRSAEncryption::

         62:d5:d3:e4:9e:d5:0b:01:94:66:09:8e:fc:63:15:3e:4e:d3:
         de:d6:67:14:2d:83:0d:c8:a9:95:c7:25:c0:61:3b:23:ca:58:
         03:04:08:0d:e0:94:74:ad:63:32:92:bc:97:d7:fc:27:8c:e7:
         16:16:88:60:e0:03:40:10:3a:c1:6d:01:63:85:fa:d4:a0:4f:
         94:fe:bc:ac:a2:ca:20:de:23:d1:30:06:7f:ad:ec:63:15:42:
         f4:f4:65:f6:84:53:b1:26:6f:fc:b8:59:19:93:51:f1:31:5d:
         9b:5a:e0:84:d3:9e:0b:5d:48:71:8d:5e:ea:b6:6b:3f:de:e9:
         f4:0f:85:44:a8:94:c1:c9:9f:1f:aa:d9:12:87:47:92:f7:f7:
         7c:0f:27:28:be:c7:80:52:22:4d:a8:15:e2:3e:c6:66:85:2f:
         eb:33:1d:20:1e:67:60:a4:58:a6:35:0b:39:db:0f:08:17:8e:
         26:a3:0a:55:76:19:62:d3:3a:29:17:be:b9:a2:78:29:8d:a2:
         35:04:fd:c3:0c:c5:09:5b:b9:ae:b1:4b:1b:89:03:20:75:6b:
         8c:48:3c:de:b4:83:78:d3:1a:b1:b3:95:f0:38:2a:19:a8:27:
         9e:30:c0:94:1d:c2:a6:26:97:11:56:89:ed:b4:60:87:95:ae:
         bb:04:00:9
:
-----BEGIN CERTIFICATE-----
MIIEtjCCA56gAwIBAgIUAQ0Mn0MoWEzlZcCOi+vGiRCLLgAwDQYJKoZIhvcNAQEL
BQAwFzEVMBMGA1UEAxMMYXJpbi1ycGtpLXRhMB4XDTI2MDIxNzE5MTk0NloXDTI2
MTAxNzE4MTk0NlowLzEtMCsGA1UEAxMkNzFkNTA2YzgtMzI3Yi00MjBkLTk3MzUt
NzhjOWEyMzZhZTMyMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArqsG
oATrtHd0VZzbjOb56VtiwqjBYrRNcoHMIJfFf5//AE8eQkvwVml9rExgY3P5yV7j
w45C6gCx9PMGN4ezaMSzg7RVa1xWbTrhMOiVZermUou21uoqlg0+rV+YxvX5SR1O
7pdkvqVwobWH8wxzHXyWL4A8n9XqgTGXxxKQQdgJzoJbrTzOSXmlYvQ64BeSgqBL
cjP/nRVYGxnA/NuVkn/8bK/bSxXy2ws6ndGKhdR7iso21z9EEn0oeZIdYFcbd+0n
n3uX0uBAVj0DxESyagbklLzq+EuNeMBiaUM9Idy9Y7kGtgRfEYB4ZyoEeuBjqBai
HBJFVa0FkXL/NkoJ9QIDAQABo4IB4DCCAdwwHQYDVR0OBBYEFLjC+TWXWMoWIYPk
Oxqe55pz0ZamMFoGCCsGAQUFBwELBE4wTDBKBggrBgEFBQcwC4Y+cnN5bmM6Ly9y
cGtpLmFyaW4ubmV0L3JlcG9zaXRvcnkvYXJpbi1ycGtpLXRhL2FyaW4tcnBraS10
YS5tZnQwTwYDVR0fBEgwRjBEoEKgQIY+cnN5bmM6Ly9ycGtpLmFyaW4ubmV0L3Jl
cG9zaXRvcnkvYXJpbi1ycGtpLXRhL2FyaW4tcnBraS10YS5jcmwwHwYDVR0jBBgw
FoAUE9TyT5qfzZjbNvkwYxgIyI85dLwwDgYDVR0PAQH/BAQDAgeAME0GCCsGAQUF
BwEBBEEwPzA9BggrBgEFBQcwAoYxcnN5bmM6Ly9ycGtpLmFyaW4ubmV0L3JlcG9z
aXRvcnkvYXJpbi1ycGtpLXRhLmNlcjAhBggrBgEFBQcBBwEB/wQSMBAwBgQCAAEF
ADAGBAIAAgUAMBUGCCsGAQUFBwEIAQH/BAYwBKACBQAwVAYDVR0gAQH/BEowSDBG
BggrBgEFBQcOAjA6MDgGCCsGAQUFBwIBFixodHRwczovL3d3dy5hcmluLm5ldC9y
ZXNvdXJjZXMvcnBraS9jcHMuaHRtbDANBgkqhkiG9w0BAQsFAAOCAQEAYtXT5J7V
CwGUZgmO/GMVPk7T3tZnFC2DDciplcclwGE7I8pYAwQIDeCUdK1jMpK8l9f8J4zn
FhaIYOADQBA6wW0BY4X61KBPlP68rKLKIN4j0TAGf63sYxVC9PRl9oRTsSZv/LhZ
GZNR8TFdm1rghNOeC11IcY1e6rZrP97p9A+FRKiUwcmfH6rZEodHkvf3fA8nKL7H
gFIiTagV4j7GZoUv6zMdIB5nYKRYpjULOdsPCBeOJqMKVXYZYtM6KRe+uaJ4KY2i
NQT9wwzFCVu5rrFLG4kDIHVrjEg83rSDeNMasbOV8DgqGagnnjDAlB3CpiaXEVaJ
7bRgh5WuuwQAmw==
-----END CERTIFICATE-----
:
