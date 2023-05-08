/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f5a9f5e09aa7cffe1061c8c3d377272f"],["/archives/10bf1714.html","340360fdde9ed2b633b89d461cabfa54"],["/archives/12529ae2.html","54029beb0f8ff299fe260b70390ddf97"],["/archives/14015a55.html","0dde120d5d6cb0336f9f1c251ddec79a"],["/archives/171d1754.html","e3b634b6b8017719026fc3b92430f84f"],["/archives/17a85756.html","1d637ac25bdc8f451279efa043b39ef6"],["/archives/1879f8e5.html","2a96756dba0b4c7170c234dba769e1bc"],["/archives/1be48ee.html","f9c9c1e7fd5449ea133189b0d1660b5b"],["/archives/1e021099.html","78caf85846990ba86245b1f137bedc3f"],["/archives/2021/06/index.html","a0042604e1b59396add1293d7996cab9"],["/archives/2021/07/index.html","5bd459d500a81d3df293c768c08287bf"],["/archives/2021/index.html","9b2e9dcb0ff834473ef4cc0c61b5c103"],["/archives/2022/01/index.html","c8db07aad121d6883141a71e1f7934f4"],["/archives/2022/02/index.html","6e4ea01a61ecf0a3cdd0834ce684cf6b"],["/archives/2022/03/index.html","f8ecc4f7b8c0ec6cec35e04b5eeb82a0"],["/archives/2022/05/index.html","34af4b77715bc87616b991692b65c30b"],["/archives/2022/05/page/2/index.html","79495f4691f368505b853850b959db07"],["/archives/2022/05/page/3/index.html","656576231b4d0d041ee43410b0ff243c"],["/archives/2022/06/index.html","cf62ffbe81ebf548af82ff5d0a350940"],["/archives/2022/06/page/2/index.html","28f887dab4a21445a053d80e8710f5ad"],["/archives/2022/06/page/3/index.html","37f1cefef3ffa05f91cfce5ed2f75ad0"],["/archives/2022/06/page/4/index.html","de0248079f96f05ae73481ec6a82bf25"],["/archives/2022/06/page/5/index.html","8b3b6bfafef24c7f30094d7908db075b"],["/archives/2022/07/index.html","55e7e402a3c972c509240c11193ec23c"],["/archives/2022/index.html","2318b8ee77bcf76268a8bdef06267f76"],["/archives/2022/page/2/index.html","fc20fc9911b63be4761497d4ca1b9e23"],["/archives/2022/page/3/index.html","925000094a6ee32f751bee87de16dd25"],["/archives/2022/page/4/index.html","07ce438fbb994983c1e32eb201cd0ac3"],["/archives/2022/page/5/index.html","8e321e17ed838b8e623742462b266f31"],["/archives/2022/page/6/index.html","5b9868010f5947b279fdf998c03e5e4c"],["/archives/2022/page/7/index.html","21663e44b47ba7a494f141eef877e1d6"],["/archives/2022/page/8/index.html","c0b324a2fc43b7cbef93a7ef55c72d63"],["/archives/2022/page/9/index.html","58170b5e699454c2bf070576392fa312"],["/archives/2023/03/index.html","aa862501c01b5bf94b0189ebf7cf90ab"],["/archives/2023/04/index.html","6ff98ebc0bed538cb510b4c6b091a171"],["/archives/2023/05/index.html","49ee806cc3ea857eda06a231fd0a615f"],["/archives/2023/index.html","8c08a35f972146dc3a02718fd90284f8"],["/archives/2023/page/2/index.html","5d6db7a5fa58895f58f3a4ee5f276a0d"],["/archives/203410a2.html","8325508e750094de4fd3ae958530061d"],["/archives/2039e3ed.html","400b655e95b720272b2823e1ae1ed51d"],["/archives/28d88e6.html","1a9fc0d2d0140b395815ba8d2a2aba44"],["/archives/294b86eb.html","da348a3a47f9ace924d364c92dffa009"],["/archives/2b098523.html","548bfeb2c5403bf0d526d9652de2461b"],["/archives/2e20d937.html","40b52e5afbad85d771189765bea3b355"],["/archives/2f8b36fc.html","2af59451dcb37fa61b59e05ec0468e19"],["/archives/30b90bc0.html","c710e2a4c28a2b1f9d5bd60b56bacd62"],["/archives/336f0513.html","8c53c9823c1abe3f5ac60b115d5d8731"],["/archives/33b9c85e.html","b75af9c092e6aa3cb9a055748ede73b4"],["/archives/36044e1a.html","ef609ca582d390c3538efa83dd60050b"],["/archives/37919ccb.html","fb058d64c435ef06f402377fed9b8c8a"],["/archives/39a5927a.html","d0adff942faa22b847b5b8485d8a72c8"],["/archives/3f038ede.html","1a8ac1045b871d58d3275a178d343a65"],["/archives/40f0eb24.html","80090541b422e4f3fca7b8d372f75517"],["/archives/41476be7.html","5f7d76067a94e0128200fe90ba373146"],["/archives/42b82995.html","8b098535e014cdd1e8a17b2110682e88"],["/archives/4311e35c.html","9088cb526a85944c2d6d2b0b600a95f3"],["/archives/47c3840f.html","86d2a27ecc7408be41e41a82b4c9f957"],["/archives/48078dd1.html","3c7da4c67dd4dc4a1e6dad49adb7081b"],["/archives/4dbabb82.html","843b17c3d1e41a57bc18f1a8170dcaf2"],["/archives/50cfbdee.html","e7fce7ae78317cc650e67d940bcf3055"],["/archives/574fecf1.html","0c1c736cc1763e916ae3b33416e58d26"],["/archives/59b49683.html","0b8f24b954992d3a9ee16f82c999fd2a"],["/archives/67902db1.html","638fcbcd0ca2679a8ae3d32460cc7e41"],["/archives/6be34445.html","50449deba2639e5c968bd4fb3192e457"],["/archives/7331f3bb.html","87d03f8700a5611352f7f394fad14b2b"],["/archives/7472fc2f.html","ef1084277174832a218c71ff2880dfed"],["/archives/75b2f6c6.html","bb8c1c2e73728df30aa6b87920e2b69d"],["/archives/77971af0.html","7be815a39831246389dd7d40d983bbee"],["/archives/78ca6597.html","08133bb5dd7d0c75d631e1c092360b36"],["/archives/78cea6d8.html","660d4002f872f3c926ddc689406002f6"],["/archives/7b268071.html","ebb82acce490c68ac488bbb734f75e76"],["/archives/7c942302.html","f946b5370d008043bbb93a5c00ac0204"],["/archives/7d76407e.html","45424996f7b71c53fce94bfcec294f6b"],["/archives/7f6cf7b0.html","5b77e3b69d81e6a37207ba0d27700f4f"],["/archives/82d79681.html","2213c6b92379179683f5083391b3ec38"],["/archives/84a91e69.html","6cf42cc6c322a22639a93ca2b41841b4"],["/archives/857fe845.html","705c127b03e78996eb36cce062a89e7f"],["/archives/88d3d46f.html","b78102d7211eb3a74239a377f30f5026"],["/archives/8a9483a.html","b93b01a32bcf3fc664607f8d564e8f9e"],["/archives/8ad35e55.html","eb27aeb1f1349a6fd5fd045810c58be9"],["/archives/8d5284dc.html","89b7880fb66f59725b1336d46ef007d4"],["/archives/92004154.html","dd11a01967ea8182ad6aa85befa93e7f"],["/archives/9370d73f.html","c52061e735391142358451112423e781"],["/archives/93ae9a14.html","e3abb0cdd1489868d247173724d9bf06"],["/archives/9417ce47.html","09ac2dc6456a8bb07807bfefde1c8648"],["/archives/942a5c06.html","809f71c4d97db513ea819a6f5e2a5a86"],["/archives/958c57b5.html","2103f9104b06a7e31a8692303a7d619c"],["/archives/9692e25d.html","0f07670941fb11013df42d52e1a1abb4"],["/archives/97a9ab5c.html","da7163f5fe68c5ace363d9bc0eb47998"],["/archives/97b76847.html","bea8a0307caf5c810b9b83fc2053264f"],["/archives/9a0dce2d.html","fee1a7b47c8af6d9dd8fabc861b94fe9"],["/archives/9b0c2390.html","8bb369155ca2bbfcd3ed04c21e7c0c22"],["/archives/9e5f33b7.html","7a573ad35b0ad5aef339d71a3c6a9f20"],["/archives/9f1ed84.html","49fcc87c927cd4899fe2fa04727d95d4"],["/archives/a0245a2a.html","6884ebb73d07d62766121acf7f98b977"],["/archives/a10ceeb7.html","9da91461b80255240437eef6372112eb"],["/archives/a36a5ae4.html","8480add4b5588810e0cd6477302e64fa"],["/archives/a8adabec.html","8ba87896c8938c829e47c65a57e84e4d"],["/archives/a9432027.html","c90f5db89f8a0616f9ef269a4fc5ba6c"],["/archives/ac5292c2.html","b0a77f545bfae9b4b7cb933b2afe8ed7"],["/archives/adb78c8a.html","6f6c02dc680850b11641330335f01441"],["/archives/ae4c07b8.html","78c55a5a451c1ba2c31d81f8c080e381"],["/archives/af55d3.html","55c56bae0f00a457069af62c986dfb5f"],["/archives/afcd4575.html","f3312d607e6a7cea452c3ddcd0845ccf"],["/archives/b21f48b9.html","4c0ece2e1ac89e4ad238e1ac05974914"],["/archives/b51bdcfa.html","6348d5addd2f9c4f64ab94222a1c9342"],["/archives/b7b51641.html","1b3a85b11c18c804fe047253fb9e39fb"],["/archives/b9f20a20.html","a08a1444c8bf9e66d519dae0239faf68"],["/archives/be945145.html","ec34cdb0329eeb9396ef213e1758dc1d"],["/archives/c0add594.html","5bbe7e650975434d00e30ce8a7b74b53"],["/archives/c242628.html","e5192a870f862816c896d0332a82b12d"],["/archives/c59bd5c1.html","54a9b8b4cff070aa220bf9b05d7990ac"],["/archives/c5a6a264.html","204f3254da9925c06423791ac5100bb8"],["/archives/c5a97815.html","c9ca284dec5cbf8684d31f850176ed03"],["/archives/c7f4347.html","8dbff4b235f0a5a21d9dfcfb44c5452c"],["/archives/caae163d.html","5be592fee49f00b5c18ce23fc749e4fd"],["/archives/caae7b70.html","49606ba4a1bde1ec3374a3c19c4295f6"],["/archives/ced3960e.html","30c3c49719eae8351a251409b2d4f894"],["/archives/cf2f5248.html","f33925d995c6c799427fddd9f38af21f"],["/archives/d3b694df.html","99c98214267fbe09270cafd504b792c6"],["/archives/dc3acdcc.html","8b01f98d6e85cf79bc658b7e81f3445b"],["/archives/df976d87.html","3150d21c37e463da219ce4f8079613b4"],["/archives/e0c98e7a.html","bc02b4e253ac4be236361cb4891c372c"],["/archives/e6437fbd.html","6537ee10a3437d928725a825ba2d49d5"],["/archives/eab5cc79.html","8ff7d3e3e816027947794aa0f3ff6fc0"],["/archives/eb05a173.html","4bb5befc628b52237f3dc0ed85bfc8cd"],["/archives/f1d0391c.html","9ddf82d837006e6fd0053f19ec2b9708"],["/archives/f3d3ee5b.html","57d9cbcf0dd90d9069752aa9eb4e6d89"],["/archives/f774ddf.html","ca1841cafb51d8466e4408bc0b5101df"],["/archives/f7feebc7.html","0f8ba75709149ac7bd3f4bf0a44702ec"],["/archives/f9f4b1e7.html","2b9e03140114cc35e55a15161f800749"],["/archives/fcdceb2e.html","0bd9ac9468af7d46c179e917776ef02d"],["/archives/index.html","57bb306f57d625fff08ed47e3f1565bd"],["/archives/page/10/index.html","60e9d7f53ee5045db29b06b82f9a0479"],["/archives/page/11/index.html","17027212c18f192e741d4af312b748eb"],["/archives/page/2/index.html","6baba314c7974399bc3213233991e573"],["/archives/page/3/index.html","e56c49c5277db3bc3e232865813ac3a8"],["/archives/page/4/index.html","c90d6a48fb6bb66771f85fdea14501d9"],["/archives/page/5/index.html","7e380aa3e79a06149ca5ad1783d4fba2"],["/archives/page/6/index.html","5ec5a275249d8841928c17f3cf4ccd39"],["/archives/page/7/index.html","981ddbddb0c294407d4bb2539a035d0e"],["/archives/page/8/index.html","8610a7cb619cdc65b0af946387fa3a71"],["/archives/page/9/index.html","ada238f0605afc2d79ae3ec38f9dde91"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","75593228d8b080c42f5d916d93f007c9"],["/categories/blog/index.html","296f5309eca79177838fbf34773623c8"],["/categories/css/index.html","804bee734e72aaa700665000ee0c6cc9"],["/categories/css/page/2/index.html","23251d38229fe373335ff2b8ecfaa1f3"],["/categories/css/page/3/index.html","143e55384393ede99d2422c2c59a81c9"],["/categories/fine/index.html","73e19b9489018da2197b78464defc63b"],["/categories/html/index.html","a7ed8ee3cd75b07d6609265bebf93520"],["/categories/index.html","97d6b62bf9998ea9472d0bcbfc2484f2"],["/categories/js/index.html","65a2d5318625a4323c7fe680683ae4e2"],["/categories/js/page/2/index.html","a752b1b3bccb3c1ac3d1b9b8e4af9591"],["/categories/js/page/3/index.html","5c8c8557b85edc130ad20fb7972c9107"],["/categories/js/page/4/index.html","eac416dfe7fb3c5840e068b63eff3a63"],["/categories/js/page/5/index.html","b7be2be3e1d8bd16b939df3be9fea834"],["/categories/node/index.html","f18cb9d5f6a616aa602dcd3cc1f40835"],["/categories/notes/index.html","1376b016a37ef53b0f8ad978095cd65f"],["/categories/react/index.html","50dfc13cc30120d2687232c673105f66"],["/categories/react/ts/index.html","679615895a1b3b8031ef386e6fe0eaf8"],["/categories/typeScript/index.html","2ee7ea1673b535f9fb9b7cb6d64537a0"],["/categories/vue/index.html","eca46ef9a26a589a0891020597c9cedd"],["/categories/vue3/index.html","af5b32fe3ba42d1b6da29cca450cacbc"],["/categories/webpack/index.html","fcbb5adc1619c365e8fa9141dbd893d0"],["/categories/微信小程序/index.html","b09f77676239d6d5570d01c1423444cb"],["/categories/面试/index.html","f89a990afecbfb8f6c6a4cc98b6dfad6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","d2f9d80c1f30ff3b496ddae161d23a53"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","cdf3bb9ac8073f9211e39e852640ac55"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/ts/images/01.png","c922cd12dab12bd6c46ee93bdd4205d8"],["/img/ts/images/02.png","3aa2056326e5d1c796af4ee14d5aa795"],["/img/ts/images/03.png","5d4a8b39b62c2c484b45dffa7f71d2a5"],["/img/ts/images/04.png","9005165e16c5fb263c3850b77b8c60bc"],["/img/ts/images/05.png","996ddffc76d0e5750a82f5a0473501b4"],["/img/ts/images/06.png","a52bf4f321fab1fee87cb087e0d22d04"],["/img/ts/images/07.png","36e3a3b114bcfad55498a774d9342e4f"],["/img/ts/images/08.png","3607e0c5650e9afa1384f2aac4009d62"],["/img/ts/images/09.png","dbeb822550e8eb71e78714035d790d38"],["/img/ts/images/10.png","e4a25517b0548f90ac6bef9d471ba0f1"],["/img/ts/images/11.png","dad677e46db0955c7d139a83b4b82cec"],["/img/ts/images/12.png","9745157eeb18de2635a64f65aeb34ea6"],["/img/ts/images/13.png","da212468d2ee4f8e9ba1f97843983786"],["/img/ts/images/43.gif","37c2e56cbc5c7a6fa18b043f8959a61c"],["/img/ts/images/44.png","6fe8492e0a34f7997c26473101a5352c"],["/img/ts/images/45.png","f799db600172453b1e1c864a85a9809a"],["/img/ts/images/46.png","9035adfac7596edda51156dacec1da06"],["/img/ts/images/47.png","2d75b31e7998a1e3c5ecec69a833a1d0"],["/img/ts/images/48.png","13beb8460f834a2a86866f9efaad66f0"],["/img/ts/images/49.png","540398c418c42be7de9f28b79882a107"],["/img/ts/images/50.png","18e4e8ef181ffd7eff2d1844cb704536"],["/img/ts/images/51.png","76bf41ed3e6bf0c976973364eb52fd76"],["/img/ts/images/52.png","f5d555290bc571215dd3ec30fd8aad42"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","0f1bd6f39a6f46d37e4de5bf2273eedc"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","2628861dc71bb3bcd7f23d1ae37f1cd1"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","82bcb612c36c06a5a59e18d3596a07a6"],["/page/11/index.html","df2a08c410ee15e153de605de68289a1"],["/page/2/index.html","d60713f1cdb1f28f17512830bdebeee2"],["/page/3/index.html","31bc6b06b104a8dfa457a4f104274870"],["/page/4/index.html","81e38b4cdb4bb03fc5fdd403154afbc3"],["/page/5/index.html","74d864963d688a71342e5d8833787972"],["/page/6/index.html","7ba3b0e11a80368a03fcd29dbfcee6b2"],["/page/7/index.html","bd1dd50ca3d00bb704f57846a2aeb029"],["/page/8/index.html","1377c36556621f646cf0d0a1691f4466"],["/page/9/index.html","784d42e0785f796dc87d5320ef58806d"],["/project/index.html","f069fa3e637d2fc39f8cf57b0dfaf422"],["/sw-register.js","f02465e52b6855ec965b18d683036108"],["/tags/BOM/index.html","dbbd2fc3dbf8eaabb639d1a6b7af6d91"],["/tags/BTC/index.html","7214969705e1eb285088d58d7d5c1183"],["/tags/Dom/index.html","4a89bfc4ca8294793bf5086ad421769c"],["/tags/JavaScript面试基础理论/index.html","6a1c1cd2ff6b3810e0768bbdcad1a4ce"],["/tags/ai/index.html","914d8cd8b0299935360da269921447da"],["/tags/ajax/index.html","aff99d6b7d61aae7d2d3744584a0ad92"],["/tags/ajax2/index.html","a9cd3e2172a147ca9d5edec21beefc0d"],["/tags/array-api/index.html","a724681f8ed0fecf388299ad9fac4c75"],["/tags/bind-call-apply/index.html","78ca168999c1f38b7c68ad44a8566fdb"],["/tags/blog/index.html","cc900772138b06b510fc520a23bf202d"],["/tags/blog个性标签/index.html","60a11cbba084d51b3768a616ace1b9b3"],["/tags/box/index.html","4935df620c628ba50742a5e7e412837a"],["/tags/cache/index.html","8e2f006233e855a2598959da79f3d337"],["/tags/center/index.html","4bf9c183a26df5501a31f18f73fec657"],["/tags/chatGPT/index.html","7f55c818a662330c9a2a42f9537ab216"],["/tags/chatbox/index.html","ab28f96fa4293f845e4594e4e8d8ec74"],["/tags/closure/index.html","82267d8749adb610c7cc3d398d910c53"],["/tags/column-layout/index.html","0553f6b0c4abe5bf622963f2b49b5fec"],["/tags/composition/index.html","b85247a10d98d5a06a8125d1e86f6f0c"],["/tags/context-stack/index.html","56c48dbad7e992492d60dcbc34b06a2c"],["/tags/continue-to-upload/index.html","456f2c17af7edd3ad473d71d02dc4a29"],["/tags/copy/index.html","4d3a50db75732118145b1c48ccd32e46"],["/tags/css-performance/index.html","a9e2f787aa6aa3ffc1c1a38cea2348e4"],["/tags/css/index.html","68c8f45edd810a91d9c2be3701271275"],["/tags/css3-features/index.html","6f9077e036b663368d40a7a1c6526316"],["/tags/css面试/index.html","6e8b0ea9c6e611a95b6e713a66c6ba66"],["/tags/css面试/page/2/index.html","46d8cf4072ec7e2b785403dbe791b6ce"],["/tags/currentTarget/index.html","b1704a86c558918922a66a3c83f7806d"],["/tags/data-type/index.html","222e6befc32f743d5da8c0b5aad34688"],["/tags/decorator/index.html","9f520e0cec039614d4b2877085c25c20"],["/tags/dp-px-dpr-ppi/index.html","d0bec0054f85370dd7385a2a2097bdba"],["/tags/em-px-rem-vh-vw/index.html","dde49af76b399a77110999396c98d379"],["/tags/es6/index.html","479374ce78565df3030d0587c19bb932"],["/tags/event-Model/index.html","2c9624d0ce6099f6b63337371baaa74e"],["/tags/event-agent/index.html","176712ff81a4e24702a7d0fd16c9887c"],["/tags/event-loop/index.html","a5237e44c4f25fa3eed32f6f5f55a678"],["/tags/fine/index.html","4ccf0b2960590278b15374d36e47756a"],["/tags/flexbox/index.html","72b28e947a891d4010525a07af78235f"],["/tags/function-cache/index.html","883fc9d32c44ea8cb900cab2cb0cb2a0"],["/tags/function/index.html","2a2e4914f32408a70a47edfb3d4dbc84"],["/tags/functional-programming/index.html","282b641c72313e02686ebfd47e39c7c1"],["/tags/gametime/index.html","23ecfb54cde183a1f94a87c67eaee464"],["/tags/generator/index.html","ede3167494e612223ef7b7e11f679f06"],["/tags/goal/index.html","179bb808e78f5e1b7747e4d0ea42e129"],["/tags/grid/index.html","00015c738ac1257f2d747d9ac72e6859"],["/tags/hide-attributes/index.html","8c02e2566112b0ea648cb182ac921733"],["/tags/his/index.html","08b73da5f3426db01550e559184608d9"],["/tags/hooks使用/index.html","d7db3f241bd9e0c271e1c7bfc34cbd3f"],["/tags/html/index.html","d7ab47fa9e4689e3af897ac92f84b010"],["/tags/icp/index.html","d24ee73dc13c4e816f57a09c8bf53400"],["/tags/index.html","144c47095f38c4fe310033ee064e57ba"],["/tags/inherit/index.html","e925d8d2dd97b71342a54227f919c94b"],["/tags/js-data-structure/index.html","be86aae242b0004255dddfb1f6651037"],["/tags/js/index.html","bf94affc09bc769f960104ef93a29ce3"],["/tags/js面试/index.html","aae08061ec48ed496d3849f27b711a38"],["/tags/js面试/page/2/index.html","097426775531b533e3bbf8f13d6199e5"],["/tags/js面试/page/3/index.html","b46a690924de5c91512c42bf51e89085"],["/tags/layout-painting/index.html","fe84f4a2ba53060234b04f6205ef3c81"],["/tags/less-12px/index.html","1abdad47336db1c936ebfdab45a8c364"],["/tags/loss-accuracy/index.html","ac87360d9e51da877835d4e962826426"],["/tags/me/index.html","22af3ba2abc8662a01d9368827f4bfcd"],["/tags/memory-leak/index.html","b7b39759ac2716b6f5bf8787c3e6b0c9"],["/tags/modal-component/index.html","5806f7c05cba48ca296063c58d076219"],["/tags/module/index.html","b85b702e74b5b57b4d6c5d0bf206e003"],["/tags/my-carousel/index.html","f30dfd596c973f0b7710f65abe649408"],["/tags/new/index.html","7db5bd87853b431234ad0e59fcd3c60f"],["/tags/node/index.html","17bdeec9bd4bbd9708d1029e35ccaa28"],["/tags/object/index.html","f11f3ee8e3a08badcb8054aff9421a9b"],["/tags/performance/index.html","37def34563f0e782dac347df8a6bdebe"],["/tags/project/index.html","d199a6aa2fe6daed1707263c77355fc8"],["/tags/promise/index.html","544e5eca2d59b534da477fec491eaeb7"],["/tags/prototype/index.html","6da1a5e9b65d8e894d871080ec0f38f0"],["/tags/proxy/index.html","51f23086c49145c5d194a696f6866fdf"],["/tags/proxyEs6/index.html","3ac1323166b7570df4659f581a063a75"],["/tags/react/index.html","cc66708e733b2a1473cee83e71cd1f7a"],["/tags/regexp/index.html","932ce3f07e58b2f541ad3e1d1547f574"],["/tags/responsive-layout/index.html","c473a62ecaa3d6ab7ad95ec7ce3c9dd8"],["/tags/router5/index.html","9c77b60e3c0f95123034b9d88f15c5c3"],["/tags/sass-less-stylus/index.html","40fa4cad145d1360330a9c819d9f80df"],["/tags/scope/index.html","d98221f29b8ad78010aa924dea3b3f19"],["/tags/security/index.html","c7a4181c46dfd1ff6da4dbdd9da6b3ce"],["/tags/selector/index.html","3b907cd340b727f23f2c72beb49003e3"],["/tags/set-map/index.html","eda292643e117f97dc97bf9e7e8b94e8"],["/tags/single-multi-line/index.html","c54c099a7e65868420ce75e49540b3e6"],["/tags/single-sign/index.html","7a457921e00875107a9c665cdc641bc9"],["/tags/string-api/index.html","5f3ddb9179f01c24c52a175564de57b5"],["/tags/target/index.html","4bb5770e0ca36c9ced033c56b6258f62"],["/tags/toolkit/index.html","bb78c9f35fb6427364e4c82c21b29685"],["/tags/treeshaking/index.html","b379a27e8a551002f794dd68aa26d28e"],["/tags/triangle/index.html","81c30a9a8ba0ab86a84d963d5227b6cb"],["/tags/ts/index.html","4d065feedf9fab0db83cbdb52404ffa8"],["/tags/ts报错解决持续更新/index.html","32cd71107dd3a23d56fc1cad2b0cbb76"],["/tags/typeScript/index.html","f583ccbbcb72fcaf6847b397a40e509a"],["/tags/typeScript基础知识/index.html","cf8ef7936d4f682153dee8792bc11115"],["/tags/uniapp返回顶部/index.html","5a152cbf5fa8e58ec3d68a716dfefdca"],["/tags/var-let-const/index.html","7f637bbb4bf7098dd043751c18049e70"],["/tags/visual-scrolling/index.html","778c48e6b6081a1fd48c6ddf2892d55c"],["/tags/vue/index.html","c0a71efd00149ca3d26b95bd36fa020d"],["/tags/vue3/index.html","071591ea5117efcb1c1fad1f3d9bf757"],["/tags/vue项目部署/index.html","851cf34e18b4885507da52a7ecb5385e"],["/tags/上线/index.html","91221585fc2b94c11258d5d7d68e952b"],["/tags/下拉刷新/index.html","b9c5c567ed14d31919da6ec965b1dd6b"],["/tags/分页/index.html","dc084e4e4d2f85a59397bb25f29be419"],["/tags/反问面试/index.html","9a7a6ae210718dc199293793832992a7"],["/tags/和/index.html","13be4ea1762684c2b42a0802f22b7ee8"],["/tags/备案/index.html","d4e583248d09dba7cbb196bf136e587e"],["/tags/如何设置文章置顶/index.html","38690b2b9c138c5d4e9caf4951daee44"],["/tags/微信小程序/index.html","8c14fe8a28745cda097c854d268af3dd"],["/tags/无感登录/index.html","5e29c556992732e8408ee96ca7b5afe7"],["/tags/星星/index.html","a0d470475db7b1c672ccedc992adb09a"],["/tags/防抖节流/index.html","d06974700c6435b0eeddb1bd8b45247e"],["/tags/面试/index.html","4064708e724c90d00b39a68e6798b58d"],["/tags/面试问题集锦/index.html","097fbab3cc3a035d2278337f52701497"]];
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
