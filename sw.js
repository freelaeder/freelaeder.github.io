/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d8262552b7e8659f9b2971edca0d1e66"],["/archives/10bf1714.html","7b60d917883921b11fa5da163d07d6e5"],["/archives/12529ae2.html","90880adb8d4a865c6f5cdd3c436b5864"],["/archives/14015a55.html","bb4ff351f611f4703e9763eec273b6b2"],["/archives/171d1754.html","2a66df57178a817144ccda5c7218d3ad"],["/archives/17a85756.html","d9f53435da3e55258b0ca5b749ba86ee"],["/archives/1879f8e5.html","6718cefe2e1426ec42b41aef72356f42"],["/archives/1be48ee.html","cf09c44ca0a4921547dac0f11ea5371a"],["/archives/1e021099.html","519731b08acdb16e94a0f55b5023d284"],["/archives/2021/06/index.html","05b32937cadd0e5fecc8a13851abd398"],["/archives/2021/07/index.html","41726e78a9ff0d97ccf426d5f681d3ee"],["/archives/2021/index.html","bc08d1e9052ccb3c77f6b4b3c8bb7ec8"],["/archives/2022/01/index.html","ab306899b68925fb60ee529c61e69b3c"],["/archives/2022/02/index.html","9eaff5bb7d0e3533d799da199e54053b"],["/archives/2022/03/index.html","a8230be9a28a005224435dc5dfda0473"],["/archives/2022/05/index.html","803df448a9b98c7b9bfe51f19ca94cb3"],["/archives/2022/05/page/2/index.html","8b15aed43f4ed75decb77edc324dda25"],["/archives/2022/05/page/3/index.html","a9deccc9a402649e8137d0dbfc21854e"],["/archives/2022/06/index.html","7ecff3d9750fe1efdfb0f7be0963c467"],["/archives/2022/06/page/2/index.html","ec6dfaa0ec469858714b9d24d9cb0a07"],["/archives/2022/06/page/3/index.html","77c194129359a453594430c408b1ce3f"],["/archives/2022/06/page/4/index.html","526fa497f11830bab87e79b7a9847f95"],["/archives/2022/06/page/5/index.html","116eb516638058fe87d01d19a6ae2a11"],["/archives/2022/07/index.html","875013a0d6c8fe45f0d96f3ecc789b49"],["/archives/2022/index.html","151293a728b79ebbf6f9c1140b2e6e18"],["/archives/2022/page/2/index.html","e5f5980c18708b83abd14ee8fdf06e31"],["/archives/2022/page/3/index.html","0b7946e19c6450afef3684c707840d83"],["/archives/2022/page/4/index.html","4e4cfc37a28d10eb32055818216e6d91"],["/archives/2022/page/5/index.html","e80e6dc9e1b44c1d03d0c0bea98cb41c"],["/archives/2022/page/6/index.html","97012d4aad772d1026af4872ccdfb62f"],["/archives/2022/page/7/index.html","436c0d72b9bc1700a9dc1d6a02a865e2"],["/archives/2022/page/8/index.html","048ee3a62391e2dafda31f5db6dff678"],["/archives/2022/page/9/index.html","f549ce03d5ed5a43c04a93b02caafde1"],["/archives/2023/03/index.html","7f2688472f0fc8cb207c15fbf4150c16"],["/archives/2023/04/index.html","2d874e7dfe4e9c13a0bcd9c0e2b1c699"],["/archives/2023/05/index.html","c4c47ade4eb3efd33024cf0afc717dd1"],["/archives/2023/index.html","64ab78cd424d94dc78e1ae7bee71d14a"],["/archives/2023/page/2/index.html","d4c23dba83d2103e32ddb3503c185be0"],["/archives/203410a2.html","abbe29c41c2d9951589f3d0407a21da9"],["/archives/2039e3ed.html","274589956f3ea694563089de6e18539d"],["/archives/28d88e6.html","5c651a6a2e1210317e88042466b0dc98"],["/archives/294b86eb.html","a633c2fa9dff0bccd099c881bd09d241"],["/archives/2b098523.html","b5aac1109266064dd0f641dc856f657d"],["/archives/2e20d937.html","1cd9750983d147ef9783a6dca1d8d4a0"],["/archives/2f8b36fc.html","4dad4b1c8e97a3783df8cfac502c17aa"],["/archives/30b90bc0.html","b926e4b3f32329231957e7cf36ecfcb4"],["/archives/336f0513.html","5aef28b819b5a85ed193472903c3be76"],["/archives/33b9c85e.html","10c5200c9b22d7e2e9008422e2da6241"],["/archives/36044e1a.html","5577aa39319367e5b0ce0c2a84c02f83"],["/archives/37919ccb.html","31544902b7442d129c18631aee185dfa"],["/archives/39a5927a.html","6d21e27ae642433103194fc22464bcee"],["/archives/3f038ede.html","5dac68300031bc158585f2f64b77ef47"],["/archives/40f0eb24.html","6da30c16942aaf7d4f8d3f0d7cafd811"],["/archives/41476be7.html","14c1cf3bdf3496cd32049a142c868b85"],["/archives/42b82995.html","f9fd7a737dbbd81f6118729b99a2d2da"],["/archives/4311e35c.html","5d6e53a4ae75f32689f3a1226bf1ffea"],["/archives/47c3840f.html","cc367b6c5800f215b1a43440949aa0c0"],["/archives/48078dd1.html","e2e3b8cc4affa547e147fd0e95bafe75"],["/archives/4dbabb82.html","b9571479a254397dd49a3cf76ff77e0c"],["/archives/50cfbdee.html","1b8375657e84218b7a0b4da5c1d11f8c"],["/archives/574fecf1.html","b737bd0a31cab3db277b368a09a08b12"],["/archives/59b49683.html","67b20f5a9f4c3e280f1cd216c7884778"],["/archives/67902db1.html","8235e33b10a1ffeb2b9cb5595444db9b"],["/archives/6be34445.html","2f8969f63128eda1a5e420df63df759e"],["/archives/7331f3bb.html","7e2ffea3b8a7f1dd6c72a50ab0aa3bf0"],["/archives/7472fc2f.html","a2132f79fef25b881565751d19f1a464"],["/archives/75b2f6c6.html","e72192db7ed300dc7c29619ea25efb1c"],["/archives/77971af0.html","0f6a321b4c7197c60200231109a40182"],["/archives/78ca6597.html","16985a8f71f7ff42521e9ede928b2dd8"],["/archives/78cea6d8.html","1410396401b235249aa059a155e0dc3e"],["/archives/791e95a0.html","58b2546573a03b1fd492112ec9489208"],["/archives/7b268071.html","d339c74b8e917ffbb59914c94b44c609"],["/archives/7c942302.html","34162b19988b6a20f3da81ad98630580"],["/archives/7d76407e.html","67d7f4b45d6ed017b38d819a61bbe39f"],["/archives/7f6cf7b0.html","2624e6fb6b090042f1f91c7e50afdda9"],["/archives/82d79681.html","2ad0f5e736b37c50f4e086d667009811"],["/archives/84a91e69.html","d313d16b49bf87c407edb312044b4f5b"],["/archives/857fe845.html","9694786206c99af0dc07cbb4a71c3374"],["/archives/88d3d46f.html","ae75c8fa35d51da7b9333e8359986d80"],["/archives/8a9483a.html","6e1671c5e1524ce17d95fc19c90b6638"],["/archives/8ad35e55.html","bd4317d0da17ab41540e05eab5bcc520"],["/archives/8d5284dc.html","4ddbb7a065b2495c3b0b7dcc269f0a22"],["/archives/92004154.html","72cc2780f125d4e0d43772f5a3494956"],["/archives/9370d73f.html","324263d5b5c0030e3db3e19128da1d55"],["/archives/93ae9a14.html","cf5705c3221890e34ff5ec60a9ca9240"],["/archives/9417ce47.html","c7b6da272a1ed5b46723968d7ed2cc57"],["/archives/942a5c06.html","23059d6ba9c97de966f894930cd7de09"],["/archives/958c57b5.html","e6a1a63cbca57ac4f3dea29ad205bbd7"],["/archives/9692e25d.html","9ed15a081c22cc2c4f6af694ea8ef8e3"],["/archives/97a9ab5c.html","a73cb310161ff6a4b330e840c41fb044"],["/archives/97b76847.html","eb0aeeed5bc07d0fb860296ceb5c847f"],["/archives/9a0dce2d.html","d0f20c4064951784eea4f8f874073b83"],["/archives/9b0c2390.html","2655b789e240d24f2748507331477f19"],["/archives/9e5f33b7.html","0d43c7efe63c204353b79d8fa305cd23"],["/archives/9f1ed84.html","17cce36dd7aad3accd365e087e0c346c"],["/archives/a0245a2a.html","ffd9412b9adeda56e7fc4d63909f9f4c"],["/archives/a10ceeb7.html","20f9849250cc286ed2426b53c41308b5"],["/archives/a36a5ae4.html","24720d94b4e3a24148f8a1c044a45b63"],["/archives/a8adabec.html","12107882984c4e435c72bd1af7a2eed0"],["/archives/a9432027.html","3963355816e8d95b2983bc11be58979d"],["/archives/ac5292c2.html","e3bd490eae51e596759a5ac0bffe836d"],["/archives/adb78c8a.html","297eed6499951c377b41dc19a17b2610"],["/archives/ae4c07b8.html","627c597360d1f2ed1c49215ef813c2be"],["/archives/af55d3.html","9d52a59f2a72a847ac77cf4e1ccb70d0"],["/archives/afcd4575.html","f0bc79b3907a12123aaa09ab22fedf40"],["/archives/b21f48b9.html","2b5e0b746d844b50f660344e20b47bdd"],["/archives/b51bdcfa.html","ff265c5b6be3def2af295d1d4b86eb5a"],["/archives/b7b51641.html","faf8ea06c61d9ac93bf862dbdaefc542"],["/archives/b9f20a20.html","24f2b8ca215a2ab93f1cdaf69343dfbd"],["/archives/be945145.html","7d67a5f23302cb18c7bfbe2a17056e1c"],["/archives/c0add594.html","1470e469b7a209550d80e59b9f5bb517"],["/archives/c242628.html","afb207fa2982883e98e63780a52f06c0"],["/archives/c4a7fc3a.html","c1b703c8e6e0706cb8ce62af16bee9cd"],["/archives/c59bd5c1.html","46b96ff49ac047bdf290ddc2e504ee96"],["/archives/c5a6a264.html","52756498bb4a022c2e970b80bcafefe0"],["/archives/c5a97815.html","2b617acd83144586a10f92c7eb6376b6"],["/archives/c7f4347.html","e10ccbce24dba4a77e74f3cdf09145d0"],["/archives/caae163d.html","ae389664c743eadf34aea15f84748fc7"],["/archives/caae7b70.html","7bf5b65161d694af8cf9bd18d173603f"],["/archives/ced3960e.html","6b724341d1f4ba93f2e49175ba9fbf01"],["/archives/cf2f5248.html","5b85df386a574801b76d42d32f7f71a8"],["/archives/d3b694df.html","34be4cb8643d6b70f0c59f83d3905902"],["/archives/dc3acdcc.html","3d7915bc3c44b07c85e4ce6eecab9973"],["/archives/df976d87.html","f653393b6cbef4b96817e019cfd7caae"],["/archives/e0c98e7a.html","e37d1f927cb51cfa0b5929a16024bd89"],["/archives/e6437fbd.html","9cf1b636af26ef0e50a533f3252d1585"],["/archives/eab5cc79.html","5d830f88fc9048e739108d5da0852392"],["/archives/eb05a173.html","8f8dab2fe97f6b92d190a0680322ea8d"],["/archives/f1d0391c.html","d22ea4fa948b5b93dbced524ca3fa47b"],["/archives/f3d3ee5b.html","809656493542f8fe7c6acba56c50aee6"],["/archives/f774ddf.html","b833702e940f80ef0d6a3a4cf0d27488"],["/archives/f7feebc7.html","57ba93ec713ba39f2ac6dad548631a75"],["/archives/f9f4b1e7.html","024912b55fab950833364f9b75e3ea00"],["/archives/fcdceb2e.html","6d592f37a38b169f7f3b7b067e2c75c5"],["/archives/index.html","4157da26ac361fd23989344d46075a76"],["/archives/page/10/index.html","153b9f5a5fe92779bc92fa41b50be84d"],["/archives/page/11/index.html","a6d4ae9a294c5b1ae6f90f2b8cabcbfc"],["/archives/page/2/index.html","8bdac8f9aa9614d81e37b5c37a8eee88"],["/archives/page/3/index.html","286fdfd40089138d583c135518fba0ae"],["/archives/page/4/index.html","993c615d14f2d8bc5597a8279ad7bdab"],["/archives/page/5/index.html","f2ee365fe170b51a2929c9394e60a4de"],["/archives/page/6/index.html","1130e2f228149bf975ebbab500374888"],["/archives/page/7/index.html","9ce467a981c78c2b3ba0662138a4774c"],["/archives/page/8/index.html","eda49916349faea53cbc26432aaca3a0"],["/archives/page/9/index.html","82ecb1e7b72a1c1c25c651cc7d7d8f33"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","f8a89e45edd1bbd5e4068bd188148bed"],["/categories/blog/index.html","4426603fe719ca018dd82a316c7e9460"],["/categories/css/index.html","7dc3a14a96eebfc239bd9ec43c17f319"],["/categories/css/page/2/index.html","8a395b69e3d8cbd7baae6b242e259df4"],["/categories/css/page/3/index.html","cb636ad862eaa6119f759ceea59155cc"],["/categories/fine/index.html","727cb2fc68db9c5473b1950201ce80be"],["/categories/html/index.html","72d1e0d165c81681cc368d81c339a2f5"],["/categories/index.html","3ca9236c06c40c8b08ba4a9e3da51e97"],["/categories/js/index.html","1e215c20193095de316ce55a5d7ca5c1"],["/categories/js/page/2/index.html","d4ea3c9dea9a641f1bdb6f2d29913e9f"],["/categories/js/page/3/index.html","be98a829f2a1da3714fcb9c0b047ea5f"],["/categories/js/page/4/index.html","af0ed839015858eb5b5fb6878e28a276"],["/categories/js/page/5/index.html","8027df50b48ff6d54facb419f82134e7"],["/categories/node/index.html","c052a8e69ad9987e7c43cc01e84510ff"],["/categories/notes/index.html","ef38bdbfded9e688fad55f5f707776d5"],["/categories/react/index.html","c61ab1cec422b0f00af6367a15549641"],["/categories/react/page/2/index.html","82816bdd539bce06c03ee98e803c1046"],["/categories/react/ts/index.html","37566ef8f3cb132a3d52943048fcb3d1"],["/categories/typeScript/index.html","a7b6f5933d00abf0180e28146d2c66e3"],["/categories/vue/index.html","90d64325265bedc37782f4f10e39ac3b"],["/categories/vue3/index.html","9aa0d5329c65eac4dbd8de155a3d5ba5"],["/categories/webpack/index.html","b9e15868103237d35492b597433b13c8"],["/categories/微信小程序/index.html","6f2b054664eb1358f0a81bd9eda2ae83"],["/categories/面试/index.html","5d8f6c4a22533cb60c00a82333c97049"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","d2f9d80c1f30ff3b496ddae161d23a53"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","1d95da3dc13641034a3d89f0f5fa1fb6"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/ts/images/01.png","c922cd12dab12bd6c46ee93bdd4205d8"],["/img/ts/images/02.png","3aa2056326e5d1c796af4ee14d5aa795"],["/img/ts/images/03.png","5d4a8b39b62c2c484b45dffa7f71d2a5"],["/img/ts/images/04.png","9005165e16c5fb263c3850b77b8c60bc"],["/img/ts/images/05.png","996ddffc76d0e5750a82f5a0473501b4"],["/img/ts/images/06.png","a52bf4f321fab1fee87cb087e0d22d04"],["/img/ts/images/07.png","36e3a3b114bcfad55498a774d9342e4f"],["/img/ts/images/08.png","3607e0c5650e9afa1384f2aac4009d62"],["/img/ts/images/09.png","dbeb822550e8eb71e78714035d790d38"],["/img/ts/images/10.png","e4a25517b0548f90ac6bef9d471ba0f1"],["/img/ts/images/11.png","dad677e46db0955c7d139a83b4b82cec"],["/img/ts/images/12.png","9745157eeb18de2635a64f65aeb34ea6"],["/img/ts/images/13.png","da212468d2ee4f8e9ba1f97843983786"],["/img/ts/images/43.gif","37c2e56cbc5c7a6fa18b043f8959a61c"],["/img/ts/images/44.png","6fe8492e0a34f7997c26473101a5352c"],["/img/ts/images/45.png","f799db600172453b1e1c864a85a9809a"],["/img/ts/images/46.png","9035adfac7596edda51156dacec1da06"],["/img/ts/images/47.png","2d75b31e7998a1e3c5ecec69a833a1d0"],["/img/ts/images/48.png","13beb8460f834a2a86866f9efaad66f0"],["/img/ts/images/49.png","540398c418c42be7de9f28b79882a107"],["/img/ts/images/50.png","18e4e8ef181ffd7eff2d1844cb704536"],["/img/ts/images/51.png","76bf41ed3e6bf0c976973364eb52fd76"],["/img/ts/images/52.png","f5d555290bc571215dd3ec30fd8aad42"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","b65c0db841401a241ae4c56614f3378a"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","6b996c718508284b1531f4d939623ab7"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","52159bbd3a99f3787b79eb23b13a0931"],["/page/11/index.html","eb38b96197dc9a42e07ff3137c0dd998"],["/page/2/index.html","e3a524c14bb5c7fb241811adf2c1a894"],["/page/3/index.html","544d38fa0e55dc7fcf4df0884a5ba32f"],["/page/4/index.html","064da503ce8e9cc0057e7e23721214fa"],["/page/5/index.html","7f06d33b2d128e5bd91319d846d30d1e"],["/page/6/index.html","0428b1901a836184e08ff922f65ec3b0"],["/page/7/index.html","0ec2a303b106b598d51cc1ce95a4063d"],["/page/8/index.html","9c0ce20c234baf7f9254b57e5f3fb911"],["/page/9/index.html","c1b85c4ca6a42424ee73629969f26177"],["/project/index.html","f9b564973d9c66fb14b1c67cf9ff8a60"],["/sw-register.js","81c3c2fc9077f39c1270825761304d62"],["/tags/BOM/index.html","85955afb793a7d23f8c461eedec0bd2d"],["/tags/BTC/index.html","3e59b6dc9d5cbc25d8e6b5df854a7429"],["/tags/Dom/index.html","0a9cfa7bfb20c9e84944ce9878df4df3"],["/tags/JavaScript面试基础理论/index.html","25823e76e29e1c73491b156d2fd2dd94"],["/tags/ai/index.html","82ac5ee4f64824533b7919ab525685b4"],["/tags/ajax/index.html","1df5b8271c92e1f71db56c398777ee6f"],["/tags/ajax2/index.html","7c20b5fe12d653aaa1b80f9bfcf713cd"],["/tags/array-api/index.html","a5b3da8a5e497a8876a8e3f15ad4c5ea"],["/tags/bind-call-apply/index.html","a87035de80b74709ae12e7a39a7beebf"],["/tags/blog/index.html","bec4a33ac711c8762e32565a66061957"],["/tags/blog个性标签/index.html","94c69ffaabfe672a7c4ec4d545c33385"],["/tags/box/index.html","ab446e53014f99b43d3f103f2ec480ed"],["/tags/cache/index.html","50113a3634c774606b788455179e42eb"],["/tags/center/index.html","e60451d282d642ae6bd2b62ffaffdeae"],["/tags/chatGPT/index.html","f1210298c47557ea096ecde85652c449"],["/tags/chatbox/index.html","15077c452317257793eb359a7c8cb70b"],["/tags/closure/index.html","79b871ce250ac86912527d03d0a75565"],["/tags/column-layout/index.html","d3811ae42a863ed938ed32e6263ee5d4"],["/tags/composition/index.html","cfb32f76b7b830de6efbf62d61eb94a6"],["/tags/context-stack/index.html","750bd3a19fd42221570f82b20533cc39"],["/tags/continue-to-upload/index.html","4eec9551b2da21e5f01b388887842417"],["/tags/copy/index.html","500758a2b3abcf89604f65452ab026f7"],["/tags/css-performance/index.html","5a6edadbf6a88ccf750b56e18f3bc140"],["/tags/css/index.html","df3a9c85e2d332a95a149164245b074d"],["/tags/css3-features/index.html","f3ed24ed0611266feb3b568762d6ab49"],["/tags/css面试/index.html","779e72bd1a2cad16376b269e3bf6cecd"],["/tags/css面试/page/2/index.html","09ffa92155db190b769dee7e88ce949f"],["/tags/currentTarget/index.html","b31aa01404015e0cc681b9d258d0a9b1"],["/tags/data-type/index.html","b658accbd0bb02306790dd7d966be85d"],["/tags/decorator/index.html","b98df79f6cb00b6da94f09df136e2acf"],["/tags/dp-px-dpr-ppi/index.html","ce23f565a2d3869bd7768efce0f27d34"],["/tags/em-px-rem-vh-vw/index.html","7d36473990787841fcf2176b8a524e4f"],["/tags/es6/index.html","797b9fd9fd7e935461a18ed82d4a8b64"],["/tags/event-Model/index.html","56921ea690f6fec96f06cb0a435e0847"],["/tags/event-agent/index.html","8cdc4423966b3b650bb60a681c8f2dfd"],["/tags/event-loop/index.html","1cf411e46368c8e867515c7bb1f2b476"],["/tags/fine/index.html","c0ded09b90cdd6207ae3fbb4424a592c"],["/tags/flexbox/index.html","d2d8d9b81fa523e87e0b20ee3c8f6b72"],["/tags/function-cache/index.html","918e115b0bfcc1315b0c62ebfe9b3d13"],["/tags/function/index.html","06303f591737b9adceee0b66d9478756"],["/tags/functional-programming/index.html","928581283c8aee1d034e1ae2689f6474"],["/tags/gametime/index.html","715c0603b12993d5cac50a74119cb4e0"],["/tags/generator/index.html","426f634ed24611aa275e5dea9e93b23d"],["/tags/goal/index.html","8e2cda53811c53bbdc0c396360b95294"],["/tags/grid/index.html","e664f988bf5dc2024b1841f44af41895"],["/tags/hide-attributes/index.html","48edf992076d0a30d53747aa917ade07"],["/tags/his/index.html","614cca428b0a53bafd5a9e5a33a72b72"],["/tags/hooks使用/index.html","0f3082684e9703786cba191650966ce7"],["/tags/html/index.html","2cfe72d3e0b3750616f14fc0d0be65d1"],["/tags/icp/index.html","0e85f5a00c7e2a4756df4fd406dce31f"],["/tags/index.html","a96d8ebcccdd3ab0ff66c71bb084b212"],["/tags/inherit/index.html","1a38b62a99a58547599945e8557e525e"],["/tags/js-data-structure/index.html","5f424d436998f74e811c5e691de792d7"],["/tags/js/index.html","406f62c30a4c42b268aa5ce2d25e855c"],["/tags/js面试/index.html","7b1c0ca69178feb754517b06bf6ae958"],["/tags/js面试/page/2/index.html","bd5008cddd49205a52e450ae1619b4bc"],["/tags/js面试/page/3/index.html","93a69615141e5fd49c063e3e08c76046"],["/tags/layout-painting/index.html","1e99878a9dbe2f0405844990c3881e0e"],["/tags/less-12px/index.html","9fd3bb89e3029c4c7d1fdafbf16573b8"],["/tags/loss-accuracy/index.html","6d6f073a350d2d4a597db71f1f6ee292"],["/tags/me/index.html","191841094f4c15e89f3e87c1803a6179"],["/tags/memory-leak/index.html","e0b93c8e0277a7ecdb57334c1b70c9e3"],["/tags/modal-component/index.html","ab141f8c037995c00a892e1dfb998a08"],["/tags/module/index.html","68fb6d03813b76f0c5b796199025b162"],["/tags/my-carousel/index.html","814da751eea79bdbaca551b6babbd10c"],["/tags/new/index.html","13513013fd895ed7d741a880c89bb60c"],["/tags/node/index.html","a207c69e7353562f6c94e14572ea33ac"],["/tags/object/index.html","2c07ce4c56f4a9ed0b6253c415b5fdbd"],["/tags/performance/index.html","104ebfb2d8fa1bc342494e9de1a3bcc8"],["/tags/project/index.html","4f87ca04af03723884ea1546592f7641"],["/tags/promise/index.html","db4289de4788e6d1219dc03412d9bb00"],["/tags/prototype/index.html","073fecc4345b4355ab0154b07af662d8"],["/tags/proxy/index.html","39ca12ca7bf231f049d1c1499d9aedbc"],["/tags/proxyEs6/index.html","4f84fc0c6629ce76618248065b530d65"],["/tags/react/index.html","5ea9d0b37dd860aa121cd037c5fe0fdc"],["/tags/react/page/2/index.html","d224bb7d7a892bb9bb0ac314fd7130d0"],["/tags/regexp/index.html","e31f0b2e2579e6ea80124093d4f631d2"],["/tags/responsive-layout/index.html","0123c1232c92cdf560823ed1a75b5e94"],["/tags/router5/index.html","8c6089cecb5aaa9d1e362bec2d9fbda7"],["/tags/sass-less-stylus/index.html","89b5076abb17a56d52e012fec615478c"],["/tags/scope/index.html","04dc0aac71f0be1ed12005b3b88103f5"],["/tags/security/index.html","f06e3216d8a40a3623fd312398d31fad"],["/tags/selector/index.html","bed03ebbaa5501e5c0ab58c31d0dbfc9"],["/tags/set-map/index.html","2c2c3ed70f1769cd577c70931228b298"],["/tags/single-multi-line/index.html","3ec357b19b3a91b7002504a2a61b9222"],["/tags/single-sign/index.html","9a5375ef915a61c72ae953518a12df40"],["/tags/string-api/index.html","9f104b1f293fe31f272087956b96e7d8"],["/tags/target/index.html","5c48a5fb78863465cb3a5a798e15675c"],["/tags/toolkit/index.html","fa1eb3718843683eab745649424986fa"],["/tags/treeshaking/index.html","9c9297a5b2e260f6f9d7595bda0ffc1c"],["/tags/triangle/index.html","e3f6605c69706d63bd49d296933f0af6"],["/tags/ts/index.html","a86bae235f52cf3b84210a0f2ee1bb6b"],["/tags/ts报错解决持续更新/index.html","4b2c4a698f36194d46c3b4ff685b225b"],["/tags/typeScript/index.html","4b67dfcf9029bd6e6d7f541eee656fe4"],["/tags/typeScript基础知识/index.html","5fc13faeb9f520cc45a93871d87e7e79"],["/tags/uniapp返回顶部/index.html","52e87aa4dcb99e6c88f945e1b9253a9a"],["/tags/var-let-const/index.html","154e6f9c6ca383ece259dbb1cbd91472"],["/tags/visual-scrolling/index.html","4845734c2f1ae0a8984017f164cb2088"],["/tags/vue/index.html","1c86c65bfacb760b0e59e29424ff3731"],["/tags/vue3/index.html","cf454627c41a0a3acb610939d2e21fcb"],["/tags/vue项目部署/index.html","6dc2915706138f8c1f3e577a7c9c36e6"],["/tags/上线/index.html","376c3786ab3e0e7c308f2915f3ecc6d4"],["/tags/下拉刷新/index.html","55b089a3471f9b010fe233918a0e70b7"],["/tags/分页/index.html","bb439f6a370fa7358c5372b04989d6e5"],["/tags/反问面试/index.html","68eb8048798fb1d19cfc8e4ddee83efc"],["/tags/和/index.html","53aa6b79fe96d7313d36f9e2667d3ad7"],["/tags/备案/index.html","04501fb6ce7ffaf87165d4792a30588a"],["/tags/如何设置文章置顶/index.html","07ba34059aaeb73d57ab26ce1ed207c1"],["/tags/微信小程序/index.html","e94ae3a8e6f349e51d0d5ee6ab5f9a8f"],["/tags/无感登录/index.html","3498f150b411e47c4df97f76961eaac3"],["/tags/无限加载组件/index.html","c9065d2b37900248d8470d7a0f9b97e2"],["/tags/星星/index.html","03702cd5455804cdc10d7472c08312cc"],["/tags/防抖节流/index.html","3f65f9b99c92c19e1d9ba1dfe14b5606"],["/tags/面试/index.html","6e191cb779278792d2aabaee79dc717f"],["/tags/面试问题集锦/index.html","ccade40e430ac383d4c55478b7711f03"],["/tags/频道列表居中/index.html","ea2f2f8ca12f9d98af9c5d27a5b525bf"]];
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
