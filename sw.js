/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","3f26437b4e804a2b6dd1a68e54907755"],["/archives/10bf1714.html","09d3e03f7739c872ed343d6fe31632a8"],["/archives/12529ae2.html","228073bc5a040e9cec1725628b2bac78"],["/archives/14015a55.html","2d88f99a77fa1904b2d859b810ffeb75"],["/archives/171d1754.html","0e52c946e24092ae9bd3a6a896c525d9"],["/archives/17a85756.html","a2707989db79a285019ab3ec2023b33d"],["/archives/1879f8e5.html","12e293c9ff148092046c540fb75c1141"],["/archives/1be48ee.html","559ed20f5b4461aa0caf1bb843d8ac00"],["/archives/1e021099.html","9a0c11e58556d53e4c96381119093569"],["/archives/2021/06/index.html","70be07713dd1e45291b6b62341933a2c"],["/archives/2021/07/index.html","5744273b74880d907cec5940aed9c045"],["/archives/2021/index.html","7b6a4fcf5576815ddbfaaf0ee68d0ad3"],["/archives/2022/01/index.html","90dbbf6a55382d0f2b4929632c83d983"],["/archives/2022/02/index.html","20f3540d0ce68b6d311977ac19ab7aaa"],["/archives/2022/03/index.html","066c7e05f64d0869ecf9100a4db8aa6a"],["/archives/2022/05/index.html","17998fedd60e9aa60c2b7fe598b0e3e0"],["/archives/2022/05/page/2/index.html","da7e1d8017905488b39afb83012d431c"],["/archives/2022/05/page/3/index.html","a0ce3efd90169423b222c841edaed5e8"],["/archives/2022/06/index.html","93749b97f0513c48ba7629f30b639ea1"],["/archives/2022/06/page/2/index.html","4156155087dcdb123df75fa0f5b4201a"],["/archives/2022/06/page/3/index.html","daa01ca0d81107027b133507373a5bfb"],["/archives/2022/06/page/4/index.html","47d23bf9bd288bda650f4d121dddfc9b"],["/archives/2022/06/page/5/index.html","f1a7d0d243f7509d9fb2e205cbc0fba2"],["/archives/2022/07/index.html","38f8a45919d1e2e7946d216650d7501a"],["/archives/2022/index.html","e4b7aed87787055594b1fa594bf18c43"],["/archives/2022/page/2/index.html","c690eea0e498fd89741f8ae49515744a"],["/archives/2022/page/3/index.html","1c54c106cd825612bdd8707963b8504a"],["/archives/2022/page/4/index.html","6455a8174ed949897012aa9319b15ef6"],["/archives/2022/page/5/index.html","da2d50583d25ab14a265821d7082d625"],["/archives/2022/page/6/index.html","e6cb0550b4ecce456559c2a8a00aa45b"],["/archives/2022/page/7/index.html","e1dffbb881a6d750f6dea47d5400eed9"],["/archives/2022/page/8/index.html","5b9689ae9fa2c72630a74be3d0063177"],["/archives/2022/page/9/index.html","048544b2e97f3d9f9be318ff2171f834"],["/archives/2023/03/index.html","e0b1ec7e77598c908ad8b96d81bb03df"],["/archives/2023/04/index.html","228bfc6002e64b41753510e4000b974a"],["/archives/2023/index.html","49b608dee2e95d0f88c33c8b4301fa51"],["/archives/203410a2.html","3c42943d7e43c058d6e7ffff30fe591f"],["/archives/2039e3ed.html","c95d323501adeabdbd08d24ec90fb521"],["/archives/28d88e6.html","56dca4c2e412d281a7a88d45b28c248e"],["/archives/294b86eb.html","816c04f2c72ee3dd722b13eee535bb5f"],["/archives/2e20d937.html","e4ade42efdaa7fb2ec2561560fa6c250"],["/archives/2f8b36fc.html","6a55876ad24818a4f947f96c7fe962b1"],["/archives/30b90bc0.html","153f1e6d8d5d4b4cefd0ad9604f58311"],["/archives/336f0513.html","a7b116533f636cead956c85bb6248c47"],["/archives/33b9c85e.html","80113634a6cc1ee6cb88ac35be33de24"],["/archives/36044e1a.html","74920769954a42082c35ee36d65459b7"],["/archives/37919ccb.html","b20d20a01cc43a959b83bdcdcfa079c3"],["/archives/39a5927a.html","f7f9dd672f84fea8c1b15c90e05449b1"],["/archives/3f038ede.html","54608b33cb0ef48a15b314785ba5f94a"],["/archives/40f0eb24.html","64f87af04ce3dcd548e809e903b65c9c"],["/archives/41476be7.html","ce9530dd33bd767fa63ab0abd37ac6d5"],["/archives/42b82995.html","2747d34f24d20200b9e5b8e88dfb42c2"],["/archives/47c3840f.html","9576c89c71e4a21f85bcd85226279d7e"],["/archives/48078dd1.html","906b0c5f2f432d4b250ba72d996e5f60"],["/archives/4dbabb82.html","f166e46eb60bf648095e8585642f0e7a"],["/archives/50cfbdee.html","b222509409f1f56e03d1f4c6257d4444"],["/archives/574fecf1.html","64dc6789e9ef8afef589fce0441a3059"],["/archives/59b49683.html","663ee3409d39fce5f16a5af97db41be7"],["/archives/67902db1.html","9a6423a36f7bccd9d2446e86f6c7163a"],["/archives/6be34445.html","06dd09f9f7f7ed7a70da9622f4a99047"],["/archives/7331f3bb.html","b52da14b4e67715de7106e7690e620d5"],["/archives/7472fc2f.html","f31626eb429c2482168f2ff713a04500"],["/archives/77971af0.html","902284a9ef8717d2eb7fb446ccdabae4"],["/archives/78ca6597.html","6929a5e91ce99b2341bcb204d4a428c6"],["/archives/78cea6d8.html","04fc4f5bbe066a6291ff793105fd640b"],["/archives/7b268071.html","88b46b4879471ecc25e30f16ce95b33b"],["/archives/7c942302.html","d51e2e5b9dc6319b572edec9360823be"],["/archives/7d76407e.html","dd3adbecbd2334ecc82c47ed69a979c8"],["/archives/7f6cf7b0.html","614910fd86bd86ffb64bb67e2f48b6ee"],["/archives/82d79681.html","0e770d2ed3b4d94c8fd89bd134831d72"],["/archives/84a91e69.html","d94bf74bc4ff88d343995e245d687005"],["/archives/857fe845.html","e1453dd50e927629dfc4ed5652c32b2d"],["/archives/88d3d46f.html","b8b4eb0114e27673d8a5a7307e366b31"],["/archives/8a9483a.html","64d93ed8254e9306b10b2a246edd85f5"],["/archives/8ad35e55.html","93b1c39c37380a3279abc440db9c1f60"],["/archives/8d5284dc.html","bdc245159234abec3821ff019033b74b"],["/archives/92004154.html","fd012638435c64b14239c948126fb1e2"],["/archives/9370d73f.html","846dd348d3188abfa39964714370ee30"],["/archives/93ae9a14.html","af907a9f5498ff55e41343dc44a2fb29"],["/archives/9417ce47.html","9af08746997c0a1866b04d031f4dee3d"],["/archives/942a5c06.html","b07f60d7eea456bf97ffb9c888b97b1a"],["/archives/958c57b5.html","f5314d249594ac69d45da1448a0bf09e"],["/archives/9692e25d.html","b9fdd7d2ae9d15bec03916f9c7c63c88"],["/archives/97a9ab5c.html","b9f35f11c81b68e9d0bb90e6525a0ce4"],["/archives/97b76847.html","f2d69fcfe2b7611714913a0b46647837"],["/archives/9a0dce2d.html","d628542033990123e263f951350fbbf8"],["/archives/9b0c2390.html","42eaa93a96b4cd0d2cc072641ecb8708"],["/archives/9e5f33b7.html","b904b50548d05959bac83642f4255682"],["/archives/9f1ed84.html","78d06971ce8ac9f1a3814fe1b8f05526"],["/archives/a0245a2a.html","5450d3c2123dca4172b738cfc4e93e93"],["/archives/a10ceeb7.html","66190dcea1536ada5b397cd2608b212a"],["/archives/a36a5ae4.html","dde83d6612c85d271bdf3a3e00057320"],["/archives/a8adabec.html","c0244d19b4dabe2f20eda6c7de729548"],["/archives/a9432027.html","78905105c5ed5632ed25ef7a79194096"],["/archives/ac5292c2.html","5a831691f7c71823a3248d2405aa7f83"],["/archives/adb78c8a.html","cb38dd4d12c792819fcabd760d86828c"],["/archives/ae4c07b8.html","2cd56a6468a59719025724e17f6509e8"],["/archives/af55d3.html","2ddd9d9523575eafc2696a17fa5ecd4c"],["/archives/afcd4575.html","56a340c38b5f0b76a69d2721ee77b447"],["/archives/b21f48b9.html","8b57442bb9532ba61d83bcd829138f2c"],["/archives/b51bdcfa.html","c03ef0555ebf7423ccd3be905c4f3ec7"],["/archives/b7b51641.html","e31a260c651ca6f8c105d5e7ad16a2d3"],["/archives/b9f20a20.html","dd5f0c8f5b2726f323303d60c7777a37"],["/archives/be945145.html","446de06ad2ba54b3416174c1b22202c7"],["/archives/c0add594.html","985d528273b8ce4c401d8df5d3037b56"],["/archives/c242628.html","4857142bc51f5810fe7ceed4bdd27a5b"],["/archives/c59bd5c1.html","fd39bab744acc905daf3deba0ca6cc38"],["/archives/c5a6a264.html","006672aa35141cada6e23eae8f2d7812"],["/archives/c5a97815.html","b9450b5a4db3a6a05bbc30e514ab137a"],["/archives/c7f4347.html","f524232275962c302b17cba8c718de41"],["/archives/caae163d.html","39df7b86b94dcf5944ab80468184b848"],["/archives/caae7b70.html","804e36947fba001954fcd18ef9574027"],["/archives/ced3960e.html","ae9df1686208cc84f67b4dd3734421fa"],["/archives/cf2f5248.html","ce69072bb8124f5d63c95f195e3780e7"],["/archives/d3b694df.html","6080043cdfe3872f366da5795f05d45b"],["/archives/dc3acdcc.html","8e5c9d80ffb2ef40bee145b8b4058389"],["/archives/df976d87.html","4690cdac22b6360777fe7c593022a277"],["/archives/e0c98e7a.html","05ce4f804fb09052276cdc26e3595f35"],["/archives/e6437fbd.html","5cffbe555be4ce05b3b3572e898594e3"],["/archives/eab5cc79.html","ca00c066b1d169124b7c57d46b3ecab6"],["/archives/eb05a173.html","7196b51da2cbd0c1f7a2312dcfb2ffa8"],["/archives/f1d0391c.html","8c4437d444a5ac8dd0a23609732daf05"],["/archives/f3d3ee5b.html","4fbd10f9c13376b598b19eb8368545cf"],["/archives/f7feebc7.html","e2d6530722adc1ac78fa3b4e174407ec"],["/archives/f9f4b1e7.html","0e7681923fef50f8b2d2ae9f6cd6e10c"],["/archives/fcdceb2e.html","7acf05005e5c6d50975ea3d1dfd6186d"],["/archives/index.html","5b7491d629e700cd9cae542d9e1fd611"],["/archives/page/10/index.html","b450411a72ed208df2fd37e15291b9f1"],["/archives/page/2/index.html","917ad9ce8b36addf01015d24bd4d7510"],["/archives/page/3/index.html","4c35350860b91719217f0744f3d7103a"],["/archives/page/4/index.html","da02ef483286859312eaaba0ed8230f7"],["/archives/page/5/index.html","65cc29954a8be352fcef3e579721cf1a"],["/archives/page/6/index.html","cac5c713fa70ec9739d476a93c914871"],["/archives/page/7/index.html","9622b5a783c5d76a47da09cd67c5e4d4"],["/archives/page/8/index.html","5ccbc97bc282a7d1900e444de7b90d24"],["/archives/page/9/index.html","4cf48634e7c3b72966ac42be6112caf3"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","40f61d177794c505516441a7f39c3878"],["/categories/blog/index.html","23a744247e257c0009c9c3e64f4a1085"],["/categories/css/index.html","7fe206bba7feca8e3a2ba5a674d88052"],["/categories/css/page/2/index.html","bb4955e262409182ed6ea2180dab319e"],["/categories/css/page/3/index.html","c77b8c716bd12ce92e4282b4a593da2e"],["/categories/fine/index.html","d31199f5d559762e54fba7f80f6846df"],["/categories/html/index.html","4c92b27d8ab38f8bd7c97aafb6e136ab"],["/categories/index.html","4363e69478d4a182f5c099e8ff9630f7"],["/categories/js/index.html","eec2fa9e9867e26747dcc9bbe048a5b8"],["/categories/js/page/2/index.html","232be6ac39164c014ca82eea9e5224eb"],["/categories/js/page/3/index.html","59cfd29c2dad92066988f97e13bdf6ed"],["/categories/js/page/4/index.html","75cd1e9359fde610f93756d507c0aa43"],["/categories/js/page/5/index.html","ff848323141b2da61c5bfee1383af701"],["/categories/node/index.html","0eaa5d530a26fe9954393e13368d287a"],["/categories/notes/index.html","7f3f884e3c6b04f3a6d27ed04bc6ccfa"],["/categories/react/index.html","a3c5357adb79fa0afc45b56dda5cf963"],["/categories/react/ts/index.html","39e5c0e320fd733e44bdb8f822a35a88"],["/categories/typeScript/index.html","c8f7006bd014455e8e59725ff6c82023"],["/categories/vue/index.html","7e57e0e6d0dfba087e34912b0ef7363a"],["/categories/vue3/index.html","512fdd38f5fffeb05f74013ff19246dc"],["/categories/webpack/index.html","078ab512e1d07ad6a93d5e9b1972ba35"],["/categories/微信小程序/index.html","6ba73add4c66263c01b6e5c9eb59ffbe"],["/categories/面试/index.html","a061d6d73ef61c46979abb402386dbd9"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","d2f9d80c1f30ff3b496ddae161d23a53"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","71b7a9722b8b9b52093d8bc97d46ac6a"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/ts/images/01.png","c922cd12dab12bd6c46ee93bdd4205d8"],["/img/ts/images/02.png","3aa2056326e5d1c796af4ee14d5aa795"],["/img/ts/images/03.png","5d4a8b39b62c2c484b45dffa7f71d2a5"],["/img/ts/images/04.png","9005165e16c5fb263c3850b77b8c60bc"],["/img/ts/images/05.png","996ddffc76d0e5750a82f5a0473501b4"],["/img/ts/images/06.png","a52bf4f321fab1fee87cb087e0d22d04"],["/img/ts/images/07.png","36e3a3b114bcfad55498a774d9342e4f"],["/img/ts/images/08.png","3607e0c5650e9afa1384f2aac4009d62"],["/img/ts/images/09.png","dbeb822550e8eb71e78714035d790d38"],["/img/ts/images/10.png","e4a25517b0548f90ac6bef9d471ba0f1"],["/img/ts/images/11.png","dad677e46db0955c7d139a83b4b82cec"],["/img/ts/images/12.png","9745157eeb18de2635a64f65aeb34ea6"],["/img/ts/images/13.png","da212468d2ee4f8e9ba1f97843983786"],["/img/ts/images/43.gif","37c2e56cbc5c7a6fa18b043f8959a61c"],["/img/ts/images/44.png","6fe8492e0a34f7997c26473101a5352c"],["/img/ts/images/45.png","f799db600172453b1e1c864a85a9809a"],["/img/ts/images/46.png","9035adfac7596edda51156dacec1da06"],["/img/ts/images/47.png","2d75b31e7998a1e3c5ecec69a833a1d0"],["/img/ts/images/48.png","13beb8460f834a2a86866f9efaad66f0"],["/img/ts/images/49.png","540398c418c42be7de9f28b79882a107"],["/img/ts/images/50.png","18e4e8ef181ffd7eff2d1844cb704536"],["/img/ts/images/51.png","76bf41ed3e6bf0c976973364eb52fd76"],["/img/ts/images/52.png","f5d555290bc571215dd3ec30fd8aad42"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","a633984476e021bbe3419d62d0962463"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","3fc24449f29659b31704aaaae41c4b18"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","03865fd17aa871fdadda82e2beb23d77"],["/page/2/index.html","c85fef143b8ad430a39c34d21ba25813"],["/page/3/index.html","fa82045c053eab8874d2e32250c60f69"],["/page/4/index.html","b72290df31548fbe6cad56836a8f2fe8"],["/page/5/index.html","147fa198f87013287402a77e3be09b2b"],["/page/6/index.html","fb96c90240d8857c25701ab60d7a7668"],["/page/7/index.html","b7ed3500bf35808d5312f4aa5858656f"],["/page/8/index.html","dd28945b8176fee6347dd1a6f8572fc8"],["/page/9/index.html","257894814d927507c7037bc0fb109972"],["/project/index.html","e5373400108565abc332fbced86d47eb"],["/sw-register.js","b9ffa922d9fd1b914c9512d834a31c33"],["/tags/BOM/index.html","abdfcc606c6fc786158d82247d545b86"],["/tags/BTC/index.html","d0ab3b798e58159637ef1d9ae8f5b027"],["/tags/Dom/index.html","b35b120bef958e75d9c05b698b454ba0"],["/tags/JavaScript面试基础理论/index.html","825df47374ac1c3b05b1b25762204b48"],["/tags/ai/index.html","c96811b7c899644fd2fcb0379d4c88b2"],["/tags/ajax/index.html","d9416c13e7ecf3ac889ded9110ebb4a7"],["/tags/ajax2/index.html","575688b6b254b460c05db9b0074d0c0a"],["/tags/array-api/index.html","9949feff914c976b11ff435af7b25525"],["/tags/bind-call-apply/index.html","44c9a224839db627e4ea003ad025beec"],["/tags/blog/index.html","2663ecf19156d5cb29ef70bb16a7835c"],["/tags/blog个性标签/index.html","be2c52768d9565eb23226b1c2f291078"],["/tags/box/index.html","715974205b1e01d6ea703cf3c0b181e6"],["/tags/cache/index.html","66516c39600ba7a5ae5265884aae7c75"],["/tags/center/index.html","9c37f6e3eaf7a9d39c6b703bf15a03f9"],["/tags/chatGPT/index.html","5b712472a30166e01e0dec15ad0d2700"],["/tags/chatbox/index.html","b5dfb3778bfd3c70c526de401563efb4"],["/tags/closure/index.html","a68fb2dd644b80a361b87e975d5d44cd"],["/tags/column-layout/index.html","23e838d961f397b08e85b8eb114f5daa"],["/tags/composition/index.html","46d761fcb539e00e8885521207698b96"],["/tags/context-stack/index.html","40e313956fa1018204bc3a00f8fb0643"],["/tags/continue-to-upload/index.html","a2e05f9cdee94dad8b68f007ed6f35e5"],["/tags/copy/index.html","180d7b8950d16e645c4a92fb13ac8c1a"],["/tags/css-performance/index.html","64c6164a619fa1722961015692bc2468"],["/tags/css/index.html","d085d474eb93c791b03468a7b2676e57"],["/tags/css3-features/index.html","a68770176adc5ba900b8f04420b5a08d"],["/tags/css面试/index.html","415a7a4d1637d7d37c3b4cf4b02bae18"],["/tags/css面试/page/2/index.html","63884452008f3c82c5966ca7fbc27fc5"],["/tags/currentTarget/index.html","4839da3f5fc7e4bfd90ca8a9d6940084"],["/tags/data-type/index.html","89f27eff8f6c43db9f7e2ac0a8dd2eb0"],["/tags/decorator/index.html","d7f77f379ac299873c17d340a649fe97"],["/tags/dp-px-dpr-ppi/index.html","965ef8c0f8f2402d621f70ae4c00c567"],["/tags/em-px-rem-vh-vw/index.html","7afb8a202d9714dfabdec064ba9d7941"],["/tags/es6/index.html","6e5b5162936fcf6f078ffd5b6e919523"],["/tags/event-Model/index.html","2f61b40c5aa1122255bedaa03b8474d9"],["/tags/event-agent/index.html","1bf7c736387c8dbc16926cb55b833f5f"],["/tags/event-loop/index.html","9966ae0e532f2b1335d2fa471ee41e6b"],["/tags/fine/index.html","71e0e5c7bddf1b528c8b0580c6ec2caf"],["/tags/flexbox/index.html","dcf717d69e3dfc4dc5ff04bb7b3ce1b9"],["/tags/function-cache/index.html","2522287d499b175ee97ff18602336e66"],["/tags/function/index.html","f9462604571027a3e8478a55f821a781"],["/tags/functional-programming/index.html","39393b3c0c27956db8fb11d78216fdaa"],["/tags/gametime/index.html","5a1f466909aaef6156fffec4d98eddab"],["/tags/generator/index.html","ec2c4b85828c69ab118b04dbfd5292a1"],["/tags/goal/index.html","0ce407a8efc91694bca8828c8f70a51d"],["/tags/grid/index.html","bea80e50a16c518babe8fe511d448fd8"],["/tags/hide-attributes/index.html","f6c9bbadfa4b2b8b5def1efd0aef7f88"],["/tags/his/index.html","575a9518f379c6cee113f8552b35de5c"],["/tags/hooks使用/index.html","fc3fef7a2315f5e3e772160f325a3299"],["/tags/html/index.html","50f93977a6d30589602c769f8b1fdca0"],["/tags/index.html","1801fecf08498cad8a426df318d8f2e2"],["/tags/inherit/index.html","07761d23a1e2d1818ae4c718de7c5240"],["/tags/js-data-structure/index.html","fa91dbe61e70b4d9e9f42781f3b7e170"],["/tags/js/index.html","b35c4ca94585ab307fc757a9c97fd7ee"],["/tags/js面试/index.html","e43fad851f409030c7e42eb3e97133e7"],["/tags/js面试/page/2/index.html","22b77d5a67251c093126e221206b2685"],["/tags/js面试/page/3/index.html","4d1b2e30021d1f365bb34e8a27aab356"],["/tags/layout-painting/index.html","267f34d2db3bb791432511a010e807fb"],["/tags/less-12px/index.html","4046b1268de656a723b7fd13f03faad9"],["/tags/loss-accuracy/index.html","88aa2249a800b813028a96536aa46a29"],["/tags/me/index.html","99cb9ce01450c6dd8c17f8d5134aeb15"],["/tags/memory-leak/index.html","441cd8ad43254522b804e4c899105aa5"],["/tags/modal-component/index.html","0c15622856b89fc20f742bb1026123f9"],["/tags/module/index.html","948c92cc2523815a835e749f2475ceae"],["/tags/my-carousel/index.html","5fa91afab035924712b68c0da4af9865"],["/tags/new/index.html","2a35e26148841eb27e6ab2c373cf22e2"],["/tags/node/index.html","faf275b815399ab6ce0ec320984b8619"],["/tags/object/index.html","8b05ba0df97ab1b9451f5eef04e3bc18"],["/tags/performance/index.html","62a719001ae81810a45765a6c377119c"],["/tags/project/index.html","8e623f1e3bce8a71085449bd5a15e238"],["/tags/promise/index.html","95959498853657c7d5a4002650e80e12"],["/tags/prototype/index.html","00bb1a6a6af98e39ced7574f7a2e3c3a"],["/tags/proxy/index.html","1d8ae013ea60f7e3735a54af41786ea8"],["/tags/proxyEs6/index.html","6d64d71b3b3e3e0b7dd09b659be74117"],["/tags/react/index.html","5f3b555aacb27b089d9e04abb1a8a766"],["/tags/regexp/index.html","1db66f6baa5febd6d6dd2e80b569f472"],["/tags/responsive-layout/index.html","a6a530df3f5dedd697eb03c59614f9a6"],["/tags/router5/index.html","6248125087ab0197af2c046f740cf3d4"],["/tags/sass-less-stylus/index.html","e0e5bf19de9d951afca439ca3225cb8e"],["/tags/scope/index.html","e39a4d2c8ffd9924fa9c33898406307d"],["/tags/security/index.html","4353c1691abb68d79c6106de7fc8ecaf"],["/tags/selector/index.html","5a85cb7ba4a211c9b2c57e52c03a8367"],["/tags/set-map/index.html","8558e377ff4453e2b228ff808db8aaa6"],["/tags/single-multi-line/index.html","0aa8e576502fc6f1643583ad483fa4c7"],["/tags/single-sign/index.html","4abbed74cbb1405bab624ee448b1324e"],["/tags/string-api/index.html","cbd35fe55fe2b4b27ecb02802270ff30"],["/tags/target/index.html","55b7e4535de8be6bc64a91085c6adb9e"],["/tags/treeshaking/index.html","7e070e96a23871929935bd13c5fe8c27"],["/tags/triangle/index.html","97a3b9f89a7510774446dec3e002bfb8"],["/tags/ts/index.html","78ae35fd96ad35472d14a02eb83188cf"],["/tags/ts报错解决持续更新/index.html","8abc4fb545fe89b8469071d456b44069"],["/tags/typeScript/index.html","46df5b5bff7b88b8865663b70d4b0644"],["/tags/typeScript基础知识/index.html","060973465943651db1151741899aea3a"],["/tags/uniapp返回顶部/index.html","bd0b3f4ac7b1db5a1b066f9f4bfc4c2d"],["/tags/var-let-const/index.html","42533f984864bf38de9b2a30f55064cf"],["/tags/visual-scrolling/index.html","44c5b5f5deb962c8116f90234b4d9d77"],["/tags/vue/index.html","ce0f3364d490ba906c03b32e11e028e5"],["/tags/vue3/index.html","08d1ef4a8dcc840fb0c28769223200f4"],["/tags/vue项目部署/index.html","06ea80127fdebd120937e6d2815af0cb"],["/tags/下拉刷新/index.html","480c07b682c0cc783443cb96d70f1f7d"],["/tags/反问面试/index.html","0b17cea19187dc0eb95dc640e443cdcf"],["/tags/和/index.html","2da25c98710ea86b35fb203856d98e73"],["/tags/如何设置文章置顶/index.html","5cb6b3d0c46659f9ac80820c763ff898"],["/tags/微信小程序/index.html","cbeffd0140c3de85650ac9b9dd3ef10e"],["/tags/星星/index.html","a294473f6b397e5961457dacff363038"],["/tags/防抖节流/index.html","be8960848d8ad7c5ebfb0c44bd6e5679"],["/tags/面试/index.html","1194ac33015e3333bd3c5f7cbbb6bb28"],["/tags/面试问题集锦/index.html","c376527be6fbae284f2f5da6bae8fa54"]];
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
