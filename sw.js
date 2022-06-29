/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","df67c8bfda3c77f94150f4c150cdcb66"],["/archives/10bf1714.html","ce42b68c5e50734cc22700b6c0136b18"],["/archives/14015a55.html","a462d320c80af494e024fedea971c06c"],["/archives/171d1754.html","acf613ae574abdcf11f11b2841392353"],["/archives/17a85756.html","d363e54d9a911b37a4f0e64d6ade608b"],["/archives/1879f8e5.html","3649426df086f484bd20d4899bbb9c14"],["/archives/1be48ee.html","270548b31d755c5aef25cc307c8e8ce1"],["/archives/1e021099.html","2e6d71f28fe93ac48bcfc2698463cf82"],["/archives/2021/06/index.html","864b90cfd0cf1dbc3d17d5d0888d3efe"],["/archives/2021/07/index.html","61ad186f600606a44128aa79357105d0"],["/archives/2021/index.html","d214e41d2c2f6c5434ed83c71a228d2c"],["/archives/2022/01/index.html","270633dbcf9f25f1291a5676a72fe212"],["/archives/2022/03/index.html","ba53b12f8e3e88eb27def611fdab1f0c"],["/archives/2022/05/index.html","49f9834f5a1eb9033711884055debb85"],["/archives/2022/05/page/2/index.html","c6f5f94c5408f392fd07a6b37165f788"],["/archives/2022/05/page/3/index.html","93922ee083983c845d7265cba374bda7"],["/archives/2022/06/index.html","531db9f5f6a7e4cfdd1cf275b8e98ce6"],["/archives/2022/06/page/2/index.html","33ac3a9c8db59bda9f612f4f3be5ba8c"],["/archives/2022/06/page/3/index.html","a641fc5cb2596ea203c5b79646fb8c0c"],["/archives/2022/06/page/4/index.html","64e0fdda17830d3685dbc5eca30ac8ff"],["/archives/2022/06/page/5/index.html","f152259fa3c9adb3a1466357f7d13b81"],["/archives/2022/index.html","3f61fca4a76f39c7c65eb6e9e9001ff5"],["/archives/2022/page/2/index.html","531985903a59ffb789e7d6424b894fff"],["/archives/2022/page/3/index.html","6731305c88a492ad8b044c009f04f0fc"],["/archives/2022/page/4/index.html","49d08910fd400e7bbe9144fe96a32c73"],["/archives/2022/page/5/index.html","389fecc1b353477f4acf08d6ef863536"],["/archives/2022/page/6/index.html","7bdd2436fc843f5d0d27e6774859aa70"],["/archives/2022/page/7/index.html","4970cdd9cbaff29d733f8d6847286abe"],["/archives/2022/page/8/index.html","7dc6cabffcd3a494b93c4647ebbae606"],["/archives/2022/page/9/index.html","517a235cc9c0168f7126d9065f51aff7"],["/archives/203410a2.html","e56af1d61a0f69fadd16d05126d8f348"],["/archives/2039e3ed.html","6b701a8919ff1da1523d2312be8c6c24"],["/archives/28d88e6.html","1dcc91dde6b797d06581e9d651f7511b"],["/archives/294b86eb.html","5b57a23620482cd0c42e490fc6451771"],["/archives/2e20d937.html","44e653f30d85e66e9610a550cc66824f"],["/archives/2f8b36fc.html","c54a2f89cbf390815fb6d9c3e857c2d5"],["/archives/30b90bc0.html","24dd6d9fd88bb047e1d59ff6b54c67a8"],["/archives/336f0513.html","ff0a47b6a4d79bdb15253ee7a5451476"],["/archives/33b9c85e.html","c635a16ac5f981d47572cb46199e29e0"],["/archives/37919ccb.html","d65b578306527fa74f8905d917035a69"],["/archives/39a5927a.html","2d41b206441d1556973fad082bf9277a"],["/archives/3f038ede.html","6f77cd61d1148577b3e777c4aaa425ac"],["/archives/40f0eb24.html","b23320a749d97c1245731b9360e9f323"],["/archives/41476be7.html","15b1f8dc3d93881f63b56468253c8e14"],["/archives/42b82995.html","8da1a4072fd465e57c3bc4e0210f8b66"],["/archives/47c3840f.html","69dbb1b3b38bbb0e0d738e1b883bc4e7"],["/archives/48078dd1.html","d1f53feec0f129b77bf38698b87716ab"],["/archives/4dbabb82.html","b570ceac642bb1a294c536c3933bad81"],["/archives/50cfbdee.html","3a39ac7be9b4c1a4499bd15124eef600"],["/archives/574fecf1.html","55c0c471593c021c12477dc603fb13f4"],["/archives/59b49683.html","e4be6c10ddab1d225999a4fb1dcfc59b"],["/archives/67902db1.html","f4b6428a59eab9e2467388a6ae6c6359"],["/archives/6be34445.html","6a96b62773fcd077726ce097fddf32a5"],["/archives/7331f3bb.html","05b6364afc0f7c539c0b51e11b0dfc29"],["/archives/78ca6597.html","d502e9696a7ca2036c23090bd7372f97"],["/archives/78cea6d8.html","7cf2a631dcdc9189d372a50d88a696f8"],["/archives/7b268071.html","9a97a520d95a00fdf01fc41fc990d5e5"],["/archives/7c942302.html","62fcb702b95dbeecd902eb714e86e3e8"],["/archives/7f6cf7b0.html","a2b9f3e4aa837ebc2ed99b4c2f995589"],["/archives/82d79681.html","f79325d5fb87aabcaadb5b8f279a4c18"],["/archives/84a91e69.html","36fc9ed610131873b60be1729a77f351"],["/archives/857fe845.html","7b2738f56fc4a3c1b576ebae94f4c40f"],["/archives/8a9483a.html","6fbfbbc1c1c7c10963424c62485ff127"],["/archives/8d5284dc.html","31e67150419be113cbca4434cd270af9"],["/archives/92004154.html","f18d4f9358385737fb826d650821783f"],["/archives/9370d73f.html","9633be0795665d70e848c6fe5f202ffb"],["/archives/93ae9a14.html","c525064108a3ae1f9089f0832bb8e631"],["/archives/9417ce47.html","aa74ac72c6e905fd9ebff4925cd9b83a"],["/archives/958c57b5.html","a18eb28cd016a62f3bcfaa2cc7743680"],["/archives/9692e25d.html","e2ec90edd6e7f4bbf2c3ed3cf2ff9b8f"],["/archives/97b76847.html","7303384d1ac2ac342e90205c86aa04cb"],["/archives/9a0dce2d.html","e38d7b38aabb537c43e134a7866fa111"],["/archives/9b0c2390.html","56dc9a19f8597e20fa0835874a08dff0"],["/archives/9e5f33b7.html","0da3ced4eb36eb507479803f14e9c5d5"],["/archives/9f1ed84.html","157ffac8d600c86eaddacaaf32b2e5d3"],["/archives/a0245a2a.html","b6d4545486b908c8564d41cc1a1d94c7"],["/archives/a10ceeb7.html","4b628c731e788c0f5ffab0a9ee85e4a4"],["/archives/a36a5ae4.html","aae79655c2cb533a65f344ef09f2ac80"],["/archives/a8adabec.html","9ef38f50a29e8978a17cc59ed95df00f"],["/archives/ac5292c2.html","d5ff28762b058bed47f7f25ee2aef3ce"],["/archives/adb78c8a.html","0c548695c95df1d0f5e3f0386b774a5a"],["/archives/af55d3.html","76264849510282e42d5700b47032b3fb"],["/archives/afcd4575.html","997b80a455d7080e5081f17f426281ec"],["/archives/b21f48b9.html","eabfb24403ae16908720bd0ef0e197ef"],["/archives/b51bdcfa.html","8136adb75139e3e6c8ac454bfebc27bb"],["/archives/b7b51641.html","89893489026c9534d14887133b2f844c"],["/archives/b9f20a20.html","18a5e4910edde3545069fcb0615b3b81"],["/archives/be945145.html","bc3e8e1bedd3f46ff3041d6eca3fd6ac"],["/archives/c0add594.html","f253eeb29974dcd688c88d41c3ece48d"],["/archives/c242628.html","0a3770823430e65516370922d73cbf46"],["/archives/c59bd5c1.html","102c862a187c0926595c8e73e8dcf81a"],["/archives/c5a6a264.html","e54b382c4be275348cd330c083a0a921"],["/archives/c5a97815.html","dc2fa56ce3fcf9ecbf8ea64ded275e35"],["/archives/c7f4347.html","c1295a570d374c7330136632d1e40198"],["/archives/caae163d.html","6629b3dfefb50fba5fade7def3af7fc8"],["/archives/caae7b70.html","44387623fd4d7edae901677155508a41"],["/archives/ced3960e.html","5cef36e3b1b08cef8f5a963cce34efcb"],["/archives/cf2f5248.html","4e3b928ccdfc23de961de9641c8c09ab"],["/archives/d3b694df.html","4162a539f134f4357d958e64bc8ea5f9"],["/archives/dc3acdcc.html","6dc63b62d8e05ae7120b9698d98816f4"],["/archives/df976d87.html","2375262ec365f4351ea4ea63791b594a"],["/archives/e0c98e7a.html","ad93db6f9750766b9bb630011aeb8180"],["/archives/e6437fbd.html","df7ea00b81e3d9e203d1ab8db3407100"],["/archives/eab5cc79.html","2d69fc62596cd98d15d65860e2df2d16"],["/archives/eb05a173.html","dcba765fa1d18053282fe9fac68f9fbf"],["/archives/f1d0391c.html","94a19582eb9563f326c51c2a07a469ed"],["/archives/f3d3ee5b.html","1090141e05a2508b5136c96ef6095d73"],["/archives/f7feebc7.html","fd65d95a13c0d3ac2c014667b1a5f738"],["/archives/f9f4b1e7.html","f00ace2e7c825fa8d7db26e2d447dcb1"],["/archives/fcdceb2e.html","52174dac0b93a7285ac0b271e8eb13a8"],["/archives/index.html","42c8d19a4c26ab324af1112558fe7ac5"],["/archives/page/2/index.html","65f08c82500cac408187a4b32c7c12ac"],["/archives/page/3/index.html","6ea57593b0e3495749c977b3c532ac7f"],["/archives/page/4/index.html","d71dbe603a664fdce3b4b11574cac2f0"],["/archives/page/5/index.html","c774d15d05287b0f6edcd8100239e029"],["/archives/page/6/index.html","47b2655902cbbb150edbc997c38fe8a9"],["/archives/page/7/index.html","817996289a12e3d7025bcff578a95bf9"],["/archives/page/8/index.html","c6f1960fcdf3ab24be95945143a4301b"],["/archives/page/9/index.html","38582081b80eef43331013d764b3f7e1"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","2440d1a69416552fdd455915e1f24d93"],["/categories/blog/index.html","d66eee2921903d97f118d6efb610b5be"],["/categories/css/index.html","89051f19bed2c57da4846aa268c0a2fa"],["/categories/css/page/2/index.html","bffdf6341aeb22b5803e3569b1b3d730"],["/categories/css/page/3/index.html","6d2afd968f8110ebb77db0204525bb8c"],["/categories/fine/index.html","624a3d597021d156002e3b39772fe580"],["/categories/html/index.html","2bb85a098b97b53e87c8d8c5ea19f276"],["/categories/index.html","1a20bdc59e8e3e24ff80574de41f7733"],["/categories/js/index.html","d70a531d3b17eef56e581244c4ee6518"],["/categories/js/page/2/index.html","49c0b8971488ca6ace640d09eb134b92"],["/categories/js/page/3/index.html","a228182a3d227c55b101cc02f35c7bbe"],["/categories/js/page/4/index.html","1c0e0f295cca18d590a022dd5d0a2868"],["/categories/js/page/5/index.html","9aac89324ae47629bc707cdbe18fe175"],["/categories/node/index.html","b279145221b2de62cb06a30bbd7594fd"],["/categories/vue/index.html","f738f822e301414e58a5b7a4cae94ecb"],["/categories/vue3/index.html","416db7fe676bdc07f6faa04f72b6baf7"],["/categories/webpack/index.html","c3fc691e173921b56413f4dfbf36e74d"],["/categories/微信小程序/index.html","242d33d95a3d3c68c7bda7a87ccd6b76"],["/categories/面试/index.html","f0e3328145d0286b3b3af0714c985571"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","d2f9d80c1f30ff3b496ddae161d23a53"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","f5d5f62ff608278d33d118497fc8bc6a"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","d8cacded7730bb54981c6dbdb3a33625"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","a686aa2ed21acb6cd214562b28614a90"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","52361caeceba491cac300b8c67e5534e"],["/page/3/index.html","5215bfbcb3a1c7f7972ff4921bf1bacd"],["/page/4/index.html","403a16bf0337feb04bf416e216b8fb20"],["/page/5/index.html","eba8041407180b5647d386c6c3f7af39"],["/page/6/index.html","84c3364843f1bb5d1b49dfbe3e1d4e62"],["/page/7/index.html","97d5a7f5ee3665f3b0d12da5c2437a6c"],["/page/8/index.html","699f5e6521a2b5cf1bc9c1f113e361a2"],["/page/9/index.html","604835c1bf9cfe2b135ecd37ba4f3b32"],["/project/index.html","669e7a54ea64e4c2e209a5a737016703"],["/sw-register.js","6cbefef121b0033d3238cc4cb1a45d06"],["/tags/BOM/index.html","408a543194b654c8bb0a33642a63e531"],["/tags/BTC/index.html","4f6d440a0a793c525adffda208fc7cb3"],["/tags/Dom/index.html","ef81b2b41d0aa75b341aed569ddea36c"],["/tags/JavaScript面试基础理论/index.html","22622a6aa6554d4ff32d70ab5d6d61ae"],["/tags/ajax/index.html","01886985c4eaf4dcb543b6e93ec77402"],["/tags/ajax2/index.html","0f30d9f27d34e105ee9e968cb9bfa2d2"],["/tags/array-api/index.html","5b8fbfd0630dac2b93d35ed76874483d"],["/tags/bind-call-apply/index.html","a6cc999af251162231dbe56cbd8ffbab"],["/tags/blog/index.html","b65f70cf2871a472139eb4d0680e8615"],["/tags/blog个性标签/index.html","3f4bda2898c1eb000fcb5061a691935d"],["/tags/box/index.html","739b3167eae4f93dc0072367895ba3ef"],["/tags/cache/index.html","2995038dc5b87bd4ffcbce462726cde4"],["/tags/center/index.html","a86b6fcfbbaa6ed3483a0dc27134238e"],["/tags/closure/index.html","6c9330de8ac64d01bf0e7ca874805e8a"],["/tags/column-layout/index.html","90e5c6a475c9f0cf4d99def57e391c01"],["/tags/composition/index.html","18a48bb4a80438f5923ec4900e86ee7d"],["/tags/context-stack/index.html","214da85f3f6771ca5ac46e3fab9d61cd"],["/tags/continue-to-upload/index.html","ff358b5129d652eb028545637c84337e"],["/tags/copy/index.html","7dd7797b135662a6dc34ca9b2563b9ae"],["/tags/css-performance/index.html","273836fa6ee6ef7cd45ae2033115e215"],["/tags/css/index.html","92ff4a47b7759c29cb247750815abf16"],["/tags/css3-features/index.html","06f8e8f8c90fcd7f48586e489767ebd3"],["/tags/css面试/index.html","40974b2fe5a43d82702f177c8c0c5e34"],["/tags/css面试/page/2/index.html","db7f995dcfd24c56aad5b9fa77c48ec4"],["/tags/data-type/index.html","6a57350baff03d107dacb10cfa55eb4a"],["/tags/decorator/index.html","be5497c46284d68c0a867ad39fa1923a"],["/tags/dp-px-dpr-ppi/index.html","7f75964ecd89e2157307d66c97c79042"],["/tags/em-px-rem-vh-vw/index.html","513b97c7ec934a3165cc0334e5fbfb34"],["/tags/es6/index.html","aa027dd8e98ad4935b097c394afbe8b3"],["/tags/event-Model/index.html","38280169b09c1a99279308d3b7f897e8"],["/tags/event-agent/index.html","a26bd1ab37b948a6b8421b91345d319b"],["/tags/event-loop/index.html","87521cf3eab7ba2e9da5ac64a6b6b940"],["/tags/fine/index.html","2b0801ea861044808229888371ae154d"],["/tags/flexbox/index.html","6ae489679a7bc76917fabad4cc063e46"],["/tags/function-cache/index.html","4269aaef474d006e22330705197fc0c2"],["/tags/function/index.html","8495652db2a1638cd2ddff4e2b704a72"],["/tags/functional-programming/index.html","f2b97d687d8c83522de9bb11e50ed7e8"],["/tags/gametime/index.html","2c9fe87fae221be133c7454ff0e3300f"],["/tags/generator/index.html","8a9424de65aa8c4656d8483a0d89ef03"],["/tags/goal/index.html","271d8bc65b1e197626441a64d3bcb4e3"],["/tags/grid/index.html","26aba25a390bc6946d340c605cfefee0"],["/tags/hide-attributes/index.html","bf90afa582c78309f19bda556761774f"],["/tags/his/index.html","d6ddc152c445171db691826d0b81911a"],["/tags/hooks使用/index.html","2125a645bf8e099e153e301933614696"],["/tags/html/index.html","f7f22c660ffa7180516122549b832843"],["/tags/index.html","eb2b19daf9184b977f5edaf227480cda"],["/tags/inherit/index.html","9988a92bd0fab9075590f3c4794edeb4"],["/tags/js-data-structure/index.html","9e30d9a0f5cadb1bcf89bd6973dffb52"],["/tags/js/index.html","9efd8eb46c976fca374ccd732a167566"],["/tags/js面试/index.html","4c5cf0398b00b7b19a152e1d904ba403"],["/tags/js面试/page/2/index.html","5ff6a779f5d5c157c22a81b96dd9b780"],["/tags/js面试/page/3/index.html","200b8f24c64e8e94b1b97fe58c6111c2"],["/tags/layout-painting/index.html","b574fa8686f8ce8a8be518694efdfebc"],["/tags/less-12px/index.html","27f3479f7ef33f2cc932e910ae9a3068"],["/tags/loss-accuracy/index.html","02d7af97a7673bdaa9411fca35147279"],["/tags/me/index.html","f8714f841442dbea8ac3c788f0c1ea6d"],["/tags/memory-leak/index.html","a6abe001e1636f9c36fa69f2ec51013b"],["/tags/modal-component/index.html","c520790340c25be6994c047cc5d3a6bd"],["/tags/module/index.html","f04d2edd3a0bf5731eadaaff430f21c7"],["/tags/my-carousel/index.html","fd43395ff92ed91ba62e36111feea298"],["/tags/new/index.html","060253bb6fa22285b219d93a7c88242a"],["/tags/node/index.html","a60a684f00b317b6398a064a41ad6c51"],["/tags/object/index.html","a6577c9a555b308c1665c17fdf5c2667"],["/tags/performance/index.html","341300d4f75fb5f5023d06978b6fa84b"],["/tags/promise/index.html","9a20e5506cac98d982744ad1a6071576"],["/tags/prototype/index.html","213ef3e40d504421d337753dbc2f2c6b"],["/tags/proxy/index.html","46d9b02fd4ebfcfec7a909648c8c4937"],["/tags/proxyEs6/index.html","08b213967691f5972cab1b0fce8e157c"],["/tags/regexp/index.html","675e905230a84b23c4977280a3613c0b"],["/tags/responsive-layout/index.html","ea5113003c67469e53bf283924619fad"],["/tags/sass-less-stylus/index.html","94c87809dd300c3b38f5914f8af443e7"],["/tags/scope/index.html","badd042a32d6a1146bc498ab0c930905"],["/tags/security/index.html","18466b84ed9a61f377a7745f9b12ef33"],["/tags/selector/index.html","8af3f849bf008ed3fc4d0947533f9320"],["/tags/set-map/index.html","2308d5b29c9d45de48f546a70b93ce6c"],["/tags/single-multi-line/index.html","8e28e7225fe3a332003b288254543d08"],["/tags/single-sign/index.html","4d466fa92ef948bd1be45cd25dbe1342"],["/tags/string-api/index.html","6731028f1978926d9a2ca29b22500259"],["/tags/treeshaking/index.html","6ed82a86dd5b0d2655d16fbb801b4ad8"],["/tags/triangle/index.html","e7c550e4a54a473b62fba671e947a552"],["/tags/uniapp返回顶部/index.html","ebebbbdbd5c5bea4cee55f38dddb2f28"],["/tags/var-let-const/index.html","02085247dd8cedcf9eb3b5a0992bc4be"],["/tags/visual-scrolling/index.html","30d37a8fb79753bb493ec81ece3a8aa4"],["/tags/vue/index.html","93b7f13e52f3927e817b0f826a6faaff"],["/tags/vue3/index.html","0dc29909f5d4508b8dfa0adbc4b1880a"],["/tags/vue项目部署/index.html","d5152df5885deff6f073690d32a6cd7f"],["/tags/下拉刷新/index.html","ebb1765ad9891111e881691544a2658b"],["/tags/反问面试/index.html","a989f766b2928025a570a720b569390c"],["/tags/和/index.html","20ce9a356f26f568551b609b465306e6"],["/tags/如何设置文章置顶/index.html","663e067575220c44615b649a5ef05cf5"],["/tags/微信小程序/index.html","b7b8f1e01d44dbdda49aa1e30a9a1ebc"],["/tags/星星/index.html","194c763c514d8a69bad5810fd243df7f"],["/tags/防抖节流/index.html","350abd58476d972a7a911c15be7229ce"],["/tags/面试/index.html","e2e4177478e53b839802344de32ec793"],["/tags/面试问题集锦/index.html","1a3d4d581f641617dd2805aff5bbf4e6"]];
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
