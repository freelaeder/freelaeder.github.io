/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","e5f7dbbf93a35323ad0c497a49e81021"],["/archives/10bf1714.html","0c04040140c2b5459885dc6d3a1384f7"],["/archives/14015a55.html","7d38f585d7a63265be82ca415333030c"],["/archives/171d1754.html","509dd619295e8a383753399683e807ba"],["/archives/17a85756.html","0fceaebb3d969ed19366fda4f8daeafd"],["/archives/1879f8e5.html","3ace99e0bb56f4ef53c6f37e6533ce96"],["/archives/1be48ee.html","9256b220e2ce3b1afa74ff2eed5556cb"],["/archives/1e021099.html","4e9af915563224e354bde8288512f0b4"],["/archives/2021/06/index.html","9f8cef9c12f949a24d9cab6aab25aab4"],["/archives/2021/07/index.html","cfe16013b5bc2518fbe963f1d4b0904f"],["/archives/2021/index.html","2aa2f9fa30f0665da258c3b5141e8080"],["/archives/2022/01/index.html","446da57c5292375d7ca788b64947dbce"],["/archives/2022/02/index.html","32f83121d8e13952a6f18cf105fe015a"],["/archives/2022/03/index.html","aad97d516878a9d6e6fc4d460c815110"],["/archives/2022/05/index.html","41953d6b753b3bbc302faaa10f14d2a1"],["/archives/2022/05/page/2/index.html","65c532c3e1759736e67ca16e06e9c19b"],["/archives/2022/05/page/3/index.html","316c1f5bb63a583c67e2e8487ed6cdc9"],["/archives/2022/06/index.html","4e65bf00b930c336afa53a93b55a60f3"],["/archives/2022/06/page/2/index.html","fb10ca976dbefcec2c0ebea15e56bd5d"],["/archives/2022/06/page/3/index.html","1bc15c2380b2f1cdf54bb2e77342d994"],["/archives/2022/06/page/4/index.html","86b9b1ae2837d6daff2860e56f47814e"],["/archives/2022/06/page/5/index.html","cce84fbdd5422e8cd33f0be5d151b13b"],["/archives/2022/07/index.html","c5cb0cf5ab29d55e04f578570c3faa01"],["/archives/2022/index.html","5ac6c2c08f89e47f85b12b404f94eb55"],["/archives/2022/page/2/index.html","6f4d86ceb526c6bce5a08aba480891dc"],["/archives/2022/page/3/index.html","a1744173e85fdf6841927c04e000921c"],["/archives/2022/page/4/index.html","b54f1c0baedcb7b533920d2b94b6ffa7"],["/archives/2022/page/5/index.html","430653f11fedc07660d2524e53abb856"],["/archives/2022/page/6/index.html","bc599be3f21c4ed779e470a99d4d5dca"],["/archives/2022/page/7/index.html","43208243311e9e2f9edb82d0f5802c01"],["/archives/2022/page/8/index.html","0eb6bc692e17c8d9597ddaf02cbb3bb4"],["/archives/2022/page/9/index.html","b9c429f13d14a0476007dba84fc79b26"],["/archives/2023/03/index.html","80fc010ab11aeda16c674c56b1c1bd2f"],["/archives/2023/04/index.html","a1117d99fafd223ec6e46148b8eddd2b"],["/archives/2023/index.html","c39f6a94b2b17b2cc3d6170293523c24"],["/archives/203410a2.html","936edeca1d2c54dd100d857963c117dd"],["/archives/2039e3ed.html","8678bf6ab06cc5a49ae3e30a26aeecd7"],["/archives/28d88e6.html","d5e8bfc8c24b12f29593d9d8e3fdd8c1"],["/archives/294b86eb.html","debf20aeb2029d2b25d47d987b6aae42"],["/archives/2e20d937.html","2597f40d45ea13a8e091745433e98631"],["/archives/2f8b36fc.html","605258931096832fdbd2d94873d72844"],["/archives/30b90bc0.html","35c36caa09cf349038b9d9eb28695aa6"],["/archives/336f0513.html","751bc0103d9f41f33020086b38103e8a"],["/archives/33b9c85e.html","e6697132d0ce0502a33b848489274162"],["/archives/36044e1a.html","e66d960ff6e4db3cb381f1557c4fcbf1"],["/archives/37919ccb.html","0458ac8f60e22e75599c3130fc1251c4"],["/archives/39a5927a.html","e61b80f257d03a81073a22b684b96b61"],["/archives/3f038ede.html","7de07e3feadb5795c5781d22175bd269"],["/archives/40f0eb24.html","f81c403abb8ae10fadc162cf0704933d"],["/archives/41476be7.html","349f8e4d39cadd528ac782dda80dd501"],["/archives/42b82995.html","c3153a260e290f8dcb18f3af2273359d"],["/archives/47c3840f.html","e25105ec77a15d56bc619d6d0d362578"],["/archives/48078dd1.html","d09e0867e9cb45ddfe6c260e118c511b"],["/archives/4dbabb82.html","40ffe052baa08056cb613fc5e24f2bbd"],["/archives/50cfbdee.html","cfee9551dabb0327d764473a714cd75b"],["/archives/574fecf1.html","73085a464ac78bb9d74d42c8c9258139"],["/archives/59b49683.html","54645e14b77a4dcaf0a0a600f1cf3003"],["/archives/67902db1.html","75906b5ac35102cf77660fd00368aea6"],["/archives/6be34445.html","1be5c96449aa9c8b761bc0d264c1e183"],["/archives/7331f3bb.html","068dd2a91387245aba129fc5eea15c62"],["/archives/7472fc2f.html","070a00da741649d6429b6390fda7ca94"],["/archives/77971af0.html","478ed23c8359324699d7653f9df0642f"],["/archives/78ca6597.html","6f706586145b13134d5fc4f0c963cc15"],["/archives/78cea6d8.html","cd190abcf7572394f46512655934c065"],["/archives/7b268071.html","fd4eb06850779613fd36408bd428dc0e"],["/archives/7c942302.html","7145de43fb7b4cde237b58be5c72661f"],["/archives/7d76407e.html","a8435ef7ed8512b38aa8d149bda35100"],["/archives/7f6cf7b0.html","c2b68f0384d359670f6441527c0f30de"],["/archives/82d79681.html","e5e7118c90e476d92690bb7971b680af"],["/archives/84a91e69.html","ae9f06af76d06838937cc57f17f2178b"],["/archives/857fe845.html","41650e6cac2e4344a4c473f25f66a745"],["/archives/8a9483a.html","45f4e1f8aca1d7c1956f2c87adf02bb9"],["/archives/8d5284dc.html","ee6bd1e275ee6544e560fb99f9168e16"],["/archives/92004154.html","3b57de86b820fa32ffe734da91529958"],["/archives/9370d73f.html","8dd6772db80417753065cd54ba49d528"],["/archives/93ae9a14.html","a09d3ed0db4b61269d4f82c305759f5c"],["/archives/9417ce47.html","bc3baeb7e3c0c6975a24018634728043"],["/archives/942a5c06.html","f60428aa6c158798751bbeae3ee2a579"],["/archives/958c57b5.html","0af1db533bdcf48d00c43f73cfe8c2e7"],["/archives/9692e25d.html","a07e2e062589f17074127adc7473c64a"],["/archives/97a9ab5c.html","478a15d1abc91d6a0b4e5e6da8c2ae53"],["/archives/97b76847.html","7c577135ee39f7067a46f169ee3f41e1"],["/archives/9a0dce2d.html","7ebfbce9d370dcf24be4e2db90de7588"],["/archives/9b0c2390.html","5dcba1690b7b2b3c7656ff13781bbc19"],["/archives/9e5f33b7.html","c410f19a1f94398ab893809f59296ffe"],["/archives/9f1ed84.html","22a52f3424e47b62e8efb4e0920f2edc"],["/archives/a0245a2a.html","6e7c75169cc57ecea43cdc86a2b5aba5"],["/archives/a10ceeb7.html","de69df52a99a7693b21b9b30b091fd09"],["/archives/a36a5ae4.html","86eabe84739856080f3900e084faa5e2"],["/archives/a8adabec.html","06e18334f9f2d7c9816ffa69d0f8f73c"],["/archives/ac5292c2.html","636fb352e62beb9255f156531037ede9"],["/archives/adb78c8a.html","4363bdd2cdfc8967976f9b4185d884e0"],["/archives/ae4c07b8.html","fb7a0433a889b2930821b328f55f7022"],["/archives/af55d3.html","d6bf46b124b456a3662a15c3a39dcea3"],["/archives/afcd4575.html","5fe7800a42aa12aa91b7f0cdc3d00088"],["/archives/b21f48b9.html","c43dbbde9f8d44cf0e0ece8a9e7e7cbe"],["/archives/b51bdcfa.html","ae8e732409852ee1df586b088bb5ad4b"],["/archives/b7b51641.html","5af43b300000b40e5a44ac58a694ae9c"],["/archives/b9f20a20.html","9c2f24cd78047786191c680ad3d4e510"],["/archives/be945145.html","207efd501297cd4f59ec04b748167404"],["/archives/c0add594.html","d2014b069483ac72dc0c9dc83c71d634"],["/archives/c242628.html","a9b5e97e9ba1ce1ee0243ad6864916e3"],["/archives/c59bd5c1.html","f86eb58c943d81003720b4e194fd1e08"],["/archives/c5a6a264.html","c33ab0082535b855a90c209fc7b2069d"],["/archives/c5a97815.html","97affb294d8f9ec9f60717662e4f6e7a"],["/archives/c7f4347.html","499b70a630daf98f7bc7c0d9a578c597"],["/archives/caae163d.html","5b950af5dda414e4fdde13f5d2b6beb1"],["/archives/caae7b70.html","742757a162743e003802637384215916"],["/archives/ced3960e.html","902e4d30de637c0fd80f0fe759ce00b2"],["/archives/cf2f5248.html","1b02608e1f9c793f1b9548c0b234dbcf"],["/archives/d3b694df.html","1274f2a52dff3600e3a097eb14e5b3b9"],["/archives/dc3acdcc.html","f1c3da34131c69d5f83dca86199f4f4d"],["/archives/df976d87.html","59289b2243962d5d0b785a9047dcd702"],["/archives/e0c98e7a.html","33655388311e68468e2e5d0b0126512c"],["/archives/e6437fbd.html","db4116f3c36982a0c5ec3527696a2598"],["/archives/eab5cc79.html","c49a030a233515f303f56412be0e947a"],["/archives/eb05a173.html","65e2f1554bc1915c0aeb28cc39f63d75"],["/archives/f1d0391c.html","25aa3761a313e13569ff60f6ee46af22"],["/archives/f3d3ee5b.html","4c88a7fdfa2e6654bdb9f3f77443527c"],["/archives/f7feebc7.html","bfdf282a59435350c4658cc6d21cce09"],["/archives/f9f4b1e7.html","9e3e51e7ed002021847b55fd84787d65"],["/archives/fcdceb2e.html","5c07ada8d53d11e9553c42bd5e9cfe86"],["/archives/index.html","2a035c366f0d08d2b9bfe2db9e555f25"],["/archives/page/10/index.html","60e37b69f7f3356c1ddff700ad3d82ef"],["/archives/page/2/index.html","6340cedb2706a9ee67876813fc7927a9"],["/archives/page/3/index.html","3ef1a0f55de8c3a3083d30fb5015f31f"],["/archives/page/4/index.html","71f3c710730137ef72470ebeab3d1e40"],["/archives/page/5/index.html","326414a4a283563f98e4aad5b7402611"],["/archives/page/6/index.html","6c769591d036e992b56c936fc71e5f6c"],["/archives/page/7/index.html","93520e4a8dbcb5dcdcec1847f866bd08"],["/archives/page/8/index.html","e50b4f5c68997b60aa2ece7ca33b8c70"],["/archives/page/9/index.html","4ac8f6ad14f03e7c1528a4c0b08e497f"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","98f81aa06ce30db588a426ba7fdc8934"],["/categories/blog/index.html","5578e03abbfbda2455d87dad53d49231"],["/categories/css/index.html","981891e155ec05957111fe09c9e4e007"],["/categories/css/page/2/index.html","e8a0d94c9dd830f84acd787968e7178f"],["/categories/css/page/3/index.html","f7ca3f09e43255df50c16b969b971ecc"],["/categories/fine/index.html","ea5770dac5af7cf85ccb00a1ebd15dcd"],["/categories/html/index.html","71be0ad5188d4ff6826b6ba789476158"],["/categories/index.html","00cd75a81d6fee678cf3cbe4f976ab0d"],["/categories/js/index.html","fd90923509a265e86bd31ef5aba7320b"],["/categories/js/page/2/index.html","a753b484ebe0aada612229c39f1d1453"],["/categories/js/page/3/index.html","5545ce39acc050953271e740809f3848"],["/categories/js/page/4/index.html","99eed3762713e20b7375161e91ba8c9a"],["/categories/js/page/5/index.html","88c9dc2010173e45bd73a55761170927"],["/categories/node/index.html","d2b18b4b9e974cee816d8ce10f5be8de"],["/categories/notes/index.html","f0599feebeaaf4c4c2f8865571cb4858"],["/categories/react/index.html","64a789e2d0f28b54ea6189cf7282b0d5"],["/categories/typeScript/index.html","81eec336a2d5da505358146fd1a73213"],["/categories/vue/index.html","823bfc96ebe990a76161ec19393dd856"],["/categories/vue3/index.html","306cc111e7050d7ee78e879d70f599c5"],["/categories/webpack/index.html","9ec0660d22fa375cc4fbe6231e7ca51d"],["/categories/微信小程序/index.html","37a486d0a2e73f38953dbdb9e36b9911"],["/categories/面试/index.html","e2bda4a34fdd7c459f4247e628638788"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","49c6e9327a80d4d56259c6001644d83d"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","86a2bf333878e2c9c69d5ded0afda9ad"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/ts/images/01.png","c922cd12dab12bd6c46ee93bdd4205d8"],["/img/ts/images/02.png","3aa2056326e5d1c796af4ee14d5aa795"],["/img/ts/images/03.png","5d4a8b39b62c2c484b45dffa7f71d2a5"],["/img/ts/images/04.png","9005165e16c5fb263c3850b77b8c60bc"],["/img/ts/images/05.png","996ddffc76d0e5750a82f5a0473501b4"],["/img/ts/images/06.png","a52bf4f321fab1fee87cb087e0d22d04"],["/img/ts/images/07.png","36e3a3b114bcfad55498a774d9342e4f"],["/img/ts/images/08.png","3607e0c5650e9afa1384f2aac4009d62"],["/img/ts/images/09.png","dbeb822550e8eb71e78714035d790d38"],["/img/ts/images/10.png","e4a25517b0548f90ac6bef9d471ba0f1"],["/img/ts/images/11.png","dad677e46db0955c7d139a83b4b82cec"],["/img/ts/images/12.png","9745157eeb18de2635a64f65aeb34ea6"],["/img/ts/images/13.png","da212468d2ee4f8e9ba1f97843983786"],["/img/ts/images/43.gif","37c2e56cbc5c7a6fa18b043f8959a61c"],["/img/ts/images/44.png","6fe8492e0a34f7997c26473101a5352c"],["/img/ts/images/45.png","f799db600172453b1e1c864a85a9809a"],["/img/ts/images/46.png","9035adfac7596edda51156dacec1da06"],["/img/ts/images/47.png","2d75b31e7998a1e3c5ecec69a833a1d0"],["/img/ts/images/48.png","13beb8460f834a2a86866f9efaad66f0"],["/img/ts/images/49.png","540398c418c42be7de9f28b79882a107"],["/img/ts/images/50.png","18e4e8ef181ffd7eff2d1844cb704536"],["/img/ts/images/51.png","76bf41ed3e6bf0c976973364eb52fd76"],["/img/ts/images/52.png","f5d555290bc571215dd3ec30fd8aad42"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","c40c0f3380e449e27780b82b935770ca"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","b261ac1376973a9a57992e709e38ae57"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","211e393152f4d65785d3c0cb00ea39e9"],["/page/2/index.html","a95ddc1bb74495897a84867854e79309"],["/page/3/index.html","26a60bcc6c98cba970226e3f5271bc36"],["/page/4/index.html","605a0404115978cf7128be06f5e66d46"],["/page/5/index.html","54a604fcb7e71e825256914a05ee94ac"],["/page/6/index.html","4dd32aef08212a3883296667110d353f"],["/page/7/index.html","93d232878bb29b38e8bb979aa680e1d0"],["/page/8/index.html","2e6e439de155f09e00d6575c7d6ea681"],["/page/9/index.html","3de1bba7e86a6bde70f810c279003123"],["/project/index.html","3d9d9fd3ae803b6639b72c3f5aeb86a3"],["/sw-register.js","c70f9ca46148d1f7f6ff665a373409be"],["/tags/BOM/index.html","f5bdc6f4c6c9d60be065d44efddc1aa7"],["/tags/BTC/index.html","afe5bd690820c0fc1f1a10d2811d8f5e"],["/tags/Dom/index.html","cb644a9683f63731e4f7244ecdd52b42"],["/tags/JavaScript面试基础理论/index.html","2f4746d2fce8c9dd0f96f36434c02ab5"],["/tags/ai/index.html","db2cba30c9c70bc9c30476622456795e"],["/tags/ajax/index.html","99a8ecd68d6a1eaf8e20c128be33ed76"],["/tags/ajax2/index.html","dbdf1ab59bccb422ad60877b1b71745c"],["/tags/array-api/index.html","1e2ea7a0dcc97a8d917c619d23b981bf"],["/tags/bind-call-apply/index.html","ca7cb38e871a7706d03a6270500c9ff3"],["/tags/blog/index.html","27389321715f1b886a91ec974c5ab96b"],["/tags/blog个性标签/index.html","6984319520101c656458af324cb9e79c"],["/tags/box/index.html","ab6579a8ea9d77318246fd1a7a0f64f8"],["/tags/cache/index.html","313797781cfbabe97d74074c2f6ede53"],["/tags/center/index.html","c5a73639e1df2cb0283980c61ffbb218"],["/tags/chatGPT/index.html","a494a66227c3af6b9ebf89700f5f9252"],["/tags/chatbox/index.html","57c3f53ebb13f8108131b794038245d9"],["/tags/closure/index.html","a7abbf0738af09e9504d294e5951168f"],["/tags/column-layout/index.html","799e6e4f6f269d67ee9ade91aba08b57"],["/tags/composition/index.html","82952aacb52f03a7461e8a428c5f5bbe"],["/tags/context-stack/index.html","557ac01d97610d935c068cbd6f78c617"],["/tags/continue-to-upload/index.html","84a2133702594a15c26437ab14a2fd75"],["/tags/copy/index.html","28cf6187c6ab1bad79bd9460a5638c23"],["/tags/css-performance/index.html","ad774403388c384b95fb32c0b594b97b"],["/tags/css/index.html","3176f62c045d4bce3c924a1a449a1a00"],["/tags/css3-features/index.html","5cc286bcf36d8845b90519dd513365bd"],["/tags/css面试/index.html","327a0ab67221accea060c11440f02db7"],["/tags/css面试/page/2/index.html","45d595e140b21f4c4e130e7cd44e0751"],["/tags/currentTarget/index.html","ce397d3ae78b31aaa626446111d6d7fc"],["/tags/data-type/index.html","ee513fc2077d9df801eaa5bd97029d76"],["/tags/decorator/index.html","7d54d43ed35f2242e789183af511e5db"],["/tags/dp-px-dpr-ppi/index.html","4a600f73a609f8b9a1a09b9e4f692c01"],["/tags/em-px-rem-vh-vw/index.html","2b5c467bd088191e86835b51c5f72463"],["/tags/es6/index.html","f72d502f6739ef115b721ca1c595548c"],["/tags/event-Model/index.html","26ea1016c30807c39bc2bdbf5369fff4"],["/tags/event-agent/index.html","52a5b88c18e8b6383ffd282b7fec32eb"],["/tags/event-loop/index.html","eaa1d4a9250baf4ec2b433227e837bfd"],["/tags/fine/index.html","884c630e20ccef43bb5cfd1c6a123ca2"],["/tags/flexbox/index.html","5150941e032dc22b0887d601a7feec46"],["/tags/function-cache/index.html","df674c1028ebe060c6e4366e1f9cf1a1"],["/tags/function/index.html","fde30dbe58bd17ae37b24ef7304ae122"],["/tags/functional-programming/index.html","11c93ef4d9a556001014208db58da3d8"],["/tags/gametime/index.html","4e8cbec3a742a8afb1d594698ad535ca"],["/tags/generator/index.html","fa6acb1eaff418fa829ae03accf93401"],["/tags/goal/index.html","56ee33da5454b0031be9467836f869f9"],["/tags/grid/index.html","d41d891240d597e19a40c8ed2aa0b89d"],["/tags/hide-attributes/index.html","c84d57c7c6f607a58689e4b57f579fc7"],["/tags/his/index.html","8e1102f1be1f7c37b18830e64e90b790"],["/tags/hooks使用/index.html","cfed1aaf633324614a95e9c5136c0217"],["/tags/html/index.html","fec83a121141753d077e5028763742c7"],["/tags/index.html","1e77213e1f8ee85c5400e559bd57edad"],["/tags/inherit/index.html","8fb78780fed715e70366a060d8a0d2d0"],["/tags/js-data-structure/index.html","08a4a71221eec20d5e06a67c3af087c2"],["/tags/js/index.html","ef2d4bd008e2ee9026a3124a183df200"],["/tags/js面试/index.html","1b1c0ad0bad1e628f750420fb6756a52"],["/tags/js面试/page/2/index.html","1627afb1376451dcc9f6d33a2117952c"],["/tags/js面试/page/3/index.html","07139c63981fab46586c999d4a669b8e"],["/tags/layout-painting/index.html","515c62d11569aeea1e2ae309224a2579"],["/tags/less-12px/index.html","ad8753d6e9750e4a20e8314cee418a77"],["/tags/loss-accuracy/index.html","9eac3f452a871c86fe28c74293758114"],["/tags/me/index.html","cabf58803c26d45d5917668a4e106f7a"],["/tags/memory-leak/index.html","bc6715eba2483aeb93a5c91d8d327282"],["/tags/modal-component/index.html","b10f94ea756a64d3a3e695650d8e9b37"],["/tags/module/index.html","1eb0207be8ced0bf2a5a0e54b572dd13"],["/tags/my-carousel/index.html","64b4ad216628f0686d7abca2d401cb90"],["/tags/new/index.html","faa8e8a2e9dca00b3411d7af3256362a"],["/tags/node/index.html","ca2734470227b91bfadc7b796ce06c98"],["/tags/object/index.html","dee1fc2c24eae794026bebe4be640753"],["/tags/performance/index.html","587cc15561d5c43f6baf75482c21d135"],["/tags/project/index.html","62acbf4274876c0a4ec9dd1aa241c743"],["/tags/promise/index.html","2ef81367b887eb97731b8819a3e1035b"],["/tags/prototype/index.html","cfc88a387e994328778e1c0b084830c4"],["/tags/proxy/index.html","bf22c90ffc0eb6d12cd94b9d589730a4"],["/tags/proxyEs6/index.html","4f39d7fd9a6dae808c922af35230f20d"],["/tags/react/index.html","6268aa7e8e6ef5f1e6c8194e3eccaaa9"],["/tags/regexp/index.html","40d54bea6405de5a5a2b67973de0e336"],["/tags/responsive-layout/index.html","f97ff3e74fe9f15b6f724bb5df02a83a"],["/tags/sass-less-stylus/index.html","893024e50e8b80a96f737570391702fd"],["/tags/scope/index.html","149628ed34e3d6272d392337da31c194"],["/tags/security/index.html","287e8ff4ce3426f5b1620cf5a3685e90"],["/tags/selector/index.html","9e8818bc62fb095c1debbb811aa84f9e"],["/tags/set-map/index.html","8c369530ebaea7c930569be31cdb15d7"],["/tags/single-multi-line/index.html","db283798e8fee5140383b4c2f41e6bb8"],["/tags/single-sign/index.html","60127673e5234f7cfaa8858f0ee72612"],["/tags/string-api/index.html","1945513b99ab153de92399a0b63432d4"],["/tags/target/index.html","04c6a3ea0814340555a62715cd022386"],["/tags/treeshaking/index.html","153bb44e47433d39a4ad09d710b1c6d9"],["/tags/triangle/index.html","ff9fef4f6dd2b2c191bbe3c190801eba"],["/tags/ts/index.html","b2ad53a6bd3ffb2b327d5b353db87d66"],["/tags/ts报错解决持续更新/index.html","5f436601db38ead36eb5c2513dcc90af"],["/tags/typeScript/index.html","84cc5002b6000f1c93d900b6d7453f4e"],["/tags/typeScript基础知识/index.html","e7c061ff3c1a9ac5bc905c4d77562e9f"],["/tags/uniapp返回顶部/index.html","43f62fd61cb1df8f53aaf8c4863aa2ac"],["/tags/var-let-const/index.html","daaed9f1f1f413eadf798eb3fbbafe79"],["/tags/visual-scrolling/index.html","c1ff2011d8fa124c031ab9f515b225fb"],["/tags/vue/index.html","49f2b8522f8bd1c1822bd98cff12380c"],["/tags/vue3/index.html","b53931ec97cc254dec05222e806fc5a9"],["/tags/vue项目部署/index.html","14f99ca83ad7c676711cc961d2014ef6"],["/tags/下拉刷新/index.html","018d05834679191c63ff7f38314a3451"],["/tags/反问面试/index.html","8d66dfcdb4a027a8449a6da3e82fb6de"],["/tags/和/index.html","16354ff79f61630cea54af3110d10350"],["/tags/如何设置文章置顶/index.html","9b61c61d45ea01e186add011a2f49b3d"],["/tags/微信小程序/index.html","f637eebacd393c283c34a3c5a0394b5e"],["/tags/星星/index.html","cbc79c39ce06c974811ac7de75857ce7"],["/tags/防抖节流/index.html","4453e53ffb5788fb30ad70986080df41"],["/tags/面试/index.html","c9d1c1e5858a7021f8d9b82ebfbd0121"],["/tags/面试问题集锦/index.html","b423b38eac41ea07be9fa6c02256938c"]];
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
