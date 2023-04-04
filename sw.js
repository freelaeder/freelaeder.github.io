/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9dd5b28d0383cd1cf48872aa235ca70b"],["/archives/10bf1714.html","7128d8e05a0e551f792206be3304fc6c"],["/archives/12529ae2.html","f17f4068413df59d6c251895bbb714d8"],["/archives/14015a55.html","c0a06bdfd12384664bf8efa99672c71d"],["/archives/171d1754.html","c957cf7ed24dfa1c6797df147a03d79e"],["/archives/17a85756.html","1394a66bb8ab9ba4e7a522a788ccefc8"],["/archives/1879f8e5.html","add7d38376264aaa3ed77dbb2f219b8a"],["/archives/1be48ee.html","f4a27f42bb65af2ce5c9445a6c5ff6f3"],["/archives/1e021099.html","cd5170e196ad20972fffc790ee1df840"],["/archives/2021/06/index.html","f8df5c113a3fea0fb8dd2796ba76d4fd"],["/archives/2021/07/index.html","dc780a6a77955fbfd19b977e53b5255f"],["/archives/2021/index.html","9643669191b6261dfdfce6dce00661c4"],["/archives/2022/01/index.html","d88a110f15e2c2e1455a7e4d709f6458"],["/archives/2022/02/index.html","1bd870cf8c15ded08b54fcdc685c1389"],["/archives/2022/03/index.html","4a84465fbad919ac3292fe4f22485c66"],["/archives/2022/05/index.html","ca6f10cc21c3562004c4119024da2076"],["/archives/2022/05/page/2/index.html","d9d325c93f2dd1a519e5102906c7530d"],["/archives/2022/05/page/3/index.html","ff91823785b70b05c7911b7c041bc6a0"],["/archives/2022/06/index.html","7b6b561ae8961de98ca09f899d218f19"],["/archives/2022/06/page/2/index.html","615451553dd0945b23d335504ba3bc17"],["/archives/2022/06/page/3/index.html","3be695399dda6045b98395b0985eb58a"],["/archives/2022/06/page/4/index.html","f48d830fefc76f090dbe9bf19aba56b3"],["/archives/2022/06/page/5/index.html","538d3efbf906d4a4c1b3fe6307a0ca28"],["/archives/2022/07/index.html","755591b23ec512f0b60c1af29bdd7747"],["/archives/2022/index.html","7dc95f2cfc10c52a65028010053b8658"],["/archives/2022/page/2/index.html","4a0967faf24c25bf56880b7c4cedd475"],["/archives/2022/page/3/index.html","b34b4f370d13826d97550744f3f6644b"],["/archives/2022/page/4/index.html","fe9b27554957fb0102f062dc48245542"],["/archives/2022/page/5/index.html","35df6188a6abe957ffb3dbff06f83e38"],["/archives/2022/page/6/index.html","460b4d2b66eae91a4244c26dd2a97f2a"],["/archives/2022/page/7/index.html","6e8e2572a5bcf098fc1f9dfdf12a1f92"],["/archives/2022/page/8/index.html","24831bc9e2156d849ec57d196ab2cbac"],["/archives/2022/page/9/index.html","c0300cf6de7907921186f11d30cad123"],["/archives/2023/03/index.html","ac5386e7e99bf8f44a1bccd9eb44c2c6"],["/archives/2023/04/index.html","8026d4a4944958decc0cca84c3106e43"],["/archives/2023/index.html","b1135a244c64fa08ae88f642c89cd53e"],["/archives/203410a2.html","bacd3d7ef7d146f14a104153c37a5031"],["/archives/2039e3ed.html","bb43e9aaaab92b1a77672d9711155a58"],["/archives/28d88e6.html","a024730f10624c2e0c6ac5d032a0ac04"],["/archives/294b86eb.html","75312c632196d16f3578920cbaf76b4a"],["/archives/2e20d937.html","87c9ba164d17c84e903d89e6b67a6f46"],["/archives/2f8b36fc.html","51a77297c90838977070813c5688a2a8"],["/archives/30b90bc0.html","cc5358f6644c48bbf1164ab8b84d5ef2"],["/archives/336f0513.html","33e5812b261ce96268866b0586c2d455"],["/archives/33b9c85e.html","68a5c8dc63f1fe06d6fe2e0656710163"],["/archives/36044e1a.html","9f5ff199148e37ad864db85a06b23ad2"],["/archives/37919ccb.html","330b5d69ae058a62d6d764f534087302"],["/archives/39a5927a.html","0bbe93f70104369d793a0b32020fc6a1"],["/archives/3f038ede.html","439a7e67ea34cbf577cc03e1c2370418"],["/archives/40f0eb24.html","a15476229f393978e33fefc0378e61a9"],["/archives/41476be7.html","fb88da0d0fee57e45e39174c45f71632"],["/archives/42b82995.html","d4c365504f0e0a0b0de024d5df160879"],["/archives/47c3840f.html","699c1d65ab733327eb68b81f0b9f7af5"],["/archives/48078dd1.html","2104056efff0a2245d5e7241defe61ff"],["/archives/4dbabb82.html","419776073d71f1873d63f72f1378a08f"],["/archives/50cfbdee.html","cbf13e8d047a1d5dc5702c1178fa613c"],["/archives/574fecf1.html","eaccb2b71c7fac410a04db0ef47e57da"],["/archives/59b49683.html","1aa94052160e649205aea75ed3ea4140"],["/archives/67902db1.html","4d07e2ae4dab7302c6b115007f01bad5"],["/archives/6be34445.html","e795d9b81e098f8fee8a83c6ea735fca"],["/archives/7331f3bb.html","6619e10f383fea83c9c153092077cb8f"],["/archives/7472fc2f.html","7d56f39047c8e7dfd45867f2f73829ef"],["/archives/77971af0.html","8bc03e5b7901c0aecd9f044b1055756f"],["/archives/78ca6597.html","64f8267b4fd1178a120549acbe5f351c"],["/archives/78cea6d8.html","c3cac950b289bfa1711c90935ebfc945"],["/archives/7b268071.html","c910bde381c31dfe9e738998c193c069"],["/archives/7c942302.html","c368a2d00b6809e136d0ba17a7f37685"],["/archives/7d76407e.html","19d8d77e61bfa5c9e046df546c2ea249"],["/archives/7f6cf7b0.html","ecbd6512a022d324ac775d90f9e65b16"],["/archives/82d79681.html","2a7c9a67f3c6ec22cd66d3bdded96f4f"],["/archives/84a91e69.html","dfcf79e696c6670c85c7e83ae835b2ab"],["/archives/857fe845.html","6eb1989af7e53411badfde8a992e47d2"],["/archives/8a9483a.html","fff6db022b15b0fbe06d8f9784ab27b8"],["/archives/8ad35e55.html","6eff4b207b69aa52ef0afb033abbdd34"],["/archives/8d5284dc.html","4b531b798d3f70bbb4d8dc05fd9fb8ee"],["/archives/92004154.html","68b318f9559c5691e4973c3bb140883b"],["/archives/9370d73f.html","53b75f5f090e3609f15ed4303827c61d"],["/archives/93ae9a14.html","062d1619b73449b158056b63b6b402e1"],["/archives/9417ce47.html","e761b8bc42f0c51cc08a6f71e0d66c63"],["/archives/942a5c06.html","a794dd66c50cb54303eb9a3842672055"],["/archives/958c57b5.html","1cba9299b71b0b80b892de2f7faa7479"],["/archives/9692e25d.html","96e4d4c03bb508de3556cbc544455e21"],["/archives/97a9ab5c.html","4954dd8e6ee1863cbbcd528ff64e162e"],["/archives/97b76847.html","814ee6aea0a6faba0293039bfae4f4d0"],["/archives/9a0dce2d.html","32994d760389a359d7c19e97cab82151"],["/archives/9b0c2390.html","a7399226c20b090cb585d0f9e171dbd2"],["/archives/9e5f33b7.html","a51276a9d84f752d639c09ea2c168120"],["/archives/9f1ed84.html","bea449733c59b414bab413593e703511"],["/archives/a0245a2a.html","60146c2518bd20aa81faae27eef7ecd9"],["/archives/a10ceeb7.html","091bfb5b87d04247f7beb66e5863613c"],["/archives/a36a5ae4.html","3806838e92f842652d7ac12771f0a844"],["/archives/a8adabec.html","d2c7d14f6139d5caa6c738c2423683da"],["/archives/ac5292c2.html","5e12eca8c2703bc05a16672295d84fd7"],["/archives/adb78c8a.html","677bef3908b726fc27f428e83f7c91b5"],["/archives/ae4c07b8.html","7e8f5063bbcacf19d490e4d2d5a789ca"],["/archives/af55d3.html","a025f824f8a309251d914129f85196c9"],["/archives/afcd4575.html","4e9518ab36a125d90d923e52d479789e"],["/archives/b21f48b9.html","fa8cca49f6647ee87ca9d7ba4e7ef018"],["/archives/b51bdcfa.html","d5c4331bbe5a0fc22fc3f62a0605f206"],["/archives/b7b51641.html","2a6b5ec9dd893a96699d51085782e948"],["/archives/b9f20a20.html","595489855581a2ccbeee037581a307b8"],["/archives/be945145.html","1136c73c5bd4f8add1b14dc2f243dfda"],["/archives/c0add594.html","750772f778fc0a800b299834081b3cf5"],["/archives/c242628.html","c21f2dd1360167b511c4efbc2ddcb06f"],["/archives/c59bd5c1.html","ce73c6f335b72f47980b058a5c04a14b"],["/archives/c5a6a264.html","bcc1c506505c8a25192f62f731ba896e"],["/archives/c5a97815.html","095b67817f0d1216fc8bb609dd990eef"],["/archives/c7f4347.html","77774c1f59648f3f62c6755d03f2c143"],["/archives/caae163d.html","0aaa7c1f85cd29cc0b95c59e335d3f25"],["/archives/caae7b70.html","2616963193fd1dcff377e7d804752e53"],["/archives/ced3960e.html","3234ab437dcdb2b0eca1c68187e3e07f"],["/archives/cf2f5248.html","c9f86f775d5acde3443d38d051ea1a04"],["/archives/d3b694df.html","486c5943f07c09d4a5c5eadcfe1c8606"],["/archives/dc3acdcc.html","5662798b53d75f3208314d795892d7f1"],["/archives/df976d87.html","8edf8c32a937a1be94d691308fe73405"],["/archives/e0c98e7a.html","bd0e16d00c27e693278138131a3632af"],["/archives/e6437fbd.html","3a855c2545fa0e9a1d88a3eec92daf35"],["/archives/eab5cc79.html","eea8ffd5a9f1f75a08d6a8d94e89cbf1"],["/archives/eb05a173.html","48fb69ed9bcd895743d9637898eee1bc"],["/archives/f1d0391c.html","e7136e7b275587aead25b388c299263d"],["/archives/f3d3ee5b.html","8db8d5218427e4a459d38449d763699d"],["/archives/f7feebc7.html","bdcb6339b6a37b759e15d36f96da7c0c"],["/archives/f9f4b1e7.html","02eecac6357813f3002fb29b88c541df"],["/archives/fcdceb2e.html","44da5a3d3616f97ae1df54cf6859b5ce"],["/archives/index.html","eeb4975ac32d31697d13314cf368bdbc"],["/archives/page/10/index.html","860c518acfa25631facfbece5e231269"],["/archives/page/2/index.html","5c0e5a6fe6ec62dac3d458a0a8a2fb33"],["/archives/page/3/index.html","dfecb7802f54ff70866b977998152d37"],["/archives/page/4/index.html","75c12e5a98de4ac4ac4ccd6a44c98495"],["/archives/page/5/index.html","a3351f6ee0790360a3a027599a5ca783"],["/archives/page/6/index.html","387164576beccc7fd0be19d5cd66b88c"],["/archives/page/7/index.html","0a3df2632d35ecb2e8cb817f58b9db1f"],["/archives/page/8/index.html","122ef08b0e5ac0645b821fc0d90d0a06"],["/archives/page/9/index.html","b411d314fa32b607df7df36a1409625e"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","5d0beac3429e6421ac18379f6ffdb3c1"],["/categories/blog/index.html","53673ef0c0d5a3cbd9eef6877e0d52cf"],["/categories/css/index.html","5a297afd120c274dbea3235d0c4b66ad"],["/categories/css/page/2/index.html","620a667a226d9947867f1861d33a3571"],["/categories/css/page/3/index.html","c17f2816f070169f9d79b2cd74a9a79d"],["/categories/fine/index.html","d1c3d92b259c8e6d2630624129cbec1e"],["/categories/html/index.html","ee8b5d1af1ce7fe8847c2958a7d363a8"],["/categories/index.html","bc5d0811b059d7565455be26f8689146"],["/categories/js/index.html","8745012a74c294afe37025740be2b7c6"],["/categories/js/page/2/index.html","872ab98c0153c89368f78d36a1bf4cdd"],["/categories/js/page/3/index.html","6b19072b3e2b91a7941eddb38e8a89c7"],["/categories/js/page/4/index.html","08051559a6fbf1635fd5d96aad95eab3"],["/categories/js/page/5/index.html","6bfef3957e2ee67a8f46fd7da17400ba"],["/categories/node/index.html","04d29948b45d49a10b12b59b03be6a2e"],["/categories/notes/index.html","f957cd892d237804b9fc3f09e757c952"],["/categories/react/index.html","d140faa0736e751dfb0cf112eed89dee"],["/categories/typeScript/index.html","9badabfd461765c4f2f76153149ed549"],["/categories/vue/index.html","fafbc1ac16b1752dee6e068a60d762b8"],["/categories/vue3/index.html","1f10602791b612284ff0539cce300fd6"],["/categories/webpack/index.html","42dd258b2cb331a0588d0c410236fd85"],["/categories/微信小程序/index.html","c121f580b0bdfd446f696c29bcf37c31"],["/categories/面试/index.html","aa7db27f5886f226ad0dace6f85b10c6"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","d2f9d80c1f30ff3b496ddae161d23a53"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","f1200b729c8e08e144076334135e244a"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/ts/images/01.png","c922cd12dab12bd6c46ee93bdd4205d8"],["/img/ts/images/02.png","3aa2056326e5d1c796af4ee14d5aa795"],["/img/ts/images/03.png","5d4a8b39b62c2c484b45dffa7f71d2a5"],["/img/ts/images/04.png","9005165e16c5fb263c3850b77b8c60bc"],["/img/ts/images/05.png","996ddffc76d0e5750a82f5a0473501b4"],["/img/ts/images/06.png","a52bf4f321fab1fee87cb087e0d22d04"],["/img/ts/images/07.png","36e3a3b114bcfad55498a774d9342e4f"],["/img/ts/images/08.png","3607e0c5650e9afa1384f2aac4009d62"],["/img/ts/images/09.png","dbeb822550e8eb71e78714035d790d38"],["/img/ts/images/10.png","e4a25517b0548f90ac6bef9d471ba0f1"],["/img/ts/images/11.png","dad677e46db0955c7d139a83b4b82cec"],["/img/ts/images/12.png","9745157eeb18de2635a64f65aeb34ea6"],["/img/ts/images/13.png","da212468d2ee4f8e9ba1f97843983786"],["/img/ts/images/43.gif","37c2e56cbc5c7a6fa18b043f8959a61c"],["/img/ts/images/44.png","6fe8492e0a34f7997c26473101a5352c"],["/img/ts/images/45.png","f799db600172453b1e1c864a85a9809a"],["/img/ts/images/46.png","9035adfac7596edda51156dacec1da06"],["/img/ts/images/47.png","2d75b31e7998a1e3c5ecec69a833a1d0"],["/img/ts/images/48.png","13beb8460f834a2a86866f9efaad66f0"],["/img/ts/images/49.png","540398c418c42be7de9f28b79882a107"],["/img/ts/images/50.png","18e4e8ef181ffd7eff2d1844cb704536"],["/img/ts/images/51.png","76bf41ed3e6bf0c976973364eb52fd76"],["/img/ts/images/52.png","f5d555290bc571215dd3ec30fd8aad42"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","134af330a5511654037c6f3d646e9409"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","afe6598c5aa7d9148d406b008e3ba93b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","a9515e94ce55dfc95a9135d6e3ad3fee"],["/page/2/index.html","1167f3fa75d35913dcb7114d437a23ff"],["/page/3/index.html","14ec2efafe73b441bae1728db289f15b"],["/page/4/index.html","a1d9ce56d6378a2438d0442b4afc6279"],["/page/5/index.html","cb7d3f6c0a9e3cadbe5a212b6280546d"],["/page/6/index.html","274123299c5990504ae3f0f19016878b"],["/page/7/index.html","d7eb9708cb389c82dd2c2860ec450398"],["/page/8/index.html","60f2947ad0b25683f1b13527802dd589"],["/page/9/index.html","112282f1a0a3833f2a2e839072ff0c86"],["/project/index.html","193e1447c0fcd8e5d7a756787e0e4926"],["/sw-register.js","4a1f5531658dbfe3c1dd013603e5be31"],["/tags/BOM/index.html","a53890eedacc7e9fad25c366e1ec95c6"],["/tags/BTC/index.html","cda38119c8d6e006a82c20134f35089a"],["/tags/Dom/index.html","f37cb619ff3c48bb0fd093d5d168870c"],["/tags/JavaScript面试基础理论/index.html","330b4f41ec811d87072297a0c0dcb735"],["/tags/ai/index.html","efd190116b98d07d232ce3c0a9cd7e60"],["/tags/ajax/index.html","bee2b3b46db4566501b08bf257e04fbf"],["/tags/ajax2/index.html","95e791602df263c5ac41e476e2c870a7"],["/tags/array-api/index.html","c605ed2794e087500c241c9d98ded9a2"],["/tags/bind-call-apply/index.html","c9d7baa2c743751628f36c1ca76745ab"],["/tags/blog/index.html","fcd0c5722cd065796239f7ef0b059751"],["/tags/blog个性标签/index.html","33fde7298b0e862ac9277f641c4df59b"],["/tags/box/index.html","f106c065494cdad04a66ab31d15887d4"],["/tags/cache/index.html","ea1fa3930593408cb8c934567e56c41c"],["/tags/center/index.html","75f0013ef625383947c64f359f787b4b"],["/tags/chatGPT/index.html","7790be01fbd27a0def595c39f1050a13"],["/tags/chatbox/index.html","583aa2f90cfe7866127ca3d83d5ec7ad"],["/tags/closure/index.html","9567bf9efb3deb680290c7c72d33ec96"],["/tags/column-layout/index.html","9e550b3f5567677b51fbf9a521f05f62"],["/tags/composition/index.html","10d4773bf5370a3a45f1a41bfe269164"],["/tags/context-stack/index.html","b4e81a8f7a48882008be000fcb663741"],["/tags/continue-to-upload/index.html","981ab4a2690fd726f88d4fbc41a7e64d"],["/tags/copy/index.html","b31112009d68c35041914ab13d24d347"],["/tags/css-performance/index.html","80b0facc73e45842f10868678fd0606a"],["/tags/css/index.html","45e0c21cefc8472fc65a3195efad80d2"],["/tags/css3-features/index.html","22fff7dece114eeac066a30f84c6d191"],["/tags/css面试/index.html","6f8458f66e01fb2380bd22e2d62f6e9f"],["/tags/css面试/page/2/index.html","a3dd3cd77251e008a961888ffb3235be"],["/tags/currentTarget/index.html","1803103beed8685ed4e2d02c82816207"],["/tags/data-type/index.html","4f3293b99d89963cbec3241d8cbb9f1e"],["/tags/decorator/index.html","700803362dc2598c5c0d5362296a16e4"],["/tags/dp-px-dpr-ppi/index.html","690f7a0448a6883fc1dbf67d44cca557"],["/tags/em-px-rem-vh-vw/index.html","f6ca0594153525162c39b277b9b26760"],["/tags/es6/index.html","f310686efe0940550729ed1d0175d8c6"],["/tags/event-Model/index.html","1f955de5dab0b54b2fdbd425caa7c099"],["/tags/event-agent/index.html","6c2673e59773c7be2e7d1bc1301b2309"],["/tags/event-loop/index.html","d798ab61cae3345ac2617a3020711ab1"],["/tags/fine/index.html","2e53f526da18b2fecefd742fc2ab7911"],["/tags/flexbox/index.html","cf1ac9d6a21e75b57b8a3fa9875dc517"],["/tags/function-cache/index.html","8df122c0b06b10d217a82e028028a574"],["/tags/function/index.html","eb78cfda2ee270c84cf383ed674df2b4"],["/tags/functional-programming/index.html","620d39cd909e8f1ce56958bbf791c067"],["/tags/gametime/index.html","b10349753d7df2a638cbc26861d6fe72"],["/tags/generator/index.html","e00569c946c454c96997d16186f92a54"],["/tags/goal/index.html","9227d0ee2dd07a07dfd73a23f9702a0e"],["/tags/grid/index.html","300ca67e2d481d54788a6565fc3f7269"],["/tags/hide-attributes/index.html","b9778e8e5eb172401baf4a0967f14771"],["/tags/his/index.html","fafa7e0dec0340172431f19e47751a9b"],["/tags/hooks使用/index.html","c2dae4b44d7d3c0d6f3c0a4c639ef621"],["/tags/html/index.html","d870d8ead5940453433f1526fa7eae67"],["/tags/index.html","a22d2b5e4f33a0f8664af3dbe4b78a9d"],["/tags/inherit/index.html","f655e9b5c4336241c788752f96e9e792"],["/tags/js-data-structure/index.html","9ee75790c2637c350ca0d6b827e42546"],["/tags/js/index.html","6dc275c614200578b916652dda49a523"],["/tags/js面试/index.html","206e2ad776bc9c87bda9f3c1f05f0aff"],["/tags/js面试/page/2/index.html","83a7239e4ac0a9fef07690a5095ae070"],["/tags/js面试/page/3/index.html","a5f9cdd4f97ef47f978ca4b6aacc2af2"],["/tags/layout-painting/index.html","2af7097033a8f2b9c2c994caa47de1a3"],["/tags/less-12px/index.html","9426c73260bd1d0b541e7a4062063eab"],["/tags/loss-accuracy/index.html","3e5eed39e88a69f1d2cf1b2b932dd179"],["/tags/me/index.html","041ab161cddbf02d28852ebbf1a211b7"],["/tags/memory-leak/index.html","8547dc1cffd5e5a1736716e04373eb42"],["/tags/modal-component/index.html","de026daebe77aa678f933dac52eb9a65"],["/tags/module/index.html","0802bd0cd8a9387a60d0e92239c44265"],["/tags/my-carousel/index.html","2b5446e38f4fdb59aa92ed90ddc23305"],["/tags/new/index.html","c94fbd62dc1bea64042e1ddc0e8ba571"],["/tags/node/index.html","0f0c80babbad7af351c97a8c8b01b46b"],["/tags/object/index.html","05df5f86694c19c2e50036976b47fe47"],["/tags/performance/index.html","38caaef3d47c0863c0b7cc5ba4897732"],["/tags/project/index.html","c9ab03d2840ff5484e60c3c2b66895a7"],["/tags/promise/index.html","52f2a15c83b99270dd9f94a4e98447c8"],["/tags/prototype/index.html","100874bb341b48184508f0e57821531b"],["/tags/proxy/index.html","02d2485246459fdb82f5608a9cb58486"],["/tags/proxyEs6/index.html","4ea5646efc064c7afaba3412c47a0ad0"],["/tags/react/index.html","180d3ddfd64377fb9c5e0461859b8d72"],["/tags/regexp/index.html","69d99ec4860ddb93bf00ef6fa7f506d0"],["/tags/responsive-layout/index.html","bf495bf38599a11c841fd6c83689f000"],["/tags/sass-less-stylus/index.html","4c1e115cfbfdb9b6552a43ab5336995c"],["/tags/scope/index.html","d716312a034f08429b17401cb8a0a4fa"],["/tags/security/index.html","b9245e684b7a04e0d4957f50b711ada3"],["/tags/selector/index.html","c0001194948ee957ffd5ff5986a9983e"],["/tags/set-map/index.html","c9570996ab4565d5d80b5784bfe17ebf"],["/tags/single-multi-line/index.html","c9f5852b03b7853f0cbf853044612fce"],["/tags/single-sign/index.html","ffb420c62185a9594de907f104dcdad8"],["/tags/string-api/index.html","d74661f3e126588d30cc2bfd640b1fb4"],["/tags/target/index.html","9ea351fd53f8ceb004a77370fe982237"],["/tags/treeshaking/index.html","aeb3278ab6ac207dd65d899bdf33a9bf"],["/tags/triangle/index.html","5ef8d13e7f057332ad725305da5d67cb"],["/tags/ts/index.html","5126f28c8622df5e8ed505b8b2d05999"],["/tags/ts报错解决持续更新/index.html","4f5cde51fcf530952d23fc2d19f2771f"],["/tags/typeScript/index.html","038d1397e934d5318146b79e4acce725"],["/tags/typeScript基础知识/index.html","fc149955d3ea2cfacc0c239cf7866277"],["/tags/uniapp返回顶部/index.html","88ff9a28c4b420e9ca3a08e2b5b66309"],["/tags/var-let-const/index.html","ca5a831ca2bf08282f9379d9a456a8d2"],["/tags/visual-scrolling/index.html","3fa4c8c7b0f19745b8c78be2f18d9b51"],["/tags/vue/index.html","07c62955ce707c151bda6902ca7f8ba1"],["/tags/vue3/index.html","4eae14ee3fd7ed64c616fedd4601bc0f"],["/tags/vue项目部署/index.html","e35cba8d6c02be4dbc21ec9105074873"],["/tags/下拉刷新/index.html","a92ac963519e2dcac03e80b8d414b780"],["/tags/反问面试/index.html","14a91e0722eba820b96f7cee5c917da7"],["/tags/和/index.html","a21be56049a8c762487412e71b17a3fe"],["/tags/如何设置文章置顶/index.html","9027689259d88d010d6fc3d012490ca7"],["/tags/微信小程序/index.html","89404950853232437dfe3cb00f765bae"],["/tags/星星/index.html","815d3744254507ab2e1b06c6d4d86fad"],["/tags/防抖节流/index.html","81068a052a3560e142350444899470c1"],["/tags/面试/index.html","52a93fe0306f99078218b881d7c5a4f0"],["/tags/面试问题集锦/index.html","c6100b243caf358634562e423890577f"]];
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
