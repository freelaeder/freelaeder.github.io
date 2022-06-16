/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","76d16612486cde2becd8c8916a33a905"],["/archives/10bf1714.html","144357a13b28a8c899f5faa7e5467823"],["/archives/14015a55.html","e957365c7d5e8e3da6b45c44ef3ff7b0"],["/archives/171d1754.html","873ab6a24a0da85829b53617de77638d"],["/archives/17a85756.html","76a6cfadebb867e3c0aa7a16c36676db"],["/archives/1879f8e5.html","c38d6ed3760ceaceb2721832506693fc"],["/archives/1be48ee.html","f1255073621a81afe40d9a76779e1e1c"],["/archives/1e021099.html","ecc8a16dfbeaf6f841c3bbc97e10efe4"],["/archives/2021/06/index.html","12a1b62bac916a9173efa557d8203860"],["/archives/2021/07/index.html","f55a449fb0a6a4a42dbe8399e6710569"],["/archives/2021/index.html","4920509c44e60ce4da6fd11a32158e9a"],["/archives/2022/01/index.html","64fe35c6d2d86c1f6e6fb133f4f69aad"],["/archives/2022/03/index.html","9e3fd59b0b7e6001c96da3decc792274"],["/archives/2022/05/index.html","aa6c1f26f88714f14405590faafd355a"],["/archives/2022/05/page/2/index.html","5cb74ab7f9f7b9e322357874a0c2a7fc"],["/archives/2022/05/page/3/index.html","5645dd3be8d08da13bc12da0705c2c13"],["/archives/2022/06/index.html","025f2c77df48387b40f7826c18958f7a"],["/archives/2022/06/page/2/index.html","0ecb071cb2e185c0c39b599e05de8be3"],["/archives/2022/06/page/3/index.html","016ba31a2fa68c1cfb3f1634219e7ac8"],["/archives/2022/index.html","9fb814b54766db74375cd14dfc44899c"],["/archives/2022/page/2/index.html","bee28371272eeb1ffc7f173016cbe75e"],["/archives/2022/page/3/index.html","bafdebb571cb95aa0cc804e70f951972"],["/archives/2022/page/4/index.html","227848ec3d97b57d4983ef4a87d8a7d5"],["/archives/2022/page/5/index.html","abe0aeadd3eca41a93417dc1be8b7982"],["/archives/2022/page/6/index.html","01b7f3b4df44334731f1fde96da2798d"],["/archives/2022/page/7/index.html","3925266d0d9bd5e173a69a0d257b69fd"],["/archives/203410a2.html","08c61cb3133df271c57f73dfd8e6c27d"],["/archives/2039e3ed.html","fa6d380c4319363d4cb58a9c7d466841"],["/archives/28d88e6.html","ef5565aa77e9978f4f41c3b311f0b2e6"],["/archives/2e20d937.html","0b1de004f72104ee0e77965013761acf"],["/archives/30b90bc0.html","5396f4bbb760a5a01f22cafc8cb669ff"],["/archives/37919ccb.html","ac1f0496a7b401ac8d64be70353df7ab"],["/archives/39a5927a.html","05c97bf94ab06473f53ae88a15bdbaaf"],["/archives/3f038ede.html","254194e106e1cc4d2a8f870d7c3a0178"],["/archives/40f0eb24.html","224acc0a643e2137ab1a5a20358b5529"],["/archives/41476be7.html","3d003a30e40f85bc8da7b2250c2d3d99"],["/archives/42b82995.html","120ab0e58c448f08d612fc4207b3b549"],["/archives/47c3840f.html","84c644ec451cc21c830454f492dfed20"],["/archives/48078dd1.html","65d3d01fa2387c9fa16030bed5025b7c"],["/archives/4dbabb82.html","edcbb06d2e9f7cab5f463a60973434bd"],["/archives/50cfbdee.html","72dead9aee65567dde435fd0e84eaa6e"],["/archives/574fecf1.html","8d830221c84bdcb5d440f6a6e7720be0"],["/archives/59b49683.html","ac616e73a5fa620e85654e9d8ec49487"],["/archives/67902db1.html","9c1e3d94b18c4676a10f66ad63c686f2"],["/archives/6be34445.html","a53f1c18c37a620898dc4a80d944f918"],["/archives/7331f3bb.html","090b966c2281a9fc3feea9b8127efbf7"],["/archives/78ca6597.html","e31972995c1302aa2e0936b95bc2378e"],["/archives/78cea6d8.html","b6be32b7674283ceb9285fc714e149bb"],["/archives/7b268071.html","52f2a22ff43879918f39e0d5ec313662"],["/archives/7c942302.html","f26dcf0f2958900597a5b2264cecf65d"],["/archives/7f6cf7b0.html","5eea74dd4fe9e6f86827ccd70e66ead3"],["/archives/82d79681.html","d3c87599ffacd8bf48a87b01ab56f725"],["/archives/84a91e69.html","c8b2db8aa39bf420119b2320aa9fa641"],["/archives/857fe845.html","3ddab4881ce48329f32403788b075c0a"],["/archives/8a9483a.html","bdc551db05c0afe11444789f6054822b"],["/archives/8d5284dc.html","c9c8f6c0c5517a85d3f097c3134b6e93"],["/archives/92004154.html","ef745efcdecf9999ec011eb7a3bae949"],["/archives/9370d73f.html","777a1adf86bcf68854b1468e8dc45a22"],["/archives/93ae9a14.html","1e814b2549d3005015450d718a67cf8e"],["/archives/958c57b5.html","96ee93c7abb3e7de7cb4a5b213da4c97"],["/archives/9692e25d.html","26477839ad2331aeb0ddf617b5c22037"],["/archives/97b76847.html","c7f75836d4e3df76ba2b523b4c0548f4"],["/archives/9a0dce2d.html","dafd4ad679f018c2739a83bbe2a1e700"],["/archives/9e5f33b7.html","b47a5daf2aee06472bf06f6392fd2b16"],["/archives/a0245a2a.html","456a71a293a9722d27d41ba94da91269"],["/archives/a10ceeb7.html","8decf8a72c9646d21a22c314d0790422"],["/archives/a36a5ae4.html","6d1936f877a2ac0e6efbaf20d5bcb169"],["/archives/ac5292c2.html","12bec48980680e947d786c59f0830fdc"],["/archives/adb78c8a.html","db9255b273cf576c27569dd5d854e980"],["/archives/af55d3.html","f40798647a807c2ad2c2cd9186b7dc0a"],["/archives/afcd4575.html","3903b47421043609831b939079f1431f"],["/archives/b21f48b9.html","18e702128c0d0630ae09dab08117cbd2"],["/archives/b51bdcfa.html","41b30138bf51f48c3d693a0199045934"],["/archives/b7b51641.html","2f47a142d32f4eecf03151f0769d74bc"],["/archives/b9f20a20.html","1653036924d1845a359f9b4e870b5523"],["/archives/be945145.html","70239a039e6871f024fb04557131217c"],["/archives/c0add594.html","d4bf6dfae9aeb4ef6bf956c97d55335a"],["/archives/c59bd5c1.html","4282a9890a413e86ad8e651f7cb17918"],["/archives/c5a6a264.html","005fe13cc6871582e5574c202f3efcda"],["/archives/c5a97815.html","74f3addb38ee4bd056c8b99d403bcb40"],["/archives/c7f4347.html","a6c4e2c54dc94607f970105c014f3d90"],["/archives/ced3960e.html","f44cb009e5a50f064434c589487cdc83"],["/archives/d3b694df.html","aab322be9e7fec45d705c1540dfcf340"],["/archives/df976d87.html","fa28e19233fa55f4b4b7cb1c74b172e9"],["/archives/e0c98e7a.html","ac76475e6800a522864e56df065f9042"],["/archives/eab5cc79.html","1e077349afa1a642fc82818ac23cc633"],["/archives/f1d0391c.html","40ba079013066d4fa7a4e98363932036"],["/archives/f3d3ee5b.html","f47920fc47221bc67378011f92cbbc4e"],["/archives/f7feebc7.html","b34631d578b2bd4ac8f85951d3760de3"],["/archives/f9f4b1e7.html","9e386e68fd82db4533808c9a0bc2a21a"],["/archives/fcdceb2e.html","a042783674520d306ed8d5869b5c3167"],["/archives/index.html","e52bbd84ab198a8717e92da5bec295fd"],["/archives/page/2/index.html","938d4452b2b88dce0c4661ff44931821"],["/archives/page/3/index.html","bf5e3531ed83d48e18a022dcf9dbdafe"],["/archives/page/4/index.html","c4a5015651fe59c9ea069895fd63f4a0"],["/archives/page/5/index.html","f0826caec91830f4b06fd4ee760bf13f"],["/archives/page/6/index.html","0f3f4f8582debd2294da042a718c8335"],["/archives/page/7/index.html","5be68cf67e03abf5fba33fcb7eaf8ec1"],["/archives/page/8/index.html","432bc4a892f93e57a0a03ade86f79196"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","051fbc081ce97537ed02a5ee6027164f"],["/categories/css/index.html","f729b22d707834884a2fe110cd6ca8bb"],["/categories/css/page/2/index.html","75fcb053d7eee32a270918db543b9d89"],["/categories/css/page/3/index.html","9783e5f2002aeb0007391a6d97c12f43"],["/categories/fine/index.html","d2521cc920d16be24cb8047d8f7439ad"],["/categories/html/index.html","effe5dfc65406a6d2d21008b73dcdbf9"],["/categories/index.html","9caebcc695cc6fa0049528be051c6c40"],["/categories/js/index.html","00b15a358256197b2535c4a67a2a19f1"],["/categories/js/page/2/index.html","b926531bb58173ada8d557c1577178f8"],["/categories/js/page/3/index.html","d534bd905c6614250d5d9c25bf981e14"],["/categories/js/page/4/index.html","14a4c433904513bddcf856d64bca0938"],["/categories/node/index.html","f913cce6ef5fcecf255f8637a1cffdb0"],["/categories/vue/index.html","a9b8fd2a621dd4245846ec58f663d336"],["/categories/vue3/index.html","dc8dec7038471d4f680694d26f2e8273"],["/categories/webpack/index.html","c7dfc57d89f4ed937909558353f945eb"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","49c6e9327a80d4d56259c6001644d83d"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","0dcc7afc4f202b4b355399679540e2ca"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven (1).png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven (10).png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven (11).png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven (12).png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven (13).png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven (14).png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven (15).png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven (16).png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven (17).png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven (18).png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven (19).png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven (2).png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven (20).png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven (21).png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven (22).png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven (23).png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven (24).png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven (25).png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven (26).png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven (27).png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven (28).png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven (29).png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven (3).png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven (30).png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven (31).png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven (32).png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven (33).png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven (34).png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven (35).png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven (36).png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven (37).png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven (38).png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven (39).png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven (4).png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven (40).png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven (41).png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven (42).png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven (43).png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven (44).png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven (45).png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven (46).png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven (47).png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven (48).png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven (49).png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven (5).png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven (50).png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven (51).png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven (52).png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven (53).png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven (54).png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven (55).png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven (56).png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven (57).png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven (58).png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven (59).png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven (6).png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven (60).png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven (61).png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven (62).png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven (63).png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven (64).png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven (65).png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven (66).png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven (67).png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven (68).png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven (69).png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven (7).png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven (70).png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven (71).png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven (72).png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven (73).png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven (74).png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven (75).png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven (76).png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven (77).png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven (8).png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven (9).png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","163b1565cc7bb36f0749ba7abd915e04"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","8b396dcf36577848ac14727f6528fb77"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","c3b373a19870dc64c32df64de274f8e2"],["/page/3/index.html","40041f4f4e65d28b8cd50f5412bf49a3"],["/page/4/index.html","7a47ffb336f53a712f99a14768f0c093"],["/page/5/index.html","43edf883d7daef8e92b38cf9ea628ff9"],["/page/6/index.html","207688d65f5d68df48ec6954be1e174f"],["/page/7/index.html","e751d2a4fa8c9a54a11c8d7c99700c33"],["/page/8/index.html","b319e0fc8d6ff5e0e58577bd661333e4"],["/project/index.html","f0b340c37920cedfbcd4c86d5cbfe702"],["/sw-register.js","371b1b7f3783a43797f2483da6b5dd57"],["/tags/BOM/index.html","dd73b38672aa7400f015aa28e3d08c86"],["/tags/BTC/index.html","35fbb17dfedb9cde436029efa27ecbfa"],["/tags/Dom/index.html","1163248153f86d4424460349d1247b43"],["/tags/ajax/index.html","783296f804432b853d06ffded7955aa9"],["/tags/ajax2/index.html","549835bbfaf73ac1c01d9c96ef244e3b"],["/tags/array-api/index.html","c9807a00048e4fd7feb103af57f56552"],["/tags/bind-call-apply/index.html","c0905c59d05a6d5ad06f97e84917e9a8"],["/tags/box/index.html","a496f3d19ce33360807ce28fb48bfaac"],["/tags/cache/index.html","33580b06efec311f676292b76569a49d"],["/tags/center/index.html","130428155a86258e17c01e9b28889e1b"],["/tags/closure/index.html","6b1462e20e6b7fb24032db151aa87957"],["/tags/column-layout/index.html","4f97c851c203f21c75a96032013298cb"],["/tags/composition/index.html","db187dc4b76e5d039aff6286f72ef4a8"],["/tags/context-stack/index.html","2057c1168c6cabf752d43eab4034a923"],["/tags/continue-to-upload/index.html","b7f7953917d792155b83d889a070da39"],["/tags/copy/index.html","668472b5ce25d6a432e0ca0055573865"],["/tags/css-performance/index.html","69c9c9128f1b5128763f3db7549ee66f"],["/tags/css/index.html","c4badb5836eff12b1be3fb286f5df2ea"],["/tags/css3-features/index.html","34ab5cee4f093bcdd4faa5af26a5243d"],["/tags/css面试/index.html","a9e20b17dfcf6792e2be3d7cd0491c3e"],["/tags/css面试/page/2/index.html","e38eb1eb89cecefa49c25b0311373fa8"],["/tags/data-type/index.html","782bf209d2c0081b6bebd2139536248a"],["/tags/dp-px-dpr-ppi/index.html","e80205dbb99ae39ec63bd0a2e529ffe4"],["/tags/em-px-rem-vh-vw/index.html","d9238b35e0d61a321e475a240ab3f93f"],["/tags/es6/index.html","ede562f69d4ca346d827413fb71ff0f7"],["/tags/event-Model/index.html","93f86d83a43c96cbeca9eab21739c911"],["/tags/event-agent/index.html","86f85445cf86c57fa8aca60e590cf7cd"],["/tags/event-loop/index.html","787b839780ce109a80c62faf3ea2a14e"],["/tags/fine/index.html","24e030fb9f2f8da44d5518e358b1fc63"],["/tags/flexbox/index.html","ac7bec5e1112ce69684000d5ec6021b7"],["/tags/function-cache/index.html","479dd391336b7186d4ad2e687e633f1a"],["/tags/functional-programming/index.html","9c66218f6951dec2f90be594a02b78bd"],["/tags/gametime/index.html","25e9442b0851d4337661acca3233aff1"],["/tags/goal/index.html","b548b06e6351a921807b716aec4da451"],["/tags/grid/index.html","b984cd0f5d685bd6a1790f0262448598"],["/tags/hide-attributes/index.html","fce581984694d27c4070bd12d76ac3bb"],["/tags/his/index.html","360ca3a54f8565d8ea2f02408dcff799"],["/tags/html/index.html","98f799895207643d3460556cf1970fb7"],["/tags/index.html","296840c18da4ac2655540ce5c62b5e21"],["/tags/inherit/index.html","3b58a38860f5415bd98afe9eff39a01f"],["/tags/js-data-structure/index.html","fbf01c70e211954442fa1498356de3be"],["/tags/js/index.html","c5803d9e123b9209227e2964a157cdf8"],["/tags/js面试/index.html","6be9d5fdb6848cff34977241e79c30ec"],["/tags/js面试/page/2/index.html","1934c620ccd3742334d648da83fca879"],["/tags/js面试/page/3/index.html","7fac1f394606cb80eecfb0eba9df1213"],["/tags/layout-painting/index.html","d5c77cedbf466d71c02f7c5d82b24460"],["/tags/less-12px/index.html","ffbbac5fe833f28c49cf24e70c15a702"],["/tags/loss-accuracy/index.html","e302004733417808db0cac41cf3d17b6"],["/tags/me/index.html","01bad9f54958d7d3db97ae6723dfdb34"],["/tags/memory-leak/index.html","2fbafb91055b3e75c2a558dfee9fae45"],["/tags/modal-component/index.html","736fa6d8a5392d2f9d44a2fa9f702a3b"],["/tags/my-carousel/index.html","cb86ca63a73d71e4e9d69a400b3cd48e"],["/tags/new/index.html","abab0e9b7b9949dabc776be5ea27a06c"],["/tags/node/index.html","de709b6db78ec5e5ff41f2729c9a625a"],["/tags/performance/index.html","e55e661119d8fe1a6df1c47eb071fdc0"],["/tags/prototype/index.html","7bebad24a8c56aef7226c4b760a10198"],["/tags/proxy/index.html","20d21978f23399f7179bd8376a55df5c"],["/tags/regexp/index.html","67a4a47526528480c52deac66abdd039"],["/tags/responsive-layout/index.html","b4d93e9962690085387c4e92565e9696"],["/tags/sass-less-stylus/index.html","1ed24f47b5694978ab02465009b24c8a"],["/tags/scope/index.html","a59fe7bb257718eabb9dbb1c33e7b541"],["/tags/security/index.html","198c56e765b6b1a94f8cbcd9aa73f064"],["/tags/selector/index.html","1eba84260a933a8e3793b502bdf371d1"],["/tags/single-multi-line/index.html","793f5abc43a90e7148edf56a122dfff0"],["/tags/single-sign/index.html","8ac7081914424bfe673da8d0f04cb89c"],["/tags/string-api/index.html","f9c913cd13b29657257fa268a6141b2c"],["/tags/treeshaking/index.html","c9452cedb0f7ddce0449bf38cbaf1e93"],["/tags/triangle/index.html","f6f7d2ed1fdc28b18efa3fc94f6073da"],["/tags/visual-scrolling/index.html","f2ea331e69539c7374ec88379fd5265a"],["/tags/vue/index.html","357a1f18324f09439e700ab41dcdad8f"],["/tags/vue3/index.html","fc485cc59008be6131689f4247768e61"],["/tags/vue项目部署/index.html","d8697a7a4772e767b25092ebdb6f5725"],["/tags/下拉刷新/index.html","0cc5c82878c7e995927ec6e3fdac060b"],["/tags/和/index.html","5baaf74b02fb27ce8838398d895bfbae"],["/tags/星星/index.html","c03c6b81d5330aee7e1102fff8442472"],["/tags/防抖节流/index.html","befcb507bcac9d02c3a47fb9a97f91fc"]];
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
