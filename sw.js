/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","26fd4419655593d3812707da6ad6baa4"],["/archives/10bf1714.html","e0f2ce32d55cc3b9c84bcc5cad227598"],["/archives/12529ae2.html","7ef78b4f755526f8721b330393f5ac60"],["/archives/14015a55.html","0e83d452970540c7fddf06a030e2f0cf"],["/archives/171d1754.html","79a87fc4a656a97637da68f9fe4f1f2f"],["/archives/17a85756.html","a9fa18e15950e99bd0ce55da1c9f537d"],["/archives/1879f8e5.html","f4ab784c45f520a7475fbce60aeca0f0"],["/archives/1be48ee.html","c2e9a34b58d84fdfb81ad0fb938d4a8c"],["/archives/1e021099.html","74398f91ef6a6b750ef88a4397ee70cb"],["/archives/2021/06/index.html","fdd52898d88463246f4cd6f9d57d8ade"],["/archives/2021/07/index.html","56db27517f30643bcbfe5e34ad133fc5"],["/archives/2021/index.html","5a5e4a808a17210d5bd52d7f6373d0ed"],["/archives/2022/01/index.html","bea549a40ac89c89052e3fb517bdcadf"],["/archives/2022/02/index.html","a071a17feec0a5625d96ec2c5d17a233"],["/archives/2022/03/index.html","fc924a498699558496b414f5298afcab"],["/archives/2022/05/index.html","5dc17614a77a31df0757b062a46f5f91"],["/archives/2022/05/page/2/index.html","35acafbd9fa73f22c88de792a3b6d21b"],["/archives/2022/05/page/3/index.html","918faebe8f6f5af99e4ff88ee0d9c32b"],["/archives/2022/06/index.html","ad862c1763d3f10c5b7ec00f19ad0efa"],["/archives/2022/06/page/2/index.html","848b0c8995e3e5156998d4157018bcb1"],["/archives/2022/06/page/3/index.html","bea1464c659733b7bf89419f9a29d774"],["/archives/2022/06/page/4/index.html","5da233f8d80cbd7097a18bbdc90af1e4"],["/archives/2022/06/page/5/index.html","edcd9cb89393f7b15e28584ffa9638c2"],["/archives/2022/07/index.html","6f73cbeaa25a2ddd520430f84d619271"],["/archives/2022/index.html","3014ac51afab344c8c5515b7a9c7c9d3"],["/archives/2022/page/2/index.html","6d0264bee8dc0249c5017dfc1f5ed5a6"],["/archives/2022/page/3/index.html","750fab1883578c3963bbc947ec0d1593"],["/archives/2022/page/4/index.html","5744c1097307b109582e54f6a21e7825"],["/archives/2022/page/5/index.html","964a57286c5a4762d0a5d496d28d2905"],["/archives/2022/page/6/index.html","bd3e65feef0135a3250cbadefd1a8d8f"],["/archives/2022/page/7/index.html","d1414acca7dee02ee8c5be770737809b"],["/archives/2022/page/8/index.html","b1721404f754275769bdabcf4c0b5a21"],["/archives/2022/page/9/index.html","ad2b329f09750c851eb255ee5cb89fd4"],["/archives/2023/03/index.html","b91d0fae1f4faf24e9a4bab53e4cb028"],["/archives/2023/04/index.html","b0f2e90cf2b8a16fe6ad48785554bb03"],["/archives/2023/index.html","aa88df4ab92ae1f515e464f7e60f50be"],["/archives/203410a2.html","4cda9c164bbb55ff79012ce0d7d5ba4b"],["/archives/2039e3ed.html","0de11b6dfcee02ce53d2663b19cafdab"],["/archives/28d88e6.html","5625bc30f3a8d0e4d489e6504b769cd5"],["/archives/294b86eb.html","2711998a1af87677ffc1632b5940d54e"],["/archives/2e20d937.html","b0fb6483aeb3205b6608862a7f57afac"],["/archives/2f8b36fc.html","0803a1ca67e86ad17f6b477711c9b0b3"],["/archives/30b90bc0.html","d13cdf1cf9bbb3e6ec12dd044cd9f2eb"],["/archives/336f0513.html","5bad5dc2f30465f24c24f3153a8383d5"],["/archives/33b9c85e.html","e923f14d22c8d3037830e9229f31a4ab"],["/archives/36044e1a.html","41ffebabf35833bdfefc923d3d0f1a58"],["/archives/37919ccb.html","790e354ce4cc2865e37f7ae19d6ddbcd"],["/archives/39a5927a.html","2fcef0334a8f9d7a6c71e37cbbf45101"],["/archives/3f038ede.html","fde6262e6f5bcf9454b559e64dea7d97"],["/archives/40f0eb24.html","5f0e415d249330e94876659d75822581"],["/archives/41476be7.html","e28757adaab23d8f33aef63e77546ace"],["/archives/42b82995.html","05f6a09cdcc54fdc5e7ffd68b81cb2d9"],["/archives/47c3840f.html","aa71f9052ed9b9708d893b362a9ddf53"],["/archives/48078dd1.html","9fc20519276cddaf0fbc12a282466a6c"],["/archives/4dbabb82.html","eaed3b227ed8061973c4a94910dc8940"],["/archives/50cfbdee.html","94057f64aec89e26eee39d2b9459c1e4"],["/archives/574fecf1.html","88d099aea4f39f371ba8579c02d9083c"],["/archives/59b49683.html","a86211ac20c2b0a4c3646b9575401c99"],["/archives/67902db1.html","8ce56abcddb2e117a1f86d7df1158a90"],["/archives/6be34445.html","229af202b3ecf654e1f7dd589438f005"],["/archives/7331f3bb.html","7d9acfb5e6ccc66f1422c9741310796c"],["/archives/7472fc2f.html","2ffbd60e16815e5e26e3bef218914ebb"],["/archives/77971af0.html","d676d4458d67188222892b1068fc2e57"],["/archives/78ca6597.html","b3adaa22cb24743c55ba638b46e4d21d"],["/archives/78cea6d8.html","6d5c849f014e4dff9ef7913cbfcb77f6"],["/archives/7b268071.html","c8724da362d8e239904b24bac3386b40"],["/archives/7c942302.html","303f8b989bd1a3d956f95f179a3f89c1"],["/archives/7d76407e.html","51335859f7b009b8225b9677ee692b1c"],["/archives/7f6cf7b0.html","9f221deace4c7923ac2a4f59d674c182"],["/archives/82d79681.html","3493fb79c0fdc907e97616d6147bde7b"],["/archives/84a91e69.html","cb43045e0e3458cddd582c1e3b7c7ae5"],["/archives/857fe845.html","4db9fdbcbcc9596b0a73cf5d3586bc48"],["/archives/88d3d46f.html","2c13de81248285f6be9c764da051d15b"],["/archives/8a9483a.html","48b4a4bba882f7a0a1f0abcf676452b4"],["/archives/8ad35e55.html","fa3723ce64916f5a0880160d7f993701"],["/archives/8d5284dc.html","219841ff1e6de44da157cf642007000b"],["/archives/92004154.html","a3d6265bb3e59d258405fd856464c195"],["/archives/9370d73f.html","08658ba7f79b78ed05328b71f716198d"],["/archives/93ae9a14.html","d8c3c669f7ecb4d739f24147ff5e2c63"],["/archives/9417ce47.html","a14a295a38c6d71823746f3b2bf92daf"],["/archives/942a5c06.html","f0522499d109c7777824b785435ab129"],["/archives/958c57b5.html","5987af054fa616c018dbe58260130e59"],["/archives/9692e25d.html","c547fa2c45a3ac1b3ce9b3dc186a1c27"],["/archives/97a9ab5c.html","38d207bfd797cf2c7e790051a740b208"],["/archives/97b76847.html","1d7ec7871581357fad3e12c9a119eeb4"],["/archives/9a0dce2d.html","f7f9f3912e84bc9dcb8e8c75c1aecadc"],["/archives/9b0c2390.html","7082b42939c2bb1fb14b6185e1b8b615"],["/archives/9e5f33b7.html","857ea0c62e6c62b85941f95541474392"],["/archives/9f1ed84.html","75aba338fe25349572c67869cbb31371"],["/archives/a0245a2a.html","861bd39b057661976d3184e43a42e73f"],["/archives/a10ceeb7.html","ef2b8de96ac809f80bed5728d94c48c9"],["/archives/a36a5ae4.html","700e239be18e06676660147496515dae"],["/archives/a8adabec.html","18b3e39121ecc5a6f2354703ce6c4bb0"],["/archives/a9432027.html","f029897a7218d84286f13375684b5ea2"],["/archives/ac5292c2.html","a6349522064e7255a84436871d5f2aa7"],["/archives/adb78c8a.html","b3a32ade1e9cebcd4cf1d8805c436b35"],["/archives/ae4c07b8.html","2f13fa696ad0a9dd55e06ca46d39695f"],["/archives/af55d3.html","b4abf00771932410b61ca5f7000c2ff7"],["/archives/afcd4575.html","f2c3a48ddbf758d08e595711fc53519b"],["/archives/b21f48b9.html","c9014b53b4479b899d678be9c50bf98d"],["/archives/b51bdcfa.html","8081df3eb62d85b9b39e1eb68c21009d"],["/archives/b7b51641.html","496bcbfd321d43571adf60a71bfa3d08"],["/archives/b9f20a20.html","575516d02f13f8039d0dea8592a68e77"],["/archives/be945145.html","5b02646c0d01e9c2c4d006ee6e4e930d"],["/archives/c0add594.html","a18bedf9d36ac5c58fce4f4062156af8"],["/archives/c242628.html","468137f59ca6fd862c625b46bf374469"],["/archives/c59bd5c1.html","49446d7811ddcb63abf3c4ab48624157"],["/archives/c5a6a264.html","6170f33944aa9b4bae810271aceb0d8a"],["/archives/c5a97815.html","859870cda647503b991d1b4a8e57b6c0"],["/archives/c7f4347.html","9a91af672894bdeb6b4cdda76fc5f210"],["/archives/caae163d.html","c71089b174021f0073481db092c0469b"],["/archives/caae7b70.html","3ffc1f7568de64f9d29ea4491ab89c8f"],["/archives/ced3960e.html","8d3eb61f0ac869d1b6ffa7f83d1295ce"],["/archives/cf2f5248.html","06d871db06d9ae97d1f64bd3f77efd78"],["/archives/d3b694df.html","6b1f5aa7ead7fb1acbb74bde4ea695c5"],["/archives/dc3acdcc.html","0c68a72bb194f4be1ad974400053af46"],["/archives/df976d87.html","2b414e5fec98ec34e4b54b4ecac26d85"],["/archives/e0c98e7a.html","164038341c011a740301ba5d448542e2"],["/archives/e6437fbd.html","d06008ab440b9943fd47728e0ae79c3a"],["/archives/eab5cc79.html","c0d957b2b442cf204902e2f611eda14d"],["/archives/eb05a173.html","038051b8fc78bf8f809ca7aebc6ea4ee"],["/archives/f1d0391c.html","d456d4959fa85c1710e6730d12cd4888"],["/archives/f3d3ee5b.html","0041bef558798e563aee29784fdf7dc4"],["/archives/f7feebc7.html","81caaede2122575106b895b9a9b49433"],["/archives/f9f4b1e7.html","716c945c708b9ee043810c65f74ae4cc"],["/archives/fcdceb2e.html","e95305e56afce07a82cb3d1e87ce11c4"],["/archives/index.html","f0743607cd1ad711ce3a094d99b06f83"],["/archives/page/10/index.html","2b530b6636289e846a6e3ced322c22c3"],["/archives/page/2/index.html","ac6f3617019c923211167d07a10a39b4"],["/archives/page/3/index.html","18b088589ca5de454fed90cccb909000"],["/archives/page/4/index.html","936895958fa44c6c8db174bc38883077"],["/archives/page/5/index.html","1bf666256c873ebf600b730a07a50583"],["/archives/page/6/index.html","13696fc715e887dc2dd506b0d6858d4d"],["/archives/page/7/index.html","cc66d30d0dc2ede471121233360a1670"],["/archives/page/8/index.html","9e1e467a3106a075eed0246909d80c88"],["/archives/page/9/index.html","421026446017877954e933f01f349192"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","6e878e00b7af1dc9a46b88ad44dadd87"],["/categories/blog/index.html","28d65af311ae0d46e0e63f822f11122e"],["/categories/css/index.html","55a679d69df0149b57a47a18899e2001"],["/categories/css/page/2/index.html","2e28d1b7641f638e717c25f96dfc3117"],["/categories/css/page/3/index.html","a5cd015f29454ed6fe239902e2754efe"],["/categories/fine/index.html","187785b920ebcfc6cdfbbdb91e8d6633"],["/categories/html/index.html","52d896cc5870d45a6ea0ca726df4bae0"],["/categories/index.html","7d8ce630cc0e0754a812cf3e50d20dbe"],["/categories/js/index.html","c1d42cdef48c4c38c68213df9323be8f"],["/categories/js/page/2/index.html","3f82c22589b1c8140b38f32b706593a2"],["/categories/js/page/3/index.html","413213d17d3f7134ec30384b58f9ad89"],["/categories/js/page/4/index.html","4646df3d71ec278720944ebb1a029246"],["/categories/js/page/5/index.html","2033e552f47d6ac192efded1be7f5eff"],["/categories/node/index.html","3c3cd1a0fbd4972042371b74e34b4bce"],["/categories/notes/index.html","201fb00a4030488ed6b8965227f3e0f0"],["/categories/react/index.html","443e90d4aa03a0c34e52a930b667dc1b"],["/categories/react/ts/index.html","7904aaf02b25afb771a37cff8da8f0ff"],["/categories/typeScript/index.html","45b84b07234a5bbaeab093049e4f06e6"],["/categories/vue/index.html","7ae53296397ec7fbea2a32b283c5deb1"],["/categories/vue3/index.html","9cf14b37ac7d473640b8e85dcd2c8cad"],["/categories/webpack/index.html","387faa6f7ee5cac6e0d8cf07a585ba44"],["/categories/微信小程序/index.html","300277cad64b0d020762d9b67dc55acd"],["/categories/面试/index.html","97d2dce1696b7716e8d4ce48af186835"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","d2f9d80c1f30ff3b496ddae161d23a53"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","a7a8f89cff663d7fdbe1d2158fbc5782"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/ts/images/01.png","c922cd12dab12bd6c46ee93bdd4205d8"],["/img/ts/images/02.png","3aa2056326e5d1c796af4ee14d5aa795"],["/img/ts/images/03.png","5d4a8b39b62c2c484b45dffa7f71d2a5"],["/img/ts/images/04.png","9005165e16c5fb263c3850b77b8c60bc"],["/img/ts/images/05.png","996ddffc76d0e5750a82f5a0473501b4"],["/img/ts/images/06.png","a52bf4f321fab1fee87cb087e0d22d04"],["/img/ts/images/07.png","36e3a3b114bcfad55498a774d9342e4f"],["/img/ts/images/08.png","3607e0c5650e9afa1384f2aac4009d62"],["/img/ts/images/09.png","dbeb822550e8eb71e78714035d790d38"],["/img/ts/images/10.png","e4a25517b0548f90ac6bef9d471ba0f1"],["/img/ts/images/11.png","dad677e46db0955c7d139a83b4b82cec"],["/img/ts/images/12.png","9745157eeb18de2635a64f65aeb34ea6"],["/img/ts/images/13.png","da212468d2ee4f8e9ba1f97843983786"],["/img/ts/images/43.gif","37c2e56cbc5c7a6fa18b043f8959a61c"],["/img/ts/images/44.png","6fe8492e0a34f7997c26473101a5352c"],["/img/ts/images/45.png","f799db600172453b1e1c864a85a9809a"],["/img/ts/images/46.png","9035adfac7596edda51156dacec1da06"],["/img/ts/images/47.png","2d75b31e7998a1e3c5ecec69a833a1d0"],["/img/ts/images/48.png","13beb8460f834a2a86866f9efaad66f0"],["/img/ts/images/49.png","540398c418c42be7de9f28b79882a107"],["/img/ts/images/50.png","18e4e8ef181ffd7eff2d1844cb704536"],["/img/ts/images/51.png","76bf41ed3e6bf0c976973364eb52fd76"],["/img/ts/images/52.png","f5d555290bc571215dd3ec30fd8aad42"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","a84614c12f0d96dd27f33d1417e35209"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","f20118c31f809afbdfd288a053a53448"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","01f26c21f49eb85e936276118f3d92f6"],["/page/2/index.html","994f12721058e29e95e0bbbcecabb512"],["/page/3/index.html","e94ac132e126bdc1ba2b13a19b607902"],["/page/4/index.html","15cb4dd26dd372d3217d9635d53c975f"],["/page/5/index.html","ee8eca29d1527436ea5fe99174093ec5"],["/page/6/index.html","8712b4b64e3e748093fa6b57f0ae598e"],["/page/7/index.html","14651b4be9f5416a170ecc39142fa36c"],["/page/8/index.html","fd5c516d355c37c7811e8a666b0cbad9"],["/page/9/index.html","4698247950fb45e7f916c06ee3f64d1b"],["/project/index.html","f85c8cb46e83dbbb3c6bccbe8a8ed929"],["/sw-register.js","60be87c497970b584c11f69a8b606086"],["/tags/BOM/index.html","94d13d664b7c1f255c16692a037162b9"],["/tags/BTC/index.html","17d8a97ae9a76ce3260ad3c31d48e817"],["/tags/Dom/index.html","52d3c726d7deb4ff2f4aa592805140d8"],["/tags/JavaScript面试基础理论/index.html","7168abd94901cbcc74c2c824fe63ce55"],["/tags/ai/index.html","e1187266561a9a32c55ea787031fec11"],["/tags/ajax/index.html","d8a27fdeb5ee37c21cfdcd292311d2aa"],["/tags/ajax2/index.html","023d76862cc348d1cb52a156efe25199"],["/tags/array-api/index.html","a982fc364c6d72f2fe705be38cfc32af"],["/tags/bind-call-apply/index.html","36b97c3e7989ab5df39954fcd6aca27b"],["/tags/blog/index.html","098c56b5e8879713f64dd383180649fc"],["/tags/blog个性标签/index.html","af841bdbdd2d6e8bd0e6ed23e07ff155"],["/tags/box/index.html","12f8cf54fb55af7cd895ce632a82ac7d"],["/tags/cache/index.html","99e2f78756767528ce388151d24144a9"],["/tags/center/index.html","58ebc0e2cbef75ed12683967f9ae3204"],["/tags/chatGPT/index.html","129c6b0eb4a7f7ba3385f6f3d1db7bd2"],["/tags/chatbox/index.html","424b1cf2b96315b84d21779b5089b55f"],["/tags/closure/index.html","3335d9ec81ee360980070aabacd6a71a"],["/tags/column-layout/index.html","8b285bf12d805a6536a89b88c0b8b4ac"],["/tags/composition/index.html","55fa39162e07eb5a25cbec585e2ea244"],["/tags/context-stack/index.html","3e91e2e19cc6a021874cc53ae0504b0b"],["/tags/continue-to-upload/index.html","c5b753068e3effb58496e677318f0e9c"],["/tags/copy/index.html","0933b1c94b466d1974baa118132dc828"],["/tags/css-performance/index.html","603e9bb7097a306880caacec77d67243"],["/tags/css/index.html","0ad66d282cb91c301e47022714bac72c"],["/tags/css3-features/index.html","2e024919f4a8c370d3e996aa26cb3582"],["/tags/css面试/index.html","f83b53dc7259724cfe3b677e7c3cb04c"],["/tags/css面试/page/2/index.html","7bf77d32df691f9785ad7018734b3c5b"],["/tags/currentTarget/index.html","3e1b83f6f8ebde31dc5ed4edf2bd3e5f"],["/tags/data-type/index.html","5d5169d18d89f32fb21bddf5d39ae5a1"],["/tags/decorator/index.html","f7da646455469415553f2d73004f95e1"],["/tags/dp-px-dpr-ppi/index.html","4222537bff3fab34c7afc3e018f27e42"],["/tags/em-px-rem-vh-vw/index.html","f2d9a21f4445e9a28c0d6894fa01d86b"],["/tags/es6/index.html","b86d5013354fb926e40f9cf2b3c50207"],["/tags/event-Model/index.html","0910494973d9a424383fbbe2f2324b1d"],["/tags/event-agent/index.html","b9bc4ffd3915613ae40e4bcd2624462d"],["/tags/event-loop/index.html","a114ecbaebc0fa69b8eddb7ee6acf394"],["/tags/fine/index.html","17d8c55f63a4bc34a2b5e0e2a3b59fcf"],["/tags/flexbox/index.html","419dc28e69792c4374cb36204eadfdb3"],["/tags/function-cache/index.html","ee0baebbc08b432b284ff2061d2d0982"],["/tags/function/index.html","71857f74d011076d64d86f95a8a72bea"],["/tags/functional-programming/index.html","936ed77d815cc0dcf3deebdeac52ff82"],["/tags/gametime/index.html","ddff0d1b7d0b9eee8b330bd1606e75dc"],["/tags/generator/index.html","e092a09bab3aa8be6c09434af82b0c78"],["/tags/goal/index.html","453db8cf5dd9d8f105fd4ade2a91a7e6"],["/tags/grid/index.html","b640365df04fd7f8eae5a3dfa88b4c94"],["/tags/hide-attributes/index.html","72718f9e09e8512466b65ac29d4168cf"],["/tags/his/index.html","f595590d7ae73868937df5a3b2bc68df"],["/tags/hooks使用/index.html","fe76fa92b77647a76988e1840d1ab21d"],["/tags/html/index.html","e5868dc257b87763875a2c770d8e8b0b"],["/tags/index.html","4eafdc22e566e630870bbe82509bb36e"],["/tags/inherit/index.html","b8fb3996a6dcbb04be8c07e63605e179"],["/tags/js-data-structure/index.html","f4ce5a4bb04fa68153539e5e0735e87e"],["/tags/js/index.html","d2281ff23f0047997af5adffdaca69d7"],["/tags/js面试/index.html","9618f57d3817b1da05a479115551c5f7"],["/tags/js面试/page/2/index.html","ffc7ea504112cccb903b21b56039f9da"],["/tags/js面试/page/3/index.html","9b191469a184c65f411cf6f682268aec"],["/tags/layout-painting/index.html","9b7ac723bae2272c08261f595e9f66d3"],["/tags/less-12px/index.html","4a3c20ebb87b7a738e547b4053b53939"],["/tags/loss-accuracy/index.html","bb8954ec7fa779af9b6eab467695ba61"],["/tags/me/index.html","228c03dab41524c36ca950ab55c55724"],["/tags/memory-leak/index.html","f16485c28288a1a04797df899182bc8a"],["/tags/modal-component/index.html","b6e4e68b7adead97a8184588151031e5"],["/tags/module/index.html","8554d0d13a37a46cf8b17cd2693f7a2f"],["/tags/my-carousel/index.html","aed57e12d50831945ab46282be926092"],["/tags/new/index.html","2486ca48b51c46cc120d518db1a0c0ee"],["/tags/node/index.html","acccff9e5f6727b81dcefe057e9d90a2"],["/tags/object/index.html","5c91e0f259d4559c7d54dfb9980356f3"],["/tags/performance/index.html","0c0952b89993194f596d3e32f415dfde"],["/tags/project/index.html","9513878c919a99059238aea8495a4497"],["/tags/promise/index.html","47d20f6ab36cd752e01dee9c73052ebd"],["/tags/prototype/index.html","6ff66950708f8d3ebf2391c687d4e055"],["/tags/proxy/index.html","076d253e33394e46e0a1f62c0cef97e6"],["/tags/proxyEs6/index.html","8ce911e773066508cdabb296fa6e902e"],["/tags/react/index.html","92746f6ca8b42412bec4d4ccd241fb11"],["/tags/regexp/index.html","914e9489505be30a17b7864041c02160"],["/tags/responsive-layout/index.html","bbbd9e2b714bc4864731fa0dfef3980d"],["/tags/router5/index.html","433059964546332252da45a18f33d79b"],["/tags/sass-less-stylus/index.html","1005ab820e5d06ceb98489ee5820fde2"],["/tags/scope/index.html","9fde7c4ae169b887e84d2169ea46d326"],["/tags/security/index.html","5dfb61e3403b8e1a22803d8e85e77515"],["/tags/selector/index.html","f1abbd2b6a86cb90aed819a67d99cc8b"],["/tags/set-map/index.html","e06f28d940430cdfd527a19712118342"],["/tags/single-multi-line/index.html","7987ea17252a5e190c02a301d67bf3dd"],["/tags/single-sign/index.html","4a985bb3c875aa385de98689ba92ac8d"],["/tags/string-api/index.html","f2b69931fb2e09c829358e2b3c1977a2"],["/tags/target/index.html","087b17d717298153fa970d9f2495df05"],["/tags/treeshaking/index.html","8de08f3e428b309c340152873ea87d45"],["/tags/triangle/index.html","b65716792257a2443f41486c3114bbcc"],["/tags/ts/index.html","e9390e4df4899ee675285215fec9401a"],["/tags/ts报错解决持续更新/index.html","b67585bead34e9738b6847cc1f119c16"],["/tags/typeScript/index.html","adc7a6349eda0d73182f513120c03159"],["/tags/typeScript基础知识/index.html","2758d9573df7982c329259f493d40c51"],["/tags/uniapp返回顶部/index.html","b968198bd360cdc4ffae067f9b30eb96"],["/tags/var-let-const/index.html","00a215dc8375e9256192a4cea33d82e7"],["/tags/visual-scrolling/index.html","5fc3789c7896fae1a9015791082abf42"],["/tags/vue/index.html","e3f6c3197e5d39908d00a413ee6ef52c"],["/tags/vue3/index.html","fbccd8995a6bccaa924d33f967e69f48"],["/tags/vue项目部署/index.html","92bc7d24761a3ceff23f2cf92e2bd8fe"],["/tags/下拉刷新/index.html","80a16db57f418b5531e0a9a407e8c2d4"],["/tags/反问面试/index.html","a7d89b168f0e03138f73b32c22ce7a07"],["/tags/和/index.html","aa1184900e516d8252e88b2371be9374"],["/tags/如何设置文章置顶/index.html","0286616134bfb569fcb8447ce16e4352"],["/tags/微信小程序/index.html","f471e205832c7a8fe89c9b607fc5ab0e"],["/tags/星星/index.html","ad2edbf247d65fccefcebbb5b9b3e7bf"],["/tags/防抖节流/index.html","d6411805b0afc62dab0ba5d6d4825b69"],["/tags/面试/index.html","15a90f7bf4a7b4b69066aa925bba83c1"],["/tags/面试问题集锦/index.html","a6c8e4d2c52425215f02b70e6ff9349f"]];
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
