/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","3cf90a2d04650b2f38517926a17e1ee5"],["/archives/10bf1714.html","180c72f827c67a837ee3bcf6194535ee"],["/archives/14015a55.html","b03fc39178acd37aaef3acea5ed51927"],["/archives/171d1754.html","b4be5f35215f06188a00de6844e63fd7"],["/archives/17a85756.html","ea9a01a6d93018867c67d162419190c0"],["/archives/1879f8e5.html","d48003a75f39bb15dad7621fce1ee7e1"],["/archives/1be48ee.html","9a81c736474173ea781fa9cdcd56efc9"],["/archives/1e021099.html","3ef0e511b3f62e49e30c7037a753c7b1"],["/archives/2021/06/index.html","2740a818458072a614f16ad6bb37a8e8"],["/archives/2021/07/index.html","947616c152cb678960f05859682abb91"],["/archives/2021/index.html","a243e90ede748d97f0def44487bbdfbd"],["/archives/2022/01/index.html","7eb0af648b41b170ce37a34136121323"],["/archives/2022/03/index.html","44447e48e5bf78915e72d9b70b7c49db"],["/archives/2022/05/index.html","e48626b8477c849e50d1ff1359028144"],["/archives/2022/05/page/2/index.html","ea41b6332c6999cabcdbaa5b085735d6"],["/archives/2022/05/page/3/index.html","b9561ada7dec3b2a9e6aab182380e39b"],["/archives/2022/06/index.html","e61f027530050e8724172abc4126bc6b"],["/archives/2022/06/page/2/index.html","66e70a1ed227137aedc74259803b255a"],["/archives/2022/06/page/3/index.html","dcb1fd84a183b0a23e4e99f70d44dadc"],["/archives/2022/06/page/4/index.html","f3d42c434a6ae813271aaa57ee31b792"],["/archives/2022/06/page/5/index.html","f0ae88be246731d60f8472462bba62f4"],["/archives/2022/index.html","fb33870a9c24088b66774df1455f7ff2"],["/archives/2022/page/2/index.html","b717b8830b545e816c9e893ecf26c103"],["/archives/2022/page/3/index.html","6240355896431a40c4238f0d7613786c"],["/archives/2022/page/4/index.html","10ef51a5a69a841270d0dfa6c5eab645"],["/archives/2022/page/5/index.html","1fb5cfbc17e55b5e346938f80a45ddfb"],["/archives/2022/page/6/index.html","9534c5135e2873fc12268f4b3074bcda"],["/archives/2022/page/7/index.html","ef46679a9edac5c5e03349bc06ed2f3f"],["/archives/2022/page/8/index.html","801b3b7732d4d0b07f0f9e95a09d5936"],["/archives/2022/page/9/index.html","0f89531a769b84b1c03fce9eda52bfdb"],["/archives/203410a2.html","b080504d8826e78b1ffebfb5ef7346f9"],["/archives/2039e3ed.html","8c31b2987aee5837f6e6ffd23a7ff332"],["/archives/28d88e6.html","66a4331129dcf080393c309325fd8312"],["/archives/294b86eb.html","6306c01830c5c6df645324b3b5227d98"],["/archives/2e20d937.html","9276148f379d7d39d1147113f5ca2cf4"],["/archives/2f8b36fc.html","0d88146d471b90e044693fc6316c76d9"],["/archives/30b90bc0.html","6f27e3a4988de57effed5071b0a4dfc4"],["/archives/336f0513.html","b3b29dea22bd8f9a236cabebb61aae2e"],["/archives/37919ccb.html","97f3a161e127cda3e48591cad6d58367"],["/archives/39a5927a.html","d7eda6398953c90bee446df51817c2ac"],["/archives/3f038ede.html","43fbabe3dd75e8811ab67be9a00086e3"],["/archives/40f0eb24.html","69aad67be3fe53677b3453d8615a685c"],["/archives/41476be7.html","acbc8d3d6190f3d67866fe7cea73aefe"],["/archives/42b82995.html","e1b8c566e99e860386f5288b44294b06"],["/archives/47c3840f.html","51b38d9eca7314160292da7f5a4b9836"],["/archives/48078dd1.html","a5b85f56590e36f0c16f62c552779409"],["/archives/4dbabb82.html","8f1d797ae43cfb67744bae61d87783fa"],["/archives/50cfbdee.html","308670eb81ccac9b12e39b6c7f813204"],["/archives/574fecf1.html","dc60777fd35bdd79b24be7ad600662f8"],["/archives/59b49683.html","bde0068f7716db79ec085beb0a41c3e5"],["/archives/67902db1.html","b49713df7d20402b099d28f152621d45"],["/archives/6be34445.html","0dfc5c962e90084d76489cf46aafad32"],["/archives/7331f3bb.html","2629ca7fc94ef073104acb5eb5ae9f6d"],["/archives/78ca6597.html","88253774d5fef0f30040eaaf635ec040"],["/archives/78cea6d8.html","933cc9fb291e8461de6025477d146079"],["/archives/7b268071.html","5d73a9d27650a7e13d3f8129f597b14e"],["/archives/7c942302.html","37b421b09cd9c849bae31cacb3a369ab"],["/archives/7f6cf7b0.html","298b4e5b4a241391569d2d19e5bbd06c"],["/archives/82d79681.html","643219f167c0209de28cc3e77b0759ee"],["/archives/84a91e69.html","43950adee07346d2c253a5fc27e6ed57"],["/archives/857fe845.html","db483a2c0a93d3070c0e7a94fb09f8d0"],["/archives/8a9483a.html","8db0ddc6a05a3930761cb5d856e76ca6"],["/archives/8d5284dc.html","1093d04432d83f3cbbb1bfc97f5816e4"],["/archives/92004154.html","c09d3ed8f3c1c619823d9e7b24656739"],["/archives/9370d73f.html","87b026c9f3240226f83541562ceeeac2"],["/archives/93ae9a14.html","645585948db579de2f1397554c1f9c55"],["/archives/9417ce47.html","46ea1d8fd4d5c31b71f91f7de79ea153"],["/archives/958c57b5.html","d263c6bcf66a7ab4d0ac1fe1f930f360"],["/archives/9692e25d.html","07dbd8af1d35b44d38f81c84f969fe75"],["/archives/97b76847.html","9c900f551611d2668fe35ec8d809b588"],["/archives/9a0dce2d.html","b415e631dfa05f73e420ad39207392f4"],["/archives/9b0c2390.html","eabe3e62e35d7ca3e2bf291df43ae685"],["/archives/9e5f33b7.html","8ae74fd38ea65253ef326f2e780161ff"],["/archives/9f1ed84.html","baec2d06e097c131cec1db8733f662dd"],["/archives/a0245a2a.html","7da2fc16a9734136bd3da669f0440f2d"],["/archives/a10ceeb7.html","0c2c68f9379a7b6643683bde2144262f"],["/archives/a36a5ae4.html","838e12416b470d6e3e52aaf1127e6a19"],["/archives/a8adabec.html","11dd17a500890863a3d2147eafbdb863"],["/archives/ac5292c2.html","878e7c8c6bf77914e7af2e46e8608937"],["/archives/adb78c8a.html","ab35a35e87f179b58d3968ce793330ce"],["/archives/af55d3.html","463eb581bc641cd959ca78d2565d57e5"],["/archives/afcd4575.html","bf3c3fa8361add72dcb639d64bf924c9"],["/archives/b21f48b9.html","29e8752ec60b87951f610d57eb051f66"],["/archives/b51bdcfa.html","a0fa30adfeb042d421b828d9f8ea746c"],["/archives/b7b51641.html","2a81b9a189dd840445d91943ccc130a3"],["/archives/b9f20a20.html","cda560997ef5592626dcbd28fbf12ee7"],["/archives/be945145.html","a2f02ba100246eaee7255714ec79b63b"],["/archives/c0add594.html","ab8775bf6a7a8fa6837c302e39e0c55f"],["/archives/c242628.html","cb78a75dc588f00547f61f96119db87d"],["/archives/c59bd5c1.html","4ff6b5033d79ead08d2d35f1fc981dc7"],["/archives/c5a6a264.html","fc47145650900f33c146e74d5d724a0b"],["/archives/c5a97815.html","8a7a79daa0c19725e0afe69ba159781a"],["/archives/c7f4347.html","dcf477151f6af399d4f6a37f7c962f80"],["/archives/caae163d.html","4d916364b375cf9093ab7a4417396b5d"],["/archives/caae7b70.html","12d13e67e12c80af34054fba878601ce"],["/archives/ced3960e.html","53cd06f79e9917d5f68a95d87fc9fa2d"],["/archives/cf2f5248.html","40cb2800a8fa5d05d8536dde698ba70b"],["/archives/d3b694df.html","969dddf584b40eb58c0500c354680a02"],["/archives/dc3acdcc.html","4d6dd81d468992d919218603c6d55c96"],["/archives/df976d87.html","01e4ba5213f4c8033bd552254ac87068"],["/archives/e0c98e7a.html","0d77c6d31366faf273bbb710f27aeb9d"],["/archives/eab5cc79.html","4ca14405b434d0b609aa5f62a838ef6b"],["/archives/eb05a173.html","9aecce3235a1b4a1dfff09cffb94260b"],["/archives/f1d0391c.html","967a2c651dfd57f070e0b4125f0581ed"],["/archives/f3d3ee5b.html","42ac877fb7ae5c60d87238c99924e6ff"],["/archives/f7feebc7.html","085af71c25211329c7b28193a80eeef7"],["/archives/f9f4b1e7.html","414268ff58e9a57f4b56eacd4cd1ce25"],["/archives/fcdceb2e.html","5926f1c9637e1b3f36246029cfda4dac"],["/archives/index.html","40c4d2d1b411bcb9e286b006d80f5ba7"],["/archives/page/2/index.html","77aed7410f0e7e4e19ca48b4fa60001f"],["/archives/page/3/index.html","49f6640c16ec2bd323bb10964c941f82"],["/archives/page/4/index.html","473e218b17038074f362dd30de7d219d"],["/archives/page/5/index.html","4920e8de1bd4ee9e48584a6ffd8eab45"],["/archives/page/6/index.html","3ed2d3cd04ac39d1a6af11fc53d6df81"],["/archives/page/7/index.html","43883bd5834176b51d5b5311d25ba671"],["/archives/page/8/index.html","04d444129544810cb54850ebeb0a5b4f"],["/archives/page/9/index.html","5b4747c83968705360fbdba2fe203b00"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","c8132c40e53ccc4184cd765179ca32bd"],["/categories/blog/index.html","fa031b68f1549f6bfb3aff20322aa447"],["/categories/css/index.html","1c53497c9c97e0402fcbc1d1b1dc520c"],["/categories/css/page/2/index.html","ccebcf1617f1749b1232e675f80eb8c3"],["/categories/css/page/3/index.html","93f49d5856b0d9890d54b584432fd61e"],["/categories/fine/index.html","665aa7c96cf6ba5eda3955545311ad9a"],["/categories/html/index.html","87cad333a6b175605256ca46f1ea5101"],["/categories/index.html","b59e63e31e30a28e43842653936033d3"],["/categories/js/index.html","2384cb954bf9f49f2a601ffa4a8ae928"],["/categories/js/page/2/index.html","a5c289e4f6e47ff7ed690e24d89c8e6c"],["/categories/js/page/3/index.html","fc6144e1b1aa942af0abd1503ca96799"],["/categories/js/page/4/index.html","3831549a2dfd5b21105b9a79fad2cf14"],["/categories/js/page/5/index.html","97dc6a25602b358f949d31e4ffea583b"],["/categories/node/index.html","f78a80dca7c0ef187d0ff1d3f0ff798f"],["/categories/vue/index.html","2c50d31da2b7f790c4e8b3faf8e83ba5"],["/categories/vue3/index.html","209a25c5c31577357dff3faa7e55fbbd"],["/categories/webpack/index.html","f7f09ec99fa77f1a243a585b2bd6bb56"],["/categories/面试/index.html","674e7990745aa8e66a017337a4435458"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","49c6e9327a80d4d56259c6001644d83d"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","ae85ab21a10a3e91170d9211f6522d59"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","005167c4cdce13b6f1e57e078bfaf34f"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","a0f0ef9728f7e623590cf073b24fc744"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","5d4ee01341db27c1bd23a2d3116b17f0"],["/page/3/index.html","20781cd1842003d64944da9194ef14d1"],["/page/4/index.html","ff935c128d9c7b15410f793e802e195b"],["/page/5/index.html","b321fd7ba409f6dc66a55db4e0f92871"],["/page/6/index.html","57df1e9f3070ad6468c1e604e23107fb"],["/page/7/index.html","9c3950d887dae11cd8e10f4cd7e5da88"],["/page/8/index.html","51baa7254111bed15ccce5d850b8b1ff"],["/page/9/index.html","e167f54d2aa89e08af22fe03aae680b2"],["/project/index.html","9fc8ef6320461825b2c0034309b164c8"],["/sw-register.js","55c2f7172ca45979922ad5205fee80dc"],["/tags/BOM/index.html","147b79851640002a7377aa6450c3025a"],["/tags/BTC/index.html","ef9565fae5831b29a37723edcc00d858"],["/tags/Dom/index.html","35dc8a9cf2086399147d74308c2f0789"],["/tags/JavaScript面试基础理论/index.html","a580cbf9467f590c3d941cbe80edf025"],["/tags/ajax/index.html","8a14bcf8ee3e47883adc91e54850eeec"],["/tags/ajax2/index.html","444241bd5f834e80cd1eb4ad9292f3ea"],["/tags/array-api/index.html","70e317ccb72fda6452011455195e8657"],["/tags/bind-call-apply/index.html","1467c4d53f69dd1b0ac58217baa3162e"],["/tags/blog/index.html","a3094ecb5121360416cad341f727035d"],["/tags/blog个性标签/index.html","852f4e8ed5f750b6026e9419d45810c0"],["/tags/box/index.html","34c2efc3bb39a2230e719ea7a4b61322"],["/tags/cache/index.html","4e88a081b65f69c80c731e59234e2669"],["/tags/center/index.html","6a1223c132e40ae33c7cd03dcbc8b9c1"],["/tags/closure/index.html","28b5d33b49ee3f319ccd1caab2670c14"],["/tags/column-layout/index.html","5c439f01d889438103ddc9d106b12a17"],["/tags/composition/index.html","722d3642f59ab2a1379ef422935bbb63"],["/tags/context-stack/index.html","393f9b2fc16e406d696b091780201b40"],["/tags/continue-to-upload/index.html","0b5f361d57819d726142f3fe24038260"],["/tags/copy/index.html","7578515548e27a3bfdac7dff0bf0bdce"],["/tags/css-performance/index.html","f1aec5fafa52f27e933ae18d189e7e89"],["/tags/css/index.html","e6919ecd905f67a121b5791238559644"],["/tags/css3-features/index.html","0030c5605e991a15e878d36d9907e6e6"],["/tags/css面试/index.html","02d961ca0a9bf1066fc79d81ac43a6da"],["/tags/css面试/page/2/index.html","547dfd053cb36d540422d558b37bde31"],["/tags/data-type/index.html","4f6fdc9d7fd8476477e711f31f197662"],["/tags/decorator/index.html","33d742a1394ad3e0cda235ff3906e663"],["/tags/dp-px-dpr-ppi/index.html","75ebde0df084a592c741cdc2f4678569"],["/tags/em-px-rem-vh-vw/index.html","afe7dcf83b6c9b92caf7dd38b3c71afa"],["/tags/es6/index.html","401a64caf0048ab327082f5c089c2c04"],["/tags/event-Model/index.html","592c625893e21f547d3c788eeeecbe63"],["/tags/event-agent/index.html","0213497b2190b59638c32f4f06b4ebba"],["/tags/event-loop/index.html","bbc0098c15d96cc0dcac4dd4729f09fa"],["/tags/fine/index.html","7fbdd3435550c07b91758e0b562b728e"],["/tags/flexbox/index.html","cabd2de072e8bc404f62e62efc5dd098"],["/tags/function-cache/index.html","99f4af5af5a0ff4a6a7f31acb5b360d9"],["/tags/function/index.html","200777e6a17b835838d32695606ac931"],["/tags/functional-programming/index.html","0009d2d7b0cb2ab9ea38ed866f7bb973"],["/tags/gametime/index.html","bea4a17485f44edad5ab2c20e5d7023f"],["/tags/generator/index.html","073c93ae2fd928c68f0f6c7539035b09"],["/tags/goal/index.html","b4328e69cf2bbc13aff081940f194184"],["/tags/grid/index.html","17ca48e7c36a67a1ca2504febab60c9a"],["/tags/hide-attributes/index.html","bbb5cdaa74048a87b7c452d546bccb2e"],["/tags/his/index.html","0ac89cf2affbdaa1446339b1e30f083b"],["/tags/html/index.html","27bb30158fed647aef34fca168b2949a"],["/tags/index.html","df66ed6116cf22f27cb8cabc0473ecce"],["/tags/inherit/index.html","c9ff56154cebe521c0703d2ad9d484ba"],["/tags/js-data-structure/index.html","7a7915a7cdf88e929987503f455ebcb9"],["/tags/js/index.html","94087b4eba19e6552e6c1fa0a6e14585"],["/tags/js面试/index.html","7b98d76db579300399687ee253e17f09"],["/tags/js面试/page/2/index.html","caa87cb03e38196681d96e5654c69d47"],["/tags/js面试/page/3/index.html","149770e8fea7a7f6d4862fece2858f71"],["/tags/layout-painting/index.html","99dcab329288d6edb30e177bf62d69dd"],["/tags/less-12px/index.html","e8fd23e44c1f6d7efde084f176aefcbc"],["/tags/loss-accuracy/index.html","2773461fc57b3f125385e167f4a31712"],["/tags/me/index.html","8b3fd4dd2fad7299d0318a8bdd98edfc"],["/tags/memory-leak/index.html","bcc63fd678caf16f36684475dac6f928"],["/tags/modal-component/index.html","c7b7e763e34fb338eac8686eef44b9a4"],["/tags/module/index.html","99d6a4f1c42eb337e2b5f825593aaaff"],["/tags/my-carousel/index.html","68e4c741d6e4c69e7a90e48515cc69f7"],["/tags/new/index.html","6c7978750a44a8f3ec533176f30f704d"],["/tags/node/index.html","c61a7bfd9297debc4977ac44a661dc3b"],["/tags/object/index.html","4155282d1106606bd4502ee1848c822c"],["/tags/performance/index.html","9a59c1765ab87ad1d2df183e8d87699a"],["/tags/promise/index.html","e34a9c2eaae88c0fb7d689334badc697"],["/tags/prototype/index.html","f2e47f18ff53cf95cbf79d33ca6522b5"],["/tags/proxy/index.html","b86b2597669e239172610673723377c1"],["/tags/proxyEs6/index.html","c3add9c08d2ec0c4904c7db483618052"],["/tags/regexp/index.html","cf9c1e663db90d191d3df30c8f9a6c0b"],["/tags/responsive-layout/index.html","4d7abece789ed37c4611a9ac7e25dfa4"],["/tags/sass-less-stylus/index.html","b29cbedd0fc0aae19e2cb32a8a69a128"],["/tags/scope/index.html","e28c6c1e74e472b7c32bef5ee72ab00e"],["/tags/security/index.html","6a424ba395bbba0f823b946a1024e562"],["/tags/selector/index.html","9cb049438d84b89dde05f10a18ae85ef"],["/tags/set-map/index.html","a70411b9eb930f9a59b4464e3ae183ed"],["/tags/single-multi-line/index.html","c2e6f519e735f218ba433b76d2e5eb32"],["/tags/single-sign/index.html","ff8538b9965814bd475f6a5a76924d52"],["/tags/string-api/index.html","bc573f05a31b044d328f2c2f1174b853"],["/tags/treeshaking/index.html","07ea4481e0fa14a124a9d54dd38eda06"],["/tags/triangle/index.html","daf91b771723453f2689770b832dd6bb"],["/tags/var-let-const/index.html","ba0df34651bcc2bdc32e7b2563663675"],["/tags/visual-scrolling/index.html","6d658b6fb72556d480995e80e6b94cf2"],["/tags/vue/index.html","6ed0166bff5553e96d2e0d048757a15e"],["/tags/vue3/index.html","2874f1a18920a91b27e5c8fddb8e09f1"],["/tags/vue项目部署/index.html","c5e39d37b3832399491ad5cc723810d4"],["/tags/下拉刷新/index.html","7cfc3258088bc699c006a0af812a0972"],["/tags/反问面试/index.html","78494a7027d57a68cd2226b814d89b34"],["/tags/和/index.html","7223ad17f3d3f87eedd247244d65b88b"],["/tags/如何设置文章置顶/index.html","fb385db90ff10662027be22f05026a3a"],["/tags/星星/index.html","61e4182a535e0ca7aeff05e4ac95da23"],["/tags/防抖节流/index.html","8a3abb56f5bbf60762896d98d729694f"],["/tags/面试/index.html","c169f3407ec1b0b959c15fd85f298ccc"],["/tags/面试问题集锦/index.html","6ff4a3c39a0884b43c1fbb7fc002e1d5"]];
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
