/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","2ca25ec3571992a48503e0ddd8d664f9"],["/archives/10bf1714.html","ef03a14d932d7f246586fd29eb5822c0"],["/archives/12529ae2.html","4fb8897b814794f2706b116042eb683d"],["/archives/14015a55.html","939273dff0d4908df19be3e71958c1e2"],["/archives/171d1754.html","3882c83bfd93f7a1ac70df7375009bf9"],["/archives/17a85756.html","5592c11890b50dff3f87cb37ff39d1ab"],["/archives/1879f8e5.html","5d35bb7a506658ae6e730c2cf41f418d"],["/archives/1be48ee.html","fac2cecf5cc6714ddb134906936a8a58"],["/archives/1e021099.html","698e04f1c0e6df09d9ba781c8a63c3bd"],["/archives/2021/06/index.html","64afcc5b845b8594cd385a47de088788"],["/archives/2021/07/index.html","3187b2a11f3be52f56a39dce3b6a92e1"],["/archives/2021/index.html","742f7b61e8c77ea2b3ebe9b41775bda2"],["/archives/2022/01/index.html","5297198c86d9bf36f9e124d34e19cbcb"],["/archives/2022/02/index.html","be2741337ca0422b903af75bd4496373"],["/archives/2022/03/index.html","b5179937a1c37620bafd6c2706b595c0"],["/archives/2022/05/index.html","6370cf28281d521c2d0e0670dc33fb05"],["/archives/2022/05/page/2/index.html","ccdb3fe3abbdcf781964434c404c85be"],["/archives/2022/05/page/3/index.html","2b237b78e42d14b63caebff5df6003ab"],["/archives/2022/06/index.html","070ad18781e7b2b0318c32be2c336821"],["/archives/2022/06/page/2/index.html","02a5c714df6b41cf1094188bfcab318e"],["/archives/2022/06/page/3/index.html","e7b5fc64231360ce48eda6a833ca1c2e"],["/archives/2022/06/page/4/index.html","ba660954695ac69084e364bf2c489788"],["/archives/2022/06/page/5/index.html","6601d813a8c13d35f0e3c194e6ad2575"],["/archives/2022/07/index.html","ebc72257c3d5d7bd19b8b77b10356602"],["/archives/2022/index.html","03255eca8c2ad4f377708ac06b285173"],["/archives/2022/page/2/index.html","fdc56dcb46488c842b9d5dba8822b044"],["/archives/2022/page/3/index.html","cc41adb9b8236dd35a236fd6ea1c9909"],["/archives/2022/page/4/index.html","3de7a880d8a356948bce7d87001c881d"],["/archives/2022/page/5/index.html","81afc29b91be1c43867cf9f2c0d0f435"],["/archives/2022/page/6/index.html","e51a6fc0e231c07349a24ce284193493"],["/archives/2022/page/7/index.html","f4b56165ffb3d1d32ce798fbf0fa1914"],["/archives/2022/page/8/index.html","552afe4e61b10e1a942ee8bf68909e0d"],["/archives/2022/page/9/index.html","77309c4d7480f557f8b93da6db768f6d"],["/archives/2023/03/index.html","dd20cf2d72a52f7260b88b1a1d67aeda"],["/archives/2023/04/index.html","771af6e9da3c6022a716f4a7c5bc8f8c"],["/archives/2023/index.html","d4df617a1b45c362097f4d3efa9f502e"],["/archives/203410a2.html","2b3a6d927047005aa11335277c24fc9e"],["/archives/2039e3ed.html","72139b58088dd0b2a13f1ac675c4b13f"],["/archives/28d88e6.html","3f0ea4a7463518c843933558138b8c82"],["/archives/294b86eb.html","fd98356e725c9d8413200c4b4efc045b"],["/archives/2b098523.html","3a59d046680e1b06236a64d9a3a64b2c"],["/archives/2e20d937.html","98e14ad10a35c1943df34781d2c03637"],["/archives/2f8b36fc.html","472870c787516e0ee8f0f102855a3014"],["/archives/30b90bc0.html","e2bda05bae4416051b2b2f022751eb58"],["/archives/336f0513.html","0f5b46c49dd591582bc59d3d9963a717"],["/archives/33b9c85e.html","e2271719c1ffce38315eddfbdc35dbf1"],["/archives/36044e1a.html","98ffbabf637546067f1c4827da73bc48"],["/archives/37919ccb.html","078f5f95ac226aaa7bcd5995146c0885"],["/archives/39a5927a.html","3ae078c6344d0c6515bcf212304a7096"],["/archives/3f038ede.html","a420e0c3366f20eced7eeb87b6be1fcc"],["/archives/40f0eb24.html","a6396f3469967dbd17c087d131b880c6"],["/archives/41476be7.html","8254b3e64c02c0e391f52480fca89d6a"],["/archives/42b82995.html","e06f31038d4fa3f8ef9c40c1fa17ae8a"],["/archives/47c3840f.html","81fe38fe43dbbdc35f28ced32a98d73c"],["/archives/48078dd1.html","73ef27dd8c12a530fc5221cccd5b972c"],["/archives/4dbabb82.html","47647cea84a1ab9a34f8cb024acab594"],["/archives/50cfbdee.html","beee02853b9d1454656647d072998bd7"],["/archives/574fecf1.html","87de0b6e97c3fa0f5f625e9c2c67151a"],["/archives/59b49683.html","90d4930799f1cb2cad05428be2c27fc1"],["/archives/67902db1.html","05259afdafefc58a51f2c7afc17b598c"],["/archives/6be34445.html","7d82fc533405f2e54a22fa2188e3dee7"],["/archives/7331f3bb.html","0e4903efa4be1f476d296d2d28a17406"],["/archives/7472fc2f.html","74fc8e19a4c6116cc9dced6b793b61dc"],["/archives/75b2f6c6.html","6c41c562c56f16be8fcbc1ff4b6ee45d"],["/archives/77971af0.html","3594d5fa667d75119d202f5f0ffe0bc4"],["/archives/78ca6597.html","a48a24c084cbf0140516c04418cb6ed0"],["/archives/78cea6d8.html","c59ae3217b22a7eb3ea60ece4d573d9d"],["/archives/7b268071.html","f253caae060d698f19d1c2a25814001a"],["/archives/7c942302.html","baff166061338974f0b1c2f7ba4b72bc"],["/archives/7d76407e.html","0642248c32a3d2c6817501047dfb5229"],["/archives/7f6cf7b0.html","d51242703a89340dfc987a4917f53f7d"],["/archives/82d79681.html","506da8834efe488d8a48c58adcb9f9bf"],["/archives/84a91e69.html","a3c8b7ad79a1ea55ecdd7ad701bcdb1a"],["/archives/857fe845.html","65dbc41f464f6e2143cce0c51c2774c7"],["/archives/88d3d46f.html","d0f3491742c0468f47bd8d410e6044b1"],["/archives/8a9483a.html","27baefcf6e9acc73ad645c87af7f0e01"],["/archives/8ad35e55.html","baa6778094a31aea02316f684e001871"],["/archives/8d5284dc.html","73ed70fd775229d9963ff2141209fc96"],["/archives/92004154.html","3cb00001ce7b55e88e43878c234299e1"],["/archives/9370d73f.html","51e9443dcdae1d614142a606fc8f8a80"],["/archives/93ae9a14.html","c37e1ceb52e0cd95237d577d5d36036c"],["/archives/9417ce47.html","0e0af7323be2f845221b2a02c429b4c4"],["/archives/942a5c06.html","7fde5396206ebb9b58f46a157536a398"],["/archives/958c57b5.html","6d922a8a29c0f6a96afeb6a2983f2056"],["/archives/9692e25d.html","f39a26ffc8cb187702d06b492f23cdc9"],["/archives/97a9ab5c.html","512a205db7cec1be6930024262555caa"],["/archives/97b76847.html","903cb9aed3a3e12d4f8bcb36691bcb58"],["/archives/9a0dce2d.html","9a9f738540e82d6e5f85b84ff0d85636"],["/archives/9b0c2390.html","3f10c925022d4d9365f679487752e741"],["/archives/9e5f33b7.html","086817791959c59f573c3826a0d6b31b"],["/archives/9f1ed84.html","1ae5879032d309956d9da9c8be7e116b"],["/archives/a0245a2a.html","cbdc1b5778ce4a937ea3850c67b119ad"],["/archives/a10ceeb7.html","2f31e4541285873629a6e399b52cb329"],["/archives/a36a5ae4.html","b91cbbe67854f5ddbdca40b87249e4d0"],["/archives/a8adabec.html","af78738ca84a4cc19273e21301098dd8"],["/archives/a9432027.html","3987c5577f5c86e6c55a3c36fd35bcbf"],["/archives/ac5292c2.html","d263944682a5f66fe24d950c9c5c99f2"],["/archives/adb78c8a.html","3df864a10f30bf7890b84053acc1e7de"],["/archives/ae4c07b8.html","4aefff31fbd4fbfbc45d6ea4261ce09f"],["/archives/af55d3.html","404797fa24d6fc2356adedffad324e97"],["/archives/afcd4575.html","91fe7bf2a1e5027c4d7a4e76a5c697b6"],["/archives/b21f48b9.html","53c6e90befb4949885fbdbe3eddcdc97"],["/archives/b51bdcfa.html","44766bc8a18c3ac0a7a8149648b20c94"],["/archives/b7b51641.html","82b337d12fd044d15c3a82c1091acab1"],["/archives/b9f20a20.html","6841456a125cb1348b0b27db5835fe68"],["/archives/be945145.html","d2dea39b2590e70da631843297966325"],["/archives/c0add594.html","78afc6f4b8fba22e3ce641e95c1a1da6"],["/archives/c242628.html","8290b46472321abda81b3ac2449af4a3"],["/archives/c59bd5c1.html","4d37219c7704fe8c359494f4a93e957d"],["/archives/c5a6a264.html","f2f8e6d90c1014970ece7dc68dde2545"],["/archives/c5a97815.html","e656f812b5009722d586992ca8c82c45"],["/archives/c7f4347.html","2d1927d14d20263c2799f8dc2f00f3f7"],["/archives/caae163d.html","9d9789eec83b463c832da079fd554dd5"],["/archives/caae7b70.html","f647892d7ed71dce60af418b1509a65a"],["/archives/ced3960e.html","12d6876f296f1e444dcd96e1d07eefc0"],["/archives/cf2f5248.html","3105cdb462fc8f74858a4fdee3a5d218"],["/archives/d3b694df.html","6512c3e7bf9ec623eb0bfdd23d3713af"],["/archives/dc3acdcc.html","32fc60ccbea7e5f1450f6f38911226e6"],["/archives/df976d87.html","4c954650bee4822a50c4deba5b97cb39"],["/archives/e0c98e7a.html","77883c60455f1c2ff54acf5623c53954"],["/archives/e6437fbd.html","3396283d969f1c9821fb324f4bf2dd67"],["/archives/eab5cc79.html","a7e609363cddfa9c771b2144ebe4e225"],["/archives/eb05a173.html","75443f3556cd126bccf2c75158602845"],["/archives/f1d0391c.html","766c02016977c0a7309287ae937ab29d"],["/archives/f3d3ee5b.html","cc1477343cf703a7fd35da2e22d049b9"],["/archives/f7feebc7.html","f68f40da062cb0261bb7c96a6c17570c"],["/archives/f9f4b1e7.html","42ff0631d57c5ef7de8f05a702afbfe3"],["/archives/fcdceb2e.html","2485de373607b748c340c03d3f32712a"],["/archives/index.html","481779630963f4c3be9d22ec6413b1b9"],["/archives/page/10/index.html","1c64a4588ff51c3f96127e025986417d"],["/archives/page/11/index.html","ef53b28f949f0a0362e06c6ca4aca950"],["/archives/page/2/index.html","80c2573e02490ef60deac3886f8c6b3a"],["/archives/page/3/index.html","838c6f5f367b8ca71ebe523f26b502eb"],["/archives/page/4/index.html","0d78b3594a50bbbebc18b5ef738f5e37"],["/archives/page/5/index.html","e8d6c6aa12a33e82882cadaf88b37eec"],["/archives/page/6/index.html","53500ffcc5563f6b98b3b81f80d50cae"],["/archives/page/7/index.html","61bc28949dad1d392fe1c6de8366a582"],["/archives/page/8/index.html","b86e972ad5c370278b4f3f7f9253c724"],["/archives/page/9/index.html","9fa7e6177333bcaffe8e08a3dc6b7f66"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","994da6807e89089f832065b47f7bd4d6"],["/categories/blog/index.html","527be24aea6f7859aaad4537e676ae31"],["/categories/css/index.html","8dcbc396aa3ec490a888c5c909544d38"],["/categories/css/page/2/index.html","dd4086e26a978a6d3e710b7b5d6d81d7"],["/categories/css/page/3/index.html","418ffc8f50e56dcdb057897d0eab44e4"],["/categories/fine/index.html","bfc53c62fb01e09ab1830c180823d9ee"],["/categories/html/index.html","b2b8789cf1c6804ccd9f53b05aa9c544"],["/categories/index.html","5393fa392dd02201e50d666ce92c522a"],["/categories/js/index.html","753e38e5010a9cce8c9b5107a4440422"],["/categories/js/page/2/index.html","e98860b0b0f77ff56f3fc3002d6b1063"],["/categories/js/page/3/index.html","4e1fed50ddd45e5b270ba30fdd186cfb"],["/categories/js/page/4/index.html","bdfcbb6d01afbe991ad52d832378e9a2"],["/categories/js/page/5/index.html","98e589604765e9a4bdc4ad80840df9a7"],["/categories/node/index.html","ca82727416c0e84e1b734916e2616230"],["/categories/notes/index.html","0127a22cfcf8e84fa4ac9a2ee5dbfaaa"],["/categories/react/index.html","83a18ca1ce6c55b6c871800c0774d7b5"],["/categories/react/ts/index.html","8d1ea292bc9e991f09ec4faec92a94dd"],["/categories/typeScript/index.html","b393673b9ea0c1279329932826ace7e3"],["/categories/vue/index.html","6d3a9ef543fe4d6ef878f6d95e370e65"],["/categories/vue3/index.html","238c93e933b43951835c32d39d8c2709"],["/categories/webpack/index.html","4bcf959dea27d350af751453d13b17c3"],["/categories/微信小程序/index.html","0116d1a78ece7f51ef02b891a9ce13c5"],["/categories/面试/index.html","8f220ca864bd49008e69243fe45a80aa"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","49c6e9327a80d4d56259c6001644d83d"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","12ad646f959edf75541f16de99e8c9fd"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/ts/images/01.png","c922cd12dab12bd6c46ee93bdd4205d8"],["/img/ts/images/02.png","3aa2056326e5d1c796af4ee14d5aa795"],["/img/ts/images/03.png","5d4a8b39b62c2c484b45dffa7f71d2a5"],["/img/ts/images/04.png","9005165e16c5fb263c3850b77b8c60bc"],["/img/ts/images/05.png","996ddffc76d0e5750a82f5a0473501b4"],["/img/ts/images/06.png","a52bf4f321fab1fee87cb087e0d22d04"],["/img/ts/images/07.png","36e3a3b114bcfad55498a774d9342e4f"],["/img/ts/images/08.png","3607e0c5650e9afa1384f2aac4009d62"],["/img/ts/images/09.png","dbeb822550e8eb71e78714035d790d38"],["/img/ts/images/10.png","e4a25517b0548f90ac6bef9d471ba0f1"],["/img/ts/images/11.png","dad677e46db0955c7d139a83b4b82cec"],["/img/ts/images/12.png","9745157eeb18de2635a64f65aeb34ea6"],["/img/ts/images/13.png","da212468d2ee4f8e9ba1f97843983786"],["/img/ts/images/43.gif","37c2e56cbc5c7a6fa18b043f8959a61c"],["/img/ts/images/44.png","6fe8492e0a34f7997c26473101a5352c"],["/img/ts/images/45.png","f799db600172453b1e1c864a85a9809a"],["/img/ts/images/46.png","9035adfac7596edda51156dacec1da06"],["/img/ts/images/47.png","2d75b31e7998a1e3c5ecec69a833a1d0"],["/img/ts/images/48.png","13beb8460f834a2a86866f9efaad66f0"],["/img/ts/images/49.png","540398c418c42be7de9f28b79882a107"],["/img/ts/images/50.png","18e4e8ef181ffd7eff2d1844cb704536"],["/img/ts/images/51.png","76bf41ed3e6bf0c976973364eb52fd76"],["/img/ts/images/52.png","f5d555290bc571215dd3ec30fd8aad42"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","ca9df445cb8884f299ff0b3c84b9f41a"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","3fb9d0a39b427e6e6df3f86856dcf4fb"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","bc56bdc56124bf07fde4083b89bcfa45"],["/page/11/index.html","da248a391d6d734db062b09bac886b3d"],["/page/2/index.html","8c91e44cc2ab087ba9280d5c5244e19a"],["/page/3/index.html","6029b875320461e8a1ea0d7bc5cca348"],["/page/4/index.html","e7f5bfb7c01f0870f8506de3a006f660"],["/page/5/index.html","bb58edd47c5b428deef4b82883936a78"],["/page/6/index.html","9e3d308910a740bfaecf2959d61b57ed"],["/page/7/index.html","0ef886e1102dae3359221752eec8709f"],["/page/8/index.html","eb0ce50fa0667293c19bc44623018864"],["/page/9/index.html","3b255d69e43255512a19cd5ba1221355"],["/project/index.html","2d64cc6e14d2eb2d09b8940117913597"],["/sw-register.js","7b1d7fc339b33358e618b56980897557"],["/tags/BOM/index.html","2940dc4a12ab08de162a2a241dedb423"],["/tags/BTC/index.html","8f455f138537e3fe7818d9c099150125"],["/tags/Dom/index.html","31026c45ab1124f2fc5f2b6db79f25aa"],["/tags/JavaScript面试基础理论/index.html","c60b797a4e968a8be2c34955141e44fb"],["/tags/ai/index.html","c538fbfb39527b2ee7cadd022686db84"],["/tags/ajax/index.html","5649b263658025ec6b67d17c0ddb62e7"],["/tags/ajax2/index.html","d6217d720a2c1f107c069db6d3cea11b"],["/tags/array-api/index.html","abf50078384be71d6dff497f28e10831"],["/tags/bind-call-apply/index.html","3b52b48fc4fa89083e32d40689c79861"],["/tags/blog/index.html","8910c33b202a773940ebd517e5f4eda2"],["/tags/blog个性标签/index.html","11d020d18985876d62d90a8608091e56"],["/tags/box/index.html","3fd2269c05363288df0e04fa4875a878"],["/tags/cache/index.html","2c7d8971e2d20d960bac25070f8afd2a"],["/tags/center/index.html","710ca1cd9cb25d588ce805c945da9088"],["/tags/chatGPT/index.html","2b9db01a3c6511a62f1a79284ef42670"],["/tags/chatbox/index.html","c39b7a06a1bb5b1d75d309f9203e2c42"],["/tags/closure/index.html","c4720791b9d8368134b82292ddbfcc58"],["/tags/column-layout/index.html","27f00ccba364409c32971cc30863199e"],["/tags/composition/index.html","d2d4fed1b8ce4a3e2052fe778a606509"],["/tags/context-stack/index.html","d3d9603aee6b29bf806afce0772f3cc8"],["/tags/continue-to-upload/index.html","74e221d24f20a4f92c752604debae2a2"],["/tags/copy/index.html","11e5338e35caff5fa908e24e538d44c9"],["/tags/css-performance/index.html","29f06c4ad4155d590efc6e1606b33260"],["/tags/css/index.html","1680cb234655295a84b01356a2ab9eb4"],["/tags/css3-features/index.html","3bdc97d409566e0ea2524da5917c94e4"],["/tags/css面试/index.html","65a75349a09bc146473040a6157a9a66"],["/tags/css面试/page/2/index.html","90af86fe4ab178724c06cb3af3e5add5"],["/tags/currentTarget/index.html","f037878c4b9387904a68cc2012256e07"],["/tags/data-type/index.html","b0909bc868f2f3368d9b4a9bce8ab0d9"],["/tags/decorator/index.html","927ce6bcdb7405d9b330be26223038e8"],["/tags/dp-px-dpr-ppi/index.html","f68a2f9d3d329063c576a91b912fc8d1"],["/tags/em-px-rem-vh-vw/index.html","5a0bf1e11c47cdd82cd14074ecc95ba1"],["/tags/es6/index.html","184cc5bf16f84b8f6704a84b3b4f7969"],["/tags/event-Model/index.html","261cbd742334143a128a8481c738499b"],["/tags/event-agent/index.html","d9787e2969037f9504620e2254c14ad3"],["/tags/event-loop/index.html","85c443d24c10f7d7b8b4f31c01aafa71"],["/tags/fine/index.html","8d75391b0fe8f66943dba6f5d3d7a2a0"],["/tags/flexbox/index.html","5c3d597e80be6b476c1697a41ba95f5d"],["/tags/function-cache/index.html","df5b53cf0d3d8dc17342a3b501c68681"],["/tags/function/index.html","5ef9237a7c738ac8ab2cb5b45950619d"],["/tags/functional-programming/index.html","11dcd70f599cc8c4c5a9c395e8d27864"],["/tags/gametime/index.html","568ce53625129297c166da69b5c238d9"],["/tags/generator/index.html","19db75adcb999c57c6e9cf97c2977342"],["/tags/goal/index.html","93723496bc0243d8ca113078513240db"],["/tags/grid/index.html","821de0d410b168789dff0fd8f84ef34f"],["/tags/hide-attributes/index.html","c0d27682d0bbc5e3a6559e32ba3fdb66"],["/tags/his/index.html","b52742d5f459a3bcce1ddd4664b022de"],["/tags/hooks使用/index.html","0285939c76319069d8c1727f2a4d3cd9"],["/tags/html/index.html","620a66d23f741ef2bcb0a1ff8d176cd2"],["/tags/icp/index.html","a8daef29faaf5b12a0896382609e9132"],["/tags/index.html","e373720c632b2cf2d06226c7c86c4aee"],["/tags/inherit/index.html","de5fd05a8b2a5519e611ad1d6a507f7d"],["/tags/js-data-structure/index.html","ed600eec3f94fe661ec5ab217190e731"],["/tags/js/index.html","cb4bf4cb9997673feb4f06201d2baee6"],["/tags/js面试/index.html","d008181463d00df5e9c24a66e3bb73eb"],["/tags/js面试/page/2/index.html","a66eaecc1f48027116f7f0b5e8c23684"],["/tags/js面试/page/3/index.html","fa31338db6000d67474634f2d2143bb6"],["/tags/layout-painting/index.html","862097308e5efd7188435ab62a133d81"],["/tags/less-12px/index.html","bb66d5695290dbf0584cbeeada297e60"],["/tags/loss-accuracy/index.html","7ea68ce3dafbf3f75acd6610903e6d5d"],["/tags/me/index.html","1f9ff677aa23584d543bc70312a8af16"],["/tags/memory-leak/index.html","ed3b65a4c5a1f6366c1efb076aac35fb"],["/tags/modal-component/index.html","9ca67544a83dfb986e1e67bbeb7fa9a1"],["/tags/module/index.html","8f9c62f1cea3c82f5faf9508222861dc"],["/tags/my-carousel/index.html","8f2af1563eb8dadf043818155c1f894d"],["/tags/new/index.html","c548cab402e93c4b07c59731a31db01f"],["/tags/node/index.html","8ad076287bb717f3279420c2f88058ce"],["/tags/object/index.html","0a5b7ff6d3773656160b9d89338e5b66"],["/tags/performance/index.html","221c46b236dcc17c7cc9c8bba8e701ef"],["/tags/project/index.html","2045ccd4b103440f3c5f48357c0a10f6"],["/tags/promise/index.html","8f0ea6a7709282cf30a8b4aab43b1644"],["/tags/prototype/index.html","e95eb0b3ba5ce56b472a8df5da89a942"],["/tags/proxy/index.html","11f58e97c910ff7652285fa5e9867f33"],["/tags/proxyEs6/index.html","c94801420bd48ca82aa409cb8388ec2e"],["/tags/react/index.html","5c92575ee7df2a0504ffaaaeb1b80584"],["/tags/regexp/index.html","1f6b8a72f5cb1662a9a5eef93586ad56"],["/tags/responsive-layout/index.html","c7bc53267650b88ab729b01e583154d6"],["/tags/router5/index.html","c15fa62d0eeaf295ace7a755ba658be8"],["/tags/sass-less-stylus/index.html","8935da5be20fb00c075a23e7989c7927"],["/tags/scope/index.html","afa0e7db81d524045e9e07c9d47253ef"],["/tags/security/index.html","3475d10b901e2a59506b6b250ce770a2"],["/tags/selector/index.html","aa4e6c38399a296c9358f0fd3284bb94"],["/tags/set-map/index.html","470e8f5c1e82a67e62ac6b587143d00c"],["/tags/single-multi-line/index.html","b2000b5cf5a2519de93f3f05ec6ce2be"],["/tags/single-sign/index.html","55372b0a971fa351458b48d762ce448f"],["/tags/string-api/index.html","b6f54f363bad13b1388a99a5b6d19f51"],["/tags/target/index.html","cdc164ee3ca444312dcfde76780af1c7"],["/tags/treeshaking/index.html","b03139bc55a306e58d96a65ef8f2ff37"],["/tags/triangle/index.html","f526efdbf517fbdcc249a6be39220231"],["/tags/ts/index.html","a5b6bd05a71329a2e11932af60bdffc9"],["/tags/ts报错解决持续更新/index.html","4750f117b9e439aaf6910189c53150f5"],["/tags/typeScript/index.html","edb319bd2ec7612559056e8966e3869d"],["/tags/typeScript基础知识/index.html","0639902ea0d934a929c91f3bcd7910fd"],["/tags/uniapp返回顶部/index.html","8911e63e330c93b956c0eea05bd2ef21"],["/tags/var-let-const/index.html","8bb721a4b374506924709b4e9d1d435d"],["/tags/visual-scrolling/index.html","e8c140de316b784029e8d959ffabb521"],["/tags/vue/index.html","bd177a025c47ee459c9f185c65f32a6c"],["/tags/vue3/index.html","9389ad65504bb7bd12488543aa25924f"],["/tags/vue项目部署/index.html","e90e7a574e869ba5d0d4d5f9be3f3488"],["/tags/下拉刷新/index.html","32f5fa0d2f008d686ffd87ba6d6e9aac"],["/tags/分页/index.html","844f63a17f7673d3628a78eb17acf3df"],["/tags/反问面试/index.html","171e58cfea8ea80f2be4ed3bafbcf4aa"],["/tags/和/index.html","21ea744ede0aab906fc1091f2f15da98"],["/tags/备案/index.html","f2c30f38619e339ea06b60adfa6388d7"],["/tags/如何设置文章置顶/index.html","1b2ff49604437186a26beed04d748ff4"],["/tags/微信小程序/index.html","d7ea0e9b060d57a8e525a2057722e08e"],["/tags/星星/index.html","7066577956ab8b543f42385d15fdfbdd"],["/tags/防抖节流/index.html","2062de17b50d32c1482cd8a5affd34cd"],["/tags/面试/index.html","73e50b18a7c1df162a00015fa96757b5"],["/tags/面试问题集锦/index.html","18b071dc0867f8d1444877fbfef3eac9"]];
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
