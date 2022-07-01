/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","39936f851ffeb1fffea55f4ebb16d69f"],["/archives/10bf1714.html","1138411353467ce281574b6c830e3084"],["/archives/14015a55.html","1c2ee2161a896745ee325927347e719a"],["/archives/171d1754.html","0512f5026deabbebfe4a0959e4a80c0b"],["/archives/17a85756.html","3590a40a417750ca6cd02a65ef35e621"],["/archives/1879f8e5.html","6223a3059664f381b289673c4e0f07cf"],["/archives/1be48ee.html","bc7517927b80d3f2bbcfe34528623fbe"],["/archives/1e021099.html","7c98c6d4fd30fe971277338b354acd4f"],["/archives/2021/06/index.html","a0517a66a356b94069befd08405e846c"],["/archives/2021/07/index.html","04e89f4a29caf95be2178136792f5849"],["/archives/2021/index.html","26f97be8ce04784aee0291fe0dcce5e3"],["/archives/2022/01/index.html","24346cee7b5ca981308033eb36e02e28"],["/archives/2022/03/index.html","2a69ac94a8bef8fdfd7c13d7ba3c3d20"],["/archives/2022/05/index.html","b448fe5b7d104e272ed65ed8573beb09"],["/archives/2022/05/page/2/index.html","70e37ab1dca777708ac3f4f87cc50a60"],["/archives/2022/05/page/3/index.html","dbdfd516f311f27004ff8347d06122c3"],["/archives/2022/06/index.html","045ed9ac2dfb2afbd48117b1472855ff"],["/archives/2022/06/page/2/index.html","46b7694035d3e1fe759e922a9e81fb8a"],["/archives/2022/06/page/3/index.html","78084d5624475325cc1fb0a57f6f80a6"],["/archives/2022/06/page/4/index.html","548497ef9e74e248d8360a4c430d6afc"],["/archives/2022/06/page/5/index.html","933167b2d1b724d6571b59347e354b1f"],["/archives/2022/07/index.html","6e78ec18d4a0a469e5e4dac5224a499a"],["/archives/2022/index.html","5369edf9b957f530e1d62754c23986dc"],["/archives/2022/page/2/index.html","7032c03b45e5281fc399ade36186c09c"],["/archives/2022/page/3/index.html","f26a598f1159f81d95e59b63c6093c79"],["/archives/2022/page/4/index.html","8b3a890cf15ce5b255c4cab0f616ab63"],["/archives/2022/page/5/index.html","e6f26bcef24fd349c4e00a6e2206a9ef"],["/archives/2022/page/6/index.html","dbfc31b74193fe3acd7191a2d8d0798f"],["/archives/2022/page/7/index.html","f6ecc60b04c846f78bc1c704b6e51a25"],["/archives/2022/page/8/index.html","4fa469e7190d64e78b9c299fbf3598b9"],["/archives/2022/page/9/index.html","890ff6256f87b15391a5ae63928f3461"],["/archives/203410a2.html","d2c9e365f59b6edde4984593aec3318b"],["/archives/2039e3ed.html","8e79cf2be1fa4dccbed57dda6aa75025"],["/archives/28d88e6.html","7865062ff8bf03cb032b774dae966a79"],["/archives/294b86eb.html","f71802b40eac4f72871acaaa8438f912"],["/archives/2e20d937.html","74a2e7ccadd55a204b2c88ba5694faae"],["/archives/2f8b36fc.html","d753b7d0947883e5629e5d8bffc0da8d"],["/archives/30b90bc0.html","5c6b1e2ccda0604d7ddc5560a1537552"],["/archives/336f0513.html","9d1a8f45e29de31e21d73db2efb4aaaa"],["/archives/33b9c85e.html","844d10323734c1818fb84ebc6a2164fd"],["/archives/37919ccb.html","7418b4c4a1205bbe0a1205ba431bf437"],["/archives/39a5927a.html","f7b23ef66c8b82c04584fac7deb90a35"],["/archives/3f038ede.html","6ad92c3f48cd1a96cb006f5925b54ebd"],["/archives/40f0eb24.html","9d38c3e073c10bc8db04256bd7908ca2"],["/archives/41476be7.html","79bccb2e6b497ccbf7b77a75151af318"],["/archives/42b82995.html","f9cdc830d8db53d9b0070f539afa1a06"],["/archives/47c3840f.html","2e7493ebc2f25cdb244d17703b4863db"],["/archives/48078dd1.html","d8d1b71cb28ae8164ad2036c668b5adc"],["/archives/4dbabb82.html","0f87387bc6b1984135a235d51acdbb3e"],["/archives/50cfbdee.html","018da09cd8fc4eb5b62013e02eb50ab1"],["/archives/574fecf1.html","6ab8e0ba329764dfde95b766fb3f67ff"],["/archives/59b49683.html","3210684f2acbd62cdc738bd079ab0850"],["/archives/67902db1.html","e6aad00665e624b727fab6eb5c1f9749"],["/archives/6be34445.html","c310d0b4aa6f6ef263221787393ae069"],["/archives/7331f3bb.html","39cb61ab9cac583333abe9e7d7e1f4ac"],["/archives/77971af0.html","30186140cc6e48bd149f69cccb584c12"],["/archives/78ca6597.html","bc5dbba4f8ed898a80a1c3488767447c"],["/archives/78cea6d8.html","6c73b97f35a07fcbff4590df3800a3b7"],["/archives/7b268071.html","8dc125571771a51977ff69fe73343ab7"],["/archives/7c942302.html","abaa5f75b4a98b2290db82568445fb96"],["/archives/7f6cf7b0.html","cff696902ec6d312980ba86c23d4b212"],["/archives/82d79681.html","c68adaeda2e5c34114412790e00ae358"],["/archives/84a91e69.html","ad73b590259aa831363c559855023def"],["/archives/857fe845.html","cb8ac2cd1da4e90d0bd80a9ab4bba956"],["/archives/8a9483a.html","75b74374ebdb44e0d09f0291cea82e9d"],["/archives/8d5284dc.html","cbed599f78d3becc6ab3d4ee5aa1e4cd"],["/archives/92004154.html","5ef2d0def58d1ef9a532b10762a45c55"],["/archives/9370d73f.html","f46e6b3a6e05d0265b34b11488f721ec"],["/archives/93ae9a14.html","424d05ecd002887fc75b34d8fbb30f88"],["/archives/9417ce47.html","e1974bfd3c19f4581892097e51df72cb"],["/archives/958c57b5.html","5cdce4f3275d63a05343b4f25a50a166"],["/archives/9692e25d.html","a25d5d4a6e5b6c91230960ab94467edc"],["/archives/97b76847.html","6381cab07e90a165dba6ea9d66727dc6"],["/archives/9a0dce2d.html","12dfee8851e3a4c6f72b0fb81752b7ef"],["/archives/9b0c2390.html","265d62cadb3947bfea6f7320b25f9430"],["/archives/9e5f33b7.html","a5db6e232c8c43d02a263a2c4035002c"],["/archives/9f1ed84.html","89da737956fc5a3e29e5abe75a16fa51"],["/archives/a0245a2a.html","48ee28181bb27d590127fea4e4af31cd"],["/archives/a10ceeb7.html","70617b4a8cc5d052595da65ead788613"],["/archives/a36a5ae4.html","ced8863c054723938da2a37bd9935aa6"],["/archives/a8adabec.html","343d755d46f8705bcdf1cd42e11f9195"],["/archives/ac5292c2.html","5fb3f8a753a16a6fbf3faf29cf49e07a"],["/archives/adb78c8a.html","c3b8329a3ccc1206d857a086933ae898"],["/archives/ae4c07b8.html","f45c40bd7e265ea4ed5c6009e4801ed3"],["/archives/af55d3.html","d30c00a64d4f0b0bbbde6865bc883d9d"],["/archives/afcd4575.html","45967a591354d81890120dc4c8da69ee"],["/archives/b21f48b9.html","fb18c78bdf062e4cf3854504e919142a"],["/archives/b51bdcfa.html","8336e9ad2b1bddb3b2bf3c6ba03584e8"],["/archives/b7b51641.html","3aa51b0d778236a7a7c74d45b768d193"],["/archives/b9f20a20.html","274a55a7302d77805ce890a2c5d23c1e"],["/archives/be945145.html","281f8ec8951ae7ddcd337c02bab90690"],["/archives/c0add594.html","de57b51e9c05761dbfaac93468d8bb9e"],["/archives/c242628.html","13daacd7c2d30f7eacf7cb47dea2f38d"],["/archives/c59bd5c1.html","3a638b436e6ec6cd73057718aaeacc50"],["/archives/c5a6a264.html","a8af00813d92d3e2018db473ca4080e1"],["/archives/c5a97815.html","d95b6ea4a5dc06dc2bb0f123cba2374f"],["/archives/c7f4347.html","e64449ea22f6d19c45670001281ec39c"],["/archives/caae163d.html","48f61bc48dc8636f62ada1c835a5f24a"],["/archives/caae7b70.html","e247bf9c78458f79a9336dc081b069de"],["/archives/ced3960e.html","dc4a8bc49001f863a5be520bf208b8dc"],["/archives/cf2f5248.html","8bee87de2d01d15b871e0d182b948dcb"],["/archives/d3b694df.html","4c0080a105e40e4de8eca1bfb9c31a06"],["/archives/dc3acdcc.html","7ea672053fce26f56add6362c5859427"],["/archives/df976d87.html","59ecead96814a758327c9f9a4d8ef896"],["/archives/e0c98e7a.html","295c12affab9ccc22dfd3060db9af1a0"],["/archives/e6437fbd.html","bb576d454cf747a22fe273f24f4a2843"],["/archives/eab5cc79.html","04353e3617bbaa1374f446ffeef7a2ed"],["/archives/eb05a173.html","e83cc2c7f76d258f89845b00ae78dfd1"],["/archives/f1d0391c.html","3f41c973e46b134cf55cccdd6e08d9ee"],["/archives/f3d3ee5b.html","dbd2420853ca980382decec7e212bf30"],["/archives/f7feebc7.html","2a550abb5f826a6a7b675f961d0fbb00"],["/archives/f9f4b1e7.html","3a89d4a85387d591192821ef7163226e"],["/archives/fcdceb2e.html","7f77c7965c78189b810a3c99a9487dda"],["/archives/index.html","b7f075b5855c26fddd259f64448533fa"],["/archives/page/10/index.html","57989109fd7bed122d57a4dfffe530b6"],["/archives/page/2/index.html","6aae66bb52e7f327fd1ad31daa4ff0a6"],["/archives/page/3/index.html","959e84e955dcbff64a13b863c711a822"],["/archives/page/4/index.html","61ad17acaa1ea16972c3b6ba2318ec1f"],["/archives/page/5/index.html","a2bf0983de84f2a06d2dd7690d8661b1"],["/archives/page/6/index.html","ac1aeaba7b86d6922155836f902bcdb6"],["/archives/page/7/index.html","eae0f16fb228ede6fcaee7c618ce3b49"],["/archives/page/8/index.html","ab4b2ebd9fab2c9ae9f9dc8451db0916"],["/archives/page/9/index.html","adf4960f8b2cf1790441cc5644bbd26b"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","e0586502ff144fb06bcd512f66ae6eca"],["/categories/blog/index.html","ebf9a3419f89448eaad88928a100703f"],["/categories/css/index.html","892d84a4c549c5d50d3cb6b6b8b73b5d"],["/categories/css/page/2/index.html","a5e1771ad0d89ee709c4f55999d4d922"],["/categories/css/page/3/index.html","ce90bcf119c7a48c9adc0719c1687672"],["/categories/fine/index.html","9662e7ef5bac99a40b353b6d815669d4"],["/categories/html/index.html","e4543de4a69546bd6c225ec08957d560"],["/categories/index.html","719e81fe8ee138fa047782a09573e019"],["/categories/js/index.html","fb56f616cd99bd2339bf878745b01789"],["/categories/js/page/2/index.html","cced361c2f23cb6fe84b4b3283045fa3"],["/categories/js/page/3/index.html","9daa5a08f4020ae624c094c9e0078bfe"],["/categories/js/page/4/index.html","3d7d5850c978b7f92f5219fe999344a2"],["/categories/js/page/5/index.html","07331109d8a963c1bacc99e9fc3542f0"],["/categories/node/index.html","ab3a724e53c7e82709a6cc72bf6767fc"],["/categories/typeScript/index.html","56d69da63cbd264195a15066ea0ad661"],["/categories/vue/index.html","81ddbe5fb446d279e6cf382e807e8f7d"],["/categories/vue3/index.html","a793dbcd7d2bce5a92a436d2c1270543"],["/categories/webpack/index.html","fb0b7d92f995f4470dd300b4d7f29c5d"],["/categories/微信小程序/index.html","9d51525785e9629dd86f906b04211a1f"],["/categories/面试/index.html","ce23046044f8dc129532fd3209cfb4a6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","49c6e9327a80d4d56259c6001644d83d"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","9e7ce59e4ed2423f8e6cc4584bb149be"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/ts/images/01.png","c922cd12dab12bd6c46ee93bdd4205d8"],["/img/ts/images/02.png","3aa2056326e5d1c796af4ee14d5aa795"],["/img/ts/images/03.png","5d4a8b39b62c2c484b45dffa7f71d2a5"],["/img/ts/images/04.png","9005165e16c5fb263c3850b77b8c60bc"],["/img/ts/images/05.png","996ddffc76d0e5750a82f5a0473501b4"],["/img/ts/images/06.png","a52bf4f321fab1fee87cb087e0d22d04"],["/img/ts/images/07.png","36e3a3b114bcfad55498a774d9342e4f"],["/img/ts/images/08.png","3607e0c5650e9afa1384f2aac4009d62"],["/img/ts/images/09.png","dbeb822550e8eb71e78714035d790d38"],["/img/ts/images/10.png","e4a25517b0548f90ac6bef9d471ba0f1"],["/img/ts/images/11.png","dad677e46db0955c7d139a83b4b82cec"],["/img/ts/images/12.png","9745157eeb18de2635a64f65aeb34ea6"],["/img/ts/images/13.png","da212468d2ee4f8e9ba1f97843983786"],["/img/ts/images/43.gif","37c2e56cbc5c7a6fa18b043f8959a61c"],["/img/ts/images/44.png","6fe8492e0a34f7997c26473101a5352c"],["/img/ts/images/45.png","f799db600172453b1e1c864a85a9809a"],["/img/ts/images/46.png","9035adfac7596edda51156dacec1da06"],["/img/ts/images/47.png","2d75b31e7998a1e3c5ecec69a833a1d0"],["/img/ts/images/48.png","13beb8460f834a2a86866f9efaad66f0"],["/img/ts/images/49.png","540398c418c42be7de9f28b79882a107"],["/img/ts/images/50.png","18e4e8ef181ffd7eff2d1844cb704536"],["/img/ts/images/51.png","76bf41ed3e6bf0c976973364eb52fd76"],["/img/ts/images/52.png","f5d555290bc571215dd3ec30fd8aad42"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","166e9bc798407c12ea7baa5446c6dcf4"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","a207e1a7778088fdee4c17e3e5a88b5f"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","a77af24454afd4218457751b3ab4949e"],["/page/2/index.html","e73337700dee3530165a575c441949e3"],["/page/3/index.html","2273926273a951f47e4fd39da9132bcf"],["/page/4/index.html","8a7ddbfa6d3cd5bf395bcdac9a4d7dde"],["/page/5/index.html","3a1899335b2456fbf95b097e540e50d9"],["/page/6/index.html","82b4cda61f0e54995a9231ecb8154d74"],["/page/7/index.html","5f451ad59a398e052974f73be9280ca9"],["/page/8/index.html","3d36da3b97dc2cf974fa6938006171b0"],["/page/9/index.html","922d4122a862cd64773d6d2c8b8bd453"],["/project/index.html","24a83ae785163a750e2b098b41aaf379"],["/sw-register.js","f32dd042e38df15203ac16cb0dfa6aee"],["/tags/BOM/index.html","81c8685951a413628e791876f963276c"],["/tags/BTC/index.html","141dee7fb5193edb1836575c291e7e1d"],["/tags/Dom/index.html","f2612f77186d295dae900826bca47270"],["/tags/JavaScript面试基础理论/index.html","3f6c92ff5e06d02a6abf9fb42d7c9ad4"],["/tags/ajax/index.html","73f96cfbea6342c11562677aa6ee1049"],["/tags/ajax2/index.html","4fb10618987fb84115683e71b13afb21"],["/tags/array-api/index.html","395277e4e4c0c57164dc424515ccc2ab"],["/tags/bind-call-apply/index.html","2cc004e3b7206ca4f163780089f2ce68"],["/tags/blog/index.html","0f86188555120011c916261c00b43008"],["/tags/blog个性标签/index.html","bc6df106000cdbd4c353c69eae66c868"],["/tags/box/index.html","5fc4d097de42df18846e25a8de3b3f5c"],["/tags/cache/index.html","5ae223e06e874d07f8975d04cbedbcfb"],["/tags/center/index.html","f93d97528d44463e8ba57335575128d8"],["/tags/closure/index.html","a716393ce071f03bf8883be5a7295a9c"],["/tags/column-layout/index.html","6dc02088036b62bd199283ba84098eb8"],["/tags/composition/index.html","154b54734b6e88ea1983a70def72408f"],["/tags/context-stack/index.html","0c721ae54eba66a73a839abf0d0e1730"],["/tags/continue-to-upload/index.html","bfec663f165d8c6e75c8f928c041461f"],["/tags/copy/index.html","67bb3c7fd591637f3ca0305b06da700a"],["/tags/css-performance/index.html","5dd981702c72e36ef8246acf2ccc3c2a"],["/tags/css/index.html","120ebb97c17c59d3785a97e017192e42"],["/tags/css3-features/index.html","e90f2cf7bcec3797d58873af1a8b3618"],["/tags/css面试/index.html","6d118ad081614378cecf1e110fb98ae1"],["/tags/css面试/page/2/index.html","58374c19ed14088f94f821d85632d2cd"],["/tags/data-type/index.html","3616d54e8b16ec59ce79db30b4b51d78"],["/tags/decorator/index.html","b1317d08c194987a075c47c0917e6eb6"],["/tags/dp-px-dpr-ppi/index.html","a1e77dc1c3ecb9f68c60b9d264af60d9"],["/tags/em-px-rem-vh-vw/index.html","1cdbf59b65427069318c10c19188657d"],["/tags/es6/index.html","4e312473f60df0237fbdd60d7c1a8509"],["/tags/event-Model/index.html","488068893dcd65f8dcf61bbe3279b31f"],["/tags/event-agent/index.html","1cd1e20162849bbb21183d4b12b7cccc"],["/tags/event-loop/index.html","b9786836281a8f849c742dc816cfc27c"],["/tags/fine/index.html","9030d95d7ae3884e764d270d7a792010"],["/tags/flexbox/index.html","5f57240d7a40dd3f01c4302f0f950922"],["/tags/function-cache/index.html","54bf7d5d023e8423f917e798d73fe73f"],["/tags/function/index.html","650625fb1423d50e17c24f55d1001e64"],["/tags/functional-programming/index.html","510e532925d4559d137e4f86d185d924"],["/tags/gametime/index.html","55fbd82a6a5b203d4223e6128dfe69a5"],["/tags/generator/index.html","19a7c8b9a09db46054a155a6e494a879"],["/tags/goal/index.html","21e42c7c9fab61483641b7df97666117"],["/tags/grid/index.html","0400249f7500783af7ccb877454f0f69"],["/tags/hide-attributes/index.html","c3d5806de4974374628ab501552fef9f"],["/tags/his/index.html","ce469cf1af197333c807b591d3554f50"],["/tags/hooks使用/index.html","0d58d9b67efb185906e1e87654e89cf3"],["/tags/html/index.html","5ec6ace66b9486d895a6d28ce8d49d54"],["/tags/index.html","994756cd1248caeb0c378d8e2d1f357c"],["/tags/inherit/index.html","74676e7e31f19cde658f56ea816188b1"],["/tags/js-data-structure/index.html","dba9adbc54a3445b59c0d409545ea2ac"],["/tags/js/index.html","865c6dcb4118c98f49691925f3d4ef6e"],["/tags/js面试/index.html","d00fe5b76835e03760136b5339d5313d"],["/tags/js面试/page/2/index.html","e2811c7992bca56716d857cf771459b1"],["/tags/js面试/page/3/index.html","fdaff864519ea2bdbcc930aad2105eb6"],["/tags/layout-painting/index.html","353bc1db4261f8e46eba0901fc036591"],["/tags/less-12px/index.html","269e5676720e61d4992fb05de98ed2c3"],["/tags/loss-accuracy/index.html","b5c0142aa7b7b6e03c268c9302b0bf18"],["/tags/me/index.html","e7eae0682a5eae634148f74a084cc4f3"],["/tags/memory-leak/index.html","bfcfaed53484404ebbb0fa49f9c0c1c7"],["/tags/modal-component/index.html","d26759aead6f055a710462f905771b07"],["/tags/module/index.html","5412bb59aeba5995f093d76706b09ec3"],["/tags/my-carousel/index.html","196f1faa6bf3d295e32de792d114e6b4"],["/tags/new/index.html","bd13af0875b3713b51bd5fdec5c19bea"],["/tags/node/index.html","898d3b5865b5d0e428eb4b37d3985599"],["/tags/object/index.html","f3282e4acb42972ca09d944845f4ae06"],["/tags/performance/index.html","5e618633831626ac1ed8a439f0a42d27"],["/tags/promise/index.html","f2ab5b59b5e9a661b482ec400d5017d6"],["/tags/prototype/index.html","027e2dd1fcc778e1533e276522722952"],["/tags/proxy/index.html","d69d4fd316e9c8e828fccb67d67877c0"],["/tags/proxyEs6/index.html","a5a6a703772a9f5cfbf179226c9cd1d9"],["/tags/regexp/index.html","bebde789d03bfaf62dd1cd7318b52aa9"],["/tags/responsive-layout/index.html","5d2d758b5e011fd20de6adffcb8b8f06"],["/tags/sass-less-stylus/index.html","f1365f81c180a776d6d8c19ee2c399fc"],["/tags/scope/index.html","c45841a247a13a29ac9c926c18b36c3d"],["/tags/security/index.html","e128e4711f9c3ad7d940489cb8acb3e8"],["/tags/selector/index.html","56058aaf4886e7fd2d16e8216771696e"],["/tags/set-map/index.html","dc02d5fe21fc9c8b9ba343e926cab36e"],["/tags/single-multi-line/index.html","aa97efa12524a99da368bdaca3bd800c"],["/tags/single-sign/index.html","1a3904034f08fbf3da7294f49abba4c7"],["/tags/string-api/index.html","21671ba0bea1ae858e44d7c65da09af2"],["/tags/treeshaking/index.html","d1379d176c4640c6246f6d5f48d16d50"],["/tags/triangle/index.html","b605921956ed81b53d571a5fc37a728d"],["/tags/ts报错解决持续更新/index.html","9b3826a8034fd117cf819b423aac9f39"],["/tags/typeScript/index.html","c50e7f5bb2246535c368a8ca7bab0b50"],["/tags/typeScript基础知识/index.html","112e879a1079995da06f20a9e0b6f177"],["/tags/uniapp返回顶部/index.html","877e3a92b7faebd793f2aae08e77a695"],["/tags/var-let-const/index.html","d6ac7076ab2490ce8aa5eba181cb3466"],["/tags/visual-scrolling/index.html","53353808c11ce883349c367a3af83e84"],["/tags/vue/index.html","371e88bcd7756a488da1f40a1c4a3266"],["/tags/vue3/index.html","c805da5f287bde79d66712f2966bc1a2"],["/tags/vue项目部署/index.html","7e79342a287fd4597a6055080a2f0c34"],["/tags/下拉刷新/index.html","dcd5bfd09cca141203348fad331d74b1"],["/tags/反问面试/index.html","71f0ffaafff5f4f2e76959d0a8100262"],["/tags/和/index.html","f90554c741e4e1903ab82f4c659bfcdf"],["/tags/如何设置文章置顶/index.html","df5726cb45d16274410139656b5322d8"],["/tags/微信小程序/index.html","c99836d9dfc376b07edb5e8cb97e8e14"],["/tags/星星/index.html","83f2b8b585de32af000462d66bae1361"],["/tags/防抖节流/index.html","ed96d49fc79026818855616f5d3f4e5f"],["/tags/面试/index.html","5090b474a1b526a5af375422c7ff11c5"],["/tags/面试问题集锦/index.html","2acde4a9b67f1c1c14f744e42ee63d31"]];
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
