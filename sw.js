/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","a69ae59a45cf2441203334425a93dc94"],["/archives/10bf1714.html","09289a73a8d4332cfe2c8a8168e008dc"],["/archives/12529ae2.html","327f171d1b4e7a1794c1cf97c57f4956"],["/archives/14015a55.html","f7db1aad055e989ccc4c741d7e454182"],["/archives/171d1754.html","e2276b5e9738fa8bb1757a9a13dfca91"],["/archives/17a85756.html","e65348cf9e5420b078372b2254295ba8"],["/archives/1879f8e5.html","4f5b812e36ce73888342d4b07fc526f5"],["/archives/1be48ee.html","e60838da183b3aaf56a7ebadb3d72714"],["/archives/1e021099.html","ee4a966ccd78c1960ef0a9feb1109fa8"],["/archives/2021/06/index.html","951985f9853374d0c390bf2b0039ebf7"],["/archives/2021/07/index.html","6a841a36b067f10602d8dcecb427c284"],["/archives/2021/index.html","b2caf3e8215db52b2ee3ff865a2e7877"],["/archives/2022/01/index.html","224e9104d74ffa9bcb2e5204ff370a72"],["/archives/2022/02/index.html","7450cc9f70321530cac1a3ea2f875f43"],["/archives/2022/03/index.html","bf0fa3ac97f1d60d9ca58a97450c24ab"],["/archives/2022/05/index.html","82bea97ad5eb6ea101338f30c4cf0973"],["/archives/2022/05/page/2/index.html","93ae47891afc0c78ddc42ad6beed06c8"],["/archives/2022/05/page/3/index.html","1663fb759b0f0c6e934edb55515d7143"],["/archives/2022/06/index.html","2e1597a2d06ba98963ccb50559c6fe82"],["/archives/2022/06/page/2/index.html","c17ff0a4a7f1904303dcc5cde89834a2"],["/archives/2022/06/page/3/index.html","aace8ed8a680ab5928011d9d6b90e83b"],["/archives/2022/06/page/4/index.html","251320c27f39de63c316bee339e67817"],["/archives/2022/06/page/5/index.html","9917ee2b9fca857a6f78f74149a53470"],["/archives/2022/07/index.html","34b1a8a9e9248bc6384d673e834f7912"],["/archives/2022/index.html","7ab46575b5eec3d787327b3d66642f94"],["/archives/2022/page/2/index.html","7bac579fd60f5ffd49e4717ea16c2bb9"],["/archives/2022/page/3/index.html","c678781b1ebb19b97e9b5fa9aa9b5ab7"],["/archives/2022/page/4/index.html","7f8f5f2b01dbb45d621a1b4e643ea824"],["/archives/2022/page/5/index.html","1d67e72fe93ec26f620bc61342489a92"],["/archives/2022/page/6/index.html","446b796249ac3f7dbd5ef11465e136a5"],["/archives/2022/page/7/index.html","5e8786ff1342d9077622764525c98105"],["/archives/2022/page/8/index.html","2caf14be0dc9db6a6ae286c85080af63"],["/archives/2022/page/9/index.html","3aef7fd339299bc252b73b345dff4cdf"],["/archives/2023/03/index.html","c4d9a288bc7c1d2d8c91a54b65800b61"],["/archives/2023/04/index.html","e4ad74e71385018324cf02eea604f7f1"],["/archives/2023/index.html","820af302089bcfc978e27e9f364d6fa0"],["/archives/2023/page/2/index.html","8acde477bdd86614dca19f19a89610ab"],["/archives/203410a2.html","510471cc28af4d540a1ba4a944521414"],["/archives/2039e3ed.html","34ff908d3915f45c3c1b290ebcf8a72b"],["/archives/28d88e6.html","633343f064aae0971fdd571000657fe8"],["/archives/294b86eb.html","4371bc937230186957ab22d070263f3f"],["/archives/2b098523.html","78621dacc9c2038cc88a42731dad2e48"],["/archives/2e20d937.html","f753c920fdbbbff7605104a40f9dbb7f"],["/archives/2f8b36fc.html","a1614dd94c890f7bd8a0457a858a00fb"],["/archives/30b90bc0.html","aeeeeefe5a33c0086bab79b3bceee734"],["/archives/336f0513.html","7bcc68f5ce9766e52eaf79b6f9e6d3ce"],["/archives/33b9c85e.html","4f63e3983f910ebc939a885592f65214"],["/archives/36044e1a.html","6bc5cda34ed994b37c79a46760711113"],["/archives/37919ccb.html","4950faccad73214e09a8b915a5473c39"],["/archives/39a5927a.html","c1920cc04730a3be4332e851ac79ea6b"],["/archives/3f038ede.html","35580c9ced877b453be1ce55da0b9ea0"],["/archives/40f0eb24.html","2d31c09700a9e5fdb1e38160076a31fa"],["/archives/41476be7.html","f46960df2f078c63373149d43ae49622"],["/archives/42b82995.html","90f42f75ff53bf528336929343c9e99b"],["/archives/4311e35c.html","adde814e0dc534ff07db42d3c156249e"],["/archives/47c3840f.html","2c780a5e1eb61297f8edaae21ffe8ff1"],["/archives/48078dd1.html","7ba4a98605d2b08c654310f7f1ca80ec"],["/archives/4dbabb82.html","1959eb0d75ca13ecf02511ca1b8db173"],["/archives/50cfbdee.html","569ffda618e0bdbb6025b5e3185dbfd4"],["/archives/574fecf1.html","e8407c7443b116547cdc816023a7b443"],["/archives/59b49683.html","a862e5f7bc08cea35bccd7dc42145922"],["/archives/67902db1.html","a6c5ba113809b5d412b4f654d2f88c14"],["/archives/6be34445.html","75de829fbbed43bf58b0380782f49c0f"],["/archives/7331f3bb.html","c148191103e6f9f2ef7b711340202e04"],["/archives/7472fc2f.html","7ebc1f4adb8be4c6f8bfb07573ecf782"],["/archives/75b2f6c6.html","4b75ed7aa458de99e135262fcdb4305d"],["/archives/77971af0.html","fdcb15996f4b7f6e1e82013d6a3dbc49"],["/archives/78ca6597.html","878c4ffddca60ea9231e52eff5cbe83d"],["/archives/78cea6d8.html","5c203d45abf299678e8e660a0ad9b883"],["/archives/7b268071.html","5bde1514b7af3c753d5ab5885d7123c7"],["/archives/7c942302.html","b8290da6321e75b9586ae5203efbfcad"],["/archives/7d76407e.html","316f3c7190882afcd99c8c310461e4b6"],["/archives/7f6cf7b0.html","5ad35bf81deddefe30b877d03f26c12b"],["/archives/82d79681.html","31b2a3546cedf179e73d60c286fcfe25"],["/archives/84a91e69.html","e3c76011ef931b71c3e62d4125fda48e"],["/archives/857fe845.html","7ea1c2bf2f90c73bbc776e898a86495c"],["/archives/88d3d46f.html","31e622057514f39965f8530bd5f835dd"],["/archives/8a9483a.html","47f56f87bb66093cbed4708078fc97ff"],["/archives/8ad35e55.html","44616fe294e4b03ca9c5d2b56fc6ead7"],["/archives/8d5284dc.html","4e024cd4b535c22dee8e69ba690987e2"],["/archives/92004154.html","2a25f722f076ecd1963ba33a4bad60eb"],["/archives/9370d73f.html","6f1b20fc58ec3964a033930dd561b33a"],["/archives/93ae9a14.html","a89d69870694e4639f1786a7ca3da4a6"],["/archives/9417ce47.html","13048673c25c5f1ee52cef0a8f0b0dec"],["/archives/942a5c06.html","6a1c49523054d5acb2ce6e91f5dc627f"],["/archives/958c57b5.html","94cdcafdfcfa20424d05510cb5807fa2"],["/archives/9692e25d.html","860eba1815bae1791745f7be3a4298aa"],["/archives/97a9ab5c.html","ded1b6105ba24374daff90e49e3d7b54"],["/archives/97b76847.html","71e1bbd0be5a338cf8755435bae23e78"],["/archives/9a0dce2d.html","e40dcb23a8c99274f737e911c8596e48"],["/archives/9b0c2390.html","4698d599fa04ba2a7405d8068e66a0c3"],["/archives/9e5f33b7.html","127d334f037b8282926d2c5a9e9a4d28"],["/archives/9f1ed84.html","7c57ff72f8cac813773e14251989d7a5"],["/archives/a0245a2a.html","398f293f1189cffe6ebec487648f9183"],["/archives/a10ceeb7.html","17b535e4819a67c037ef91106d78a341"],["/archives/a36a5ae4.html","fff07bc80c9269741d72f3c39479e885"],["/archives/a8adabec.html","f8d3191c53e6d290273da527176def2a"],["/archives/a9432027.html","7621088d88306f6a1d70f1c73117d260"],["/archives/ac5292c2.html","9ae9a4fd925dc9d08f8ee19e48d820d4"],["/archives/adb78c8a.html","17597f9b04a81ef5872a4a8f98d827ee"],["/archives/ae4c07b8.html","f472b2e602a52894f270f7ee9352769f"],["/archives/af55d3.html","4484cabf76fb52095d04c8139880eb32"],["/archives/afcd4575.html","3ca31719ab2dc6e148702d5b64e1cc4e"],["/archives/b21f48b9.html","ea29209d0fb3ba0ea82ce392b57820c3"],["/archives/b51bdcfa.html","4d48a85745e43f649362485e510b18e2"],["/archives/b7b51641.html","ce0cf6072660d13d6b22cf21b4217990"],["/archives/b9f20a20.html","22f42dce74f753d50b6ca1163a6ba733"],["/archives/be945145.html","b1a1a29a99fa95544a73f281c049544f"],["/archives/c0add594.html","94ac61c1e7c8dd11304e2295d890cf57"],["/archives/c242628.html","c7054cca49fc93674fd37bbad301a46a"],["/archives/c59bd5c1.html","82b72d6124d3b5814bb42b5c29f7349c"],["/archives/c5a6a264.html","d2965e851f3d46957859704817cbaf33"],["/archives/c5a97815.html","9350bd906599309bc682c726e4e76d4d"],["/archives/c7f4347.html","3a3ab0ace51d9dc94b508106285fd44f"],["/archives/caae163d.html","b87716a44d52ea091abecd0ef1f8ff86"],["/archives/caae7b70.html","cac75c8ccd6f3e015742cdcf9cc8b405"],["/archives/ced3960e.html","cd4f128b0830f31225300275664ddb2d"],["/archives/cf2f5248.html","92040744846285c6e123ed417151d18b"],["/archives/d3b694df.html","b0151e2f7bec2b79fea41ca0fbe07716"],["/archives/dc3acdcc.html","0ba57732b279f67222fdf96e21f0a7dd"],["/archives/df976d87.html","149b700b8595866510f87c740c530d47"],["/archives/e0c98e7a.html","0639f9c9faecba9d2fc963d4ee9d6c11"],["/archives/e6437fbd.html","2bec3fb70a4ec93bb447decf5023c2db"],["/archives/eab5cc79.html","0dbeda8decd4d6d23625a721f2764a0a"],["/archives/eb05a173.html","ba2d62f5eb25c3b657d0f9980678848b"],["/archives/f1d0391c.html","15f81e2e2b0a312bfc2c1d41e41bb3bf"],["/archives/f3d3ee5b.html","6a786eec010f3f031a5c968a1980e6d0"],["/archives/f7feebc7.html","b5fed5d80dea4b53dca1d42cce68d76d"],["/archives/f9f4b1e7.html","6c718e983d5afdbf4d96657e9e69f160"],["/archives/fcdceb2e.html","ed89dd7c2d5682e569eddf5d14b255ad"],["/archives/index.html","47408d281b0af4861da81db18f2d3a1b"],["/archives/page/10/index.html","4f6bc3fd2fec3e79632299da59307bc2"],["/archives/page/11/index.html","02e8af9d702e592b3ebe779078468608"],["/archives/page/2/index.html","df74daa49dd34da9fd1ff8c776dec549"],["/archives/page/3/index.html","91a7a04a0a9fb306664c451b161152f0"],["/archives/page/4/index.html","62d9886ed32b183e784dd3a938a92734"],["/archives/page/5/index.html","9ad7c45a71e11201a6c98a8d9a22ee6a"],["/archives/page/6/index.html","94a4cb24d0bc1308811361eb031a023e"],["/archives/page/7/index.html","3425a15e038fde68f1cca4e536384ea4"],["/archives/page/8/index.html","ef12f1bb307e118a431540216b5fc3f2"],["/archives/page/9/index.html","e05b2fbe291d5c36e6a2619329ad17d2"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","cabcd738105d1a8dd2c58b8eb329f8dd"],["/categories/blog/index.html","31d36b27b85413e938f62432cf4c2a3a"],["/categories/css/index.html","fdaa2fd12bbc4efdfea7260ac4939798"],["/categories/css/page/2/index.html","ee35cd38bbbd81a227ca037526c0eb55"],["/categories/css/page/3/index.html","a41fe66cc68d6b58617f015a95f233f6"],["/categories/fine/index.html","381ff52f57e0a8744751a69d549dbc28"],["/categories/html/index.html","e69288574de6af03b513cbbe990359d5"],["/categories/index.html","712c229c0295785754ac1ec6b6a703b9"],["/categories/js/index.html","9428e2832655917e6bad0b9e7ca0b756"],["/categories/js/page/2/index.html","9b42a99884568bf8105133e15b8851aa"],["/categories/js/page/3/index.html","4e2949ab745b57f1e19ced2160e94449"],["/categories/js/page/4/index.html","52262b1db86a4ef773a47a23948e8e4a"],["/categories/js/page/5/index.html","6cd331e5646952b3a7dcb731b3bafeb9"],["/categories/node/index.html","4c7fcf3f0605eef3f48d55f7a5d2237f"],["/categories/notes/index.html","adf05e4e7f1c3d011d5d1e702b7ca14e"],["/categories/react/index.html","c2e628146d3de5755ebdd32a981a58f2"],["/categories/react/ts/index.html","7e5acfb169039d787da5f9df9400aa22"],["/categories/typeScript/index.html","18b94eb6221e1404b439a127658bc77f"],["/categories/vue/index.html","d23672128ae58ad0b9d27b147167d3df"],["/categories/vue3/index.html","2b7e82ab3502ea745f958ada4c5783a2"],["/categories/webpack/index.html","65dd05b908f2dbb5a83edbcccb24145b"],["/categories/微信小程序/index.html","731ec705ac8c52d04621129a83a8af98"],["/categories/面试/index.html","02647af91a402d937ab655048315e6a8"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","d2f9d80c1f30ff3b496ddae161d23a53"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","32a11a1ed7604b696f6bc37b2ff4ce0c"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/ts/images/01.png","c922cd12dab12bd6c46ee93bdd4205d8"],["/img/ts/images/02.png","3aa2056326e5d1c796af4ee14d5aa795"],["/img/ts/images/03.png","5d4a8b39b62c2c484b45dffa7f71d2a5"],["/img/ts/images/04.png","9005165e16c5fb263c3850b77b8c60bc"],["/img/ts/images/05.png","996ddffc76d0e5750a82f5a0473501b4"],["/img/ts/images/06.png","a52bf4f321fab1fee87cb087e0d22d04"],["/img/ts/images/07.png","36e3a3b114bcfad55498a774d9342e4f"],["/img/ts/images/08.png","3607e0c5650e9afa1384f2aac4009d62"],["/img/ts/images/09.png","dbeb822550e8eb71e78714035d790d38"],["/img/ts/images/10.png","e4a25517b0548f90ac6bef9d471ba0f1"],["/img/ts/images/11.png","dad677e46db0955c7d139a83b4b82cec"],["/img/ts/images/12.png","9745157eeb18de2635a64f65aeb34ea6"],["/img/ts/images/13.png","da212468d2ee4f8e9ba1f97843983786"],["/img/ts/images/43.gif","37c2e56cbc5c7a6fa18b043f8959a61c"],["/img/ts/images/44.png","6fe8492e0a34f7997c26473101a5352c"],["/img/ts/images/45.png","f799db600172453b1e1c864a85a9809a"],["/img/ts/images/46.png","9035adfac7596edda51156dacec1da06"],["/img/ts/images/47.png","2d75b31e7998a1e3c5ecec69a833a1d0"],["/img/ts/images/48.png","13beb8460f834a2a86866f9efaad66f0"],["/img/ts/images/49.png","540398c418c42be7de9f28b79882a107"],["/img/ts/images/50.png","18e4e8ef181ffd7eff2d1844cb704536"],["/img/ts/images/51.png","76bf41ed3e6bf0c976973364eb52fd76"],["/img/ts/images/52.png","f5d555290bc571215dd3ec30fd8aad42"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","ccc80838ca1ae1ad81db0a984f807307"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","84ca6d71615e8774c26d1ab9a63b541d"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","5389ccf404e88a39fc900157d0ddd810"],["/page/11/index.html","2c24e31562f3d34574974a5058ef1425"],["/page/2/index.html","41b513bdc40ba179ffa3d0d60bac04f6"],["/page/3/index.html","b8ed4166e3a1737eb8571e81b62be9ba"],["/page/4/index.html","dbb988871b577c486e15ae4c5e6a1c1a"],["/page/5/index.html","b00e396cfc0a20f2667f1d0dd20e9a20"],["/page/6/index.html","719d4aa2930a933ab21444c456f50974"],["/page/7/index.html","484e2c3827a5d1f3bfeba1656d3d4b5d"],["/page/8/index.html","72fd3bfad288f8988da1cbbff5252564"],["/page/9/index.html","6417e48b99d8ff15ad6909b376db668a"],["/project/index.html","a76429864c4d55f476bcb77cf162037d"],["/sw-register.js","f9b61e4706b1b1ff41b365f4cc2cd267"],["/tags/BOM/index.html","5b5668e6bd99b84f43caa1b46fbc45fb"],["/tags/BTC/index.html","18d4189b25da572827d1da678919be8e"],["/tags/Dom/index.html","89324a4a9ad271be1ca8956933ef1668"],["/tags/JavaScript面试基础理论/index.html","0a3a48fc7592085ade732c2fa8f93511"],["/tags/ai/index.html","2658fdf892dc67629c1ef356a9727185"],["/tags/ajax/index.html","950de0eb703618fb6bba9b524b28234d"],["/tags/ajax2/index.html","5a24e28b00123f660ce20916e11758fc"],["/tags/array-api/index.html","7d08c1e01d87ed4891105b0bd2456a6e"],["/tags/bind-call-apply/index.html","32e8e2de76c7a97b19db7d5fbf3ca9c8"],["/tags/blog/index.html","72a84de6d66b85da09160707dd346380"],["/tags/blog个性标签/index.html","da79bb41fd0b774457833486151a9851"],["/tags/box/index.html","2966aeec2b21a922e3329fbd7a801b3d"],["/tags/cache/index.html","e0f8275b816da5733e12b98bd64cc2ae"],["/tags/center/index.html","30f8c06cf19f5bf387ec347464d7f14f"],["/tags/chatGPT/index.html","212cd06d7c8586d1fe927d4251b37792"],["/tags/chatbox/index.html","cfd4c264924a4d4a7c6a44f36f2ee52b"],["/tags/closure/index.html","b60d8fa4bd2c2d55903e75a444f01cad"],["/tags/column-layout/index.html","c16e29d3dc8035c7b8100c4c27c1ec2c"],["/tags/composition/index.html","12c8e2535f7931b54955a226617b4586"],["/tags/context-stack/index.html","66514103dc5c115768fd9b5d15c94c70"],["/tags/continue-to-upload/index.html","e4853156632083edcf8d6486bd149bf8"],["/tags/copy/index.html","25c84ca2d8e55d6b0ccaf7979b81c27a"],["/tags/css-performance/index.html","216c69c18ca69071cff84dbabe51ede6"],["/tags/css/index.html","52af5995ce23d9db9b37dffbc31979ae"],["/tags/css3-features/index.html","1fdd6cd3fbd23e6cbe6d8b4bc86bbf6e"],["/tags/css面试/index.html","bdde7db1ad40a55c680d033db4775a93"],["/tags/css面试/page/2/index.html","d060da8b7cc4cee7c272f6567ba2fef7"],["/tags/currentTarget/index.html","fbb06baa1da699dac079406f35d24088"],["/tags/data-type/index.html","83df7908431d83c9d3487cd44157d14d"],["/tags/decorator/index.html","57736c60c06eded897c729e5dcb92347"],["/tags/dp-px-dpr-ppi/index.html","b0b75f22b9ef1dd4b16d649df9e9d27b"],["/tags/em-px-rem-vh-vw/index.html","e0a313e0ed1920a0b0f03e24d18a1e59"],["/tags/es6/index.html","5cd162ddc74feebe1fd7b0faba52cc88"],["/tags/event-Model/index.html","8b48caa949e74900ac82d1cf20ae812c"],["/tags/event-agent/index.html","984a3a93840d07ba435055a2a7557670"],["/tags/event-loop/index.html","08b91b424cde02df237d568c45e32e04"],["/tags/fine/index.html","5260d7a59d47af614a36f8d3f766afb0"],["/tags/flexbox/index.html","5c32dc2974eab28c742582818a18e85e"],["/tags/function-cache/index.html","bd3c6b432d2f5367092fa57a126d689d"],["/tags/function/index.html","d85e1ffe7957f2bfff218b504b9e3afa"],["/tags/functional-programming/index.html","26b22d17a58355306c9f4e51e907d2df"],["/tags/gametime/index.html","add6fd7b832b53f95489166b91314b91"],["/tags/generator/index.html","f4422a523cd5ca4762249cc03b4da600"],["/tags/goal/index.html","e50d4b6d22d6ce589df8633b4d1c0b3b"],["/tags/grid/index.html","550a468e9328c0e9666cccc3e32efc8c"],["/tags/hide-attributes/index.html","a655cb8dcf965d507356e4457e026602"],["/tags/his/index.html","ff822facb7c36692a8886b65b340900a"],["/tags/hooks使用/index.html","4cb233a8ef73e14572980dcc15f2602d"],["/tags/html/index.html","d194d9ac46a9f434fa02b54a4a9fa98c"],["/tags/icp/index.html","f4e13e31a4a6464ee33fd3047001a4e5"],["/tags/index.html","d31fbd82144908b7540c0a7a18f658e4"],["/tags/inherit/index.html","7c853a135c37866db1904d3fbccf588c"],["/tags/js-data-structure/index.html","cc1c77e0646085226f3355b1ff7a2e93"],["/tags/js/index.html","4af8bb83465dbea6330a8713c8c6c36b"],["/tags/js面试/index.html","e6f4a43c1e4cd3273a3c0be5821943a8"],["/tags/js面试/page/2/index.html","25026863e0be6d8295d06f36362277c4"],["/tags/js面试/page/3/index.html","c8b64c0b11f09700023da326f4eb07fa"],["/tags/layout-painting/index.html","a0e9c2b4b84b382a0741244d0f7ea621"],["/tags/less-12px/index.html","30fed474b1b63ae1cf54a77caf5eef1c"],["/tags/loss-accuracy/index.html","8583c9eb6a50ddae4d021d9f9d70ac20"],["/tags/me/index.html","84f587d1dcb6392b473006cb7826b461"],["/tags/memory-leak/index.html","e2538a5be041439b5bddbc54702fee1a"],["/tags/modal-component/index.html","e03d44252c76101d7af57c15203ef456"],["/tags/module/index.html","d5dbe36a0ddab08ed6b81589257bf8bc"],["/tags/my-carousel/index.html","bf4fa34f93d638f6779fced2a078bd42"],["/tags/new/index.html","c267dd1812c42869be8549ee69a7caca"],["/tags/node/index.html","3aafe1c4516b5a5baeb88b321e249182"],["/tags/object/index.html","fdcb3ac25a0e691f85dfda8af020829d"],["/tags/performance/index.html","646c1eb232fd3d3703b65806681c1691"],["/tags/project/index.html","ee680a43c607ba8e85ecfeab0af9ea4c"],["/tags/promise/index.html","00416384c53f3637e4bc69e5c54b5726"],["/tags/prototype/index.html","7fd163495137ad5a29c1fb528d95ddd8"],["/tags/proxy/index.html","e02e9c1d63bbfd3d69d586433f9fb165"],["/tags/proxyEs6/index.html","6007dc2ac9da2ced79ef91bea9b31629"],["/tags/react/index.html","fbc1e2ff2c0b0cdd2e6f0805c47a105e"],["/tags/regexp/index.html","8bab0cb2d37533464175932f461d40bb"],["/tags/responsive-layout/index.html","822689b6d345e88b96e694ff19bf20a4"],["/tags/router5/index.html","31f14e6b7a15a277e992dbbc980a916c"],["/tags/sass-less-stylus/index.html","5235d6e877c1f974fe37e7f2ee99a99b"],["/tags/scope/index.html","f0f0589913a4bbd8e4880aade86c5752"],["/tags/security/index.html","2374e895fcfcff48fe1518ae006e1d41"],["/tags/selector/index.html","e493df82a8c25a221038b63e3aadfe83"],["/tags/set-map/index.html","e254f4937c5bcbd37bccd06d8e0a3cda"],["/tags/single-multi-line/index.html","54cc33dd8baff359f598868e4f62f839"],["/tags/single-sign/index.html","759947e8985acd1f9490c3ce5f093b1e"],["/tags/string-api/index.html","e0360fff1e7e3e7c476b9470f08b9c72"],["/tags/target/index.html","aa668d1b38fc20388e9a19d3926c55aa"],["/tags/treeshaking/index.html","92954059f7aec8dd472438d111e3ef6a"],["/tags/triangle/index.html","fd5ee4a4c4c7b25bb61632fb08551a59"],["/tags/ts/index.html","661fb689a070ea1672f75dc8827e0db5"],["/tags/ts报错解决持续更新/index.html","94329fba5d21e152d7109e5686aadc4a"],["/tags/typeScript/index.html","a22c1ee8475435589e2dd1ef78618780"],["/tags/typeScript基础知识/index.html","230f130476be8cc4700935bc67a02892"],["/tags/uniapp返回顶部/index.html","df4a7caa3d327118f328be0a3c9a71e1"],["/tags/var-let-const/index.html","42d718a7891945cc26175e51331e66f5"],["/tags/visual-scrolling/index.html","797a326e65f89d29ae0b5d8e0850fce4"],["/tags/vue/index.html","c2d7360d647cad7a90316be3601a06ee"],["/tags/vue3/index.html","5b54c5db66eda1df5d0ee4c2b9cedcdd"],["/tags/vue项目部署/index.html","c547d2e345f34525b060cfd7ac10c04b"],["/tags/上线/index.html","d40d58ac31c893245d36a49b1803c724"],["/tags/下拉刷新/index.html","397ef26a7f530c111f3d6f530504fb23"],["/tags/分页/index.html","5041f5f94ce2e11459f379960aaddad1"],["/tags/反问面试/index.html","9d7931e98a4ba990a97ebe8c4bfff43e"],["/tags/和/index.html","881859a518af81108ff95868cf0dd581"],["/tags/备案/index.html","ea68a05d7a679d68c9891a3acc9732d8"],["/tags/如何设置文章置顶/index.html","0cb19fd057f20008c3e27920c5cc2689"],["/tags/微信小程序/index.html","a1540087b8aa2400f371a369172d1bea"],["/tags/星星/index.html","260023850b47fd6f6f82faf0e2983c67"],["/tags/防抖节流/index.html","f67061e63fca65e776f28f13654f4155"],["/tags/面试/index.html","a1feb5f1fef78e85032d49e23c3423c8"],["/tags/面试问题集锦/index.html","69949a016840ab6e80d5e0e9426c5947"]];
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
