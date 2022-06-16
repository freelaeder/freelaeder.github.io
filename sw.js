/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","2ff89cc5fd5a9c9c57115f27b4048188"],["/archives/10bf1714.html","3141f915d46feed120fade5dd9d25f60"],["/archives/14015a55.html","099b248c5bc2c3b5cf9bbba6f4920381"],["/archives/171d1754.html","a9a020e8f4dd8c9cab24bb168c9677f1"],["/archives/17a85756.html","0c77d4800a3fb9abdb35a2afe44dff3f"],["/archives/1879f8e5.html","02c318c34ce17e783b69e657fedfc51b"],["/archives/1be48ee.html","5f10bae375a94a245890e41bdc7868b4"],["/archives/1e021099.html","5493451f014361968d5d2defda6a8084"],["/archives/2021/06/index.html","2b4b7a7e2f74e60cb436fdc92cd68104"],["/archives/2021/07/index.html","71986d2dbfa4395487c65be92113d48f"],["/archives/2021/index.html","71f7d8a89996fb933011875c738a0d75"],["/archives/2022/01/index.html","9ed6b7019183f6c48346f06b779d5df5"],["/archives/2022/03/index.html","f24d0c83043da730efd962fce2b5ecc8"],["/archives/2022/05/index.html","75893cc0a42a098d8a2d33ca6dd4e974"],["/archives/2022/05/page/2/index.html","fbd86f6307c2c064129c3a1a2181f1fd"],["/archives/2022/05/page/3/index.html","95defb4e79c5c8d947ce29eee75146d5"],["/archives/2022/06/index.html","2e40bbbd4b4e1b44a2afda6884299ea5"],["/archives/2022/06/page/2/index.html","e41ad37a6412b75eee9a32294d54f267"],["/archives/2022/06/page/3/index.html","a96338005df408401d01a2d5dd3aa005"],["/archives/2022/index.html","636cdf16dbc8c96b930764b19d8649b5"],["/archives/2022/page/2/index.html","23d26fe161a0f379f16c489d440c8b2e"],["/archives/2022/page/3/index.html","8460b684c4c2b0cae5e986ab02e11bce"],["/archives/2022/page/4/index.html","80f5b70b0d8dbb499a297dc559f0417c"],["/archives/2022/page/5/index.html","44386593754353fb1f9d9ab194615f4e"],["/archives/2022/page/6/index.html","1e2fd3ea75219a1245d3e747bf4ea87e"],["/archives/2022/page/7/index.html","52a314f863f3d04169863e7cf9f2f499"],["/archives/203410a2.html","399714b0a5107b864af2c8787236eba0"],["/archives/2039e3ed.html","0f0dbbbb800a50077a8acb5f6d15aff7"],["/archives/28d88e6.html","a5fc88062b68b7a49cbe663edba66a76"],["/archives/2e20d937.html","31b3803c7b15c8349bdb4b737e05a8f4"],["/archives/30b90bc0.html","73e2c02f65866fd25bb983e4866bd7af"],["/archives/37919ccb.html","381a599af32f91710cc9d2704d9d0a07"],["/archives/3f038ede.html","0b8d45d4b2efdc6a6f74669190c0306a"],["/archives/40f0eb24.html","a368ca980b02124a61956ccad7b9ec04"],["/archives/41476be7.html","cad9fe43324a4f5801008a704cf4bf96"],["/archives/42b82995.html","dbec7e3817fad2ef1279b11291f8bdae"],["/archives/48078dd1.html","36469ffbecf6328bd54cf89384b3d1d1"],["/archives/4dbabb82.html","2af976421952bd8dc5576beeacc15b6f"],["/archives/50cfbdee.html","48db6acfcff1af6e3e290d035e0a9d85"],["/archives/574fecf1.html","09615b2f99620fc077b1ac14e0575571"],["/archives/59b49683.html","76e032ec667bc1ff91d7ef6610f7b4ed"],["/archives/67902db1.html","d0664a2d13f071b69c45253ce9e79077"],["/archives/6be34445.html","1afd1a373efb9a9f6e652a20ed2780d2"],["/archives/78ca6597.html","526c4e13795ab938b73727b8d49de1df"],["/archives/78cea6d8.html","37466f68cfa79f5699e42644deddce1c"],["/archives/7b268071.html","e7c108fd369b7efccc864cb962eb6514"],["/archives/7c942302.html","a72f46c03817d1094410641fcb4dad3d"],["/archives/7f6cf7b0.html","d664aed7905ba067821b3d7c5fb25e76"],["/archives/84a91e69.html","a3aa05d944957a198eb9e85e74567500"],["/archives/857fe845.html","b50d558016956ebe8a2edef0f628423c"],["/archives/8a9483a.html","bb990cd8c72790878c2822ae805102da"],["/archives/8d5284dc.html","f497a69e6e8e44d54eb8955c94b6c15e"],["/archives/92004154.html","700fc6c02120e470da59063b17ca2153"],["/archives/9370d73f.html","de1e790d595c1b2e0e784e489791b694"],["/archives/93ae9a14.html","3d452c2234a533fd1a82d68fb6ef141e"],["/archives/958c57b5.html","5a0c2f7224727dad441f284672edd5e0"],["/archives/9692e25d.html","cd9bb8fe644dae2c75b5ed9ccdea66c1"],["/archives/97b76847.html","3cb74f18c962d374e5fb7d823fdabab7"],["/archives/9a0dce2d.html","8370637853a5555adcd66c546c9a0958"],["/archives/9e5f33b7.html","316ecc44741ef726bb46157162eb038c"],["/archives/a0245a2a.html","0db092a41191c82692b0f60b38e8e2fb"],["/archives/a10ceeb7.html","c6c11a82c1964c50971b16cb933123fe"],["/archives/a36a5ae4.html","3db22e3a56f10c6d23610cef6d54b86e"],["/archives/ac5292c2.html","48e6d0b0eb2dec6804bf8f1ff4912b37"],["/archives/adb78c8a.html","0863d5dc6a6b50d44b85aade75514f5e"],["/archives/af55d3.html","35ec64ceb39b58f751ef250c58516af9"],["/archives/afcd4575.html","1696e1e7e7e34104311d082be48c560e"],["/archives/b21f48b9.html","1515ec57ea5a520bb48ab840c1acfe8d"],["/archives/b51bdcfa.html","d40c06b1618edd711d6482d97e1b5ed7"],["/archives/b7b51641.html","8fa10297228e82aab2e9a47aab6fa773"],["/archives/b9f20a20.html","eb320e79c92addf59166fc280ade7ad2"],["/archives/be945145.html","fb27a28dfc8d110f5d57cddd8ece3b22"],["/archives/c0add594.html","5078c9a54ce481a410f1871bf96dcc03"],["/archives/c59bd5c1.html","c7ede252ec315c2c5054fc79389aa147"],["/archives/c5a6a264.html","209a4594f8b61a2e4d8188ebdffadf85"],["/archives/c5a97815.html","b9e539e836faaf72f14d228206745faa"],["/archives/ced3960e.html","1aab95fb3f33d2bbd586ec8b0bff3853"],["/archives/d3b694df.html","e438ceec1e3165734a2910e617387724"],["/archives/df976d87.html","ff17460726fbbec817c99b4d454b4216"],["/archives/e0c98e7a.html","d1033b4dee7393356e0923ac79e79421"],["/archives/eab5cc79.html","41e2b14d115ca35216a04faa7724930a"],["/archives/f3d3ee5b.html","3eaadf4d83081ea40b8241749d638d11"],["/archives/f7feebc7.html","f593c91b7e6113332d12c363096436a3"],["/archives/f9f4b1e7.html","e5932b64007c6766712fc61aa5a5a22c"],["/archives/fcdceb2e.html","4528a39d1fdbd4b8422b2b4e52006b58"],["/archives/index.html","da2f00fe141cb6bf8bc8cfe0924e3213"],["/archives/page/2/index.html","00f12330cce3c45e35e06f2c07bf4a37"],["/archives/page/3/index.html","cc1a47ba19c4eea496cf5d4fe8b50b03"],["/archives/page/4/index.html","36fd9abbb6bffba8510f23437247be46"],["/archives/page/5/index.html","e4707f35ed5910befe5d1e48c6677a3a"],["/archives/page/6/index.html","23a75b3a804ceb760d69bbdf0a5ee338"],["/archives/page/7/index.html","b247ffdb67ab03d8c6a7ab2682b3b5ca"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","2db7536d7c5541ff2072a16af50c2673"],["/categories/css/index.html","603c3a369ffa9ba07f03962cb43fd977"],["/categories/css/page/2/index.html","168816472d60bb55d77001504c4110fb"],["/categories/css/page/3/index.html","5f4c84a9dd5cf01889cd78214baf3df0"],["/categories/fine/index.html","97dda1aa41ccbd058bea9e2101714a22"],["/categories/html/index.html","619b048f01636c067141815b5cbb55af"],["/categories/index.html","66b11b0be389ada0c2e57c6f4b153faa"],["/categories/js/index.html","540c1515dfe731d3c034a0e497f2bde0"],["/categories/js/page/2/index.html","e6ab47e4e249223639bbc644640c06e5"],["/categories/js/page/3/index.html","64c8019e2b209d709c2413c72284cb94"],["/categories/js/page/4/index.html","998d1318b8d028578189eb095b284fa9"],["/categories/node/index.html","269eda966472dad3c9f52b55b7cffdec"],["/categories/vue/index.html","6c97bb464349f9064581e1969ce04dcf"],["/categories/vue3/index.html","31494753050361394abbf90907481cb7"],["/categories/webpack/index.html","73c47ec3e46d9b1b4a9760fb6af6a4b1"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","a1692f18b5602cabb294ddae4ba4a8a0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","49c6e9327a80d4d56259c6001644d83d"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","2fdd87a939dca1eabc76158ca0e2861f"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven (1).png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven (10).png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven (11).png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven (12).png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven (13).png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven (14).png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven (15).png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven (16).png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven (17).png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven (18).png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven (19).png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven (2).png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven (20).png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven (21).png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven (22).png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven (23).png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven (24).png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven (25).png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven (26).png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven (27).png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven (28).png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven (29).png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven (3).png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven (30).png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven (31).png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven (32).png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven (33).png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven (34).png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven (35).png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven (36).png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven (37).png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven (38).png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven (39).png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven (4).png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven (40).png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven (41).png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven (42).png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven (43).png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven (44).png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven (45).png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven (46).png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven (47).png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven (48).png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven (49).png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven (5).png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven (50).png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven (51).png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven (52).png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven (53).png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven (54).png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven (55).png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven (56).png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven (57).png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven (58).png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven (59).png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven (6).png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven (60).png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven (61).png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven (62).png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven (63).png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven (64).png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven (65).png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven (66).png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven (67).png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven (68).png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven (69).png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven (7).png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven (70).png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven (71).png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven (72).png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven (73).png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven (74).png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven (75).png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven (76).png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven (77).png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven (8).png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven (9).png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","5752d2de60360d38d697e5a1a4aa47d5"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","7189195609e5a83ac57a7dd8d34ef795"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","47684bcdba3f3cc13131102e9132fe21"],["/page/3/index.html","5760c8235b3836dc8d189b4c950b7f43"],["/page/4/index.html","4d649813785a2b6c25f7f5b899c65c37"],["/page/5/index.html","547a78a1f70c57437d83f61b3fcc87fe"],["/page/6/index.html","ca5feae30f81b80fccb51d7ff7cdfa75"],["/page/7/index.html","f0cc4594c6de9f0be50984877bb08d7c"],["/project/index.html","e0ac7943cb794fed0795f7afdc75f781"],["/sw-register.js","fca9cc6609f7e2f9e466473949d1148c"],["/tags/BOM/index.html","be20c2190b07c4ef6d317e2ddc9aade8"],["/tags/BTC/index.html","9878a45d18ba1c4bfbb4db4536ff27b6"],["/tags/Dom/index.html","ac0aa1c52fcd479da5f517d23f7e6679"],["/tags/ajax/index.html","35a2320f8b4ecac7504203011e048f91"],["/tags/ajax2/index.html","b80fe7fe105a4636141d557acc47955a"],["/tags/array-api/index.html","5f29940719e4fa4b252eca9875142ba3"],["/tags/bind-call-apply/index.html","aad19e8c0e1ab4d7404e630d8d125aee"],["/tags/box/index.html","3ba0815e7da88777c6dc5e496f730057"],["/tags/cache/index.html","7ed8b3f64d41796ac4255fd4917e5dc0"],["/tags/center/index.html","8f2d8bf53186fa40c5378bce35bba282"],["/tags/closure/index.html","2707dbcc83ab8b476fe38a5f7a4cacb3"],["/tags/column-layout/index.html","3a0f5278d4d8e19e2e9de83a4586fe75"],["/tags/context-stack/index.html","0deb4628334960525035bf8cf3545142"],["/tags/continue-to-upload/index.html","963211075e28c9ed0f7678e0708bb7b0"],["/tags/copy/index.html","44e30f5aaf85f4a51babc7c2faee8137"],["/tags/css-performance/index.html","cf9a79339ddeab36f84ccb02e692be96"],["/tags/css/index.html","bdee8fa218bf1ad2d86914171021b5e6"],["/tags/css3-features/index.html","1a46539133006fd11348c7b9664fc84d"],["/tags/css面试/index.html","683100374c5c4318affdb8878fccee4e"],["/tags/css面试/page/2/index.html","22129ff8ccc65916774a40604c2882e8"],["/tags/data-type/index.html","ed6f2c6b66db07fdd18cdaad1e5515fc"],["/tags/dp-px-dpr-ppi/index.html","986cb51fb78a1fe5cf630f632012e927"],["/tags/em-px-rem-vh-vw/index.html","27248ae26c9c8de1c25088460f3a9486"],["/tags/es6/index.html","90c48d9ebd1b640731b5c54d60feb3e8"],["/tags/event-Model/index.html","b65bfb3f2003226f1af423df2fd49f4e"],["/tags/event-agent/index.html","40bb2f00e6d63f35aa4ac9c6c80d6bdd"],["/tags/event-loop/index.html","3bad6cd8286aa397fa9e53be072cea64"],["/tags/fine/index.html","685cab5280876ce43dab3c549aeceea4"],["/tags/flexbox/index.html","9b9279932cad7971d9b1e22d57b0e9d6"],["/tags/function-cache/index.html","35d8659bc6ca96ae25aa7ef23d7e5728"],["/tags/functional-programming/index.html","68697bc89779f3aa6b3b7aaa1fac23c5"],["/tags/goal/index.html","56cb62e4b5782256aa41485c594d237f"],["/tags/grid/index.html","825e0623a836694bc13c1935e2a356fc"],["/tags/hide-attributes/index.html","487b3c5e93deef2e886c06840d404d16"],["/tags/his/index.html","f5a299356572ec647853abeffb52d9e0"],["/tags/html/index.html","dd92c5354b0da3792b4f21588afad330"],["/tags/index.html","b02e2bb31c82584f672416c870624cfb"],["/tags/inherit/index.html","379bfe70613df88ba58635b87a905e55"],["/tags/js-data-structure/index.html","a3067bf30a633af180b97ef738d3c333"],["/tags/js/index.html","be235d02c5ae6d9761b718c2a7f26e55"],["/tags/js面试/index.html","38f2e0fb44e2a2e9379d2ba3a8e95899"],["/tags/js面试/page/2/index.html","c2c92cbc0f937b992854bf472fd883f8"],["/tags/js面试/page/3/index.html","864da967c1046cff3eb40227f6fb7d7e"],["/tags/layout-painting/index.html","a009604ab96993119a50c788b6e244ba"],["/tags/less-12px/index.html","5db09e08cb8d2542afbc04c7b2821c7e"],["/tags/loss-accuracy/index.html","fcf5ece440ab59c1b6057489daa64cad"],["/tags/me/index.html","c4867f1bf425f660150232c4e9efc193"],["/tags/memory-leak/index.html","03283dfc3b3a07ef45ba7889adf27953"],["/tags/new/index.html","d1a00a7bdfcdc5008135231d27403b3f"],["/tags/node/index.html","4e35a81804d1a65f7cb0c4fc870725ea"],["/tags/prototype/index.html","a1478c0ad64cbc6b36dd1d5dee81d303"],["/tags/regexp/index.html","e0ae1a346397037ab05fd7fd20a0c3df"],["/tags/responsive-layout/index.html","cccecfccc69580777dec20e5e438247d"],["/tags/sass-less-stylus/index.html","3a2dda8909ad23bbaf1cd1965fd9525a"],["/tags/scope/index.html","652eafba6b8db720341b049dfcc13623"],["/tags/security/index.html","46f659c878c0d241365449dba93bc551"],["/tags/selector/index.html","703616bad6b8e6f5f2c19399f6a89f5c"],["/tags/single-multi-line/index.html","2301a3c1ef32c93960de12d0983c5584"],["/tags/single-sign/index.html","d760f4d374837c921d06565ea2d26a3d"],["/tags/string-api/index.html","6d4ab088cb4beaf9303d486009ac4aa0"],["/tags/triangle/index.html","72072e0a535933ef02b926ece8bdf8c6"],["/tags/visual-scrolling/index.html","0e39396b4ced1101467a509974dd589f"],["/tags/vue/index.html","6a61a1fee556871975176d1cb222d21f"],["/tags/vue3/index.html","7ff0ce16fd22d64010bd11e2afb100e0"],["/tags/vue项目部署/index.html","490c58092d60dc0dfb59ba88ba8cc52c"],["/tags/下拉刷新/index.html","71ae2a0f6d7d523d40b3d0f051691724"],["/tags/和/index.html","ff961d5b27c93f631bbe5823b3742f40"],["/tags/星星/index.html","478ea68c578cc112f4463b6ff48bc7b9"],["/tags/防抖节流/index.html","5647e6a6a958e0f8991c0d0bec3be7d3"]];
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
