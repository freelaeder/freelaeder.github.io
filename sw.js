/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","b8dbefa6cba39e8a85578b4add37f97a"],["/archives/10bf1714.html","c1b6c054a635012225943d6b34c680e4"],["/archives/14015a55.html","77359360593454266dfbccb42decc865"],["/archives/171d1754.html","e2629348f095dfc4f6c8caa93c024eb5"],["/archives/17a85756.html","202cbcc7d94baedaf8c746f0eea16ec9"],["/archives/1879f8e5.html","3787086b31f7120f47f0faf04d97a859"],["/archives/1be48ee.html","07e1524bdc68427be6c1917a0fdd072e"],["/archives/1e021099.html","3a95ea45aa3a26907cfcd7d7c61fa881"],["/archives/2021/06/index.html","bba7ac14971196b19698a6c88adbff02"],["/archives/2021/07/index.html","5d71e70ac13d4b86aa20efe598c887c6"],["/archives/2021/index.html","6917eb5a9d382588570548bd651c6dab"],["/archives/2022/01/index.html","9fb9c8c4ca91569575c08629a0dee19f"],["/archives/2022/02/index.html","ecbbe8393f28727e0730e93162ba32f0"],["/archives/2022/03/index.html","be75d51941e5ffa677fc19505826895c"],["/archives/2022/05/index.html","bb4e13343523db641cae65d95813820d"],["/archives/2022/05/page/2/index.html","f50c605952f021c320beed20c97f0aa6"],["/archives/2022/05/page/3/index.html","d79335b7733ad9706fcd7264d2ef47dd"],["/archives/2022/06/index.html","4ac8e52eb17631cecdd4ecc010a0998d"],["/archives/2022/06/page/2/index.html","f94684c557808c15559ee11893106fa2"],["/archives/2022/06/page/3/index.html","ecc9c8c5e345bedd15ec33d1fb0af30f"],["/archives/2022/06/page/4/index.html","ee21b7dfdc9e5f748d762c62f52d27ff"],["/archives/2022/06/page/5/index.html","595e399db8d33ffed3f5e7ec82401642"],["/archives/2022/07/index.html","97f829bd9789d610f0f683814d666112"],["/archives/2022/index.html","81e33373a3f036ce2160bc26aaedcbd9"],["/archives/2022/page/2/index.html","19f4e50e18dc48fcd5bd264b835d75f4"],["/archives/2022/page/3/index.html","1c7f7d62580864f0321d06b78e375816"],["/archives/2022/page/4/index.html","5445064a528c6b55d4935e616af6fffa"],["/archives/2022/page/5/index.html","a670f35f52093d834fc508fa589d9544"],["/archives/2022/page/6/index.html","05f4c8983c1ed88547c701ad1454dbcd"],["/archives/2022/page/7/index.html","d0aac13f9fda06238bdca84edf4d9bda"],["/archives/2022/page/8/index.html","7625daf43977d65d33bae3baf0399489"],["/archives/2022/page/9/index.html","f0acf8634b7d0bd3f508fe909c52496c"],["/archives/2023/03/index.html","3cbade8c8b4b2ea76070e0ea3121a959"],["/archives/2023/04/index.html","0b0212c7920b7555b04e029e13fdaac0"],["/archives/2023/index.html","d48404b326bb20b8bdeb5d81ac03896b"],["/archives/203410a2.html","9b8bf9c9d3fd9c4a4acb0675191be1e8"],["/archives/2039e3ed.html","6daa65ff21f97afe3825bd36726955fe"],["/archives/28d88e6.html","a890bf99abcec7c294214d69e3f5caa7"],["/archives/294b86eb.html","8b0f3fe3b8c90da57fb31f88f9ee4e92"],["/archives/2e20d937.html","98c4d2d466ac878bad49e8baa3aed837"],["/archives/2f8b36fc.html","559cfe2feae731378d54ea94ea4f2115"],["/archives/30b90bc0.html","511ade746cb1d0fbf198469b8b425791"],["/archives/336f0513.html","d3a756ba31ca30bd5af82cd2ec1d9b91"],["/archives/33b9c85e.html","cb23824a3807c39abaac608b1f1fd32d"],["/archives/36044e1a.html","7092e1c8fd5de72e3d04bf4987cfb0e5"],["/archives/37919ccb.html","a5b6f36cb0d728a94370bb1af662e0fe"],["/archives/39a5927a.html","01336cad7f9a3a139035e4558f29e880"],["/archives/3f038ede.html","46793b2b1370013999594046f291a887"],["/archives/40f0eb24.html","11de44b12d9ae9813137b02c03c7beee"],["/archives/41476be7.html","9e86fcea9213ef6da6993207c360f471"],["/archives/42b82995.html","35116dac0217bbf1e811370a46ba6fcc"],["/archives/47c3840f.html","bb5fb3437838b1c72327c0df1f1a8bc0"],["/archives/48078dd1.html","e63d94b8ee6b1eee71880c0c8b2f89e2"],["/archives/4dbabb82.html","4fc06f48941d60be1e5c3600ba3dd667"],["/archives/50cfbdee.html","d9dac4bc6f0f9269851113b65f4176f2"],["/archives/574fecf1.html","d8029bc4dad41154b76edac40b170e4d"],["/archives/59b49683.html","aea46a9c0d788e60af5a4665eeabf904"],["/archives/67902db1.html","415395c7ed0b85ad6d289b8dc764e004"],["/archives/6be34445.html","a2d0abfc60d587116e937f28a67918b5"],["/archives/7331f3bb.html","a8e341717ae803c3a15a92cec59b3575"],["/archives/7472fc2f.html","3203644e36e7a58a7286cd6d375ef9b8"],["/archives/77971af0.html","d3f71a3e8d71127307aef0fdd5f5314b"],["/archives/78ca6597.html","1fa5e339e3186ccf9d013b00ddb30a98"],["/archives/78cea6d8.html","83fc5d40c8f482919a404294ae82ac6b"],["/archives/7b268071.html","d8304e5fc3cb1a931d9288498afc0d87"],["/archives/7c942302.html","7b1c14c42d6a041259d3825d49c8b814"],["/archives/7d76407e.html","778e8446a19ca543af8906aa77205f1c"],["/archives/7f6cf7b0.html","e164ff891f277a23e1186ff2b86048f3"],["/archives/82d79681.html","61dab7db06ab71c1d21dc6e58b96a980"],["/archives/84a91e69.html","29f450ddda37e61b8e0b20f861250c4c"],["/archives/857fe845.html","762538b64c1c0263eb4b0c24f5d07c76"],["/archives/8a9483a.html","97fd0f406ba29113010bdf8ff8a766de"],["/archives/8d5284dc.html","8e205af977f08358e0e2179dd6ded0c3"],["/archives/92004154.html","f44d16976af537a12b1f04766d029094"],["/archives/9370d73f.html","f8e51a4e39611e987d6ca6747534eb71"],["/archives/93ae9a14.html","cfd6508c65cbcc168606da996aedeac4"],["/archives/9417ce47.html","c5bbce7809b9ada4ce57efd8593b587f"],["/archives/942a5c06.html","a194256f2c09649c0d21f41fe8281926"],["/archives/958c57b5.html","9fe6621f12f88c1bbc9f44676b0c8d8d"],["/archives/9692e25d.html","1624fdd7d91192793e96a9bc1117c162"],["/archives/97a9ab5c.html","dbdfa55201a1b48353ec8d01a3302d1a"],["/archives/97b76847.html","5798191ddcd00deb19b463d167bb7a60"],["/archives/9a0dce2d.html","fccb2f72cd771888f1f42c46b47ed282"],["/archives/9b0c2390.html","84260d975d8f3834440d757cce7a19bd"],["/archives/9e5f33b7.html","74523bf9a73a0f5a6dcf3a08f8e4cdd9"],["/archives/9f1ed84.html","110929fbcbe692df59386fa144961b23"],["/archives/a0245a2a.html","d1a44f350c3514dc7086ef2d9c556702"],["/archives/a10ceeb7.html","3653f6c78418b97e9663cdbd4d026484"],["/archives/a36a5ae4.html","bc50b2b4713f6fbfa1a0c43b49028820"],["/archives/a8adabec.html","ab1e5c6206bdd37b8470d2ac17a81887"],["/archives/ac5292c2.html","c3a2df20623b104302f5114cdff4b746"],["/archives/adb78c8a.html","7e2e7c47a57125544049d61d65298737"],["/archives/ae4c07b8.html","fbbc82c5c42933e86a6d067991bb0ccc"],["/archives/af55d3.html","706f9c8af18f6bcd89c9e85526b9c7f3"],["/archives/afcd4575.html","f0b3be10f8fe9588ef04e77cad66e0c9"],["/archives/b21f48b9.html","80adff16a2f90ee7a7b140d80cd48814"],["/archives/b51bdcfa.html","df1dc492ae444823f45be1774a03f6c1"],["/archives/b7b51641.html","ab5e9302ed1cc62106c368d3606a9541"],["/archives/b9f20a20.html","de23e0290a04e466347932cc0f27ecc9"],["/archives/be945145.html","dde79b195c9fbfbf54dbaf79642a6683"],["/archives/c0add594.html","a7af2f166f07f651abbf3289fc6ad660"],["/archives/c242628.html","0f24fc9c940680f3619bd70be9652c59"],["/archives/c59bd5c1.html","3bce18ce86ed622f3e39cdd096e5607e"],["/archives/c5a6a264.html","02938fb2f6296c566f78a8f6c24229de"],["/archives/c5a97815.html","0ddcedf1f1cdac3209524b634ff0204e"],["/archives/c7f4347.html","d839806c758c329b9a6e02cb869b8542"],["/archives/caae163d.html","82d06c6e794bd56c6b6dc5f7a892c3d9"],["/archives/caae7b70.html","056c2239f919cc137290c294aa9cd9c6"],["/archives/ced3960e.html","984cb2c35ce53c3cb376f1053be5acf0"],["/archives/cf2f5248.html","b4d321f89ddfe4bee4651f0a9e353b7b"],["/archives/d3b694df.html","aa114319fe21b3f47817e5740f6ce444"],["/archives/dc3acdcc.html","3be443cf516de81620631bf30fc38144"],["/archives/df976d87.html","df3645f72df86e2c11040397569af3b1"],["/archives/e0c98e7a.html","763b7a101529d12a21137e98038f5fed"],["/archives/e6437fbd.html","f68585da290aecc58e53377756d1a8b2"],["/archives/eab5cc79.html","6a31c333370baf5d805277c5d407d2ed"],["/archives/eb05a173.html","18f658e1b1aab60a380f5b81484a881e"],["/archives/f1d0391c.html","589f55d48a1c77845037dd6771b2a5a1"],["/archives/f3d3ee5b.html","061d7e882f512f9ed073be96d9fbcd87"],["/archives/f7feebc7.html","eeecb27e4beb38648f421fbc7342a948"],["/archives/f9f4b1e7.html","cfebb6c9f8cb6f8329de979f83e918c4"],["/archives/fcdceb2e.html","599b97c2eed4b9281dc5ee1839c80587"],["/archives/index.html","32553e808e1d68076651b34f43f98d63"],["/archives/page/10/index.html","8b61e112fe1ae2f1afa5ae7c86b429a8"],["/archives/page/2/index.html","35cb78504792deb9362ee48437643506"],["/archives/page/3/index.html","5e4d2b42eb6fab6d2efd35874bc5ebf5"],["/archives/page/4/index.html","ca21175c78732e0ca7f5dc348c4048c4"],["/archives/page/5/index.html","899db68749c7e677137315a05067c01b"],["/archives/page/6/index.html","270301700bc785253bc4da32541dc864"],["/archives/page/7/index.html","e7361a7f599c6fe1b13b1e9a837d89fd"],["/archives/page/8/index.html","2c26f114c5e7a02d3e98bb01320396a9"],["/archives/page/9/index.html","5bb7cdbfadbc962199e859e0eecaefa0"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","7a9679657c344d3ccdd21f880d5529a8"],["/categories/blog/index.html","627bed6bc9edc98b56f09914d8ce4a1d"],["/categories/css/index.html","3a606d55461becbcad7237d03e745472"],["/categories/css/page/2/index.html","e5758f16cfc15092ad8deec91f468b0c"],["/categories/css/page/3/index.html","d9afeba1bea205568c37079ae6e48a77"],["/categories/fine/index.html","961b5e3886bb6dfce3bf75efef9eb7df"],["/categories/html/index.html","b4b73807465ef6dae3d522fa4d5ab96f"],["/categories/index.html","4564be091eba808d0738d63a0c96648b"],["/categories/js/index.html","29789a5ebb2946a30c71ca5768c1f1f5"],["/categories/js/page/2/index.html","c1daa1739dde9258e4bb7b9a230783ea"],["/categories/js/page/3/index.html","62815cc4c1607028f9a8b5cab1305b7d"],["/categories/js/page/4/index.html","49254bb3563395605fc6de197c349485"],["/categories/js/page/5/index.html","9751a5bfe38f130d4d575228931c1ac1"],["/categories/node/index.html","ec3c0c79675fdb735d010414b0b50995"],["/categories/notes/index.html","4551313b6d84a758d23f5de40f969c38"],["/categories/react/index.html","9cca66688f6f6e383fd86e846d4b1eec"],["/categories/typeScript/index.html","b5849c3099268eb51dc049b123da40c0"],["/categories/vue/index.html","36911f7f8a7602ce06ef3124b55fee13"],["/categories/vue3/index.html","f7e714a8e3be9df1285c5c062bd158a5"],["/categories/webpack/index.html","a7f0b51d1f67afcdcf6e079371fea37e"],["/categories/微信小程序/index.html","1718980c72bf2e8c2b6723bacccf13a6"],["/categories/面试/index.html","3cf010e01a0f9faad21a3da63518aaf1"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","d2f9d80c1f30ff3b496ddae161d23a53"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","7628aeddfea46024379afa0c310f3f07"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/ts/images/01.png","c922cd12dab12bd6c46ee93bdd4205d8"],["/img/ts/images/02.png","3aa2056326e5d1c796af4ee14d5aa795"],["/img/ts/images/03.png","5d4a8b39b62c2c484b45dffa7f71d2a5"],["/img/ts/images/04.png","9005165e16c5fb263c3850b77b8c60bc"],["/img/ts/images/05.png","996ddffc76d0e5750a82f5a0473501b4"],["/img/ts/images/06.png","a52bf4f321fab1fee87cb087e0d22d04"],["/img/ts/images/07.png","36e3a3b114bcfad55498a774d9342e4f"],["/img/ts/images/08.png","3607e0c5650e9afa1384f2aac4009d62"],["/img/ts/images/09.png","dbeb822550e8eb71e78714035d790d38"],["/img/ts/images/10.png","e4a25517b0548f90ac6bef9d471ba0f1"],["/img/ts/images/11.png","dad677e46db0955c7d139a83b4b82cec"],["/img/ts/images/12.png","9745157eeb18de2635a64f65aeb34ea6"],["/img/ts/images/13.png","da212468d2ee4f8e9ba1f97843983786"],["/img/ts/images/43.gif","37c2e56cbc5c7a6fa18b043f8959a61c"],["/img/ts/images/44.png","6fe8492e0a34f7997c26473101a5352c"],["/img/ts/images/45.png","f799db600172453b1e1c864a85a9809a"],["/img/ts/images/46.png","9035adfac7596edda51156dacec1da06"],["/img/ts/images/47.png","2d75b31e7998a1e3c5ecec69a833a1d0"],["/img/ts/images/48.png","13beb8460f834a2a86866f9efaad66f0"],["/img/ts/images/49.png","540398c418c42be7de9f28b79882a107"],["/img/ts/images/50.png","18e4e8ef181ffd7eff2d1844cb704536"],["/img/ts/images/51.png","76bf41ed3e6bf0c976973364eb52fd76"],["/img/ts/images/52.png","f5d555290bc571215dd3ec30fd8aad42"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","1a0d333e74e34137a6a178e426df814b"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","8cf0a971bddb8c5347fbbad17ab6ce5c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","aee5c5557c5d8ca45eaca5543eddc876"],["/page/2/index.html","d2e26454d3f835c9af30b81787450a93"],["/page/3/index.html","0a3b133b2dd8297c144af53e7573bfb8"],["/page/4/index.html","0c687affe68e3601935bc2d6e51703f1"],["/page/5/index.html","8ebc319677f2fc97cbd3f2a8827f0e85"],["/page/6/index.html","aee88d2fc2c2337c3eb6ed84e6b872ea"],["/page/7/index.html","c14df0c7b85d87ec305c2d0b569815a4"],["/page/8/index.html","cf2e7dc641276eb936811dd1894b2a5b"],["/page/9/index.html","4a224a67cfed20ecc60277b3d1b1934c"],["/project/index.html","4021d692045e149f3899288f8793cf6a"],["/sw-register.js","38f6f998912dde36673a19444270c745"],["/tags/BOM/index.html","b978925fea258446cda00d254e5865b3"],["/tags/BTC/index.html","cd80248f7a38877f10a432382089817e"],["/tags/Dom/index.html","db20aaa8499cd41931665c9c56e156dc"],["/tags/JavaScript面试基础理论/index.html","b088094b91443599ec9c867ec367beae"],["/tags/ai/index.html","f2c5d91b32420c8298d6480f17f51da5"],["/tags/ajax/index.html","48b764b1bc93118f687d738bc69f0d9b"],["/tags/ajax2/index.html","679cf2eb38a884cc13c2564483b9cdfb"],["/tags/array-api/index.html","43eae6cc18916563368031624de81d4c"],["/tags/bind-call-apply/index.html","b8a99a192e51118d1ba2cddadb7e885c"],["/tags/blog/index.html","d4af25629727a1a8476f6b5c56b897b3"],["/tags/blog个性标签/index.html","bdee2c401c7a425f058010d1289a707a"],["/tags/box/index.html","4ee3e580e7a5950c8943f5f05d396de5"],["/tags/cache/index.html","933af126c6f9d45af3979f3a23267a3c"],["/tags/center/index.html","538f12dfce55b4b8a8bf7733e9e339be"],["/tags/chatGPT/index.html","66acb4760672d11b549930c68424030e"],["/tags/chatbox/index.html","792139c9464ab40af73b86dbe39252e7"],["/tags/closure/index.html","bce7b1488be510b7562962b1a73efebe"],["/tags/column-layout/index.html","d491d0e9b5eed0969293c24eaa60a86c"],["/tags/composition/index.html","7278eb60d1179f8b0b6104c689cff58a"],["/tags/context-stack/index.html","746ed6da965d2775ed6c9fdd238bc9c3"],["/tags/continue-to-upload/index.html","1f1ffafae109a2b689ea6d321d6a11fa"],["/tags/copy/index.html","8fa2b00a02a0dde2f12166c5438d4973"],["/tags/css-performance/index.html","59f2cc397900057eeeebcd3823964280"],["/tags/css/index.html","b4f90b3531e1c5fee44cbbf413bc109c"],["/tags/css3-features/index.html","7c8a8bdf785577fe3c96018bdb34fc6c"],["/tags/css面试/index.html","0ac9ad5672d661d1d704d243569dca6c"],["/tags/css面试/page/2/index.html","4bf420b0ddc30f450fd203500c0c5734"],["/tags/currentTarget/index.html","cdbfe935cf2b09ab5e76b875995b708a"],["/tags/data-type/index.html","326631653972d2a4674546dac8fcea1b"],["/tags/decorator/index.html","29eda2741da532020ded551f9373511b"],["/tags/dp-px-dpr-ppi/index.html","5dbd7b4191e65ca6a6f4a0fa55a313c3"],["/tags/em-px-rem-vh-vw/index.html","7908520835db82b954c4cacd071b735c"],["/tags/es6/index.html","264fa0e7e3a71f4065176912f7cd25b2"],["/tags/event-Model/index.html","40c3ff64430f45f78737aa7953675aa2"],["/tags/event-agent/index.html","ac7e133c6aa415aff4620b6aa8a296c3"],["/tags/event-loop/index.html","a1b9484cb94c366d5ce46fa95fffdb3b"],["/tags/fine/index.html","feada46918d3644373e4a656371bf8fb"],["/tags/flexbox/index.html","bcd24a32a59b358e306e42a50bfa9525"],["/tags/function-cache/index.html","6f50fbfa4751f4f8f5d090260e84c7fa"],["/tags/function/index.html","1dca618bbf442fced9a106af49bc269b"],["/tags/functional-programming/index.html","09e86a71eaedb0be7f90d09c751e90a1"],["/tags/gametime/index.html","0555093179cb8bfa3215e4c7ce870626"],["/tags/generator/index.html","d0c057ffbff6fa0e5b09d0a634e6ac42"],["/tags/goal/index.html","5dc6e487900e13c53004801eaeafb71e"],["/tags/grid/index.html","77a10762e7766434833592bc669d5ad5"],["/tags/hide-attributes/index.html","d6f8e14a352778d69f0d97ebc04ca715"],["/tags/his/index.html","b09c1cea4443716880f500758dd0dd35"],["/tags/hooks使用/index.html","bf01d5d4efd6ef1554ade65a55638159"],["/tags/html/index.html","07211faa7789e65c07b46fb230a93df9"],["/tags/index.html","1c2a7e50d5b010fd54d924b0f7778669"],["/tags/inherit/index.html","0fec2ecf5c00e001cebdcb0dd5586b6d"],["/tags/js-data-structure/index.html","45f6ee240a035473f50219714d063e01"],["/tags/js/index.html","17ee171ffa05ff2952ab25bc31af81fd"],["/tags/js面试/index.html","99ee6a11ac932d0a92f397859d1b05ac"],["/tags/js面试/page/2/index.html","f192665e9f25e310e91da3afed8c616b"],["/tags/js面试/page/3/index.html","a60f1a72bbaa770013f1268e5bb92f93"],["/tags/layout-painting/index.html","fa1c6e97931be424b15668f6686ea67e"],["/tags/less-12px/index.html","12a263d4142f49ed939bc17d0fde9008"],["/tags/loss-accuracy/index.html","4625aea4ac87db7a08e80e0003d45cf3"],["/tags/me/index.html","2271f859d950ae39baa855de5d68321b"],["/tags/memory-leak/index.html","60764110aeb5e2b02d4890df25f9f3d0"],["/tags/modal-component/index.html","084eb7196551a251a4e7d18d18941511"],["/tags/module/index.html","629bb292de035f8b110702bbc1b495b2"],["/tags/my-carousel/index.html","abf71abd43923e6a73348b6ce4f7b1c8"],["/tags/new/index.html","fc646da31544f04d535e7911d256b2cd"],["/tags/node/index.html","509cfe341fd45b71b8f8f3aa64d66b63"],["/tags/object/index.html","c3b9db6aec1cfb6754cc0acecafe09dc"],["/tags/performance/index.html","d6b3e07234e6369979cf7af30f94a3ae"],["/tags/project/index.html","35cd6274d4d27d7935a86c0044fe889e"],["/tags/promise/index.html","6b24f0dce567222656a7ad16c9c4a1fb"],["/tags/prototype/index.html","bdf07c7053d35b3f53605b9dbde449dc"],["/tags/proxy/index.html","a596e5673ec0b2ff13c7bc9a99e8bd92"],["/tags/proxyEs6/index.html","3a705bd37a7789acc49981b74d3831bb"],["/tags/react/index.html","9c41172e80456eda6359e8d5752d00ac"],["/tags/regexp/index.html","df4f9c66e93efa4a12b0b7425dac1295"],["/tags/responsive-layout/index.html","e2550e5780aea53fec083d31c2913d78"],["/tags/sass-less-stylus/index.html","f94b2a25e4ff6999237da920378c1412"],["/tags/scope/index.html","7009d06d375f71c4b648c8038cdc8f91"],["/tags/security/index.html","3710d9d56f1e7e47784ad9e90437ebd9"],["/tags/selector/index.html","87fbd9b40ad0aa9e8506c3e88d1fbe5f"],["/tags/set-map/index.html","e502ad8d798e0787693861dc863c5f58"],["/tags/single-multi-line/index.html","ef44f1d42ec3009645475c4c0c503aa1"],["/tags/single-sign/index.html","18e2b22298c5d1fa55137252852e9163"],["/tags/string-api/index.html","9048626fb894e0a276314b411f57b515"],["/tags/target/index.html","a9893c352ac363da749e30ecf971894d"],["/tags/treeshaking/index.html","2ca3897ae7826693decb2739cae60b43"],["/tags/triangle/index.html","a309121ec3d55373ac0f3fa189667b7c"],["/tags/ts/index.html","0ea88946aa3a43addc2c5b880a1cd689"],["/tags/ts报错解决持续更新/index.html","d9afb3bdb1a862825b221e611bb305c2"],["/tags/typeScript/index.html","3fd0262297dce240b4c2d3f96a549fef"],["/tags/typeScript基础知识/index.html","0e4a45f4988ccbcc6844de0334ac8333"],["/tags/uniapp返回顶部/index.html","11ae5cbd4899a72b216cbdb1cc49d992"],["/tags/var-let-const/index.html","070cf2999034a224e653700761165fbf"],["/tags/visual-scrolling/index.html","03cc6836a23266881b94a94d540789a8"],["/tags/vue/index.html","afa3731865a32bc4516642663bd586fe"],["/tags/vue3/index.html","cb122df698c21e147f94334e8d55082a"],["/tags/vue项目部署/index.html","0845d71d65618a03e48de108452c677e"],["/tags/下拉刷新/index.html","7ee40a12a6da8cd029473abd28f99a49"],["/tags/反问面试/index.html","6e1bf2873bf7d6e94866380b590e1382"],["/tags/和/index.html","12112809f2988d8a0e92cd4679f26a92"],["/tags/如何设置文章置顶/index.html","193654493a95c2345a464319edcee9a8"],["/tags/微信小程序/index.html","757d3be1b9b5ed31f187332d1da40791"],["/tags/星星/index.html","919c08fd3a434a2fa514bec8d7eb2d45"],["/tags/防抖节流/index.html","7b96fa6b6b03bdf3923ae6398a9c653b"],["/tags/面试/index.html","8272f8f41ed1fd1c86c507f030b98ad4"],["/tags/面试问题集锦/index.html","7ea56b658046bbd8556c90b8378e3d18"]];
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
