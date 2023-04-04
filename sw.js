/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","5f5673eb3edffd351d48fef3c3cc3fd1"],["/archives/10bf1714.html","9b00f66169ce31e1461cbd3d53f60424"],["/archives/14015a55.html","1f5166cc912b638ef5d8192f00af30c7"],["/archives/171d1754.html","f204a550da3d6cba77f75879d47bda43"],["/archives/17a85756.html","fc0ac43f3e9c2dc21205ddf08ed49ac5"],["/archives/1879f8e5.html","f4a1e872ae8a45ebb4777de1e75301d2"],["/archives/1be48ee.html","3619ea5f1273d64659fae6e903c87676"],["/archives/1e021099.html","a072f51d72f493d052bd797633b51a0b"],["/archives/2021/06/index.html","8b877134b05a0387d70c685c3a3add2a"],["/archives/2021/07/index.html","7ae502be3f52d0d7d2054b102f2aa43f"],["/archives/2021/index.html","1e12259ce2bac0cbc7222365ac935802"],["/archives/2022/01/index.html","245af2f099e4aa475d1aa8cc2392ba96"],["/archives/2022/02/index.html","aba7d686742c73f8e7f48579116ae3aa"],["/archives/2022/03/index.html","c4b577b0785317f15c2a29a0001b344a"],["/archives/2022/05/index.html","42da2bb187c719051eb036d31b359564"],["/archives/2022/05/page/2/index.html","9a4d01c64e1140efd55bb4c37b59d6ed"],["/archives/2022/05/page/3/index.html","495a55e14ef6acda50b5c671e808ba8f"],["/archives/2022/06/index.html","563ddd593bb28d5e84d598ec09844afd"],["/archives/2022/06/page/2/index.html","14cd7fbb5516da2127095e16238a116b"],["/archives/2022/06/page/3/index.html","cb89c3c524c2b49bd339fd5b3dbf5620"],["/archives/2022/06/page/4/index.html","ec4578f1dceabf4fd1a2e99c732de1d5"],["/archives/2022/06/page/5/index.html","4fbce30ec9f59bc5df61306761ddc5f2"],["/archives/2022/07/index.html","16ee7187c28bfb5d6310e97b3e67bf77"],["/archives/2022/index.html","fb90b0ff123df1e44ac811be7ad30926"],["/archives/2022/page/2/index.html","29865498f3be36e2ce6b83ff7e86c3bc"],["/archives/2022/page/3/index.html","b9d91faa615444a8420d05e23798e04e"],["/archives/2022/page/4/index.html","f98bc882814f599f88c109f4e7a67715"],["/archives/2022/page/5/index.html","62a8d9cd657146a20eb1936a8f40ac0c"],["/archives/2022/page/6/index.html","c0b7f3537c84ce89782e66071d4497ae"],["/archives/2022/page/7/index.html","02adddfa4233ca3f83b25bc20fea370d"],["/archives/2022/page/8/index.html","141d63f64d1001d0288c177b7f77fc1c"],["/archives/2022/page/9/index.html","fc01d220f151ce8105c90b4d67409f70"],["/archives/2023/03/index.html","6c3b4c2c1621f7835084d47c0271028e"],["/archives/2023/04/index.html","1905d013545348711065995bbee7708f"],["/archives/2023/index.html","c2748f007d21d62589b3029fcfa0bb6f"],["/archives/203410a2.html","8928598b749b62d6adf06214b830bd70"],["/archives/2039e3ed.html","aa6df1789b9efb6fd0a6741620cafede"],["/archives/28d88e6.html","7ba51008b36be7c0f5ea45cac18d23c2"],["/archives/294b86eb.html","a24a7eb57fc1f6bc763a0869dfdd4ca6"],["/archives/2e20d937.html","415de55d6ae340c761b1eb2685eada43"],["/archives/2f8b36fc.html","a4f75f3c7799f8c914b7b989f9d9fda5"],["/archives/30b90bc0.html","3ebfe55ef52efc5e30332da6f7db1359"],["/archives/336f0513.html","cbdc492801a9bfe1da913b319441d3f3"],["/archives/33b9c85e.html","5f738ee6a2cb035b74f1ef6037ec0e0a"],["/archives/36044e1a.html","5f4677662ccc9d558839c28c2b97eb89"],["/archives/37919ccb.html","2342acc9f65bd96d0f3464295c0e9523"],["/archives/39a5927a.html","8e8d138ec509fbc801441295a7692a00"],["/archives/3f038ede.html","2d97a9362150197c505c8f0651e0211f"],["/archives/40f0eb24.html","b0a7ecf2f74810b63a89296ed11d5324"],["/archives/41476be7.html","411c5b84386e1876dfa37b8e9a2be251"],["/archives/42b82995.html","66f14cca918f27648c9308567552c3d4"],["/archives/47c3840f.html","09bf7021c0a435028686f1f0067d4012"],["/archives/48078dd1.html","091d1122974cca404bc33e04f1c01e69"],["/archives/4dbabb82.html","b5338e0351ad94224f2a33ba51649c5f"],["/archives/50cfbdee.html","2aeb36a1f4702c1b7f62f2af9de213ba"],["/archives/574fecf1.html","b2192d963c1a62c0f85e24eb83706be8"],["/archives/59b49683.html","91e45317b90ce4f17d12ec0d3852dbc0"],["/archives/67902db1.html","c2297d5d52269be5eb545757ef787766"],["/archives/6be34445.html","d166fedf1cf3c481e18240e0d2cb9d3c"],["/archives/7331f3bb.html","c66e8c27b830e6bca2d81b50a9f4c5dd"],["/archives/7472fc2f.html","39010043d3d674bc9c106fcd2f21872f"],["/archives/77971af0.html","03a6fbfaa64095bbfb29335b27a01aae"],["/archives/78ca6597.html","9b5ef3a3f0f0275e79e309115e96d480"],["/archives/78cea6d8.html","52593bbd89a53fe65b4e6450db503874"],["/archives/7b268071.html","94edcf56917ba627aa82655afbd75a01"],["/archives/7c942302.html","f0074ac72846d40c0ed7eb951861b55d"],["/archives/7d76407e.html","6d63f592350d68145b3241b99829db8c"],["/archives/7f6cf7b0.html","0f78404314bc954c20a188b4cbf4e12c"],["/archives/82d79681.html","158397a0b03848142b5a7f5651243de7"],["/archives/84a91e69.html","81a80231832d70bd01bb6758dcd90b58"],["/archives/857fe845.html","63db72e10d32b98bd41da728935f6039"],["/archives/8a9483a.html","6a968bb9270a9c6f059f4cce573aa3d5"],["/archives/8d5284dc.html","3a5f5f8b09e96e6035806d722a35aeea"],["/archives/92004154.html","6d1157f23addcaf005577969440a145f"],["/archives/9370d73f.html","aedd1f44a7a6b1133bf396c855d3d7e9"],["/archives/93ae9a14.html","1e6ce0f3347484fdbcc7a3b374e074f2"],["/archives/9417ce47.html","139ac5db157afed64b916ee424754016"],["/archives/942a5c06.html","e8cdc0c3739a4453c794deb27a1a2790"],["/archives/958c57b5.html","4f9fba6801e3027df630df00ce0cb2b8"],["/archives/9692e25d.html","8b5b642a295d22093c4215e30a4a6cbd"],["/archives/97a9ab5c.html","b0c8ec70084732861f4ec50a4daeebc6"],["/archives/97b76847.html","d2750d4380a63a3ca906af7346888bff"],["/archives/9a0dce2d.html","6e9ae43b6914ccdae9c7c8478c094b0c"],["/archives/9b0c2390.html","fdfccdf3a75c3f80927eb5ee132b63a8"],["/archives/9e5f33b7.html","2e1d4f7e1619d6cc4a5bb2b4cdf7dc48"],["/archives/9f1ed84.html","82471f5178a52d4a9fdb39fbde512a3f"],["/archives/a0245a2a.html","b236c7a3c74bf052a9596cfb79801656"],["/archives/a10ceeb7.html","55c0879284acd971c69ba0b8d2303a7b"],["/archives/a36a5ae4.html","100cb2cb8fa840ba5b559bdd114cee53"],["/archives/a8adabec.html","6d19675a15ca34d5bcbaa13d31a1f035"],["/archives/ac5292c2.html","9a8da8f09c5da03273ad72f1c49e242d"],["/archives/adb78c8a.html","4597f37c0e5b505dac8602cc50df1b81"],["/archives/ae4c07b8.html","8f21d6744e1d9c64ce623d57d63c0cba"],["/archives/af55d3.html","7345bb777404244f25f1916304df41b9"],["/archives/afcd4575.html","33985153e2a975cf888f4743822f194d"],["/archives/b21f48b9.html","ae8e7ce065f5be72c6007c8c711a0355"],["/archives/b51bdcfa.html","83c07485911056a59592a332188d06e0"],["/archives/b7b51641.html","1572919fe44385caa9d1351c414fee77"],["/archives/b9f20a20.html","315a49b868d95c90d5efafa35fd66d00"],["/archives/be945145.html","dd0c2e42f65537d11791525dfbf4eed1"],["/archives/c0add594.html","71cfa2b73237bc429a585174c783c5aa"],["/archives/c242628.html","6a9eefb31785db8f11c64d4db7711727"],["/archives/c59bd5c1.html","614da05e5b58867aa164b9d7acb22e90"],["/archives/c5a6a264.html","cc96648257dc0a876f398a8fc0c392b1"],["/archives/c5a97815.html","3e0b3ccc372e75812b70b60b0b1e0c0d"],["/archives/c7f4347.html","f105089afc1aac4733b8932018ad79a7"],["/archives/caae163d.html","54fe2da8bcc4cc83f0ee23eb7e77fef1"],["/archives/caae7b70.html","3010cd028b964ac379758e44fad3381e"],["/archives/ced3960e.html","43a54d2ef9ae937fb8945a638b2135ad"],["/archives/cf2f5248.html","80f7ed676cfd3f1574bc3d4f95213347"],["/archives/d3b694df.html","54c02a1345c99a8dd5a51d742446cdc0"],["/archives/dc3acdcc.html","b82807d0e6d8ba35009607f3a48f36f1"],["/archives/df976d87.html","17e63a10f9634c947b8dcf86027285a0"],["/archives/e0c98e7a.html","12ce55cc456e3eae9a936e5edb2bccc9"],["/archives/e6437fbd.html","372e5959202ca19cfd182591b7b2e5f0"],["/archives/eab5cc79.html","04fa7755821cc52d45bf13773032394f"],["/archives/eb05a173.html","2c81c9954eff9be09b1fd584cf1d455a"],["/archives/f1d0391c.html","480040f47594b6986abe8f1da6c994ee"],["/archives/f3d3ee5b.html","7e78aff00f62c3c207dc9d463dd4561d"],["/archives/f7feebc7.html","8cd54184cba34f9ef12401f690662fca"],["/archives/f9f4b1e7.html","7462cc8bd2a83f00e89305d61df70a4f"],["/archives/fcdceb2e.html","2c595e1d5351bf6f0aacaba89cb193c5"],["/archives/index.html","35fcab701b11a938feb624307611f587"],["/archives/page/10/index.html","0417181c95486034a8f99c8171a9e5c2"],["/archives/page/2/index.html","cfc5a8110e41ef8ccce464d530a52f3a"],["/archives/page/3/index.html","3cfc37033afd071f4a6b60c4e1b51e41"],["/archives/page/4/index.html","aea36a45607dd88c1bc0ecfbfceddbdb"],["/archives/page/5/index.html","902b1b9af52488eed168bc626527607a"],["/archives/page/6/index.html","0bf93a63036cbb0b0bdabecf8aee9f63"],["/archives/page/7/index.html","2f71493da98b6b1c200edd8f5b182cc7"],["/archives/page/8/index.html","919f10eb4051172cc948a4d20e642644"],["/archives/page/9/index.html","6bc67804e59ee9af4e925ba206ad725e"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","0fffe32912c10f742b6c78afc40cdbb5"],["/categories/blog/index.html","29c4eb6289e5154c0bf5f7b5d2341e04"],["/categories/css/index.html","75671edce8e3dee0d8e616c13a580953"],["/categories/css/page/2/index.html","6dc3c30905bb60978ccdedf97fee4fb6"],["/categories/css/page/3/index.html","e2e415b8ab450f7c90e659e055ca7805"],["/categories/fine/index.html","03ad70dca4767084096d3a42ed9f03e9"],["/categories/html/index.html","b19f9403ad0afa8e714e8456a758da73"],["/categories/index.html","0402afa3ba9dcb5bc6890f393063f889"],["/categories/js/index.html","9c72242305774694ca6841976cbce4dd"],["/categories/js/page/2/index.html","f1ee62585091aa28b1a7483a1e9457ae"],["/categories/js/page/3/index.html","7e783cf4529f4b0ce7ba9783d8f9f981"],["/categories/js/page/4/index.html","a78012beaf99a20c3adaabd5fc7d4cdb"],["/categories/js/page/5/index.html","ff3778c781af10c30a38cdc171819d71"],["/categories/node/index.html","933c41d868122ba273f1eae0af07f97b"],["/categories/notes/index.html","1e2d95753dfeab29910b8ec0b1f6bbce"],["/categories/react/index.html","976900cdd4326d6e549d50115e1f8d2b"],["/categories/typeScript/index.html","e2ad9d7d54780cea389231dd87b82edf"],["/categories/vue/index.html","f9b28a71e87ea79a58e43f0d420c5590"],["/categories/vue3/index.html","5adb8592a3376a198f21778fde07d8ec"],["/categories/webpack/index.html","b71c9bd2ba4d4833c6d5796e92fd2a8a"],["/categories/微信小程序/index.html","5f8e5effd55ae4328c7ed8d2005699f8"],["/categories/面试/index.html","e9145398b6737fd514b3fd3861840d72"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","d2f9d80c1f30ff3b496ddae161d23a53"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","c18ca655c5b75ebc7bcfc8d8f5da666b"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/ts/images/01.png","c922cd12dab12bd6c46ee93bdd4205d8"],["/img/ts/images/02.png","3aa2056326e5d1c796af4ee14d5aa795"],["/img/ts/images/03.png","5d4a8b39b62c2c484b45dffa7f71d2a5"],["/img/ts/images/04.png","9005165e16c5fb263c3850b77b8c60bc"],["/img/ts/images/05.png","996ddffc76d0e5750a82f5a0473501b4"],["/img/ts/images/06.png","a52bf4f321fab1fee87cb087e0d22d04"],["/img/ts/images/07.png","36e3a3b114bcfad55498a774d9342e4f"],["/img/ts/images/08.png","3607e0c5650e9afa1384f2aac4009d62"],["/img/ts/images/09.png","dbeb822550e8eb71e78714035d790d38"],["/img/ts/images/10.png","e4a25517b0548f90ac6bef9d471ba0f1"],["/img/ts/images/11.png","dad677e46db0955c7d139a83b4b82cec"],["/img/ts/images/12.png","9745157eeb18de2635a64f65aeb34ea6"],["/img/ts/images/13.png","da212468d2ee4f8e9ba1f97843983786"],["/img/ts/images/43.gif","37c2e56cbc5c7a6fa18b043f8959a61c"],["/img/ts/images/44.png","6fe8492e0a34f7997c26473101a5352c"],["/img/ts/images/45.png","f799db600172453b1e1c864a85a9809a"],["/img/ts/images/46.png","9035adfac7596edda51156dacec1da06"],["/img/ts/images/47.png","2d75b31e7998a1e3c5ecec69a833a1d0"],["/img/ts/images/48.png","13beb8460f834a2a86866f9efaad66f0"],["/img/ts/images/49.png","540398c418c42be7de9f28b79882a107"],["/img/ts/images/50.png","18e4e8ef181ffd7eff2d1844cb704536"],["/img/ts/images/51.png","76bf41ed3e6bf0c976973364eb52fd76"],["/img/ts/images/52.png","f5d555290bc571215dd3ec30fd8aad42"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","a9e15e7810a2a77e7e99d871fd2dbf2e"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","05ce90367f217258a598efdc51ccec57"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","e462612d69df62f97620960fcfbf0a28"],["/page/2/index.html","deb2265f302fb2a64152166a6dfd280b"],["/page/3/index.html","97d9a6f298baf747cb80ef790109dfe6"],["/page/4/index.html","ee671bcd36a9d1f698ac3de6e9479c6a"],["/page/5/index.html","e0af56c8dc4f54612bbd1790a4bd23af"],["/page/6/index.html","72806cd328498dc31dd5e8240e98d968"],["/page/7/index.html","c12ffd7313e81399779c54722b8c544d"],["/page/8/index.html","3d9b947006edde225448ab825a83afd7"],["/page/9/index.html","dd945e085522ac26e039fe6caa9e897e"],["/project/index.html","7241d55204e51225b7d2e083ee4fb30a"],["/sw-register.js","1b703119b5e528bb16ceb32b1f2c369e"],["/tags/BOM/index.html","5d632659efb69dda974ae5b81fc7d403"],["/tags/BTC/index.html","22ac721cde2826cdb37ae55b183a0b16"],["/tags/Dom/index.html","0ecf3ad511e99060dd8a3d58c918842d"],["/tags/JavaScript面试基础理论/index.html","8bd4817eb4aa0a6ce87420e1a2b39c31"],["/tags/ai/index.html","69115e7264fc39fa723ba38a27d3d302"],["/tags/ajax/index.html","5c707814acbd2bc08d8b14d5467eee10"],["/tags/ajax2/index.html","ef54b01b024e3c3b5cb95f854223f642"],["/tags/array-api/index.html","d34980b33942528b2fa7048cfddf1266"],["/tags/bind-call-apply/index.html","05b38d926fc3b7e860b161a3b0024049"],["/tags/blog/index.html","b96ec7190c40fab9aea9ab7b39c59683"],["/tags/blog个性标签/index.html","b17d1a558421298d4b431bb64491832f"],["/tags/box/index.html","bdcaef6960a2993e52413910dcb2e7b5"],["/tags/cache/index.html","7e2f136ff6c8072afdd43bf6496268f8"],["/tags/center/index.html","3b8144b00d050cc1f2bd29a68567c6cd"],["/tags/chatGPT/index.html","bd33798ae61d00486da232240eff369a"],["/tags/chatbox/index.html","1ea562431b12aa2a7939eeac2cd4775c"],["/tags/closure/index.html","a4fe236761c5256253d7fde379361080"],["/tags/column-layout/index.html","03c9342c59eb3060e7bf26177c7316b0"],["/tags/composition/index.html","9668f43ce058b8ba91a953e31c9cdede"],["/tags/context-stack/index.html","3de8d8d9c05aaff422686ad3dfa1226c"],["/tags/continue-to-upload/index.html","1f3ef5f68e6e6b96a9978008602f6399"],["/tags/copy/index.html","9e40217b200d057ce9ae34c32961da89"],["/tags/css-performance/index.html","8badaee69121d24f9a749c5c516d380e"],["/tags/css/index.html","a625d0e08bd1090c194c5d309488b830"],["/tags/css3-features/index.html","aa9129c15cb9ebd125f7ae85fc0bd694"],["/tags/css面试/index.html","6368b492784e5c128da806defd520cea"],["/tags/css面试/page/2/index.html","aa5593a81380bd824a647c514333e293"],["/tags/currentTarget/index.html","47b186c4af1cfdeef6fb7777d6871568"],["/tags/data-type/index.html","46511735321bc79becb333a145e4bcfa"],["/tags/decorator/index.html","7dbb8ae098edd4aeb5d21197dbadc1cd"],["/tags/dp-px-dpr-ppi/index.html","bddb2ce6cf294048fb47219d9245403d"],["/tags/em-px-rem-vh-vw/index.html","4542f5ff7bf68ead1ebd71a5c37d32b7"],["/tags/es6/index.html","9e1d0b8c3e0e0048f809c655f97f7dc9"],["/tags/event-Model/index.html","dcbf887e7aadfb74100c7d580736fba1"],["/tags/event-agent/index.html","592b881ff95c62fbf0e777c93439ea78"],["/tags/event-loop/index.html","ddb6e68349ea90501b15b7f571ecb0cc"],["/tags/fine/index.html","581064c75b7c69ffaadebef81b319220"],["/tags/flexbox/index.html","b0c6fc1ff6958b9e5cb10d1bfdf68fb6"],["/tags/function-cache/index.html","95462a785068a8bfd14188c3fc2fd0aa"],["/tags/function/index.html","58febcb1a99864d31ac6851887812ead"],["/tags/functional-programming/index.html","77d271e02c10826c0491de425f7a2511"],["/tags/gametime/index.html","d470029be3653f3a6b699fbfc3477ad4"],["/tags/generator/index.html","dfad24bd15d4fd9a6ea8701e7b0e185f"],["/tags/goal/index.html","a72f25b4c9416ea316afb9a6384d8fbf"],["/tags/grid/index.html","76a2e7d573e4188f29a456d94e27df47"],["/tags/hide-attributes/index.html","70bbc210386d3e1c55f2e8108bc606fc"],["/tags/his/index.html","cbbb1e506a64a6b06f33128bcbe47252"],["/tags/hooks使用/index.html","c43b622506e252cc8de4422bc617529f"],["/tags/html/index.html","63101b614bce10eaf8fc2e203bc52fef"],["/tags/index.html","132488861ee1eed998986096854ab59a"],["/tags/inherit/index.html","57ab5a5e53ef4dc665bf473820c8b7e0"],["/tags/js-data-structure/index.html","56f912a0b0536e24005f50458b2b08df"],["/tags/js/index.html","970c466a7b0c00642594966cca334b6f"],["/tags/js面试/index.html","778fc1a4918375d6f6fcc51edacd697b"],["/tags/js面试/page/2/index.html","2a3bef75886809de34dd63abb4bdbbdd"],["/tags/js面试/page/3/index.html","7becd15ff421f0ea3ddb434d91eda318"],["/tags/layout-painting/index.html","a40be31d0665683f8055688ec2a405c0"],["/tags/less-12px/index.html","3e3316b9ea8b0b301dc380114ad3cb39"],["/tags/loss-accuracy/index.html","a5073b4636061073388f2592278f0e1e"],["/tags/me/index.html","e9be5099e39ea418cf3c40ccc4b9fefe"],["/tags/memory-leak/index.html","27c5a2c1d24d63b98c45812c55413d3c"],["/tags/modal-component/index.html","c8cb9c5501ec45b93e974f8f094ba098"],["/tags/module/index.html","074d3a746ccaf16575706c2d537e798c"],["/tags/my-carousel/index.html","48d4fa07779ecbe0b371e074774b3699"],["/tags/new/index.html","f721deecd8df43ff87ab8b5fd20a252c"],["/tags/node/index.html","1ac5b2f691ca05c465b6fba19544d81d"],["/tags/object/index.html","bba05e35c425dc04f5731a442f545669"],["/tags/performance/index.html","fd3058b4bff48de8534f7b706f0cfa9d"],["/tags/project/index.html","9407fb977d6c5e3fd001f9503bd1c8df"],["/tags/promise/index.html","d880b39acba8d120201296dccdb6f0d4"],["/tags/prototype/index.html","faf01d232cd130eb48ae7d8ff573eb87"],["/tags/proxy/index.html","5f078bc42616463eefc73708b7f214ee"],["/tags/proxyEs6/index.html","abc68da1d9116dae3af56c5655514e19"],["/tags/react/index.html","ebc6fe1ca40aeeb425b356babe222b1d"],["/tags/regexp/index.html","197dbf498f8269a4ba93475379bba288"],["/tags/responsive-layout/index.html","eede3c3a282173bd821dc2ed138540e5"],["/tags/sass-less-stylus/index.html","36e2c9e505db9549265e036984da2a5c"],["/tags/scope/index.html","afeb9a41a06b9e762099500baf64f239"],["/tags/security/index.html","19899530db2b60b91cb63322d6bdc96d"],["/tags/selector/index.html","0c0fc513eed2ceb5a99d60b37a1a5961"],["/tags/set-map/index.html","60c42bee1ab57edaa11daf4749896356"],["/tags/single-multi-line/index.html","62ac2bb3a6a8b25634beb16bcf477cec"],["/tags/single-sign/index.html","cb8d61e1505608b5c9e78ed455047a20"],["/tags/string-api/index.html","bb0e0b19f37f1a54b1904f52f7bbd407"],["/tags/target/index.html","d9e5ad9dfe1d4c8dcc31620f75be5241"],["/tags/treeshaking/index.html","2a9e016b5224a0940537a3d75df3b1a2"],["/tags/triangle/index.html","dff8374731be1ae4349ce0603547bb63"],["/tags/ts/index.html","07a839181de87cda1b3cc5fa29b4e017"],["/tags/ts报错解决持续更新/index.html","4c50943169e6d32705d0c2610beb21a2"],["/tags/typeScript/index.html","3dac6b2d193a088a9d131f173dad987d"],["/tags/typeScript基础知识/index.html","573ab0cbd4edfda7d41d394b8490abd7"],["/tags/uniapp返回顶部/index.html","978af50d021d2e7feae5959577f70f88"],["/tags/var-let-const/index.html","a988457dd62b54b3c24544efa76bd2f3"],["/tags/visual-scrolling/index.html","e30089b9a4309e36633fdca394905629"],["/tags/vue/index.html","2474f98c0ffede6410a7abd1fbf3e969"],["/tags/vue3/index.html","fd9e8095825eb93864f726d972d206e4"],["/tags/vue项目部署/index.html","e26fb7603a3218f46d13a3ba3ee78445"],["/tags/下拉刷新/index.html","021386aa6fcc0bdb2526cfc2f61ae8ff"],["/tags/反问面试/index.html","1192729050fc063b87cfef5af7bab301"],["/tags/和/index.html","9ba7b6528172806ad8721c097a5eb4cf"],["/tags/如何设置文章置顶/index.html","f91efeee63ace30f3d4df217e95d821b"],["/tags/微信小程序/index.html","a84f5d4b57c37f3e31eb7e8475f41290"],["/tags/星星/index.html","88b5b7cb3ea425d10d97fa759755c051"],["/tags/防抖节流/index.html","87ee0b90e52c431b08c476645d8980ea"],["/tags/面试/index.html","a69b23471f5997dc3da86d46a517d1d5"],["/tags/面试问题集锦/index.html","f712170ef46d907c20a77c6d3813892b"]];
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
