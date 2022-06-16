/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","bcfbe530e08a6ae68555e82972822528"],["/archives/10bf1714.html","8de3df92e3b0191a43b7e3b2320fec70"],["/archives/14015a55.html","5afbccdc6df3a0589b311aad01f8b074"],["/archives/171d1754.html","e6f242607b08343f3e537dad8b300232"],["/archives/17a85756.html","8aef743893a43754a0416cb4e29ae297"],["/archives/1879f8e5.html","8a38571511038b5ba4ca698c5764d574"],["/archives/1be48ee.html","f7e88cfa7e0168e31c35ff7d360809f1"],["/archives/1e021099.html","83d8129eefafc548418563f37e89d07c"],["/archives/2021/06/index.html","70b9e6f05d83ae70fe0eb0b7cd874579"],["/archives/2021/07/index.html","12f7011f0d8aef9ae80773b58d2a0735"],["/archives/2021/index.html","aa88f1b6fb2f54975e89a7042616a66d"],["/archives/2022/01/index.html","0ad8c495753cf50fb8d8c482b1a6bba6"],["/archives/2022/03/index.html","7e320833f834db73fa028b556299a8d9"],["/archives/2022/05/index.html","e3d78578baba672becd221f6290fd873"],["/archives/2022/05/page/2/index.html","d76eb8e33ed8586633e41f8a4d63e1ea"],["/archives/2022/05/page/3/index.html","31c8a68255539a6c8aad6e37774a12c0"],["/archives/2022/06/index.html","677c6012ba7b149e62a4432ab49e033e"],["/archives/2022/06/page/2/index.html","0cf0e22a4ac2fcf0e34ca68569fbfefb"],["/archives/2022/06/page/3/index.html","6bc41ea52e81f02e3ef82cd7776d142b"],["/archives/2022/index.html","458f61286dcd9f77c923e3a82c35f8a1"],["/archives/2022/page/2/index.html","4c81fc1ae89abb034c111b11bd6eb08d"],["/archives/2022/page/3/index.html","059ea17e28e58e7af14baa0c266e7a10"],["/archives/2022/page/4/index.html","654dacfc982aa7d209a82c0813b51b93"],["/archives/2022/page/5/index.html","cb7d0d62aaf125b0f821ff8052efd066"],["/archives/2022/page/6/index.html","f0f052f9f7c2ccbda09f37b770d88946"],["/archives/203410a2.html","c40d08e6bc04681b1c045c40f63f4978"],["/archives/2039e3ed.html","5a982680e6fc3ea71fa104078f9b99b9"],["/archives/28d88e6.html","760ea6d1eee349f582e28b6b5d481c40"],["/archives/2e20d937.html","2fd5ee6ff691650d8a4555cc22637786"],["/archives/30b90bc0.html","a0d7989936a4a051b5a11567bb563733"],["/archives/37919ccb.html","6d4861a449fd000176c463ccd87f3baa"],["/archives/3f038ede.html","1df30c324519867dd3c1d0add16ee7d8"],["/archives/40f0eb24.html","69a36db45efad5ea7d3493a9f80e1a94"],["/archives/41476be7.html","5550b48cc3c8a69e3546427f8094f12f"],["/archives/42b82995.html","3de4e163e7a15199871bd0b8cdb4fdf9"],["/archives/48078dd1.html","784a0979cf2bfe8e0805751fcb323b5b"],["/archives/4dbabb82.html","24f8b2549595655c0b6f18bc52ef8212"],["/archives/50cfbdee.html","09058b358de2488b73ba641889e9087c"],["/archives/574fecf1.html","c8500c35ba2aa6fa0e4d60b749770246"],["/archives/59b49683.html","a5e7e56c8fd313870796e27f3efe1c06"],["/archives/67902db1.html","a9ba7aef1a7d551669068e14accb991a"],["/archives/6be34445.html","d51930e0ac1dfd996da074c824dc1fca"],["/archives/78ca6597.html","114cb4eae123b0755bcad359ba003838"],["/archives/78cea6d8.html","dd514e1395f4cc7e95715ebe6ad2340f"],["/archives/7b268071.html","ecd07be25c5c635f79d041797ba32c34"],["/archives/7c942302.html","a745dc966e9ec6b2fae06ecb8f277e35"],["/archives/7f6cf7b0.html","7757b263fdca213d7549ce8b8aff6db9"],["/archives/84a91e69.html","0fd2f0ab7ad082fc7905619e6b228d36"],["/archives/857fe845.html","fa43f159ac224dd7766827f84f8ff6c5"],["/archives/8a9483a.html","007feb70db938eb5355cd3083a775970"],["/archives/8d5284dc.html","f1914e19d01d82d2371136bc7c666b7e"],["/archives/92004154.html","30ba641a9619522082c0a51a6e437b7c"],["/archives/9370d73f.html","f1573d36c1796a3caa99c44f5947cf2f"],["/archives/93ae9a14.html","ae0bf5c730fdeabff32b1159c7cb4976"],["/archives/958c57b5.html","328762d6880fc8758c16d7eea949bad2"],["/archives/9692e25d.html","fcc575a61c6b8247a7ceb1be10e4db08"],["/archives/97b76847.html","25fd6839adc21706f9f2d1e2936ad726"],["/archives/9a0dce2d.html","8e35454921032fe6bfc29796bcdfb69d"],["/archives/9e5f33b7.html","3824ec709cd759c566040f54b84f46ac"],["/archives/a0245a2a.html","90a46b08df76cf3cd551d685eadbd043"],["/archives/a10ceeb7.html","322c389576218a714fc8cde1099575c8"],["/archives/a36a5ae4.html","36ed6be1fae502b7600a7c92b135069a"],["/archives/ac5292c2.html","56ef8bc8e971ced0ed83f221d5377abc"],["/archives/adb78c8a.html","8cdfa78ee35c58f11fba501a2a173375"],["/archives/af55d3.html","562da7cbf26ccb76464f51c4f757807f"],["/archives/afcd4575.html","5303ce081f3ca443abedfa5d8e1aab02"],["/archives/b21f48b9.html","d1c7fab5207518a21be88c44065d449a"],["/archives/b7b51641.html","5f44a89f79cde9ca2e848c6d6c3d3843"],["/archives/b9f20a20.html","17c070e8cf679df6e4897404f5d3c255"],["/archives/be945145.html","d46b4b107cf9356123cfd0d3cdf8d50a"],["/archives/c0add594.html","2949366839f80ed58c264025292a309d"],["/archives/c59bd5c1.html","994e99e473e467aefbe2b5fc96f7f915"],["/archives/c5a6a264.html","43e469984557249838d52035608a9404"],["/archives/c5a97815.html","561cfe1f1e31eb0e0bb4c0a5cbd1e776"],["/archives/ced3960e.html","7ed679325e296689c05981caad8b1fca"],["/archives/d3b694df.html","61e085d390dc73de919745ce2cdd8928"],["/archives/df976d87.html","6cdb14f6235d421f86377c20970c2f08"],["/archives/e0c98e7a.html","20fe3c656b5f0ce831090eee218e570c"],["/archives/eab5cc79.html","451a213e7c89cf44000bec01db09ef62"],["/archives/f3d3ee5b.html","326885d64a1f951fd3cb79a33ec1586b"],["/archives/f7feebc7.html","e03a9fa8b1d688abca4603767419a31d"],["/archives/f9f4b1e7.html","dfdad66a525148c9e4a012d0c7514773"],["/archives/index.html","b149b7f02a74928d73e45986fb9561f9"],["/archives/page/2/index.html","6835688d6bbbc0de5c2dde53f9f9d5a5"],["/archives/page/3/index.html","0a3829808581d6469dc1a0bd3ab289a2"],["/archives/page/4/index.html","c727ec2eb19143ef3dae48ef46f3267b"],["/archives/page/5/index.html","1996a17a7489b83fd87c603abeab188b"],["/archives/page/6/index.html","e7f0c8c7c87e4458085c9c80a5444ea1"],["/archives/page/7/index.html","7bddc9745271f21491979c6e7848ea73"],["/categories/ajax/index.html","f60a98360b390bee8e670db5de38b91c"],["/categories/css/index.html","00356451df8df71df9f2b29fd10ad201"],["/categories/css/page/2/index.html","d7a32b99e1e45ea334c58c5f7c8bd339"],["/categories/css/page/3/index.html","ffa169f1965bd0f6f319c9a5b29986db"],["/categories/fine/index.html","4efe0f702b01a883ce01c7d2a06f9335"],["/categories/html/index.html","2d7b119f735318af8c6a9c3980189269"],["/categories/index.html","5a79f5c976480d54eb8936c5b3e082c8"],["/categories/js/index.html","16895a99525d14f062eabfa4b87becee"],["/categories/js/page/2/index.html","408d6779fc1e4aa1afe67fd9cce97b85"],["/categories/js/page/3/index.html","b1133f1bc55ba61fab1e156a207a989e"],["/categories/js/page/4/index.html","7049ae7f9398f97c40ba1644c2cc66a4"],["/categories/node/index.html","cf48ed9880c1d83910acd7329e5611aa"],["/categories/vue/index.html","5a955d5225d8720e18ae2681b96bb2ff"],["/categories/webpack/index.html","444755749974858254fc950051846e7e"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","0f124d572cb89d3489524b9f5a65662d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","49c6e9327a80d4d56259c6001644d83d"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","2fd82899f08ed3db124dbb8195552666"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","14e1c8a1f93c4772bbcc0f7fa1cdc980"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","a73defaa108c7bf404f65a6980a0b61b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","80c8c390c145d877e9d7b5aa133f216f"],["/page/3/index.html","8ae59a04c0daf984610358d5dd032f4c"],["/page/4/index.html","13b5134b06083699edc694c6d90e48c7"],["/page/5/index.html","21b9fd64075b1de7631f884c292abb75"],["/page/6/index.html","fd5e70c45dd51f3ae00d2290c059ea51"],["/page/7/index.html","ff3b2d8b13b4aa3ab1a0108703686ebf"],["/project/index.html","1132c74b13c2c6fa54acb6948adb9088"],["/sw-register.js","7713409d425946ff2ac598ee50d6fbc7"],["/tags/BOM/index.html","99543c9c66819667e18059211712149a"],["/tags/BTC/index.html","edd521e14ba130d27dd7e8e0b3cf77af"],["/tags/Dom/index.html","8a4314c6af5ea03e28d7ff5e95e7c354"],["/tags/ajax/index.html","fe278a5c9c92b673b66121ff080d101b"],["/tags/ajax2/index.html","ed76643a5988f329f7e1906c3151196b"],["/tags/array-api/index.html","8e256b5d9ec8689ffd3e697664606dfe"],["/tags/bind-call-apply/index.html","6c8d5d9808447c40e3e7c1584a471b00"],["/tags/box/index.html","ff20a976de524f3619e7625b5524c1d0"],["/tags/cache/index.html","ee790f8b993c0816a8af9ddcd124b0a4"],["/tags/center/index.html","3a8dafc805d24ed1dbb3c6cc7461ebc9"],["/tags/closure/index.html","fcc35fba8cc6b704e8e067cce53c5a56"],["/tags/column-layout/index.html","baae926630629012371ca8e468feb42a"],["/tags/context-stack/index.html","a2b91b63d22eeb36e87988c9b4f48bb8"],["/tags/continue-to-upload/index.html","9307c55931888c88977911b73d40ea95"],["/tags/copy/index.html","6111de7ba2ce188eaf326dde430ac8c5"],["/tags/css-performance/index.html","59147ba6f5e4f5a2250af2af07736b95"],["/tags/css/index.html","ecf15b7007be2b05a8312ffbf04343d1"],["/tags/css3-features/index.html","8cd5b74225f40fc6ee0c84318b8e335f"],["/tags/css面试/index.html","7e7bb57751cf4a0b807ab6ba799ad5d2"],["/tags/css面试/page/2/index.html","7d879ce764c5100b4d986b6aa950021f"],["/tags/data-type/index.html","ab5224f00d1264b150635238f21f44ce"],["/tags/dp-px-dpr-ppi/index.html","1bcac04dbc6942feb788f79b71676e9e"],["/tags/em-px-rem-vh-vw/index.html","84b9330b44d8dc29c1d4bc14d140fb86"],["/tags/es6/index.html","ffc0f0fc61ebb9ecdc668324600ec741"],["/tags/event-Model/index.html","eeb78a98d8f4013315209a5207964c1c"],["/tags/event-agent/index.html","b35830742fc2fa0dccc685ef890cf0ef"],["/tags/event-loop/index.html","1001010698a4485acbc06cb6d56844bc"],["/tags/fine/index.html","4b76f66803e1543701ac1d376c8a6d78"],["/tags/flexbox/index.html","284c03676175f8de1e523b04a867b72e"],["/tags/function-cache/index.html","4fdbedb4b5c88987b476d30b63185a1a"],["/tags/functional-programming/index.html","8f0138eb3a787b0a330c13b6bbc09258"],["/tags/grid/index.html","d3f21f4a2be393fa5fd1392c85780662"],["/tags/hide-attributes/index.html","d368907a5cad2a99a216c7b11a4b2205"],["/tags/his/index.html","02cbeb3d2ffe907b9f9223a9d61fb3d6"],["/tags/html/index.html","0c9a0b323aa2bafefbcbcbcc6bff0994"],["/tags/index.html","b90fd64ddfe3503e73472706d31e34d7"],["/tags/inherit/index.html","9298fe275c463b65d908792f1bba2ab0"],["/tags/js-data-structure/index.html","be7230adec2a06ae9e540635502d54b5"],["/tags/js/index.html","9a7afcde6e8839fe93f0f9d203500f8c"],["/tags/js面试/index.html","9fe3470feb38a258946cfeea346d4795"],["/tags/js面试/page/2/index.html","814a6e92ad5c86513ea92ffc20cd3152"],["/tags/js面试/page/3/index.html","f8c725c5b200c765adc3893a0312c06f"],["/tags/layout-painting/index.html","f618da56052cf9c2d4ae56c399155748"],["/tags/less-12px/index.html","51bc9873774b5e25cff2f2c65e3b3159"],["/tags/loss-accuracy/index.html","da57331afdb5418830df6b488042e5e3"],["/tags/me/index.html","2fb611c53ecf50818e2531f8dcb8b529"],["/tags/memory-leak/index.html","9b7ed764b1a3f3c69e4721b98a68bb97"],["/tags/new/index.html","e0ba69d7bdbf186d27a71d0d50d87bfa"],["/tags/node/index.html","9a11aed394b0deef98f8ddc4dbb719b4"],["/tags/prototype/index.html","8c0c30ff01a6185a1d7b8b46eaf0e2d5"],["/tags/regexp/index.html","d532c4c3df21c95a2d9163abb873c5e4"],["/tags/responsive-layout/index.html","e7b69e3fd1c28de07b40818db3ca7a9b"],["/tags/sass-less-stylus/index.html","1d131a8e8eef4b04915c11046240ed41"],["/tags/scope/index.html","d70d99f06b1db2b5d9b7399a9fd6c25a"],["/tags/security/index.html","9bbac07d0fc998641a80fe4cf2f4f428"],["/tags/selector/index.html","320114399c19f9e7b9f32c6c054a05ab"],["/tags/single-multi-line/index.html","84f9954d0a2876fa15807d5382556c67"],["/tags/single-sign/index.html","e10e1310eb58cfbf65c1549d1f0b9ea6"],["/tags/string-api/index.html","8797318a678e816a97b5697314c1936a"],["/tags/triangle/index.html","23db274926d1261a209d003de8c84ab1"],["/tags/visual-scrolling/index.html","0e31074b1d668da006c66fdac2edaa1d"],["/tags/vue/index.html","029fe96735670060928963798557f687"],["/tags/下拉刷新/index.html","08fd9a54644883b2881cbfbeb1df40be"],["/tags/和/index.html","fcb38591545c117ce7c91271cc2aa175"],["/tags/星星/index.html","bf0082beadf34d258b589e35e35a79f3"],["/tags/防抖节流/index.html","25a6a55f3256010e89d069c99abd0741"]];
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
