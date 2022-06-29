/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","4f5d01e776c1e83c1ccdfa59b8797ae8"],["/archives/10bf1714.html","9dac16c910f9ae96b6f2f68c018bc231"],["/archives/14015a55.html","c1554a523312946cc0a712d69418db9f"],["/archives/171d1754.html","4e9873af3a421b3633cfe2bab66af269"],["/archives/17a85756.html","41e8cdfaded9f25c92e375f8d3108088"],["/archives/1879f8e5.html","281ee53c5f1997a7e265e5a631c14f9b"],["/archives/1be48ee.html","cc0d2de9033788fb9a990cd1312897cd"],["/archives/1e021099.html","594c654409445342da26f92d435b1167"],["/archives/2021/06/index.html","35eda60c1b21c90b4fa04b49b901d4ac"],["/archives/2021/07/index.html","5b13b18ce9278d928abbdcae5efa9907"],["/archives/2021/index.html","9a04298aa685fa7d5ac1dbbd95918c29"],["/archives/2022/01/index.html","cbb8d0a934965c0016b8ffed7476c1b2"],["/archives/2022/03/index.html","d7566b8708adaefff2470bf399ddfe83"],["/archives/2022/05/index.html","02b2f42c0a6e42168c5e9d8e7e370fa9"],["/archives/2022/05/page/2/index.html","6ce02de58255f44129681d8f9c2532d0"],["/archives/2022/05/page/3/index.html","3055efff42317c34c066736fb98c2b46"],["/archives/2022/06/index.html","29ddb3ad1a5b279f22908c2f67b49758"],["/archives/2022/06/page/2/index.html","581c4f1ed281b89d31960e597da96e71"],["/archives/2022/06/page/3/index.html","df778c515283cc9db786521feed2f825"],["/archives/2022/06/page/4/index.html","68375e17ea6bc87afc270cd7d9a6c252"],["/archives/2022/06/page/5/index.html","cee878108fd480356ce9040d2fc58497"],["/archives/2022/index.html","19b1e52cab2a16bb6564678a7567284f"],["/archives/2022/page/2/index.html","e9973667068fbb23ebc5098aed716eca"],["/archives/2022/page/3/index.html","6fba2e6527b1ef17dfdb1bfcbb7799a1"],["/archives/2022/page/4/index.html","7ec621a8a063c17eef1cfdaf8d0a57e2"],["/archives/2022/page/5/index.html","e471c0c03ece75ff7d01380ced7573f6"],["/archives/2022/page/6/index.html","d9de72c0c056c419a453dec26e7d41d7"],["/archives/2022/page/7/index.html","7c47d980e4cbfef9f67034ba6bb9f2ff"],["/archives/2022/page/8/index.html","8c501de133514185b7257375c7d56a4e"],["/archives/2022/page/9/index.html","c44408ed045b536d6550ec04e6e8ee01"],["/archives/203410a2.html","0608297ec1c9fe682edf74b364e720c9"],["/archives/2039e3ed.html","af1c104d543a19e4a71502fb56e09918"],["/archives/28d88e6.html","111fb2175c5378dc2a5c5e96687509ff"],["/archives/294b86eb.html","785bf44bf7c0e3eb1c35fa376c45beb6"],["/archives/2e20d937.html","4c3ce27685daebc06797e62dc81ddb93"],["/archives/2f8b36fc.html","52fd8f38ce0efa2d10ddb51e0bd78112"],["/archives/30b90bc0.html","42fce9626f17135a9c25af44368a2c61"],["/archives/336f0513.html","c44138ca9df7a2d1e1ae35c2cf0e8a1d"],["/archives/33b9c85e.html","ea35e6517d0cba7e0b870f324400d293"],["/archives/37919ccb.html","83b49396d9f7685f9199aaf8e5718365"],["/archives/39a5927a.html","5434f31967ae6ea51eca5c54e88296bf"],["/archives/3f038ede.html","65d32bd5372187f99f981174519c94d7"],["/archives/40f0eb24.html","31625d2d0f939b4801b17e08749f8665"],["/archives/41476be7.html","4b6033fff62337f92ce5c75d0c158984"],["/archives/42b82995.html","1eb2310059366c6ac96905de87154507"],["/archives/47c3840f.html","72789d367232dd9e79085239c59a5ad8"],["/archives/48078dd1.html","d99140430292beab49a684d06ae306c2"],["/archives/4dbabb82.html","c9195c36849f032b4494b7117da768c6"],["/archives/50cfbdee.html","6f3183a2919ac5ec0b0d46a1b33340c4"],["/archives/574fecf1.html","681e45e4c90843e1753f9661093ca574"],["/archives/59b49683.html","cdf3f39cdb7c8014634e2a68161088b4"],["/archives/67902db1.html","936e68026e270470c41466f37458e310"],["/archives/6be34445.html","951831785f6c314fbe884983095c9210"],["/archives/7331f3bb.html","d5877ea8c586d3bbf085230bbe3bc1b4"],["/archives/78ca6597.html","0383bf8b254e5c2ea81ef712821d4b2c"],["/archives/78cea6d8.html","3ca48068d15f2abfa3648cb6be3c446d"],["/archives/7b268071.html","18d3e65e388591c342f1f39f482f4766"],["/archives/7c942302.html","2434a148b329666e4c74d02e273048ce"],["/archives/7f6cf7b0.html","67b910ce2b7cd5905258a9fc8ba3269c"],["/archives/82d79681.html","f9569227a2abc91754b6f1286432f695"],["/archives/84a91e69.html","563a0c1310c81976ab8c7e07fc937510"],["/archives/857fe845.html","cf28a61aa6374a96bc2aea4c238910e9"],["/archives/8a9483a.html","f4110baaac87a855fbf89d052292b530"],["/archives/8d5284dc.html","83f80d0792fce0dc6a7a79aede10cd41"],["/archives/92004154.html","5c2beac1315b87dacf74f305724f7e0c"],["/archives/9370d73f.html","9a24ee1d7c6a081398ab43666ab0d9ff"],["/archives/93ae9a14.html","c25d3ee01efcff0daedb5b9f7d8985d9"],["/archives/9417ce47.html","249a9470f9512d93003c52f9edde693c"],["/archives/958c57b5.html","14e05d3db08eef49695493dcebe35163"],["/archives/9692e25d.html","cd485ead09429358a71cd748651f478f"],["/archives/97b76847.html","8fc288e46d27cc8c66f7ae35a86932f9"],["/archives/9a0dce2d.html","a40bc8ebb0b42e1ca6abc7653b44e5c7"],["/archives/9b0c2390.html","30e633eb73becc1da01dc3e6e8ab4449"],["/archives/9e5f33b7.html","c6f2d3950c793c268dea747e7c7558d9"],["/archives/9f1ed84.html","9d7e2b753a9cb3bb5e81e0d2cf6abdd0"],["/archives/a0245a2a.html","0ece7322ac89d12b4d48dfc4b8b4620a"],["/archives/a10ceeb7.html","f43122b287ffab0bf8a9f36770a642d8"],["/archives/a36a5ae4.html","5052d8f4c85c0ba0bd2d666a3ceed0a9"],["/archives/a8adabec.html","084a50b5e9d64e017f0961d0446d721d"],["/archives/ac5292c2.html","e1a538dc978dfdb60ab41e707d4d3322"],["/archives/adb78c8a.html","44b286a17e36f45fd6257525dc960336"],["/archives/af55d3.html","d5bcc8cce9d37cfedb5232ef35102bfe"],["/archives/afcd4575.html","7272009475e106f71f97d4cc4f607356"],["/archives/b21f48b9.html","72c8c9e1491963e87f5e89292b376185"],["/archives/b51bdcfa.html","d31d50af77c66105b66d6c75a13229df"],["/archives/b7b51641.html","83f26eab822e049fed24ba2e62af3102"],["/archives/b9f20a20.html","0a817f3fb8f67cf193970536575af903"],["/archives/be945145.html","bcb2f3c29567533ba41208867b18c405"],["/archives/c0add594.html","8a2518bc24e4d5bcf6c3bf6ee534ab3a"],["/archives/c242628.html","1b30c7344f4ee3e44e5e8408c46d8228"],["/archives/c59bd5c1.html","57169a5c7dcb9b4d84db383a80a9d35d"],["/archives/c5a6a264.html","e87e50cd34aef09ce5d3e69c242f34b6"],["/archives/c5a97815.html","90206085623a0ee809d34515484ce2b0"],["/archives/c7f4347.html","ebb376a4eaf508db5271882e31044541"],["/archives/caae163d.html","dbb2617e26dbe9b8e174be8206106404"],["/archives/caae7b70.html","5a1095c33cdb44aeb6a575e7b93bccaf"],["/archives/ced3960e.html","606aa7d0e36984f371390cbada24ba55"],["/archives/cf2f5248.html","3057669c829089bee5df86d58af19cdd"],["/archives/d3b694df.html","21c71c899eafdf7c3a0b8c5f5be4b120"],["/archives/dc3acdcc.html","7c0c9050caa7099721fac84ccaeaeb6d"],["/archives/df976d87.html","6ead2827cbbdac64d1c981dbf2a0fcfe"],["/archives/e0c98e7a.html","26df90a58a7e56fd7c93f8ae89d7a04f"],["/archives/e6437fbd.html","7c440d33df0b9df18544099984138084"],["/archives/eab5cc79.html","8c7fbddfc3f0c31c05ec8db75586af39"],["/archives/eb05a173.html","adeef0f98efd52644774ecb6410bc7e5"],["/archives/f1d0391c.html","3aaaef9c5676a582ec9e847a70d9b2cc"],["/archives/f3d3ee5b.html","36a8921c5a301db60c663debe49633ce"],["/archives/f7feebc7.html","0f8195fb88b7aa9a5354ab909667409c"],["/archives/f9f4b1e7.html","3137a25a7ad9ea2dede321c03ccf6493"],["/archives/fcdceb2e.html","f19204812c36a40edd724dc2037169e0"],["/archives/index.html","9449528a11e1a64b130cc964af89253b"],["/archives/page/2/index.html","4282059e40ca389be167ecf3f43a4ab8"],["/archives/page/3/index.html","cee57601b5ebdcbabd35652a875b2a22"],["/archives/page/4/index.html","8db6227c534a12de496061c989974df1"],["/archives/page/5/index.html","9aac3165902cdfc90749357594ee36ae"],["/archives/page/6/index.html","75edc2cc7e0a2027c9d17b9560e00be7"],["/archives/page/7/index.html","038e0bf646ce2a8229681cbfe484a3be"],["/archives/page/8/index.html","692b99fe3fabfe0e041cc5c3afe9ddc3"],["/archives/page/9/index.html","55bf218b33435f7379a4706ac406bb2e"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","2636aa338c0e0761e4fd268029cc5a5a"],["/categories/blog/index.html","3f6d539ff989c11a960477dcd0420394"],["/categories/css/index.html","4079a6e86755388f53e0386140127665"],["/categories/css/page/2/index.html","282a51f2db738decaadbe9a03370cefa"],["/categories/css/page/3/index.html","0cd14890facdf54807d58cfbb7e8bfab"],["/categories/fine/index.html","077d294af9ba1d314e55704ae35104f9"],["/categories/html/index.html","f10af361c95e86dcb3e1e581f275e340"],["/categories/index.html","42ba58ac6ffb17ba289a7426311a48d5"],["/categories/js/index.html","04e9a1f56031dbd0025ecc015e7a0d5c"],["/categories/js/page/2/index.html","f396b16c32183abb3bca5dd6aee2ee78"],["/categories/js/page/3/index.html","669ea8c9edc7c09131b100343e8f3413"],["/categories/js/page/4/index.html","25531ca8a8e86a9abf404b318ae7701e"],["/categories/js/page/5/index.html","611943faf03c14b43502f8df6ae8ba11"],["/categories/node/index.html","e94da2dce1d4caff578f5f4c04515771"],["/categories/vue/index.html","77a38a1050b51f51cc2a147339b02404"],["/categories/vue3/index.html","6dae179cb11ebba3828e027275db5050"],["/categories/webpack/index.html","d80ef5d8f107353f0f97e8ac080b65c8"],["/categories/微信小程序/index.html","4af4ae6e92bbc204900d8dab81086c74"],["/categories/面试/index.html","dc0fe5f6db140ede07151273a6a013dd"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","49c6e9327a80d4d56259c6001644d83d"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","908615207007c274dbad6ea9f4539cdf"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","e32b5919ccc35024d1b42d528aa2c339"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","f397613266a65e81180827b74ef37a99"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","1b6cfb414acda4d838be591250c33dc2"],["/page/3/index.html","5b74e124f049ea2b81af4f307bc88404"],["/page/4/index.html","d7a278c67115d6d7350150c4d3836426"],["/page/5/index.html","5429effa31e1dfbdef18dc92bac884d3"],["/page/6/index.html","9a0c46fb045e667e5502a0a502cbe11f"],["/page/7/index.html","57a54d8be27b23b1ed005d1604afd6d6"],["/page/8/index.html","8a834bcb746c540e9cc3b16e42d282f8"],["/page/9/index.html","2343abb4a568e0587592743a1160fced"],["/project/index.html","9ab66616f01ea7b66776f5b42bac0f96"],["/sw-register.js","522881cb2382e330431fe57d9b1a3ddc"],["/tags/BOM/index.html","35e21f74d20f466ecfafdd55cbb34755"],["/tags/BTC/index.html","8b8a80e2e6ed151c9a431c416b007c3b"],["/tags/Dom/index.html","2a9abfaed9b5609c7a587d21a9aa2fe8"],["/tags/JavaScript面试基础理论/index.html","4740fcd87afd4c2a0c51c56921e12acd"],["/tags/ajax/index.html","e28d3075e030e9a4d958409551113010"],["/tags/ajax2/index.html","fe211cc934c1c8065181ee839a74e350"],["/tags/array-api/index.html","80f3a4d2fab971273892602f1bce734e"],["/tags/bind-call-apply/index.html","96e5b86404d4a85786c27f0bfa4d0fb9"],["/tags/blog/index.html","551d160226a1237917eb1f16950c0708"],["/tags/blog个性标签/index.html","4555639f2b604a399e7d6f81b923d24e"],["/tags/box/index.html","9987748b388c7675f5cb1e88b9c02186"],["/tags/cache/index.html","cf1bd5d7b07cb0670b36d5fb4d549825"],["/tags/center/index.html","55e09edab81c94b6aeccb02dfb7e223d"],["/tags/closure/index.html","511975676231c7bfad1c52365e519cee"],["/tags/column-layout/index.html","3918d81458cbb72b5b818e2550f5b7eb"],["/tags/composition/index.html","3702690c5070de3b5c1e7ac932152203"],["/tags/context-stack/index.html","f0f2c6f4bef27202424236979961a432"],["/tags/continue-to-upload/index.html","de3ef0ac0e76d1f9590ad83e0b4b1b15"],["/tags/copy/index.html","3e05f7e654ca988eaaa78be55daab36d"],["/tags/css-performance/index.html","a013568cc8539eda8c3d6422bb38cfa2"],["/tags/css/index.html","15989fb44e029e4596dd3c83a328f33b"],["/tags/css3-features/index.html","95a90a95dc0c5f1fb29be8da81065f08"],["/tags/css面试/index.html","2ddd649c2954e5e63c2ac1a11490b3cd"],["/tags/css面试/page/2/index.html","8af88230deea095b5cc8723f6d9481e2"],["/tags/data-type/index.html","7a0e5c4f592f9f85dc87c1e64a57fc93"],["/tags/decorator/index.html","988cb62f9e385d8ec40cf77fc0f227ce"],["/tags/dp-px-dpr-ppi/index.html","3651d5e9ec9797cb1f5ccef1346bca0d"],["/tags/em-px-rem-vh-vw/index.html","91e37acb537039161a307799eaef651a"],["/tags/es6/index.html","9873aa87eb1b5731f83361bb4a600204"],["/tags/event-Model/index.html","f8d07727b17081bc72a9c2a87edf8759"],["/tags/event-agent/index.html","202e79ccc1151ecb11b355954ffcf549"],["/tags/event-loop/index.html","7d2bb78d2ac9e9ba7896db47535bf8c3"],["/tags/fine/index.html","794391104c2c317f17dac4a7d22a3c5f"],["/tags/flexbox/index.html","8e8b9d0215b0ea19aa98240c21e43fde"],["/tags/function-cache/index.html","71d0d5e8272d46267f82cd52b71407f5"],["/tags/function/index.html","753c99bfd73936e711f69bf8c4ba50e6"],["/tags/functional-programming/index.html","6f23377956c912fe1d1987ef7e1d51f5"],["/tags/gametime/index.html","c42f63e09afd6cb61bdf2399b2b80de1"],["/tags/generator/index.html","8312f91d7a49e4f3f0275dcda7ad7adc"],["/tags/goal/index.html","8bf72875c6883cf094b45940165b31f9"],["/tags/grid/index.html","6673e622ac495f7e9a55b2ad938aac4f"],["/tags/hide-attributes/index.html","42a899b09aff98fbd7949c5f345b67ff"],["/tags/his/index.html","58e88941b6dec88df6957752d8e34223"],["/tags/hooks使用/index.html","faf339b47cf5ec92b97f48a2d26585b6"],["/tags/html/index.html","4e57aef5d69ac08b07894aaa28318308"],["/tags/index.html","ea7fae6d40de75b6a07e8a610ee5586b"],["/tags/inherit/index.html","ed31fa47d20e6742e042203b63c0a569"],["/tags/js-data-structure/index.html","4bf81439a16a240481b1f4ef8f7a8346"],["/tags/js/index.html","f5913f3f681168f33102a663a71ad441"],["/tags/js面试/index.html","ccfd43514d44979c7b1cbd8462570925"],["/tags/js面试/page/2/index.html","9e6492c18fbb768994bcd98a2ed412ea"],["/tags/js面试/page/3/index.html","d02f56386bd8f74c742fc475c688694b"],["/tags/layout-painting/index.html","a3e1dca37e49e4b1ce9bedfaf5fb0710"],["/tags/less-12px/index.html","e07279645cb7e3feb0a941fbcef8aa30"],["/tags/loss-accuracy/index.html","a0e7fd4409f95198fdc1ef9da41e8418"],["/tags/me/index.html","c5ee06a452d7c65e5e813bfb31db6df3"],["/tags/memory-leak/index.html","a2d8b3228037389afe482955d8a3190a"],["/tags/modal-component/index.html","e9f4d3a66a074995aab23a57db3d1fd8"],["/tags/module/index.html","8394ae782b5e8dc9b9b3f0d043d3ec8a"],["/tags/my-carousel/index.html","e9891a997239ad6e5728560556bffc12"],["/tags/new/index.html","ae36d46a042fd0255b3c709c0d5c73be"],["/tags/node/index.html","9658e8b39593820ebd30d97ce7327704"],["/tags/object/index.html","4d19af8b9b8bee465fb6c0875284c470"],["/tags/performance/index.html","5591cd6ee65a471f9a3a5e91795bca40"],["/tags/promise/index.html","8461abae26e6b05b676cbe5a4f9856c3"],["/tags/prototype/index.html","ac4e8da4bc7818a598323c2d8fa2eefd"],["/tags/proxy/index.html","b3b0e21af20f7f4b93e2f145c0739978"],["/tags/proxyEs6/index.html","085bd85ba14ebe2234449cfd155a7148"],["/tags/regexp/index.html","dbefbfb379877194f7b25a811ed774aa"],["/tags/responsive-layout/index.html","b847907c1b703bf1af2fe0a0da2e5c1b"],["/tags/sass-less-stylus/index.html","d7416b54f8bad3749359cddeaebffa7d"],["/tags/scope/index.html","52141df9c98dbc5c65f37baae000448f"],["/tags/security/index.html","3dfff8c92d843e7a98c1ffc72c6da017"],["/tags/selector/index.html","c6b892c74744f0dbe0c21fd5a07d493e"],["/tags/set-map/index.html","87bf99b6e9760eba44c24a13f00bdc97"],["/tags/single-multi-line/index.html","26137cb6808a529abe2ba5682a802e25"],["/tags/single-sign/index.html","909440d071e810f0caa186a9ceef6931"],["/tags/string-api/index.html","615b729556699f8160087ba8f3cd3928"],["/tags/treeshaking/index.html","2a18536024bdc6fc9439d6b15d04a204"],["/tags/triangle/index.html","b83eaabbe7b1521fec047a2d83359ef7"],["/tags/uniapp返回顶部/index.html","b91b903c02fbef7fd866921565ddd8de"],["/tags/var-let-const/index.html","fdf46cef5664f246ea4edb70c0afda85"],["/tags/visual-scrolling/index.html","0bb08c777ec60bd69093f19881e6be0d"],["/tags/vue/index.html","bf7d67e8cf82e791baba826191c30237"],["/tags/vue3/index.html","5bc0865d8f6455a0a1d3dbbf364e3139"],["/tags/vue项目部署/index.html","bbc54f4d24a8c683d3cb532045dada61"],["/tags/下拉刷新/index.html","518c54bfd366a495c74d5f07aec303a6"],["/tags/反问面试/index.html","72b8292d640af92ee0797bf3b8eb42cc"],["/tags/和/index.html","aa04ff59517d9b325e48d61c8413e888"],["/tags/如何设置文章置顶/index.html","3672e1964f24384b5b4d4ab52b76fcd3"],["/tags/微信小程序/index.html","0e56a2482e37f2329386c00dbe3df888"],["/tags/星星/index.html","5b23651f3e06c534bb9669820f5e5bad"],["/tags/防抖节流/index.html","faa11511cfdce657a0a214429477bf7a"],["/tags/面试/index.html","cf45ba6877f27d0c5f573692a958fbfb"],["/tags/面试问题集锦/index.html","b934ce2ffb68d3e32282626f6ffbe1ec"]];
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
