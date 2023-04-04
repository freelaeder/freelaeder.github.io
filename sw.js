/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","ee8433d1cd5d1b8da534a90138c2e0a9"],["/archives/10bf1714.html","0848870a7405216bba866aa1dfdb99d9"],["/archives/14015a55.html","4c950987743af658563816fe8fc5319a"],["/archives/171d1754.html","9ff2bd135ce9406cd325a07cc06d7ae6"],["/archives/17a85756.html","220beee0a6d577ebc25abb63b5694561"],["/archives/1879f8e5.html","6d5c38a7e305ce07d23f260908c9c0af"],["/archives/1be48ee.html","65d5d08554854f2a51c60e8a082e3d84"],["/archives/1e021099.html","2f71618fc832abfb632388a7b39ba5d0"],["/archives/2021/06/index.html","1c14b56e1d825f3ce04cf2bc7ff2adb4"],["/archives/2021/07/index.html","0fef11dcb2b0a3ead9dbef34b85984b4"],["/archives/2021/index.html","d50b11308c0289e4556d20c89dda63eb"],["/archives/2022/01/index.html","1052d2da782988a8391bd86c6d7d160e"],["/archives/2022/02/index.html","0ee4e9dae13c0d8290b0fe4eb251c3dc"],["/archives/2022/03/index.html","a9edcb5d2fea2f348c38beafd2c18642"],["/archives/2022/05/index.html","b76c050d4e12f0ea5f2b57fb54074738"],["/archives/2022/05/page/2/index.html","0c317231f033e8c8b7f339b1d56917f7"],["/archives/2022/05/page/3/index.html","b2f871ca1fb349de515478a6ac486f78"],["/archives/2022/06/index.html","7fa9fec7de277e75a5d4a09672ff85d9"],["/archives/2022/06/page/2/index.html","37627b626f9774e278b71abc75b5749e"],["/archives/2022/06/page/3/index.html","84825eb1f002c61e6781529d11522b22"],["/archives/2022/06/page/4/index.html","5aec81463ea850762b393ba464d55a39"],["/archives/2022/06/page/5/index.html","1cd0adc598f5d3423f4632a6e4df29bc"],["/archives/2022/07/index.html","7fe1feb679bc603c91479d500a208699"],["/archives/2022/index.html","701694c2ee07fbe599fb5a27dfa3e56b"],["/archives/2022/page/2/index.html","1aaeca549c394b89e525528baf7ec48c"],["/archives/2022/page/3/index.html","67a2ff9d98767395c0f03cc6f3ccb850"],["/archives/2022/page/4/index.html","2ee846511a551c2d66e3a15cb8cbac80"],["/archives/2022/page/5/index.html","c622a877e19dc5875d35412f31f728c3"],["/archives/2022/page/6/index.html","f3f033241d567bc2c856eca04c685201"],["/archives/2022/page/7/index.html","1e220ff1839a38cdf26de47820d3e79c"],["/archives/2022/page/8/index.html","fc37aeabadbe3efc3eb3ac448f51d7d6"],["/archives/2022/page/9/index.html","9dc36c062340e86544c8c612de4d6eb4"],["/archives/2023/03/index.html","7abcd0e1c027af520006b7eb0a85bed8"],["/archives/2023/04/index.html","950c500cd518059072a1f3d4548a19a0"],["/archives/2023/index.html","454255b76bd6eb56a55ee4bc94f21442"],["/archives/203410a2.html","e9113371f081c5aa898fcfc633f45041"],["/archives/2039e3ed.html","7f6bea124769e2da7773373afcace614"],["/archives/28d88e6.html","da6f2eebcb5ffe92889d9b28a50d6652"],["/archives/294b86eb.html","fbb9e47d7e1914acc401a3c118ec05be"],["/archives/2e20d937.html","80090ffcc995fe7b6f8cfc9ffb5c50a5"],["/archives/2f8b36fc.html","9fbf9b6db3a4bb7419b79bb65431345b"],["/archives/30b90bc0.html","2af8329f8ab9437c4bf04d4e6ef72435"],["/archives/336f0513.html","fae461771572a240239a5cb0c1dd530d"],["/archives/33b9c85e.html","8586103d72159be95f2a5eb51b274f2c"],["/archives/36044e1a.html","0c98d46442373767a2a6b19d73c24452"],["/archives/37919ccb.html","024a2699c18ef85234ced46ac1226680"],["/archives/39a5927a.html","d16d277994ab4f28c7fbb45421ae6a45"],["/archives/3f038ede.html","46c590955dba9ed5bb0932521003e9b7"],["/archives/40f0eb24.html","ec3d79999ee151c01287d1c409db3fa2"],["/archives/41476be7.html","488e526a16ec032a4df8fa9b0b3b1628"],["/archives/42b82995.html","d2844c7c32efd0019e74fb4ba108193b"],["/archives/47c3840f.html","faa2752803cf88360004dcb0b61e5627"],["/archives/48078dd1.html","f0ae71a20c268b3ad5e68a8b68321c9f"],["/archives/4dbabb82.html","a8bbbe991646053575e1577d17551571"],["/archives/50cfbdee.html","8a732f20778fe637d0b444ac79232b98"],["/archives/574fecf1.html","6b424bb4313d5ad44efd2c8b735f5263"],["/archives/59b49683.html","d9f27d34a16118e305203b7d06f7f28e"],["/archives/67902db1.html","2307dec3d49b247e5dd64ddd65b6ed3b"],["/archives/6be34445.html","034d388f15bfe0368bf441d7e451504a"],["/archives/7331f3bb.html","7cfa6c88f60883cf53e3f716083dd48e"],["/archives/7472fc2f.html","5d340808fe88ff5018a8d540afb21dca"],["/archives/77971af0.html","30aa8ed3b665f7cfa7b1071386673e63"],["/archives/78ca6597.html","eea92246ef6c93e31adee93c942999a0"],["/archives/78cea6d8.html","99c4c66bbcd1906a546fa5f756cfed6c"],["/archives/7b268071.html","0b242e175e333d72660cdc84f7898f7f"],["/archives/7c942302.html","4d0952d800b2898ab0804c60f5c6fa4c"],["/archives/7d76407e.html","b90c005a26f3266c52ce974ccde23282"],["/archives/7f6cf7b0.html","16fce8423c2cce6d8311710f445b8e4b"],["/archives/82d79681.html","9119be3c20c28f181e17b98bd27f850f"],["/archives/84a91e69.html","a8b5f50e630a4a4c8f97290a0074298d"],["/archives/857fe845.html","0ad92248d1cd18bf2d82682950ab422c"],["/archives/8a9483a.html","4e7e1283aa65de660b426e689e8ada89"],["/archives/8d5284dc.html","b0d6904e3bdf443ffeeb576ffbd8957e"],["/archives/92004154.html","54e7c3b26c9983378ce39f29e893566a"],["/archives/9370d73f.html","cbf174ea749a1f54d008f1501b83ec7c"],["/archives/93ae9a14.html","fe0d39f3edc051e1eba651b7a92228e5"],["/archives/9417ce47.html","34b96a6309a96fad5c0989eebb5f4adb"],["/archives/942a5c06.html","673703f98ec4032b60de1e88060f020f"],["/archives/958c57b5.html","bdc0b316fb20e089cca53694cf97cc2e"],["/archives/9692e25d.html","4daf4efcb29c46c91ce05d5031231346"],["/archives/97a9ab5c.html","f20de6a9a830d9ea18e0dac0043ed272"],["/archives/97b76847.html","13420a17f0b624fb289553e9382f24e6"],["/archives/9a0dce2d.html","7bc742d7dc668577b21a479af8ae619b"],["/archives/9b0c2390.html","c05431ad35cbde12b4dc79e03c0afe98"],["/archives/9e5f33b7.html","c47274c7e6d681e361a7347e49d5035f"],["/archives/9f1ed84.html","0b07992c8373d5f706b8bafa7c952513"],["/archives/a0245a2a.html","c323c667dc41233eeb1589cdf606445b"],["/archives/a10ceeb7.html","9b90d21c8a9fce37c0cfa203f77f595f"],["/archives/a36a5ae4.html","db717e8ce247b6b06c51ac1dec711372"],["/archives/a8adabec.html","bfc3f31adbbad3b84dd9a774c753c22a"],["/archives/ac5292c2.html","d3d46469a66e4777149d6f1d89477649"],["/archives/adb78c8a.html","c7ffa333af22a35f8b965b088809fd59"],["/archives/ae4c07b8.html","21512f7795814d37cca591c6773aad49"],["/archives/af55d3.html","c76fb5d6441c21cbbcfdc341e999867a"],["/archives/afcd4575.html","9750ae6fc0d3bd4bff79ff95ce946c49"],["/archives/b21f48b9.html","962df79d633321e5473aadd1efeba810"],["/archives/b51bdcfa.html","0be969d726794c6957374be6c8915b30"],["/archives/b7b51641.html","18ce3ce5a6b35feac4bdbff64f7a8289"],["/archives/b9f20a20.html","bd16175d80cb8428cfd74dd4feca81b2"],["/archives/be945145.html","9a553727a5223ff3a7c8cef646ac07cd"],["/archives/c0add594.html","f7d164f8d1e08e1cc3f162751ea5d46e"],["/archives/c242628.html","59a85f6801f68ce79e70b2837bd603a5"],["/archives/c59bd5c1.html","77612a47f832f2f393b8d79eba2e990e"],["/archives/c5a6a264.html","e47eaed9a7c65e257888669d56999b81"],["/archives/c5a97815.html","1ba01ea425c6c1d99fdb941c34378f99"],["/archives/c7f4347.html","128d752f9a893e8dd91498120d322a94"],["/archives/caae163d.html","d98ec5531f54459acfa120bd92ec0657"],["/archives/caae7b70.html","4646bbb94a10ad54e4ba731c63cab618"],["/archives/ced3960e.html","fe8b835bef7d4a9306fe3b2532943c2e"],["/archives/cf2f5248.html","67d6d3915a046728269e81182f0ab18c"],["/archives/d3b694df.html","4c072ba70886eaf0a00accfb7e273d77"],["/archives/dc3acdcc.html","da83ff109a76aa646b3838daffd1edec"],["/archives/df976d87.html","8c77ed6acb9ca18505922a376255bbfe"],["/archives/e0c98e7a.html","cc95de546cbd1b265d54273e9bc9c22c"],["/archives/e6437fbd.html","941ab234bf6840452817c015ee3764b1"],["/archives/eab5cc79.html","3d88ea4ebce9d49e504d7e2adebe84f0"],["/archives/eb05a173.html","91d6b3ecd0269d7b906b984cac1ad2cf"],["/archives/f1d0391c.html","6cdbc9fa6460f72a49c7e632714f5fb6"],["/archives/f3d3ee5b.html","548015ff3c93847f9c318653d784e4f3"],["/archives/f7feebc7.html","203190fd8653759a9360874145cfea1a"],["/archives/f9f4b1e7.html","5bfca3f5c023a4e0cb9045793d0d007a"],["/archives/fcdceb2e.html","9c38ff15844eaae814f38edc5a43c669"],["/archives/index.html","53c2501d8e24be727f15d37e44b23e13"],["/archives/page/10/index.html","f4b41ac6401d7dbf54fbf07d1983477e"],["/archives/page/2/index.html","61b050000cf272b103d02596c88e4cac"],["/archives/page/3/index.html","dfaba5a6f7e761dbf0946541dcb32375"],["/archives/page/4/index.html","5e0108a72605d5d4803a68738f207246"],["/archives/page/5/index.html","5f5e6b579663d7a9fe1d6d1cba617201"],["/archives/page/6/index.html","812489c06d950bd26a7cd489fd7ab1dc"],["/archives/page/7/index.html","005687b7790ad2a242048b82dd7df36a"],["/archives/page/8/index.html","3aedd1ccf2a51882b3cf3641d338850e"],["/archives/page/9/index.html","c753f6ac37f7f6664a438ef709140d21"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","d033050115817000fa2703c555dacc76"],["/categories/blog/index.html","9ccfe98111f3e86f353fc16401cc3325"],["/categories/css/index.html","66ae0424dde568ac07de59b3a3da3d66"],["/categories/css/page/2/index.html","8743041133e944768f57f047c4d3e721"],["/categories/css/page/3/index.html","8bfb6a5bfa77c216f3d044ba0e7df626"],["/categories/fine/index.html","3f2532e48cb253b3fd41068bc46d75f0"],["/categories/html/index.html","cfa4ffa16017c31d3bf1a6ef17f83915"],["/categories/index.html","e121a849d759da0f387f207203052dc7"],["/categories/js/index.html","054684016deffa1d0d58a2b795505c61"],["/categories/js/page/2/index.html","407d273ac011d34352c3d17f7d99dcc7"],["/categories/js/page/3/index.html","14c68e4157470df88814f3be5503ed01"],["/categories/js/page/4/index.html","00a415d3a94e3ba10fda851ef1e4a34c"],["/categories/js/page/5/index.html","a00d8e9fe77ba295c4b182a698c67d81"],["/categories/node/index.html","179cf38c047a40ef88eefce90fc52c60"],["/categories/notes/index.html","81d734a20f7bc0ec43e195d9af49149f"],["/categories/react/index.html","31ec7cedfc96220752fb0b33e63b17c0"],["/categories/typeScript/index.html","12a3458e92179af44731794469c30492"],["/categories/vue/index.html","a70d9a650aa53b21ee85ee0b467aecc4"],["/categories/vue3/index.html","4dadfab9735a2fb09d411bf75effc0a4"],["/categories/webpack/index.html","38254c22c3b7fd2c3ccf32549072adc7"],["/categories/微信小程序/index.html","f4a1eded4975602cc5f73b8f73c5223f"],["/categories/面试/index.html","efe0554837621b1c966c296587f947ed"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","d2f9d80c1f30ff3b496ddae161d23a53"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","3d029241e327131cc9104396f9de1268"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/ts/images/01.png","c922cd12dab12bd6c46ee93bdd4205d8"],["/img/ts/images/02.png","3aa2056326e5d1c796af4ee14d5aa795"],["/img/ts/images/03.png","5d4a8b39b62c2c484b45dffa7f71d2a5"],["/img/ts/images/04.png","9005165e16c5fb263c3850b77b8c60bc"],["/img/ts/images/05.png","996ddffc76d0e5750a82f5a0473501b4"],["/img/ts/images/06.png","a52bf4f321fab1fee87cb087e0d22d04"],["/img/ts/images/07.png","36e3a3b114bcfad55498a774d9342e4f"],["/img/ts/images/08.png","3607e0c5650e9afa1384f2aac4009d62"],["/img/ts/images/09.png","dbeb822550e8eb71e78714035d790d38"],["/img/ts/images/10.png","e4a25517b0548f90ac6bef9d471ba0f1"],["/img/ts/images/11.png","dad677e46db0955c7d139a83b4b82cec"],["/img/ts/images/12.png","9745157eeb18de2635a64f65aeb34ea6"],["/img/ts/images/13.png","da212468d2ee4f8e9ba1f97843983786"],["/img/ts/images/43.gif","37c2e56cbc5c7a6fa18b043f8959a61c"],["/img/ts/images/44.png","6fe8492e0a34f7997c26473101a5352c"],["/img/ts/images/45.png","f799db600172453b1e1c864a85a9809a"],["/img/ts/images/46.png","9035adfac7596edda51156dacec1da06"],["/img/ts/images/47.png","2d75b31e7998a1e3c5ecec69a833a1d0"],["/img/ts/images/48.png","13beb8460f834a2a86866f9efaad66f0"],["/img/ts/images/49.png","540398c418c42be7de9f28b79882a107"],["/img/ts/images/50.png","18e4e8ef181ffd7eff2d1844cb704536"],["/img/ts/images/51.png","76bf41ed3e6bf0c976973364eb52fd76"],["/img/ts/images/52.png","f5d555290bc571215dd3ec30fd8aad42"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","9bfba0957714c63ea6f44a18c1b3427b"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","b0a8423dadf8ea9b22b19b61ba8f4c1d"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","2cac0e60caa833c20e87b1b670648568"],["/page/2/index.html","d5ad1b2a35e716856526f02a1bd4c273"],["/page/3/index.html","7f5c4fc4cb80a839d4a3872fd8b377c3"],["/page/4/index.html","ce268a2bf9116caad18f7ddd17056fc6"],["/page/5/index.html","c762795797707e118306a55b21d8c19d"],["/page/6/index.html","160314d725b79664d6bb592daf6a3fe1"],["/page/7/index.html","c8dee1bed71048608e48c305ec272882"],["/page/8/index.html","d367c731bbe63a20d6017471a2cfed84"],["/page/9/index.html","049ede3b66ad800adb5bb091858ac116"],["/project/index.html","a54b68a7f20b9396a555376993590c69"],["/sw-register.js","4f8543b772db312d38187e0ab949a5d4"],["/tags/BOM/index.html","94235bbddf5268da6b7a11fe9936ed27"],["/tags/BTC/index.html","001cbc4b46f193ae966d1e1175a103e2"],["/tags/Dom/index.html","e7cca92b136c3a3969bce406d50c85fe"],["/tags/JavaScript面试基础理论/index.html","70ace4ee07716eb15d54fdb6eb0e1908"],["/tags/ai/index.html","bd46d84d4e824a79dcce8aa6a2bc01a9"],["/tags/ajax/index.html","31591caaab7fdd178d3057e8500f1f1b"],["/tags/ajax2/index.html","35b699bdd1d37a955362092f942b55fd"],["/tags/array-api/index.html","48b59abe0a825be6b42261a194b394ac"],["/tags/bind-call-apply/index.html","e3d4a235f3c35bba247fcbdd46dd1e7d"],["/tags/blog/index.html","d19c637fd64d0fb1c4ba1fd7f1a6cf36"],["/tags/blog个性标签/index.html","44a76e66ee310493d0a47b85a68bf343"],["/tags/box/index.html","8e83c4954b6bffb601d17a10b01161ea"],["/tags/cache/index.html","0da142f7bc3c2fa377009e01341f808c"],["/tags/center/index.html","9b35075098297b394ddbc9f1ff1cb590"],["/tags/chatGPT/index.html","21db47fe3457f23ea8b7162805595c8a"],["/tags/chatbox/index.html","695277ab9f14ba0f5d84bc69896eef3f"],["/tags/closure/index.html","cf17287131c3a21360007182b7b16ae2"],["/tags/column-layout/index.html","3ca48244da187097b6d709c3301b96db"],["/tags/composition/index.html","abd029405d89a7c40ce46b476feba8c1"],["/tags/context-stack/index.html","1b29b63194a52c17f85fad4e387a10c1"],["/tags/continue-to-upload/index.html","b17b4b2cf21bace20095ce86c4eb5256"],["/tags/copy/index.html","8cb2c370bd631155f6c29373ede65481"],["/tags/css-performance/index.html","53dfb7438695f71195e81f587372ec26"],["/tags/css/index.html","58be4c91aec64d56b127d6b9b1da2e9c"],["/tags/css3-features/index.html","344be09b0ecfe97a0982f5730bab0719"],["/tags/css面试/index.html","10999ccfbe41c3cc8470646e3bff9623"],["/tags/css面试/page/2/index.html","a655c2a51752f070060160cd00d470d9"],["/tags/currentTarget/index.html","ba1199d2fb86b80fbb4be50c86d26d0d"],["/tags/data-type/index.html","daaeb0966e8dfe0880ea3f12c9a2e909"],["/tags/decorator/index.html","aaa66b05eae161411f69dc5707a46ba9"],["/tags/dp-px-dpr-ppi/index.html","6aa6bddde219b63915948e3fa0705440"],["/tags/em-px-rem-vh-vw/index.html","b9d18cc722837980457f47d23a7d4a34"],["/tags/es6/index.html","e3a87563ecce9aca47286ef540786e12"],["/tags/event-Model/index.html","82efe37c6ea5b1093cb1d77d12063de9"],["/tags/event-agent/index.html","cd7d8d6ce415eb40f3989788b42291ff"],["/tags/event-loop/index.html","b69e68883525fc18d665537751305918"],["/tags/fine/index.html","fa81b4fd64128203d2c4308b5d722089"],["/tags/flexbox/index.html","da34fe88415bc332b6d49344b35dae70"],["/tags/function-cache/index.html","b36ec70822ed9673e421a48164c3db83"],["/tags/function/index.html","d68e1a7826f918b2d36c74b459c8f5ad"],["/tags/functional-programming/index.html","b998c1b956f2413fc44d7ea7eadc8671"],["/tags/gametime/index.html","3f6fa9ea5a88bf03f0e1455e14c75d09"],["/tags/generator/index.html","e248459c9e55e50e9767a14fcff83533"],["/tags/goal/index.html","43e673ed22706463ae46f96874c210ab"],["/tags/grid/index.html","411d9ecb11e02848b3b1a1e550c64479"],["/tags/hide-attributes/index.html","1344caf005ef2d405eb7a167c6d05811"],["/tags/his/index.html","313d45de4931b859f1ff87b6542976f5"],["/tags/hooks使用/index.html","be47e697d8269702d98aef12363f4f51"],["/tags/html/index.html","cf779be4c58051faec985d0b06b83973"],["/tags/index.html","9a27eeadd4a89ebf4354f276b1b01565"],["/tags/inherit/index.html","592c8dfefc96a3ae87dbeaf5abac192c"],["/tags/js-data-structure/index.html","8fe62900f7385ce899625baa9fa53b26"],["/tags/js/index.html","99f49c30d11f7216f0ad6b849a757416"],["/tags/js面试/index.html","d866a1e66bf168eecbc01b4727cadc72"],["/tags/js面试/page/2/index.html","7764e29ea655284cd0f420a3c4f0e043"],["/tags/js面试/page/3/index.html","107c484ed5da0fef9b4951172c26e0a9"],["/tags/layout-painting/index.html","07a4b67ff62e6f25c0af0a9ead53d8de"],["/tags/less-12px/index.html","38a9420e43ebd777ed306bd554d23249"],["/tags/loss-accuracy/index.html","26d5fa413d098fac0a21af4a006c4e7a"],["/tags/me/index.html","60c5b1c4c8b75312954a7c2dfb284655"],["/tags/memory-leak/index.html","692238db8fbca6c72cf827ec6a376f46"],["/tags/modal-component/index.html","df291aff17e0aaa08ea2d05a73f69ef7"],["/tags/module/index.html","bfa4f70a8074ede329b76ea9b5292148"],["/tags/my-carousel/index.html","d6fd06829795aaa8e5835ae695c1897f"],["/tags/new/index.html","378f55fdd45c8417e956318b93139154"],["/tags/node/index.html","07bd7359cdb8a1a3ab5edaf0639394ff"],["/tags/object/index.html","d8006f3541eb809320b9bc09e9f63b51"],["/tags/performance/index.html","b711b0089d033375d398954bca4f2532"],["/tags/project/index.html","2ad36e0d46f597d5fc5509850ebea14f"],["/tags/promise/index.html","b2ef42808f05846846c15e82f3b5b955"],["/tags/prototype/index.html","c0fc8a2a9392edac69793b04d34f583b"],["/tags/proxy/index.html","2c815cde7613ec9e1c62b0a6ab134bc6"],["/tags/proxyEs6/index.html","4417cd066ab1e17425843d6d64e2e6f3"],["/tags/react/index.html","5e5538045563caa9270abfd9f87fb78f"],["/tags/regexp/index.html","32cd2cb923062fbc2c7464f35ed52430"],["/tags/responsive-layout/index.html","7c0a71c8506acb7bd2de551947faacb8"],["/tags/sass-less-stylus/index.html","9b488caaa3862c19c015acff819049f8"],["/tags/scope/index.html","d171284355b93a8f208212219a9c9d50"],["/tags/security/index.html","150f87af69a6b7695bf405666ddba7a3"],["/tags/selector/index.html","852a6813135580fc36a4e50c02432001"],["/tags/set-map/index.html","4e04e20877dd6bb2608adfe644a873f7"],["/tags/single-multi-line/index.html","fe0c76aea6c423253bb1c4fc0a375824"],["/tags/single-sign/index.html","b6297bf732349060df076b92f730fb17"],["/tags/string-api/index.html","0e913602c8d3083003b324d46a1d143b"],["/tags/target/index.html","438bbf96280c523e18a5f6e3e14de7cd"],["/tags/treeshaking/index.html","b38c5b67b83754a65ef8d541c3d57d87"],["/tags/triangle/index.html","4ded52812081c80a2f851e8a5d6a4cd0"],["/tags/ts/index.html","e28be263718c22167954fb7816a97b24"],["/tags/ts报错解决持续更新/index.html","f9d159246d02dc0bf9a39acc49bcf75c"],["/tags/typeScript/index.html","55a4b0016c98f5f56bfeddf9998a0ffc"],["/tags/typeScript基础知识/index.html","c7396ff79cbca20eb252cbcaffddb45c"],["/tags/uniapp返回顶部/index.html","40ce7f06a9d37592526460fdc845d852"],["/tags/var-let-const/index.html","85d0cd8f6e499c8574ec1d48270430b9"],["/tags/visual-scrolling/index.html","4c0ee11dd59e5f41284848c153068aed"],["/tags/vue/index.html","ed37213a73bd7b8a8ae5f4b57c076ede"],["/tags/vue3/index.html","cd5fe88019793a6c1d3f6c837d98b49b"],["/tags/vue项目部署/index.html","14ce7802f717ac83048793d4bab479a9"],["/tags/下拉刷新/index.html","98aa7538a3b03f7cbb78740cdcc51de8"],["/tags/反问面试/index.html","c6395a55604f70f10d9b840cf0e7d440"],["/tags/和/index.html","53532382214dbc888cf346dd3bd082f4"],["/tags/如何设置文章置顶/index.html","916b1ee928d606a9274bc9b5cb3bd1f2"],["/tags/微信小程序/index.html","91ff56074f2bf22a35abce19b089a6c5"],["/tags/星星/index.html","c48b3f89ed2fc467a3f8799b33b43e18"],["/tags/防抖节流/index.html","7517a3d80eafb92af434396aab87d431"],["/tags/面试/index.html","d453a11ff071814dc925ad4ed630176f"],["/tags/面试问题集锦/index.html","a3e07eaa141bbe02d99940fb67be7c80"]];
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
