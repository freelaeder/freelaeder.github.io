/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c67e3a2b42159ed8b004998d1bccd16e"],["/archives/10bf1714.html","8138bd6948dd43a4a499a95116d57c85"],["/archives/14015a55.html","3a8ec8d4a63fd4a7693e55524feeee12"],["/archives/171d1754.html","4051d6e3252b1aef786b29792527cbac"],["/archives/17a85756.html","12f383f9da817f9039ef720585652c3f"],["/archives/1879f8e5.html","370541eb832db51966cff13a27f457b9"],["/archives/1be48ee.html","0906b25449af70a724bdfa4f75e4a12c"],["/archives/1e021099.html","ba2ef74e442b5238b6b19dd56ff01cf7"],["/archives/2021/06/index.html","c9a61a9263b23db3ddd876916d68d711"],["/archives/2021/07/index.html","a0621b8758205bc041a536bc89551551"],["/archives/2021/index.html","fca1549df3f67d7363f8e33f16a65ee5"],["/archives/2022/01/index.html","d16f2ec0fc51d27bbc3820e60cb5bafb"],["/archives/2022/02/index.html","ff76ce9e340583b56ec0275685e4c98c"],["/archives/2022/03/index.html","3a61a8cdad50b3e96ab96b6ee454a121"],["/archives/2022/05/index.html","74a6367c3194f7a3570098cf922e54d3"],["/archives/2022/05/page/2/index.html","f48ddbf12c02aa94e7cb6ca0d07c2574"],["/archives/2022/05/page/3/index.html","37aacc51763a2cd184af52c5d95b2621"],["/archives/2022/06/index.html","c2ff18d184f2661b5cf3b625c0799690"],["/archives/2022/06/page/2/index.html","5a30f343545743b00350484d5a3b000e"],["/archives/2022/06/page/3/index.html","f3cee14a6627cf7c0e0e818fe722aa74"],["/archives/2022/06/page/4/index.html","3d95fb0ea37c1580ed212b598a58de1b"],["/archives/2022/06/page/5/index.html","c48c7b22c27a50c56c65f1e15ba7091e"],["/archives/2022/07/index.html","bcc8cc9231a6eae2bd72ae3b72987c89"],["/archives/2022/index.html","5c22c635c95f6ee3ec1f73ed0155017c"],["/archives/2022/page/2/index.html","77cdd2aa8f37bc78bb95e4430f9000e5"],["/archives/2022/page/3/index.html","360203a7d317fcdc0362c7d22d771105"],["/archives/2022/page/4/index.html","02e6b847680cc0a5c76c5ff1b157957d"],["/archives/2022/page/5/index.html","f6ac7e5f6c192fac1f7f65677a8c1322"],["/archives/2022/page/6/index.html","836a1d12bd35623f6a19b992d7e52d80"],["/archives/2022/page/7/index.html","7a02f628cd68544d7a1b891beeb13a8c"],["/archives/2022/page/8/index.html","c1bfd03cc98e47e24d95c1faac433f58"],["/archives/2022/page/9/index.html","a49ed1cbfce604e1b76e9a977f851f78"],["/archives/2023/03/index.html","bb422113aaa3a0b7c14e165107a88a7e"],["/archives/2023/index.html","cab76328d5eb5335289c88ca0edece5b"],["/archives/203410a2.html","d4e6980a548f512e524d773c5759ac86"],["/archives/2039e3ed.html","d939d133cb423f969c507267b14b5f99"],["/archives/28d88e6.html","1ee3cab9e8142fd5c8296f244645871f"],["/archives/294b86eb.html","b98cee72617cb7ea67b56d6ba2b20c3b"],["/archives/2e20d937.html","8c9052024b3c5d23c070ffff099eb0f2"],["/archives/2f8b36fc.html","7f3980da0fd88c6f0c857ffbddee4c9e"],["/archives/30b90bc0.html","b1a4b238d6cb10bf59f53d6da8acd8c8"],["/archives/336f0513.html","11847b3133466b6e5a3f69565ec10b51"],["/archives/33b9c85e.html","bfbdee0ab815e9acb22916edb1bd3813"],["/archives/36044e1a.html","24c128702eb1952c2035e9f608174f09"],["/archives/37919ccb.html","ad07bb6d2ae7f162da032db0b9620f72"],["/archives/39a5927a.html","c3ee3982a1ee4f25e3e6a031009a7d8b"],["/archives/3f038ede.html","68e78e4e8c157a25169dfdaf1c2c9012"],["/archives/40f0eb24.html","61f22e714dee1b4b67f409bde9fc0f30"],["/archives/41476be7.html","16e82525f9baa428e12aa059bdfc3fcd"],["/archives/42b82995.html","1c60d9a24ab05ed7a987e68b65e04dc1"],["/archives/47c3840f.html","849424e1ceccd9a924f96980a3436d2c"],["/archives/48078dd1.html","e4b6b4f8f6a517a8de4fb4faa3417085"],["/archives/4dbabb82.html","bd564a772cb14eb5d6a1fe2835a3ce60"],["/archives/50cfbdee.html","3ffb5d59189b921770a337ce86549a28"],["/archives/574fecf1.html","a6b2d9d3a5e4652e5ac1bfec651ae952"],["/archives/59b49683.html","25c697bd241c5d358cc6831edfdf6e0f"],["/archives/67902db1.html","f77a3b9e0cd62cf156c9f42c782b0148"],["/archives/6be34445.html","27e22ae4f237a09106551808b00a8929"],["/archives/7331f3bb.html","e385502f19d0eb16945e50c6c4fc721f"],["/archives/77971af0.html","60a25074f37854a03ef6134b03dc1eb0"],["/archives/78ca6597.html","36e8b04dd093fe1a2681b9c999f4e4b7"],["/archives/78cea6d8.html","019e218a2894e9247a41be2bdf070261"],["/archives/7b268071.html","6969e827a45b4d79c15353f2504d0b3e"],["/archives/7c942302.html","394c312af79fc988dbe137fef85ad1bf"],["/archives/7f6cf7b0.html","7e3a5a14b1d6b1b07aff101c695b20ed"],["/archives/82d79681.html","4cc5b40e61685a07f9b631a94aeb87b6"],["/archives/84a91e69.html","f9a519a0cc2973c799e9143977a9ae5e"],["/archives/857fe845.html","5354f85a26350072ff0d4ffa4206a792"],["/archives/8a9483a.html","983ced437fddf43dbc9294db64fa678e"],["/archives/8d5284dc.html","bbffea7574578b269a8360c81e8bb137"],["/archives/92004154.html","6a40225fe85f9602d2d1ee2e15125d79"],["/archives/9370d73f.html","1c5a87fcba993dabbf850ad20bb0e229"],["/archives/93ae9a14.html","91118efa01d153300b52262f5c1ae897"],["/archives/9417ce47.html","42f814eacc6c0abff0438344c95b4bdb"],["/archives/958c57b5.html","ea2130d5e72dad7c27d039937b294541"],["/archives/9692e25d.html","d98fe8e01c52f7c504fe09b498a8926d"],["/archives/97a9ab5c.html","d4850d1e10bb01b709f3f81de0281537"],["/archives/97b76847.html","965815ff23401d465f4118acde885a69"],["/archives/9a0dce2d.html","298b777d5bc50cd8cf2bfd85e78aebb6"],["/archives/9b0c2390.html","88787d760323eba08a9ca4bba2ff1f97"],["/archives/9e5f33b7.html","4368f3647b1838f1e2e2f931fe14f42f"],["/archives/9f1ed84.html","d57ecfbcf3d3fe0f6a5a8873dba8f1a6"],["/archives/a0245a2a.html","43a34b83f060efb502da76351a653006"],["/archives/a10ceeb7.html","0e098ea384a6a063b19e215193fd8187"],["/archives/a36a5ae4.html","37f4c1356b79083ab087fa2d266c1e38"],["/archives/a8adabec.html","ced0f3a0692d7bf336463e8e05609349"],["/archives/ac5292c2.html","96f20e3d57afc2bffeb72ed3454885e0"],["/archives/adb78c8a.html","032246d639aa405099b5c0a9f99956bc"],["/archives/ae4c07b8.html","3febc3dc65fb401161080cc88989dbff"],["/archives/af55d3.html","3dc0b6ccb01ce9267522a88a5ccb896c"],["/archives/afcd4575.html","54a5b5fc699f2a42b6538294f4055163"],["/archives/b21f48b9.html","47899ed63d45ca469a83c22c36d03884"],["/archives/b51bdcfa.html","2a302f0d2bad7218c65fdbfa82475466"],["/archives/b7b51641.html","6a5ea80e447d18c752ca8d7fa136861b"],["/archives/b9f20a20.html","7c69d7c665f93e72099c7e19a283384a"],["/archives/be945145.html","ebb6d31575160f2e766347162ce001ee"],["/archives/c0add594.html","62d593d9ece644b8ba59a7fd603d5f65"],["/archives/c242628.html","847b777f0a3d0338fc31436454eb0aab"],["/archives/c59bd5c1.html","e3ff9c449ac812e760abbdec8d7b2f09"],["/archives/c5a6a264.html","354b2150e9d5bd81af5ebfa1d4aff161"],["/archives/c5a97815.html","44e83e356f9db6e1f2c0639df6a15b04"],["/archives/c7f4347.html","9558b022da1ab383b58e6921acbfaec1"],["/archives/caae163d.html","2fe6ed9c76c3d122fa41382bba249edc"],["/archives/caae7b70.html","8048fd41d5c97b4efe118152535ca62e"],["/archives/ced3960e.html","73cf69053ce7988272c0f45df7798b88"],["/archives/cf2f5248.html","8255ac6c34ba4d60539cf011ba170632"],["/archives/d3b694df.html","8c9629c5cc5e98022a6f62b9fe64e3fe"],["/archives/dc3acdcc.html","0e147c27946476c77061bf3868d91ba6"],["/archives/df976d87.html","32a235fe26d79de81ea3f720c47259ed"],["/archives/e0c98e7a.html","83598e68550991019314535336ab90a4"],["/archives/e6437fbd.html","fdbb7da1831d2f29476b06fc9d0345be"],["/archives/eab5cc79.html","d29526d635e9e53319c38f1798f54d36"],["/archives/eb05a173.html","36f4832e8344e8f744ca88680110c980"],["/archives/f1d0391c.html","0e42ed739369f99c791cba010fadd2c5"],["/archives/f3d3ee5b.html","9e9c570d565a50e62fd5f8f71ee1f41a"],["/archives/f7feebc7.html","4b115994096d262be20d2b7dd528e6dd"],["/archives/f9f4b1e7.html","4bb33ee2a5422be4643cfabc8dec4c07"],["/archives/fcdceb2e.html","61d57f1c4556aa574216957c13933f72"],["/archives/index.html","cf1a25f3a7b146ca18bce71092521fe3"],["/archives/page/10/index.html","843ea2a2cbe1ba8f9b8b45da4d00a103"],["/archives/page/2/index.html","314b90e410f3ea6495d3f5f7d97ae395"],["/archives/page/3/index.html","7237a9ca365aeb0d70214ca317c03a2a"],["/archives/page/4/index.html","1fd6458aa754c496c20f21641e791f14"],["/archives/page/5/index.html","157f34821b80fcf364353b7ad4644d73"],["/archives/page/6/index.html","b7d91d8e49d5cf4c1ac9a138b5b4eea5"],["/archives/page/7/index.html","2cf356ee7166d963ae5a59d87862f383"],["/archives/page/8/index.html","0e8098ee356d2f29b89770ef0d4e66c6"],["/archives/page/9/index.html","fce358ff277929a1ea62e48aded312c4"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","72a02a67091918932f0505a474e20749"],["/categories/blog/index.html","0bf2b9c86e790c363498424a41354690"],["/categories/css/index.html","08fa4ef587f704fe8ab72c598bc9e0c5"],["/categories/css/page/2/index.html","3fb1e942195652a9d49a5e56053178c3"],["/categories/css/page/3/index.html","38240c8e44dbc08f1b67233dbf9cb9c7"],["/categories/fine/index.html","885fe5a0262dfde2794956dafa619f09"],["/categories/html/index.html","ff47f4c0b2f4ccafdf9d9d7acaa72002"],["/categories/index.html","a62cce5b8957ba718203e04c4856b676"],["/categories/js/index.html","b58d9fe3164c34a3d950fb3850b4ffc7"],["/categories/js/page/2/index.html","7eb8239157bb640d93d804c2fe2859dd"],["/categories/js/page/3/index.html","090b8aaf500ed267bbdd9fb94993ae27"],["/categories/js/page/4/index.html","7894d7c4df6617e809bda9d64306b95e"],["/categories/js/page/5/index.html","aaebab61d56522b5b60f49319f1e4d22"],["/categories/node/index.html","e34c54abcee561521cf752a6af08d1c1"],["/categories/notes/index.html","800553efc59c637d0c62d588d6bfdbcc"],["/categories/react/index.html","a4136b8c350df363ba45cd58575296bd"],["/categories/typeScript/index.html","0cac99cb7178bc1364722df55b4425d1"],["/categories/vue/index.html","386fdf8c617f0a5a45ae9ecd6565827b"],["/categories/vue3/index.html","1bf9a072cfa63f549bfb0a78ba952393"],["/categories/webpack/index.html","a3ddf378e734a3129cadce804f53f107"],["/categories/微信小程序/index.html","d8c163ddddb8e767ddba22d93c0cbb45"],["/categories/面试/index.html","031c9fa32655f9628ce5c73fdc4b2515"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","d2f9d80c1f30ff3b496ddae161d23a53"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","32ceeb057a3fa6a33f2530a63f504411"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/ts/images/01.png","c922cd12dab12bd6c46ee93bdd4205d8"],["/img/ts/images/02.png","3aa2056326e5d1c796af4ee14d5aa795"],["/img/ts/images/03.png","5d4a8b39b62c2c484b45dffa7f71d2a5"],["/img/ts/images/04.png","9005165e16c5fb263c3850b77b8c60bc"],["/img/ts/images/05.png","996ddffc76d0e5750a82f5a0473501b4"],["/img/ts/images/06.png","a52bf4f321fab1fee87cb087e0d22d04"],["/img/ts/images/07.png","36e3a3b114bcfad55498a774d9342e4f"],["/img/ts/images/08.png","3607e0c5650e9afa1384f2aac4009d62"],["/img/ts/images/09.png","dbeb822550e8eb71e78714035d790d38"],["/img/ts/images/10.png","e4a25517b0548f90ac6bef9d471ba0f1"],["/img/ts/images/11.png","dad677e46db0955c7d139a83b4b82cec"],["/img/ts/images/12.png","9745157eeb18de2635a64f65aeb34ea6"],["/img/ts/images/13.png","da212468d2ee4f8e9ba1f97843983786"],["/img/ts/images/43.gif","37c2e56cbc5c7a6fa18b043f8959a61c"],["/img/ts/images/44.png","6fe8492e0a34f7997c26473101a5352c"],["/img/ts/images/45.png","f799db600172453b1e1c864a85a9809a"],["/img/ts/images/46.png","9035adfac7596edda51156dacec1da06"],["/img/ts/images/47.png","2d75b31e7998a1e3c5ecec69a833a1d0"],["/img/ts/images/48.png","13beb8460f834a2a86866f9efaad66f0"],["/img/ts/images/49.png","540398c418c42be7de9f28b79882a107"],["/img/ts/images/50.png","18e4e8ef181ffd7eff2d1844cb704536"],["/img/ts/images/51.png","76bf41ed3e6bf0c976973364eb52fd76"],["/img/ts/images/52.png","f5d555290bc571215dd3ec30fd8aad42"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","8d8a2dbf059cd1dd48fb1a14bfa7307f"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","b79562cbc481de20e8e0acc4b53ae600"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","d976a5c862169481bbc3c799dfe8a66a"],["/page/2/index.html","2af0276d3b5189b71752149829b97c39"],["/page/3/index.html","b10d2fb8ffd7cda07eb003932e555215"],["/page/4/index.html","fdaa06404b4d40f74ca9fae1653e4436"],["/page/5/index.html","255b446fee236efa926630277e11198b"],["/page/6/index.html","e5b19a315dc9e3ce278b198287574b16"],["/page/7/index.html","362dd08b94498568567c817f9dd9a73b"],["/page/8/index.html","54479c2cdd2f1c6f4f46f59c467aafe5"],["/page/9/index.html","5345df6e052930aad177f19fa5a33b9f"],["/project/index.html","c0bfdf95ddf66e9e0fa507d5f0f1637b"],["/sw-register.js","444efeafcc03fbdb2d0b64680f802e9c"],["/tags/BOM/index.html","9a1b4b3e50d80014ed9c36e281064665"],["/tags/BTC/index.html","8553f486c5724a76183d28bdf9122529"],["/tags/Dom/index.html","1bd412e7d933e362b344d3708b287546"],["/tags/JavaScript面试基础理论/index.html","842ced81d4ed9d623872c07b8187ffd1"],["/tags/ai/index.html","06ca416154a6ac45887addb8c509d561"],["/tags/ajax/index.html","32dae327aedda9e1e53c19063c91808c"],["/tags/ajax2/index.html","b788b6c2f22790fa43dd6d31409b8f88"],["/tags/array-api/index.html","2866d5b132fc955e0d4f2d2ec59885ca"],["/tags/bind-call-apply/index.html","b9868a0ccb7f4528be657d205e1a5dbb"],["/tags/blog/index.html","0558f09a64d1f8bd8263a09bffd88551"],["/tags/blog个性标签/index.html","c92c9651df1c5a675ae2d79ff3e4c2cb"],["/tags/box/index.html","f46a4a72242708e61b9f211fec4743b2"],["/tags/cache/index.html","cb8731d154897f05fc62ca3a50bd35f8"],["/tags/center/index.html","eaf82830e3ed8804ce1e5f5344fbbb3a"],["/tags/chatbox/index.html","e0f32c0eea1d1307a15e558ac04649e0"],["/tags/closure/index.html","d40028e3cac7d3316d429497f717420b"],["/tags/column-layout/index.html","2b6d18f1483d9c29a5c642b8a41e2b0c"],["/tags/composition/index.html","9b3de56977776d11a79b622b7442a923"],["/tags/context-stack/index.html","452fd9fb68491603c154e277d45994fa"],["/tags/continue-to-upload/index.html","c11c85306a715336585492309da659dd"],["/tags/copy/index.html","c496f1e3db21513d9f6a3378caaac100"],["/tags/css-performance/index.html","1da68114fa979ba2cc47a76d81afb024"],["/tags/css/index.html","324589c48a8b6ca7ca8e7cfb6b160b51"],["/tags/css3-features/index.html","c2d3d5222c588bfb9fe45af353ba499f"],["/tags/css面试/index.html","7b0e0453e856bf5861252a05cf7b62a4"],["/tags/css面试/page/2/index.html","c4447b90a2be2af245dc5bb32cb157d4"],["/tags/data-type/index.html","2a1927d802555f6277bce567169d8d1d"],["/tags/decorator/index.html","817a692f2240ba5a156991fa41c7758d"],["/tags/dp-px-dpr-ppi/index.html","9db6e7488ab2eb76deedd8c5c09ec9e5"],["/tags/em-px-rem-vh-vw/index.html","c734b62c4c2981802f9b13c698cd7b52"],["/tags/es6/index.html","751de2563f23c351a25f40f09fbb8f13"],["/tags/event-Model/index.html","97aabf2f6f308dc1130a2c7a0bfc85bf"],["/tags/event-agent/index.html","8a6b5c731b5a5394f947bf7dcebda2d5"],["/tags/event-loop/index.html","ade0f1014d5086604a351bd8853c8ee0"],["/tags/fine/index.html","b5d78d647e5d5eaed31a2662367e4b0c"],["/tags/flexbox/index.html","67b6c46b5c84c8bc5961f3645b2fa71b"],["/tags/function-cache/index.html","863831abbe06bc4a56d3c8749403410b"],["/tags/function/index.html","6ab25a82f03e750cb630f1d36b5d26d5"],["/tags/functional-programming/index.html","7c3af9bd8a98c5121df04007177d87b4"],["/tags/gametime/index.html","484ba0fbccb1684ed5799b1a6b92b9aa"],["/tags/generator/index.html","669a1b0aa3459e8c98b01666014b0746"],["/tags/goal/index.html","6ffc481ac236f9913dbe79971c415922"],["/tags/grid/index.html","425a326ebe48a07a58b0a3d26ed1d1ab"],["/tags/hide-attributes/index.html","062da2ed329dfff168724b80e7f5bbaa"],["/tags/his/index.html","e8039a909a205f0bd3fa4901b5031dd2"],["/tags/hooks使用/index.html","8f85b19b0b60943d2fd271683afe9337"],["/tags/html/index.html","9b831d8aade37fb00b001cb121f0266a"],["/tags/index.html","091259bbdc8e5d9f58293f5e23a43c49"],["/tags/inherit/index.html","eab53b75c19258c63c1bba8c1233c144"],["/tags/js-data-structure/index.html","e647cac02c38172d03fd0bfb3ad82072"],["/tags/js/index.html","3867e20a354140d59742e2c49547f681"],["/tags/js面试/index.html","e54d8ac9679a05695e6cfce86813bc7f"],["/tags/js面试/page/2/index.html","defe476be3815be841026f96cdb8f66a"],["/tags/js面试/page/3/index.html","0517f80f1a2617f2d63eab5ea05ba123"],["/tags/layout-painting/index.html","56f2475501ef556d95e3297ce451fa0d"],["/tags/less-12px/index.html","00b72e3db4aee84167a0ec3a1bfa42f5"],["/tags/loss-accuracy/index.html","2ba8869cc9fa9a4ac686aa10b0553885"],["/tags/me/index.html","5f115b8376416d059c1c7653872808c3"],["/tags/memory-leak/index.html","531950172021e7b37d9966a9f35f9b90"],["/tags/modal-component/index.html","be2942a1bb869f436bcccb264d579446"],["/tags/module/index.html","033d9ed5d13da66195323c14a88e2db2"],["/tags/my-carousel/index.html","42d133c838be08bc6081acfb4e74bbf4"],["/tags/new/index.html","10a19a2f00fa4ffd75e304a0bef7dc3f"],["/tags/node/index.html","456809475c07897a7492b4e36b76045f"],["/tags/object/index.html","1dc33399952cd6fd2968c69a88a6b406"],["/tags/performance/index.html","c5b645543a1293a4e5389173e2275d65"],["/tags/promise/index.html","4671a8ce1dcad585eeaff2513bcbc2f9"],["/tags/prototype/index.html","917d7cb58e53c3768bbd36d0f3ea4d97"],["/tags/proxy/index.html","a0aebaf83caad1cb91bc0dcd5def5afc"],["/tags/proxyEs6/index.html","2000051076b686d2306030b126310519"],["/tags/react/index.html","30f081e2070dc865763def37ad95258c"],["/tags/regexp/index.html","5b5583f7764813a8322c531f991a85eb"],["/tags/responsive-layout/index.html","88b199e8a09588569e6430cdf2714182"],["/tags/sass-less-stylus/index.html","aa3efd3775c9c6aaf45ab80800eb2472"],["/tags/scope/index.html","959fe6ba414932a4cf65ead224c220e8"],["/tags/security/index.html","f20bb628b498b1d669049a4698ab7a1a"],["/tags/selector/index.html","bc4cdfcb9e74141f2ddfaad79daeb507"],["/tags/set-map/index.html","72af31255501c44bad78c8441c30594a"],["/tags/single-multi-line/index.html","e4a8f9e3dd3dbeb1de8dcb3f8d932a22"],["/tags/single-sign/index.html","3f4aec08bcc71d7e6456883209654d87"],["/tags/string-api/index.html","c67b5752516225a0156d4cd323fe3f6f"],["/tags/treeshaking/index.html","9ff0a4d45986d7891c057c1f0824a3b6"],["/tags/triangle/index.html","aeb631011b831a2ba5db5411ce5d7708"],["/tags/ts报错解决持续更新/index.html","aacbf4e793c88a0c69084f329388b037"],["/tags/typeScript/index.html","4f749e0dbebf59ea34d47ec498a1f97f"],["/tags/typeScript基础知识/index.html","2261a79ed0cc5f0197f58b25003eb608"],["/tags/uniapp返回顶部/index.html","52101b0a10bebf243550f821315cf687"],["/tags/var-let-const/index.html","7bb8cee2eb8dd6490e86e02ba86d2c69"],["/tags/visual-scrolling/index.html","847a94204a869d61b6165da5068fa030"],["/tags/vue/index.html","c33e5bc7e393d2c92a9047c274d26692"],["/tags/vue3/index.html","623a5787f11e30035330ce16314032d4"],["/tags/vue项目部署/index.html","df9c3a2c934e169c0ad5bd13e09857f6"],["/tags/下拉刷新/index.html","7548c45f5617a2d251a92e9c48d776f7"],["/tags/反问面试/index.html","1285c9d13211c2a97df462d64d19dfe4"],["/tags/和/index.html","bf78802d54e12ce6a507b7c7fc4017a9"],["/tags/如何设置文章置顶/index.html","47f03260f3a98ef8fe9f308c2e1fc8e6"],["/tags/微信小程序/index.html","f47183f3b411162e34d12069debc3ae5"],["/tags/星星/index.html","7953f5c8e40a5dee534b9f590ba4dbe0"],["/tags/防抖节流/index.html","1643a84c3f4406cde1f802c4a00e164b"],["/tags/面试/index.html","09cc7e31fe556b314dc2a2d0db2559b4"],["/tags/面试问题集锦/index.html","e54f16574db880ca727b48082439e2d6"]];
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
