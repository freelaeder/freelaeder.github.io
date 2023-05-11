/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","933cf390034f48adffa7f46889a171c4"],["/archives/10bf1714.html","d4ade575eb6575773405cf57944303c3"],["/archives/12529ae2.html","564f5410e948eb16cafb6f47554abb3c"],["/archives/14015a55.html","3cc9f0967e4f24cf221fc4606809e5d6"],["/archives/171d1754.html","4f3833deea02694d99698050b130bd8c"],["/archives/17a85756.html","b384d361f949760f473158a9657d4db7"],["/archives/1879f8e5.html","423c7eb9514e6fc610e2e0abd52b07e7"],["/archives/1be48ee.html","ba5597ce433aeb9445f2d1b0e24b9078"],["/archives/1e021099.html","5333f33ced16065f2c55f32efcf1a174"],["/archives/2021/06/index.html","0e41e72e73dc3e853c10977190df0b11"],["/archives/2021/07/index.html","c4b73116c9a9fea887567ce14cb15c17"],["/archives/2021/index.html","c0de07c9fbd1804111c1b78dac7a52b1"],["/archives/2022/01/index.html","9605213d803584ecab90607c7db0914f"],["/archives/2022/02/index.html","33fc72addd441b43b94a5d510c716198"],["/archives/2022/03/index.html","41184dbe0906b0788143a3831371c937"],["/archives/2022/05/index.html","cbfbe122fe51c02bcc697834ae833bf6"],["/archives/2022/05/page/2/index.html","731ab3a5b9b4d2cd9d66bd09b19db0a4"],["/archives/2022/05/page/3/index.html","432253a58be6771685289b81e06a3ece"],["/archives/2022/06/index.html","7d1949100acef76d9c049a938fe6fd0d"],["/archives/2022/06/page/2/index.html","3baf76be13ee5f3738f50bf9cd0dfbb5"],["/archives/2022/06/page/3/index.html","f64190a8f7d9f48ad1ed63c899bc2322"],["/archives/2022/06/page/4/index.html","0d4a6470da5cc667c25cbc48231bd5f1"],["/archives/2022/06/page/5/index.html","b3cdd53c1adcb39c366b3d5130f5b2bf"],["/archives/2022/07/index.html","54f3d42631e04ce9a016a89a93e38d4c"],["/archives/2022/index.html","e7b051f2ab0b86007cb2d11429b75a94"],["/archives/2022/page/2/index.html","958fefb9cbc2375af205f161d7d393a5"],["/archives/2022/page/3/index.html","490b0e244cb9c4cb2ca75662d6ade399"],["/archives/2022/page/4/index.html","2bf7b6687cbfc75885eb23ee3205cba1"],["/archives/2022/page/5/index.html","c82b123efb91c5d6039556c1658932df"],["/archives/2022/page/6/index.html","efb0e3550e5cfb0a238d0987cec5e9c0"],["/archives/2022/page/7/index.html","953594ac19b66920b0cb20b6975cc838"],["/archives/2022/page/8/index.html","479442c239f34994d75b1c3cbcf7ea6d"],["/archives/2022/page/9/index.html","db42d9cec0bb66499d2e3cd18c432534"],["/archives/2023/03/index.html","ceab0518b6e5cea46a176b1d2d1f8abb"],["/archives/2023/04/index.html","90d1ee2e0476cfb572211e848f5087e8"],["/archives/2023/05/index.html","05db534856a0754f8fada7b0ab65bb68"],["/archives/2023/index.html","3433ed9b7171f15a1bd5e214dbbb1f92"],["/archives/2023/page/2/index.html","4d74efa2d4fd1660cdd88874fe1826fb"],["/archives/203410a2.html","76b05d9673cf622afc27ab405b0ad9d7"],["/archives/2039e3ed.html","725fb4e4ebd3c39475711f127a06a4db"],["/archives/28d88e6.html","280b21d198c891e7c42fe520fc743033"],["/archives/294b86eb.html","e0244444be75b4f1c72b150a963b3195"],["/archives/2b098523.html","29e06862560e77da3e9a886c7a87d66a"],["/archives/2e20d937.html","3b831efc9399a7ed4ef7d9bdc8b341c7"],["/archives/2f8b36fc.html","9bebadc102948028ee22cccb1a0e73f6"],["/archives/30b90bc0.html","c00a8b6ea71f392afcf9284813441313"],["/archives/336f0513.html","6a6f59f3f010422ce543aefec42280b4"],["/archives/33b9c85e.html","0580202405de544539c002b899e306ae"],["/archives/36044e1a.html","c3b6ece0ffde17fb763c9d72c0cd2c56"],["/archives/37919ccb.html","442217ee4b06fa6a5204238e0d194aa6"],["/archives/39a5927a.html","438f129b361f21afdd9c1e3754f1b078"],["/archives/3f038ede.html","3407220922d31f8786eac9d39207b16a"],["/archives/40f0eb24.html","960ca61a0e1188ae5c2c9688db0f9ceb"],["/archives/41476be7.html","fc1c0f9c76e437c890cffdcc60a7281d"],["/archives/42b82995.html","b345063e4197fc0f88ad55c17a5cb61e"],["/archives/4311e35c.html","ffc63d69d8a26446eb2083c28ba028f8"],["/archives/47c3840f.html","178cc3c7d99285e92332276e9f948ae3"],["/archives/48078dd1.html","4899361b799b2af804b348a1cfcf6da9"],["/archives/4dbabb82.html","7fa97c112dede22e2b4df060c10af387"],["/archives/50cfbdee.html","79f7602b1c2a89562f05cd54add4840b"],["/archives/574fecf1.html","b5f49c429a0d4f77020e450ac99a761e"],["/archives/59b49683.html","43508c026365827a706b1938b21296db"],["/archives/67902db1.html","222acbeb901d3589fef18ea2c8c3e9fe"],["/archives/6be34445.html","22dc606c5638afce9866e08dd84c099c"],["/archives/7331f3bb.html","512291841015f2cce3c66489b0020748"],["/archives/7472fc2f.html","3426085d13147b905e9abfdd4d0d1ce4"],["/archives/75b2f6c6.html","01f62fe6a06ce5560d53db759cb19fb9"],["/archives/77971af0.html","5ab2b429ce890fe0bcdb7f9ba61feaed"],["/archives/78ca6597.html","c32cc0ab3986f70b0571da23e18be3dc"],["/archives/78cea6d8.html","a0f996699ed0c8969d6b9215bc9fbf97"],["/archives/791e95a0.html","f1fce21164647ec772cf9b140ce4dba3"],["/archives/7b268071.html","b39d05d988083fe35e6e60ffd583d558"],["/archives/7c942302.html","78e45b39e0cb8b2f86f2ac4ee1ad5c63"],["/archives/7d76407e.html","c393517c5cf99bee351251c241f7a83b"],["/archives/7f6cf7b0.html","3b1e5e43d1904c0f5b8522e6af061232"],["/archives/82d79681.html","e574fa5814763b15e0939fcf548dbf60"],["/archives/84a91e69.html","cf4cbc9ae8e4866e3b9a595fdd24ab90"],["/archives/857fe845.html","05db7315894cbedf9338de2c131ce9ce"],["/archives/88d3d46f.html","7312cd6b8a1ed30e2fa2140b94086de4"],["/archives/8a9483a.html","2481511417421f00c27f4c9f4a000d86"],["/archives/8ad35e55.html","5b667e6a683130ba3309c4da362e4c70"],["/archives/8d5284dc.html","b8eefea1d1966789a09d237dc4fdae61"],["/archives/92004154.html","0e3625769f10835e249797cfe5aa32f4"],["/archives/9370d73f.html","41ce7c5a4ec6bb20b4538c5578a77d29"],["/archives/93ae9a14.html","7e9a8d78b6938e591bc5a31b8f591128"],["/archives/9417ce47.html","a79221383ff94a60fd93c6c41c555c4b"],["/archives/942a5c06.html","462ff5437010c2845491b961984ce31f"],["/archives/958c57b5.html","9e4b585b933d33f231ad682423a5c44e"],["/archives/9692e25d.html","12b004d28daa73877ed6b07489def504"],["/archives/97a9ab5c.html","e358acced4ebe8f223c6e7889496b14b"],["/archives/97b76847.html","ed0312041911cb9071089e8d146da702"],["/archives/9a0dce2d.html","4cf45bd0b81835ce69572cbeee233a19"],["/archives/9b0c2390.html","5f171190e0551a8afde59fb27c9b25d1"],["/archives/9e5f33b7.html","1a236be70ff8e7b2dd469ea520a06fbd"],["/archives/9f1ed84.html","bc4d05d5b8315ece78c4d02e5525973d"],["/archives/a0245a2a.html","93593f88ee05121ddd61c7853bd8c15e"],["/archives/a10ceeb7.html","479f6b9bf047e72cd9f3fd63eedad60d"],["/archives/a36a5ae4.html","2529c976ace26512e0775a92fef15e1d"],["/archives/a8adabec.html","3f9353c7b42abcf602c5a497e1c65af7"],["/archives/a9432027.html","3312c2136d3b0fd4fa147c6c3705d0d1"],["/archives/ac5292c2.html","3a6a7be765cc8819a6adcf18b953cd34"],["/archives/adb78c8a.html","d57eb3376507e7129da408c5fd4734de"],["/archives/ae4c07b8.html","2ad295c7f15a7c367f0e81fc499bd8d8"],["/archives/af55d3.html","86455b29bb2cb4f21d5348a6feaa8fcf"],["/archives/afcd4575.html","ce3c001ef10f232c6186bb9f5adf644f"],["/archives/b21f48b9.html","1baf7624f49ff6e7dbdad702b7624091"],["/archives/b51bdcfa.html","c887c572452f40bdc1b9e45c839b1713"],["/archives/b7b51641.html","a653b85837da283edc4d476fb9f4565d"],["/archives/b9f20a20.html","b9f088ade886b604f4a36e4f892984e9"],["/archives/be945145.html","5f8804b626e1ef59b832d452f50ed1a1"],["/archives/c0add594.html","3d214b785216e7fed20659b79164681d"],["/archives/c242628.html","ea6d645731458ba7beef48ea10bef118"],["/archives/c59bd5c1.html","6a639d759fbaccc18f605cac6796ca66"],["/archives/c5a6a264.html","d34074f358dde4ede9fe350ff891b643"],["/archives/c5a97815.html","15ddb613c7c0ef47e33c7fcdd4a06e82"],["/archives/c7f4347.html","75c6fb5f555f217bf453a8c175ff6426"],["/archives/caae163d.html","1a7fb84b00c2e2fe961526ea88387e70"],["/archives/caae7b70.html","37119af7104fdf46699f942db1e913cd"],["/archives/ced3960e.html","58c0d08875650e9736ea19a272542a01"],["/archives/cf2f5248.html","22e1aac244b593c84e42205ae86bf1ad"],["/archives/d3b694df.html","84b88e7051c6650e6a00e04f2221742b"],["/archives/dc3acdcc.html","8679d7e0ce04df25efb0dc04bfbc6a12"],["/archives/df976d87.html","512dd93736c235588680a35b005f5799"],["/archives/e0c98e7a.html","9fab4dd7a1cf4fad061cde0488606d9b"],["/archives/e6437fbd.html","1e4ceb36aeedb4b88cab8e067ad87913"],["/archives/eab5cc79.html","864269c8970ef9297bcfe27965232c72"],["/archives/eb05a173.html","64707b87d84b4d01fd9883befc38ba02"],["/archives/f1d0391c.html","6fb6c7ba6b5ca208ce09c18e925f4ea1"],["/archives/f3d3ee5b.html","655c9f9aacedeac19bb86c3f5fd90757"],["/archives/f774ddf.html","5fee6c52cfb5212185d07d8b6199076c"],["/archives/f7feebc7.html","07c866e9f6c7223fd67498f24189f304"],["/archives/f9f4b1e7.html","173fe9a57120a125507032e4ec96c78d"],["/archives/fcdceb2e.html","0c4c2b474a84451d68d44938fda01017"],["/archives/index.html","e045e3d97f414a9faa21bd0dcaa31e2f"],["/archives/page/10/index.html","48e426cde22d9eb927230f552b280002"],["/archives/page/11/index.html","8f04ef6afe93c9147daffb9ae6ba8171"],["/archives/page/2/index.html","809bcdad792dc4f39c395861be3bea95"],["/archives/page/3/index.html","ebde565397f73c99b965a5d2e7062c52"],["/archives/page/4/index.html","3ab92b6ac70501a921cbd1cebe69a9af"],["/archives/page/5/index.html","d6a8d6d522bae86da935d8a34788ef41"],["/archives/page/6/index.html","7302eb5aa8246bff868d0e973d23ba4f"],["/archives/page/7/index.html","8a938bbe89c20e60fd9bba4ad8ad042d"],["/archives/page/8/index.html","e44ea290fd099591544601da5ff270cb"],["/archives/page/9/index.html","f2b911622aba493832f8f6daba2671ef"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","cddc8820f6e8e1e5ef0e183702b4eb6e"],["/categories/blog/index.html","fd124134b97d6ba12589149e400bff38"],["/categories/css/index.html","3cd8336d7ac42aa40cbd77a1cf2aa98b"],["/categories/css/page/2/index.html","62b4c7f307c85be9e028cc8703cbd825"],["/categories/css/page/3/index.html","1ebc4662aaa56a0971595f04547bc22b"],["/categories/fine/index.html","6b7d65bc1f87d6356f38255f9c5e8e07"],["/categories/html/index.html","8650b31040c8ea210f1fca85bf6a994c"],["/categories/index.html","c72946b87590f40bf484293dc1b8cd6e"],["/categories/js/index.html","cc027fe6fa037cf7e4342ea87ea1d72e"],["/categories/js/page/2/index.html","bfefae77f69e8971bb7b459e4e3f3d3c"],["/categories/js/page/3/index.html","df91a9e33b4fe211203fbb79e44cfeec"],["/categories/js/page/4/index.html","55cd2093158ff55a14a39fb15f3cbe11"],["/categories/js/page/5/index.html","f50de233dbb7d9e1244506902f028bd3"],["/categories/node/index.html","2d712349c4cdbd1e97cfa4a8b06aee2d"],["/categories/notes/index.html","a08bebe383b30e190c2b671ac79f2a11"],["/categories/react/index.html","8f787cf8f23be65efe6e9a02fb408809"],["/categories/react/page/2/index.html","7b8930d43874daffa5dbfd174f3cdad4"],["/categories/react/ts/index.html","9c607b758426f798cd56999579736b12"],["/categories/typeScript/index.html","ebf4fc1cbc8eb9eb513a2f27b9393992"],["/categories/vue/index.html","b013d8b31e1783c0f60820c5aa2819ba"],["/categories/vue3/index.html","ef733d2b7490a87d97f2da0ac887f3c4"],["/categories/webpack/index.html","2d220da8193e6f64d634dcee9defbb67"],["/categories/微信小程序/index.html","3721019e125285b45a0e9e4ed6cc0006"],["/categories/面试/index.html","c15fae4caf3c9422f654d0096cc72282"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","d2f9d80c1f30ff3b496ddae161d23a53"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","080fd12d5d7dff70ae9fa3aec7bce07a"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/ts/images/01.png","c922cd12dab12bd6c46ee93bdd4205d8"],["/img/ts/images/02.png","3aa2056326e5d1c796af4ee14d5aa795"],["/img/ts/images/03.png","5d4a8b39b62c2c484b45dffa7f71d2a5"],["/img/ts/images/04.png","9005165e16c5fb263c3850b77b8c60bc"],["/img/ts/images/05.png","996ddffc76d0e5750a82f5a0473501b4"],["/img/ts/images/06.png","a52bf4f321fab1fee87cb087e0d22d04"],["/img/ts/images/07.png","36e3a3b114bcfad55498a774d9342e4f"],["/img/ts/images/08.png","3607e0c5650e9afa1384f2aac4009d62"],["/img/ts/images/09.png","dbeb822550e8eb71e78714035d790d38"],["/img/ts/images/10.png","e4a25517b0548f90ac6bef9d471ba0f1"],["/img/ts/images/11.png","dad677e46db0955c7d139a83b4b82cec"],["/img/ts/images/12.png","9745157eeb18de2635a64f65aeb34ea6"],["/img/ts/images/13.png","da212468d2ee4f8e9ba1f97843983786"],["/img/ts/images/43.gif","37c2e56cbc5c7a6fa18b043f8959a61c"],["/img/ts/images/44.png","6fe8492e0a34f7997c26473101a5352c"],["/img/ts/images/45.png","f799db600172453b1e1c864a85a9809a"],["/img/ts/images/46.png","9035adfac7596edda51156dacec1da06"],["/img/ts/images/47.png","2d75b31e7998a1e3c5ecec69a833a1d0"],["/img/ts/images/48.png","13beb8460f834a2a86866f9efaad66f0"],["/img/ts/images/49.png","540398c418c42be7de9f28b79882a107"],["/img/ts/images/50.png","18e4e8ef181ffd7eff2d1844cb704536"],["/img/ts/images/51.png","76bf41ed3e6bf0c976973364eb52fd76"],["/img/ts/images/52.png","f5d555290bc571215dd3ec30fd8aad42"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","946d073ba815cd0cad737127facad61d"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","c5009854843beaa84b66d47ac923d4cd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","1912edca5d627c0b44142dd136646d0f"],["/page/11/index.html","0ad6e2c134ffb26317d7ff22b6b3719b"],["/page/2/index.html","38dbfd14ef887184774bef96409a0e6e"],["/page/3/index.html","352d4e774ea50b697b3c6e152a6e1cce"],["/page/4/index.html","5871b1e38280580e4be6e1cd19da5718"],["/page/5/index.html","6b616765da446909f677b0cf18361c42"],["/page/6/index.html","77a86fff177554188f41effced23ddec"],["/page/7/index.html","ec894c436e2255231646b17078bf815d"],["/page/8/index.html","1f08bedb7393b2e328d3e1ac566e557e"],["/page/9/index.html","374e76ed40c017283d6f8aff62aade18"],["/project/index.html","e7f4621a72424511421409e0ce6be764"],["/sw-register.js","bb328d336f01a049f2a8517118f227d3"],["/tags/BOM/index.html","45e57ca8cd9b62638892b929a1f6ef77"],["/tags/BTC/index.html","53eb2fd26fe1568706a8493758caa105"],["/tags/Dom/index.html","d359df1459ec7ea0866615769118a1cc"],["/tags/JavaScript面试基础理论/index.html","f73a7a910409652211ec60f9e2239894"],["/tags/ai/index.html","e92e3ae2633d11c05a2fc774f99866e0"],["/tags/ajax/index.html","4805f024b934ccf5be9c48ced5d31dd2"],["/tags/ajax2/index.html","b2579b9dab0e4c2cc4725f5e87907249"],["/tags/array-api/index.html","544bfbc94726679c0273b95600e39b28"],["/tags/bind-call-apply/index.html","2d2982de01db4a8a64ed5be17912fb54"],["/tags/blog/index.html","4e129a0f4d87573eefb52dd639611c22"],["/tags/blog个性标签/index.html","1101796bf4a390ce6283e66a25eb619a"],["/tags/box/index.html","1b8925f0147af6d2c2e47f44571f5c92"],["/tags/cache/index.html","91de493c18fbecd97927e35ab866bcb8"],["/tags/center/index.html","d0d6bef19aa51f01e43f4b120b90440e"],["/tags/chatGPT/index.html","be63ea3a853b879251126a3c0bb426dc"],["/tags/chatbox/index.html","d0aab2f7081a20a6a4908ae7d6892f57"],["/tags/closure/index.html","7a0a8ee4596c4e4bbce4fa24820241e4"],["/tags/column-layout/index.html","c9610b0cb22eae43a112daa991198c53"],["/tags/composition/index.html","9e6c096820780ee3f54d16bda54ad6fa"],["/tags/context-stack/index.html","266e7ac4b12479567e6b9485fe091a02"],["/tags/continue-to-upload/index.html","171217c73550db9c77ccaf46f9a2213a"],["/tags/copy/index.html","4f7bc8df64f74974570e49d652c43aa8"],["/tags/css-performance/index.html","0db17c0813f949cb349b759fe41ae68a"],["/tags/css/index.html","63a4e06f8842831e5ee60c2f2a56a479"],["/tags/css3-features/index.html","48fc2e728f58d0b719a3a41431e5ce88"],["/tags/css面试/index.html","262fa0befeb9c687b369e549620284ed"],["/tags/css面试/page/2/index.html","1683ef8b9c56126e815d4d3e191b8a80"],["/tags/currentTarget/index.html","da7f0bef530bc4844752214b78eea33b"],["/tags/data-type/index.html","d1f49042859a806b82a6b09204d9d71b"],["/tags/decorator/index.html","0874cbc31c579885aaffaa3159b544d2"],["/tags/dp-px-dpr-ppi/index.html","21512be593fdd5bf54f68474b7f50b25"],["/tags/em-px-rem-vh-vw/index.html","1c98d8156d94bd1df19da2d224fc5068"],["/tags/es6/index.html","cbf7f04a75b8156f05ad54047ec5e311"],["/tags/event-Model/index.html","c4cb47487289d81fb682a8d93c7a2d70"],["/tags/event-agent/index.html","9fe942bede7a80c954711a1f501bcec7"],["/tags/event-loop/index.html","5d43fa322722dbdebeb323c55110243c"],["/tags/fine/index.html","db6988a1ae6fcd613ff961bb18e4b6b0"],["/tags/flexbox/index.html","84b5c6ea8e03ca74dab05713fa05bc55"],["/tags/function-cache/index.html","a18224408bd6cf61ccd76a54cc42cda2"],["/tags/function/index.html","e5c021174f70f31d830fedb7d46223f8"],["/tags/functional-programming/index.html","3872a11eee9ea0b440c6c395ec4e49c9"],["/tags/gametime/index.html","f635984cff82ff9c0e2a738ce3eac9b9"],["/tags/generator/index.html","958ebdb57353c2b658a62761b4f58d16"],["/tags/goal/index.html","a60018181363eabc61174ebe6e4f49d4"],["/tags/grid/index.html","c8272c32ac6afd432dec047224eae163"],["/tags/hide-attributes/index.html","e48bedb2c020e253208fededd0b666ae"],["/tags/his/index.html","c683c4aaf57a5a3fa6de4a9ec9522824"],["/tags/hooks使用/index.html","8137e8def027c58003a483b1087e5994"],["/tags/html/index.html","b444d4feffebda99e2b1b3359714fdd1"],["/tags/icp/index.html","161fcf99bdd79b94cf35a8e7c74fd41e"],["/tags/index.html","082d0758fdf2b3261e65a98ea94e5ddd"],["/tags/inherit/index.html","31ff2f9e0263305885dffe1187571680"],["/tags/js-data-structure/index.html","b898764dd8345b026cce3b2e92d59299"],["/tags/js/index.html","d8c5baaff30c29fedaf7b0ec440285bd"],["/tags/js面试/index.html","351bf80d2ced6480ad7ff07450388758"],["/tags/js面试/page/2/index.html","a4361a92e997cc7e95d74615756a976c"],["/tags/js面试/page/3/index.html","26623eee45d63997ae4b768b5d7a59d5"],["/tags/layout-painting/index.html","72cc3797d814162c7582eb3c392dd1a8"],["/tags/less-12px/index.html","be6f5f8826d2581934cf1deb7623fe3e"],["/tags/loss-accuracy/index.html","4e120182797de9025fd9e85191bcab5d"],["/tags/me/index.html","b00e10f17926f62a8e2f53d1e8af178c"],["/tags/memory-leak/index.html","dfcfa405dcf2e59d4121cb5ee8207864"],["/tags/modal-component/index.html","7dacd6bc62169450f37a45e6f7999e14"],["/tags/module/index.html","1115d076407704f2be33edc659ed9fb4"],["/tags/my-carousel/index.html","b2dbf71e34161e6a499971d59f3a95b0"],["/tags/new/index.html","f0f83c384f5313b561e91d51f60f2b4d"],["/tags/node/index.html","a7a297b97ef9feac28d61b6fb4fb52cb"],["/tags/object/index.html","289dcc822949c217b3ba4b0375746a8c"],["/tags/performance/index.html","9dcd929530f3272ff26e15fb18f2585b"],["/tags/project/index.html","8d61c387f3e75781d4e1bc46366bdab8"],["/tags/promise/index.html","f0395c5037ac77635fe0f193513450c9"],["/tags/prototype/index.html","0d7aaaf966122f82aba580d6d1fefe82"],["/tags/proxy/index.html","2e5abedf9228c24650bd33471f584f86"],["/tags/proxyEs6/index.html","a045f7accd7337303b5dc7999b38b6f1"],["/tags/react/index.html","1e63faa6cc0ce78d6676a80184e5f32c"],["/tags/regexp/index.html","20dcd06dd2e3ed7e4625ec4fd7b210bd"],["/tags/responsive-layout/index.html","16fc7cda2eb89619c66e70b16fce8ddb"],["/tags/router5/index.html","1ffeb973f2974082fc75c6f0b76f9530"],["/tags/sass-less-stylus/index.html","d21bef0e5e719c6eb9cec58fee88855f"],["/tags/scope/index.html","8f9eb9e7d9429c37ac16cb19cf5d22cd"],["/tags/security/index.html","168965d72335c9b52cb0ba1a592c3a50"],["/tags/selector/index.html","d3650ffbd3cb4f08fbe737536dbf5824"],["/tags/set-map/index.html","40f1336baffe3677cd3d9c1d8edb35b9"],["/tags/single-multi-line/index.html","77f7f760932e1e090122a9fe047d82aa"],["/tags/single-sign/index.html","45097cde7170e1934a531b4a0fcd41f0"],["/tags/string-api/index.html","c386fa9cfe50e2b25fb1f7445fa6a997"],["/tags/target/index.html","500292c4903d3b4d98bfc1305711e5af"],["/tags/toolkit/index.html","4f450fd264f32c3bca2099204365c810"],["/tags/treeshaking/index.html","425a47c8db6bebf197f8255d9e2dcaef"],["/tags/triangle/index.html","6f733106ba71e101179673fad02ab228"],["/tags/ts/index.html","16a46c84562100cc33910aefd064f068"],["/tags/ts报错解决持续更新/index.html","153820c373b9f6b1552babe52dfb4240"],["/tags/typeScript/index.html","f28cb8484db612566a6d9a1abb38e88d"],["/tags/typeScript基础知识/index.html","64d78778d4f53b42de8aab9ce563c22e"],["/tags/uniapp返回顶部/index.html","c4970b35f05a1f3dd6240bbc73e15880"],["/tags/var-let-const/index.html","2847884e262484949e9292e60acd236a"],["/tags/visual-scrolling/index.html","46b250dda6484b1ce30e7815aa49f36e"],["/tags/vue/index.html","b20b400842c8f484f1412baa1cc38b5b"],["/tags/vue3/index.html","ea847ca25a1d67531dcfa395f9d7370e"],["/tags/vue项目部署/index.html","c61f77d1b3a2379229d7cffef0fe88ad"],["/tags/上线/index.html","9b39edfd041acc847aa2dcd04d8256b8"],["/tags/下拉刷新/index.html","e85de5b1d9c76ea9bf2b5ad0eafea5c9"],["/tags/分页/index.html","480ed00e4cfbe434b02c556452e05b30"],["/tags/反问面试/index.html","cd5b03095240df66ea332d21fd6673e5"],["/tags/和/index.html","ed9ba95b6b4220314147e015e254071d"],["/tags/备案/index.html","d9c9aa1df27ef229851b4c5ba5a16042"],["/tags/如何设置文章置顶/index.html","7ed513a4aa653993da880d80cc3f97a9"],["/tags/微信小程序/index.html","082f9bacc3d5ce91c6efca9ddd9320ae"],["/tags/无感登录/index.html","f8591a8d4cd2265a5841ad268135574a"],["/tags/星星/index.html","8f1a8c776fdcd3d567f92418f1c7837f"],["/tags/防抖节流/index.html","8436c89decc3ab3483fc2241599ac1e8"],["/tags/面试/index.html","24eeba096324c9945119881434f82465"],["/tags/面试问题集锦/index.html","ed451228944c8b392be4ce1b56a92abe"],["/tags/频道列表居中/index.html","4b72535f7b1f129648812f172fd09af5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
