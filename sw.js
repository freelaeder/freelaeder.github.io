/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","eb1b40d0ff4f9e185d5d0c9e5c3325d3"],["/archives/10bf1714.html","8100e9f7d52c37654db246df7b7e1bc7"],["/archives/14015a55.html","4fcb044df9229e193ba829476f52d32b"],["/archives/171d1754.html","2180a6952752cecc013463b12e4dd8c5"],["/archives/17a85756.html","7020733a2c6c2b3054d8c4dd45f3182f"],["/archives/1879f8e5.html","13d11cde223d4b4ec79863885e7f6345"],["/archives/1be48ee.html","a8a4fd12bbb783795298d45c5fcb5e83"],["/archives/1e021099.html","b234a4e8c82041ded39d1bf9009c6304"],["/archives/2021/06/index.html","acc2d87c7501e82e059dc95464f5e7d3"],["/archives/2021/07/index.html","82b1f724367376b4592d23fd80f46a68"],["/archives/2021/index.html","cb250dd9679a1d01e2041e1f6caa0fbe"],["/archives/2022/01/index.html","e0c2870beca785f91394302a53ededc0"],["/archives/2022/02/index.html","f7872d71f31de40347a4f71d7616264e"],["/archives/2022/03/index.html","9a153d1f6ef2f87a9d3cdfca1a3ef8cc"],["/archives/2022/05/index.html","906830a0761246ffbb90dc915b53b9cd"],["/archives/2022/05/page/2/index.html","4ccdcc3f13596a6fcf3e810f3a47d088"],["/archives/2022/05/page/3/index.html","e8863560d5befe047e56b7f05244b04b"],["/archives/2022/06/index.html","eda84642f58258ff5fc6fa01e9853ad2"],["/archives/2022/06/page/2/index.html","d955057f2f3a0993b8a81c76bbf032b6"],["/archives/2022/06/page/3/index.html","7d467287c67b06e30ffda775cfcf97a3"],["/archives/2022/06/page/4/index.html","43310c5e2e27e1153f45740539a3ca0e"],["/archives/2022/06/page/5/index.html","e432eefb9c6414dd985505f7511b60ce"],["/archives/2022/07/index.html","82d0c68c774c24dd8f91e0f358c14760"],["/archives/2022/index.html","af24642f8df26cd6423b2c0cd86c6e2c"],["/archives/2022/page/2/index.html","44121113bb13ad2fb715269cdf68e89b"],["/archives/2022/page/3/index.html","8f3ea9563b18ac600d854d7138e6af1b"],["/archives/2022/page/4/index.html","cc90cc51bb45b7c3e4745c2268b9128b"],["/archives/2022/page/5/index.html","12eca3e0b24db5ce5a2eaa0c4368be00"],["/archives/2022/page/6/index.html","3a88fe2ad2d99bb3f329a3f14d31d409"],["/archives/2022/page/7/index.html","8fa597a27b1d923db1d88eb2e50fb4d0"],["/archives/2022/page/8/index.html","3682a3346d8d5384e9bf633d5d14d806"],["/archives/2022/page/9/index.html","5ea6ffbe1566769854c6a828c55d5f05"],["/archives/2023/03/index.html","497d328d6a8b4c20a727c90561ac6445"],["/archives/2023/index.html","0d963d9eb561d0740be1df25c471e599"],["/archives/203410a2.html","0c6ff778e939770ca76875dce87845fd"],["/archives/2039e3ed.html","72988711ac389b29b25660509ea22c1f"],["/archives/28d88e6.html","087ee85770e4690e6c1c575d88963b1a"],["/archives/294b86eb.html","117b96062e249810670ff0e674e71992"],["/archives/2e20d937.html","b28d28306ba9e598e9200fa727479aed"],["/archives/2f8b36fc.html","897cc1559308d3a8226af6abf1a2387b"],["/archives/30b90bc0.html","3269f40f8eba3881f1b0c2e538c28da6"],["/archives/336f0513.html","5c33d0fa8ba660c3e215c1ed4c0f9bc7"],["/archives/33b9c85e.html","f0755eb62865c9ed81799b6b76bdf1fa"],["/archives/36044e1a.html","28568027de545f2216087b6c3d6a1195"],["/archives/37919ccb.html","0fe6183f7828622c41c7e4b14933a523"],["/archives/39a5927a.html","be8709703adafcdae78e1ce9fa6cdeeb"],["/archives/3f038ede.html","19b19125a712be30c55f4b217217d6ba"],["/archives/40f0eb24.html","0d3840f69edbcefca4a008172493d6ae"],["/archives/41476be7.html","c5f0a9b372bb5a4f46dafb98b86cb9f2"],["/archives/42b82995.html","208d88f5a5fb3fc14c98d7bd2741e000"],["/archives/47c3840f.html","356db0b35291a05c5acc2d44e3bda9d2"],["/archives/48078dd1.html","581fd75f27b0743db80032b327ecff67"],["/archives/4dbabb82.html","4da37d642d12e8e767fa3ee61a1c13a5"],["/archives/50cfbdee.html","83b8423ad9b327a5dce2519ac93570d8"],["/archives/574fecf1.html","58f4bec932dbdbc5e81b89e96208657b"],["/archives/59b49683.html","c1970e62254846001e9fcd1c82cc2cb5"],["/archives/67902db1.html","5d2ec2f3e55ac7ddfb1bfe40e2aca3f4"],["/archives/6be34445.html","350231db4a9c6f0e266a31f622779610"],["/archives/7331f3bb.html","f1181f083fb5296e49176f467bd22762"],["/archives/7472fc2f.html","9b0e1d4bdc2979281afa59667f8cda58"],["/archives/77971af0.html","ba40b43b283e87c821a760d304c67ad6"],["/archives/78ca6597.html","8ae8918b5421ab2c30ffea7886b5f3d3"],["/archives/78cea6d8.html","cc4a524c542a381733d2c24973ed334f"],["/archives/7b268071.html","9f502e928f6f61b23096ca5783d35ff0"],["/archives/7c942302.html","828f43cf75dec47491240a4c3dd6bdb7"],["/archives/7f6cf7b0.html","7be23ec89886f5516bef10eed1101d54"],["/archives/82d79681.html","361b90933d4d943a11c86648d8abf340"],["/archives/84a91e69.html","cb225d2bc1d72aa2d3d34ab2d1185083"],["/archives/857fe845.html","53a457ad785d29a02d44779683b10a6a"],["/archives/8a9483a.html","8331a569964905255bc185b7e6a503a1"],["/archives/8d5284dc.html","df9395bb11b2afc09a6c193a68975f04"],["/archives/92004154.html","d4f11b05d21f49d663d2d3bbb1e2073e"],["/archives/9370d73f.html","5657cbb1c5935b7a61ecb77c18c411e5"],["/archives/93ae9a14.html","edad91feceec87d24ba04fac80b8f88f"],["/archives/9417ce47.html","72732ee714fdaf375bbaae18deb2af5e"],["/archives/958c57b5.html","523bc11e770d17b88f489bc479a963ee"],["/archives/9692e25d.html","70d20eef68c6cb0424a18e6537ca653a"],["/archives/97a9ab5c.html","b6db2bed766352c2a417cb680860446a"],["/archives/97b76847.html","84e0bf0641f7f3e7eb2416cfae0d6986"],["/archives/9a0dce2d.html","f31fac40ea16a451936cea4a6049e799"],["/archives/9b0c2390.html","412ccb7a78ce19e2b221e84034b9a547"],["/archives/9e5f33b7.html","60b8ebc6f32fa43ef8a58822a839189b"],["/archives/9f1ed84.html","2c8d26c43c6c622f62986db7a34cb045"],["/archives/a0245a2a.html","bb97562141aa1808b9f0c6ecd8303c3b"],["/archives/a10ceeb7.html","4acb94b8c5d4bcf1dde1a01810dad9c2"],["/archives/a36a5ae4.html","d854aa48ea4b4303c5048f559d5cf6fc"],["/archives/a8adabec.html","50622e45ca252eb8de6c98724e4427c7"],["/archives/ac5292c2.html","86e69e40c47e68d369df747b39b4331a"],["/archives/adb78c8a.html","ce98fb75d690d80279cc8402862ea5e8"],["/archives/ae4c07b8.html","23cf61219c5841c74a066a77d1c92803"],["/archives/af55d3.html","0cb1d51da669420590b7ad5c4ebaf46f"],["/archives/afcd4575.html","85c32116329fab90d23242befdd05b26"],["/archives/b21f48b9.html","d36f2ea30df192578a6873b89d106230"],["/archives/b51bdcfa.html","b09816fbda968b6371ba737b41bf3807"],["/archives/b7b51641.html","dd970537270714e853fc84adfc542f4f"],["/archives/b9f20a20.html","ec5000bbb09476524b7a3837d8e03331"],["/archives/be945145.html","337723446535d7b802ae6f613b69bfde"],["/archives/c0add594.html","4503d6713e128e4d8f249d47fa348c73"],["/archives/c242628.html","749aee228fe0b05ee9a5538bd80c325d"],["/archives/c59bd5c1.html","405a87b08722141795e40c78dabbec70"],["/archives/c5a6a264.html","4a8c99b50552d823ae68568cc715cd5d"],["/archives/c5a97815.html","7c896b84c7cf18d30c9cf4376dbc4733"],["/archives/c7f4347.html","c98bd23e9fc7369ff25a06a1a7343840"],["/archives/caae163d.html","f1970eb7abd8d6acc53f57bc2c176afa"],["/archives/caae7b70.html","4585c01280bed137aec0c95b3e518080"],["/archives/ced3960e.html","0802416e1d95fda9761f31964d3bcc9f"],["/archives/cf2f5248.html","ba6b1d032c5b84b9270c0326d0552568"],["/archives/d3b694df.html","4d9b53d15c469b2c40ef8f23561410fd"],["/archives/dc3acdcc.html","366cd8804c119167c1b0ee3541573b40"],["/archives/df976d87.html","0b44b718817a530550c2b97141955974"],["/archives/e0c98e7a.html","e48ec38d234dd8b475199af0c05e4fa7"],["/archives/e6437fbd.html","d40ca9c83cedf15d9f7453d01158bec4"],["/archives/eab5cc79.html","c83362e4462486fbae7fb4adaca28346"],["/archives/eb05a173.html","b1924dbcbaf8cd51ae759cbda0518402"],["/archives/f1d0391c.html","68e8654fb2be3a962015106ebfdfd136"],["/archives/f3d3ee5b.html","f26e6a14ae99598f0b833c170b55ac2c"],["/archives/f7feebc7.html","9d16a3fbcff405a52b8cc059c9016183"],["/archives/f9f4b1e7.html","a536c282cda94c50847d3ec7ccc49ec5"],["/archives/fcdceb2e.html","9da919b3421485439fbe5f8e87273c20"],["/archives/index.html","e7b0d16b82aea856b32eb75ca3041871"],["/archives/page/10/index.html","3413e592c6825631830db3de489116dc"],["/archives/page/2/index.html","906a54f06d4b6fc1c62dc1f4e4df2a1d"],["/archives/page/3/index.html","16590071f50c2a9bfc093c6ae53f6bd8"],["/archives/page/4/index.html","fdf224cf32d3ac8d163f955985dce86c"],["/archives/page/5/index.html","330266605c775a55293064511db3ba25"],["/archives/page/6/index.html","c2f9b16e4181526488cfd293d7d966f7"],["/archives/page/7/index.html","c1cfe95d91f9ad151497b32082c16331"],["/archives/page/8/index.html","893f8da66953b5a10899e33a33da0f2b"],["/archives/page/9/index.html","60cb6c7da56cb8cf789d2d440769db07"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","f728709f187c69f090f07c6222e98171"],["/categories/blog/index.html","efc676d0be069c16a1354539819f6243"],["/categories/css/index.html","5f97b30054f3bb83ba6a467369e663b1"],["/categories/css/page/2/index.html","4b500725b604509a606183451eb74029"],["/categories/css/page/3/index.html","1a88efe43073882c27dfa192dc705273"],["/categories/fine/index.html","129de5b0a8ff658a338d9cec00addb94"],["/categories/html/index.html","0fcf2b096ae6cd02bcdf785f03cb4454"],["/categories/index.html","220c017faf44ded385233f828fc267b0"],["/categories/js/index.html","df897fe5ddb61353a7f2daf25f0b4675"],["/categories/js/page/2/index.html","857930a8fa40fc1dd13993b3ecbe543e"],["/categories/js/page/3/index.html","eeeaccb819995a8ddd2063b64d423f51"],["/categories/js/page/4/index.html","49706cf62842c0166b9e345746b6762b"],["/categories/js/page/5/index.html","8d86e4a3d6ce0a412227b510d094575e"],["/categories/node/index.html","1a660d195640cc016985b9d98e794b41"],["/categories/notes/index.html","0cc48dcf1c87268266629fa1a4cb2489"],["/categories/react/index.html","94605b92b7b0e65bb34232e1b344eb9e"],["/categories/typeScript/index.html","93ddeb7a4643f9aa88e22338bdd303ee"],["/categories/vue/index.html","7f3670888c47e3f81ed5eba6057d519e"],["/categories/vue3/index.html","1687b5f44d1b0481f6a11e580215bce4"],["/categories/webpack/index.html","51d9a4ccd56ba8e3c5ec86f1b33a04b3"],["/categories/微信小程序/index.html","84960f611a66a7ec7997ab379bbb3036"],["/categories/面试/index.html","cf0dc3eed3172cc78c9b10426965bc90"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","d2f9d80c1f30ff3b496ddae161d23a53"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","2e2af206f7e7d783abf9e6af60f4db20"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/ts/images/01.png","c922cd12dab12bd6c46ee93bdd4205d8"],["/img/ts/images/02.png","3aa2056326e5d1c796af4ee14d5aa795"],["/img/ts/images/03.png","5d4a8b39b62c2c484b45dffa7f71d2a5"],["/img/ts/images/04.png","9005165e16c5fb263c3850b77b8c60bc"],["/img/ts/images/05.png","996ddffc76d0e5750a82f5a0473501b4"],["/img/ts/images/06.png","a52bf4f321fab1fee87cb087e0d22d04"],["/img/ts/images/07.png","36e3a3b114bcfad55498a774d9342e4f"],["/img/ts/images/08.png","3607e0c5650e9afa1384f2aac4009d62"],["/img/ts/images/09.png","dbeb822550e8eb71e78714035d790d38"],["/img/ts/images/10.png","e4a25517b0548f90ac6bef9d471ba0f1"],["/img/ts/images/11.png","dad677e46db0955c7d139a83b4b82cec"],["/img/ts/images/12.png","9745157eeb18de2635a64f65aeb34ea6"],["/img/ts/images/13.png","da212468d2ee4f8e9ba1f97843983786"],["/img/ts/images/43.gif","37c2e56cbc5c7a6fa18b043f8959a61c"],["/img/ts/images/44.png","6fe8492e0a34f7997c26473101a5352c"],["/img/ts/images/45.png","f799db600172453b1e1c864a85a9809a"],["/img/ts/images/46.png","9035adfac7596edda51156dacec1da06"],["/img/ts/images/47.png","2d75b31e7998a1e3c5ecec69a833a1d0"],["/img/ts/images/48.png","13beb8460f834a2a86866f9efaad66f0"],["/img/ts/images/49.png","540398c418c42be7de9f28b79882a107"],["/img/ts/images/50.png","18e4e8ef181ffd7eff2d1844cb704536"],["/img/ts/images/51.png","76bf41ed3e6bf0c976973364eb52fd76"],["/img/ts/images/52.png","f5d555290bc571215dd3ec30fd8aad42"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","6c95b2d82c5da5695ccf4ba1b2d8503d"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","09c75a85afa034c3268d737e92a1c048"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","d306cbd9cad8874e7062588711bad3e0"],["/page/2/index.html","593ae9684ad3b31ae54a86082f6d48e0"],["/page/3/index.html","07ab452c75293b43524dd5d097bd3653"],["/page/4/index.html","358bbb87ff4b524e41f002b2ae53e3ae"],["/page/5/index.html","bcf17d46cddbc94fbdf9b129d1588f0c"],["/page/6/index.html","f8953b73b22ef6bfb82cdd6ccd237bbc"],["/page/7/index.html","80559b4ef0d5177df6475835fca65f12"],["/page/8/index.html","b99a7de7c3dda5960ef93aa352d07ad4"],["/page/9/index.html","058097daec404d375bf0add81bbc4ba3"],["/project/index.html","fde5408f72730499bcc3672966990623"],["/sw-register.js","7f071d6e675e0f4c29ccd3fb2574a9a5"],["/tags/BOM/index.html","fbf7208b84cecb21711beb3f55c7563f"],["/tags/BTC/index.html","fb6ee6198cafc8ecda720ee90559a36e"],["/tags/Dom/index.html","a14975c859b3a5b40f2696631e195f0a"],["/tags/JavaScript面试基础理论/index.html","48390200268f471de19291d60c1d7633"],["/tags/ai/index.html","884496ab6a3c0ccad7c2fd3a18721331"],["/tags/ajax/index.html","94138e1bab847ea7a23389f9899a6957"],["/tags/ajax2/index.html","ea0599e2e352b508a3e223a03fff8d78"],["/tags/array-api/index.html","4bb78c1a41ebc7bcb528eebc8053d7b5"],["/tags/bind-call-apply/index.html","92239e949d6704df4e064bfdf299fa5b"],["/tags/blog/index.html","eefeefeb610a6db7e5279df13e634c9b"],["/tags/blog个性标签/index.html","6bd73d86651c6e610e0a6072934e8d3a"],["/tags/box/index.html","60ea7fac23e37efbd870ed8e5f2ef48f"],["/tags/cache/index.html","2bbf2bbdaad90d3497d754af8dcae16b"],["/tags/center/index.html","8617bf5c1b3070032e4ac3ae0c861d0b"],["/tags/chatGPT/index.html","3e411bd8bcdc611819fdc68ffd2a7d19"],["/tags/chatbox/index.html","a7b79b0898b9a97fd0e6ed2d846347ce"],["/tags/closure/index.html","7e6ff56c5992739d459788ebecf05e21"],["/tags/column-layout/index.html","be6f86bb4ff0ec0dcba1117b67ae00fd"],["/tags/composition/index.html","45dc500ad71006976b0551447946af34"],["/tags/context-stack/index.html","5b04898cd5bdf7c3015ee22d2116ce8f"],["/tags/continue-to-upload/index.html","87069151b64383cf831cd2fbdd3ce3b9"],["/tags/copy/index.html","863dc9e8c1a0c7731449fc56d738ba22"],["/tags/css-performance/index.html","585592fcdcefe4e54db5e77de6714035"],["/tags/css/index.html","18e66396f285a66deb08df461bd01dce"],["/tags/css3-features/index.html","3723ee285da5a0690c5cfb5adeff709a"],["/tags/css面试/index.html","65ac21c85a3c12880c0a4afc4505f2d0"],["/tags/css面试/page/2/index.html","f56761665e929cdb2c0df8bc9c784674"],["/tags/data-type/index.html","a4fe868d69553f54ce2b74e146d2d5aa"],["/tags/decorator/index.html","f660a48c31cbe7aa694cf94811cba66f"],["/tags/dp-px-dpr-ppi/index.html","edfc72d414a861ebee34fe20f3f28c28"],["/tags/em-px-rem-vh-vw/index.html","9bd6b0167fb72196adece8ecd93c45f1"],["/tags/es6/index.html","2b260906bb5b15df50c84b62ede4d1b5"],["/tags/event-Model/index.html","3eaf9d4898f5d1f369d8ef8406253339"],["/tags/event-agent/index.html","6bcc3515c212a4e1a61649e69e4ff1d3"],["/tags/event-loop/index.html","49b991d0b980b85dd2dec25a6812d0e0"],["/tags/fine/index.html","af8427842ef24500770cf695f6963e1e"],["/tags/flexbox/index.html","d4c841d99ce4a8abc8623b4a87f604e8"],["/tags/function-cache/index.html","87ccc3bf049387d7271c9399d66ec0d3"],["/tags/function/index.html","b92e63527922ef1da9301e72ffa734e6"],["/tags/functional-programming/index.html","7d2ff94c78c748610dda670823ccbc1f"],["/tags/gametime/index.html","cddec1fcabfcc398498291ae8049213c"],["/tags/generator/index.html","cae640ef6079601d2d72bef9ec06610f"],["/tags/goal/index.html","50535bd0fdb1dab3cd1715f06e2eae38"],["/tags/grid/index.html","6735f179852c2723ca83d41db6f35020"],["/tags/hide-attributes/index.html","a6aac0226d6edfb1f9dcebca9e59b624"],["/tags/his/index.html","cec7ebac55efa457804b3d04ef355de5"],["/tags/hooks使用/index.html","8c340d5113509a6e72175421932be3ba"],["/tags/html/index.html","4f54cc94d55893a877b20c4915e45e22"],["/tags/index.html","a82f41adba76d6f26abb91dad80e725d"],["/tags/inherit/index.html","effb5f66424fe6d28cd8cf301d91b5f6"],["/tags/js-data-structure/index.html","d2b794c45f80bbd5e6c19c90c69c7d4f"],["/tags/js/index.html","d92596472396008837bfd395ae57509d"],["/tags/js面试/index.html","d9d16b8c5a9891cb67e4c4f91850fe95"],["/tags/js面试/page/2/index.html","a825ebd3fc94a11ac587274570258edd"],["/tags/js面试/page/3/index.html","19a32047084c9ee206e421b69146e368"],["/tags/layout-painting/index.html","6cda7c0b24c42b943e96b912b2b87172"],["/tags/less-12px/index.html","f11d2ad6825e17007c79addb179236d7"],["/tags/loss-accuracy/index.html","f84fe7a2ce65963c4316c78286ed52a1"],["/tags/me/index.html","9fb89d7f61d0774c7282d26ba2489b29"],["/tags/memory-leak/index.html","f53ca286b8479ef8e144bf9da259907f"],["/tags/modal-component/index.html","94b75f838d77c0d930cf387902b71001"],["/tags/module/index.html","266c51ef4e322a0ce747890fe4674652"],["/tags/my-carousel/index.html","fbb84a13594225e34e59b7cced2bd586"],["/tags/new/index.html","677ab141875d60744dd3ed6319aca84f"],["/tags/node/index.html","21ad88f236f307fac87704fda1e2b802"],["/tags/object/index.html","900e54830b18e5577d116900966f66bc"],["/tags/performance/index.html","9378aa7c966ef29d2d335847ff9264df"],["/tags/promise/index.html","3b5f694cb32fd7aa17e0d089643a70cc"],["/tags/prototype/index.html","0ef4dad8c8391e9f93f953863be08f79"],["/tags/proxy/index.html","6bee67b2d86254ecaccab13dd91e63ad"],["/tags/proxyEs6/index.html","e358a5731ada73b7adb392691d8eed80"],["/tags/react/index.html","faaa3137af1172045602cdab5fe65e9c"],["/tags/regexp/index.html","62103dfb2c344fcaa88406528c014380"],["/tags/responsive-layout/index.html","aea5df64fd051dc0eedc51163afbdbff"],["/tags/sass-less-stylus/index.html","819a353188b81fb086c98662ab33bfae"],["/tags/scope/index.html","a83773eb0650ed525e22d0a7a8f452c1"],["/tags/security/index.html","d089264f08eb9533e6a7d3f9387dcd79"],["/tags/selector/index.html","a62771e91eb7b5d89e82fa3e3d125468"],["/tags/set-map/index.html","aa009b82be226da361dbb0b5c1bd7379"],["/tags/single-multi-line/index.html","52dcd6bc07b43ff454df08f412de8ca9"],["/tags/single-sign/index.html","dcdce4de1282e6124ae44d48336bb2b4"],["/tags/string-api/index.html","c63164a30865926523e11e0ef4ea1e45"],["/tags/treeshaking/index.html","2efce50101ed4e095f6b8e9117eaceaf"],["/tags/triangle/index.html","152b55e5d94883eb6fe6602f2acc36b4"],["/tags/ts报错解决持续更新/index.html","9e10907e429bb218abcc9ac3ab237cdb"],["/tags/typeScript/index.html","afc5507a0fa98cd2e7c5a228e2d464b4"],["/tags/typeScript基础知识/index.html","f36ff8598db7aebef06a37ced21fb50c"],["/tags/uniapp返回顶部/index.html","bb5f51d19f7ba0ff3b0b983fb656bd32"],["/tags/var-let-const/index.html","a2a07b92901042903ba368cb5af10e16"],["/tags/visual-scrolling/index.html","94c7cf42b823dcc9729bb0c47a71c6a9"],["/tags/vue/index.html","57f87ed437a5ada5fe71a700ba94a45c"],["/tags/vue3/index.html","9357045e57024841f6e79326eed76132"],["/tags/vue项目部署/index.html","fc143780385a469881b52dfb6c407b74"],["/tags/下拉刷新/index.html","fad3ed8452643db226b38218ac0a4b59"],["/tags/反问面试/index.html","ee9d6de172f14ffd0191304bb89b0c0a"],["/tags/和/index.html","5c2b9b3a59fba8bc5ed6097289307f99"],["/tags/如何设置文章置顶/index.html","7302e33c37ee74e8922d1223b0c2e7ee"],["/tags/微信小程序/index.html","4a742cf36e0507f2afba082517f4cb89"],["/tags/星星/index.html","8968cfb157086db1b29d5bbfa275719d"],["/tags/防抖节流/index.html","b0f04d47d572bc66e3c835ffe4da34da"],["/tags/面试/index.html","7828bd5903a5cb562891b640a4183e61"],["/tags/面试问题集锦/index.html","fcfcd5c1d3c8a028605277d201657295"]];
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
