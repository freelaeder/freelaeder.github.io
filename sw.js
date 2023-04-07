/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","a2dda028db6af5d271fcd88e9090ddd1"],["/archives/10bf1714.html","2e1f7c881f7a3365398cf588f0cbd447"],["/archives/12529ae2.html","656ca903da0cb32090ccdd2d79f0a363"],["/archives/14015a55.html","d4e9f3caabf38faecd40ef1c2fc104c4"],["/archives/171d1754.html","a24403941a4668859f26eabb3647a3c9"],["/archives/17a85756.html","0f10452bc10d8e95fbe7fdfc1e592c66"],["/archives/1879f8e5.html","f6af217ac5f8f714e506e86ac39437d5"],["/archives/1be48ee.html","30a00df7548cfc7e4e638338c0fb3434"],["/archives/1e021099.html","9838add4a69e787faca1c40c8c324507"],["/archives/2021/06/index.html","3b804a383e5cc623bf6ce098bc067cda"],["/archives/2021/07/index.html","6440830b7fc86114c0b3ff33b40c120a"],["/archives/2021/index.html","0b0c709afe153d9a6e480f6e6a5bdd98"],["/archives/2022/01/index.html","5b19905e62df3a4dbb0095e51eb78cbb"],["/archives/2022/02/index.html","b6cd6e913240dc63878d5d38d30e4f76"],["/archives/2022/03/index.html","c1e7efc98abdd02f94e30738a9aab4c2"],["/archives/2022/05/index.html","4b08b17e1cac1a6e2f8c02d67b7efb34"],["/archives/2022/05/page/2/index.html","040be404f4b92fb7cb1fa176847d5f64"],["/archives/2022/05/page/3/index.html","ecb5e9403a8fc48c1e5e39040e0c9b57"],["/archives/2022/06/index.html","8007c955f1bf02a76d5e7a43f0938b75"],["/archives/2022/06/page/2/index.html","fd29a0456b37c9abf90e8941c669dd9d"],["/archives/2022/06/page/3/index.html","85ee04bf98d39160af4491cb1c1b5466"],["/archives/2022/06/page/4/index.html","0a741e2d40f315246d36cdab1e522997"],["/archives/2022/06/page/5/index.html","86c947fe50b6deb2ace36c925e16abc1"],["/archives/2022/07/index.html","2651bb76751d3bf548fc6b37e7132348"],["/archives/2022/index.html","0f5a75a726fd761cd73f7eb3a75e97e3"],["/archives/2022/page/2/index.html","d1a0fd14f95a316eb9062a2f2400b034"],["/archives/2022/page/3/index.html","f462da4dccba6621bcdf1b4af73ec89d"],["/archives/2022/page/4/index.html","7e085c707fd094005345c10a1042c482"],["/archives/2022/page/5/index.html","1c47d59cf088049600fc62ae6af74809"],["/archives/2022/page/6/index.html","b20c446c2eb68d69aab058f5bab49109"],["/archives/2022/page/7/index.html","727d2beb2c43dce4bc4bd021c078baef"],["/archives/2022/page/8/index.html","861f7c2d7467fe5e80655c866bf4eb3f"],["/archives/2022/page/9/index.html","56a805601239c1845568c6006506ae27"],["/archives/2023/03/index.html","41bdbc88c65024b5dfbeb5a9252e254c"],["/archives/2023/04/index.html","aafbe404fcb10dbe414b50748b926c14"],["/archives/2023/index.html","ec0c7dfb08d90a899e762f259ca3569d"],["/archives/203410a2.html","6e76e068b69cec52ab668fe6b05fd0f7"],["/archives/2039e3ed.html","b843a34e9e0f1aa6714d8d10fdbf3487"],["/archives/28d88e6.html","0b287a4687439e5787c117909033e71a"],["/archives/294b86eb.html","a3e4f98a36ce7371393ea41f03e48461"],["/archives/2e20d937.html","455bc6df021d90772a33e6e0f7c1d3fe"],["/archives/2f8b36fc.html","debef372bf19137cef92ea7bc7e4269f"],["/archives/30b90bc0.html","8ba07d91589025b386db4b85116504b0"],["/archives/336f0513.html","fa560460122d97fc28633cc4daafd256"],["/archives/33b9c85e.html","02dc5fb22081e29e2747b1787240a331"],["/archives/36044e1a.html","4d56d2afa58cd91f6a708098e2ea336e"],["/archives/37919ccb.html","41e8e7f59230b36ac636e954b6e9594e"],["/archives/39a5927a.html","696388484bc2d021a64ce43bdda2a1c1"],["/archives/3f038ede.html","7b6012239226e7dd8e5975fa9d8a4f38"],["/archives/40f0eb24.html","afe69585d2fac99180d3dda03cba9fdc"],["/archives/41476be7.html","8dd3cc82ea218f0c368b83fa9349e192"],["/archives/42b82995.html","0a6296eed66d38a55e76aba61faef510"],["/archives/47c3840f.html","3434bae07083291f0799309fc9eba3f4"],["/archives/48078dd1.html","2c1a1341f1f132c63a147376d0bd12e2"],["/archives/4dbabb82.html","90510aeebe68a393e690deccbd6c9ca2"],["/archives/50cfbdee.html","900a98594876b72b00099b3e21056444"],["/archives/574fecf1.html","5f07e2ad2d012ff84e64694419545a96"],["/archives/59b49683.html","517a8d5f1f1b3a16686874644b746015"],["/archives/67902db1.html","7fc2930bed4571869e5e8395e87848d4"],["/archives/6be34445.html","2376bbd80dce3c8ad3ea23e6d61ee051"],["/archives/7331f3bb.html","d49308c2c8a7c7bfb20714da8a57b3a3"],["/archives/7472fc2f.html","d49e34c37a7782731d212614dddd76ce"],["/archives/77971af0.html","9d28d83a9c3d87c6595097b73638b6db"],["/archives/78ca6597.html","1f02a477a267e73f51197672da6c784f"],["/archives/78cea6d8.html","3ad739715806b216b8b6ac40a00f527c"],["/archives/7b268071.html","bd9f8c784a4cf7f7d0fe8145de259436"],["/archives/7c942302.html","81863d2403208a65bc1d2a65dbbb3fbf"],["/archives/7d76407e.html","5465c2263843ec23c6d1c01593c688a2"],["/archives/7f6cf7b0.html","091bd93812a7a32e523a5d17a7074130"],["/archives/82d79681.html","ba8bae9d8772f7b05ee0ce23384288f5"],["/archives/84a91e69.html","90fff72bbb98c0bb858627e1ece72451"],["/archives/857fe845.html","55b7e8d9a27613cd95d66a4b9d86b3d7"],["/archives/8a9483a.html","51aba0570b2898bb8b242aee767cfd3d"],["/archives/8ad35e55.html","e06c08b52fce4558397c84a93149ae69"],["/archives/8d5284dc.html","e08ab6ffd7b41267e03623b2c8cd536c"],["/archives/92004154.html","c667e53652aa5e5bf5b5aa404a9d61e3"],["/archives/9370d73f.html","3263c506795bf78e2375eb3d0b615cee"],["/archives/93ae9a14.html","987727d86d8c5d9b4f509af490bde604"],["/archives/9417ce47.html","b7dd3f4efa0dbd33fd8116c8e7c531b0"],["/archives/942a5c06.html","f65fb790e11030264e6d532cfa917aae"],["/archives/958c57b5.html","f797af7cd8af69e6da3e6cf8e7bf4be2"],["/archives/9692e25d.html","b0faf1973ae7b9c619a39bd2af2f14e9"],["/archives/97a9ab5c.html","e122b3a0a5ad90da17ccd8f4249f4e80"],["/archives/97b76847.html","05ddd3ab14c3a94d559d19ec31c6b690"],["/archives/9a0dce2d.html","5c535ff9096ba488dd7d8e2713d505ab"],["/archives/9b0c2390.html","fe04ce5701108995ca65161ce5b19c1d"],["/archives/9e5f33b7.html","81338281b49f912b296c38810602d12c"],["/archives/9f1ed84.html","dabc8e6c4b5857f596c7530a46e088a7"],["/archives/a0245a2a.html","bedc22dd1d413668e38aba591b7a7da0"],["/archives/a10ceeb7.html","aa31b50736542f29d10b8f94887d4f79"],["/archives/a36a5ae4.html","e5f0f9f16a9e3612ad9b974fb9f12c88"],["/archives/a8adabec.html","0c1bb8b2fe8d94ac96c5b60d26c7c687"],["/archives/a9432027.html","bef7e5c6c765415997650e138f6072b7"],["/archives/ac5292c2.html","de0346ff1c0237763127e7f90a962165"],["/archives/adb78c8a.html","2a7908297b0f1f373098a6ef5493c159"],["/archives/ae4c07b8.html","e69da67be1a16fffa03ed1242af83786"],["/archives/af55d3.html","76c24cfbb9919fa0844bcb11b301f1e9"],["/archives/afcd4575.html","8f86e7d6af042335c29209383e059b5f"],["/archives/b21f48b9.html","b88d93016c19ac7e0711e18883d2a514"],["/archives/b51bdcfa.html","6b42d4466d73bb341066f2482e6ec048"],["/archives/b7b51641.html","50aed297b500f85c3ec2f45a45199d9e"],["/archives/b9f20a20.html","5b24e74e836f66757f3133d6b58fd1c7"],["/archives/be945145.html","64993bfa27dea9510a36a0a6f28598fa"],["/archives/c0add594.html","6c7168fc3ea63f66c48efbf9192df3a1"],["/archives/c242628.html","9209f2da1898f540dd15f76a7901830f"],["/archives/c59bd5c1.html","6f7c9a7de82f07072e7c25925e796c82"],["/archives/c5a6a264.html","7b7fe631a528cef47e93b6d74da9c076"],["/archives/c5a97815.html","f07002f277b3d9812aafaa8e9a6c1d95"],["/archives/c7f4347.html","b421de52698385992f51eb60cb806fc3"],["/archives/caae163d.html","31edc0f27cb4d97ee98d2303b1b566a9"],["/archives/caae7b70.html","2108392449d8d63eb89cef50140260a3"],["/archives/ced3960e.html","fee3f5d38bf52d832f50db4084d5df86"],["/archives/cf2f5248.html","9d04947ef1968d6b5a5fd3af848118f5"],["/archives/d3b694df.html","9d593e54062c1b3ad62b83c00e42d1ab"],["/archives/dc3acdcc.html","a3d6152182137a9b77ab87bf29a333c5"],["/archives/df976d87.html","3d5822ffd9b6c5d9f19925610d1f48e1"],["/archives/e0c98e7a.html","dab52f8366eb936583a8e1b0ce79436e"],["/archives/e6437fbd.html","b66561f591a4ab85bb0a9d6b58da3457"],["/archives/eab5cc79.html","82ba47f15bcae7239313afcfa2a75601"],["/archives/eb05a173.html","9790b3ed69b77415367ab73d206c820a"],["/archives/f1d0391c.html","8e7f6fbb844a86f5259aecb080d27151"],["/archives/f3d3ee5b.html","e83d0b321e7cf7ac908ce2add114c42c"],["/archives/f7feebc7.html","2104a9c91e4f2e3d3199e0918163df01"],["/archives/f9f4b1e7.html","5759248ef555b4bc54bfa1a729b67e6a"],["/archives/fcdceb2e.html","8586b396f510bb11e4a421d7f8767fe8"],["/archives/index.html","7ec67ea3d8c23979a44dc592247b0ee1"],["/archives/page/10/index.html","e5007b90664069d021e0dfa8e1bad5b8"],["/archives/page/2/index.html","170e2f5a8af8f6114eff621e7906868c"],["/archives/page/3/index.html","7bb3b8bf28e2c76c9913ea418175c0b8"],["/archives/page/4/index.html","d5e0b58bbf9c56c504c8da202b90a1cb"],["/archives/page/5/index.html","db761365abbf3186b1d49ffc43b75d46"],["/archives/page/6/index.html","67aabd6e8e059acf7292715774e44239"],["/archives/page/7/index.html","89bab6c47a38f8aa949bd2ab3b43396b"],["/archives/page/8/index.html","27163406193ff8058ee03b624e4f3610"],["/archives/page/9/index.html","2668eafe9fd3b8abc6e513dc8bf53470"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","8e2dc5a53982064af6eedf08d07beef2"],["/categories/blog/index.html","44914575d1d818f9eab775497851c1a1"],["/categories/css/index.html","e6006224ee1ab8659b70a21c0577eef0"],["/categories/css/page/2/index.html","4d38f48351a4d726ded64ea49f04a08f"],["/categories/css/page/3/index.html","a1dc05bc36244696ffb7cb5c81beb374"],["/categories/fine/index.html","fb43855e35ee99d5392483ba4cc52329"],["/categories/html/index.html","0f53a36de67c66fe5bf0adc25606331f"],["/categories/index.html","4b40f33681bff21b44edeb7566e1f886"],["/categories/js/index.html","e2186a2df384dbcbb52dc9894ae3fac3"],["/categories/js/page/2/index.html","2afcc1162aecc124a0139f2460d149cf"],["/categories/js/page/3/index.html","05a6100d6d7b77723631a398e09b8c68"],["/categories/js/page/4/index.html","9505ce36924e6faf10a6d53d95a9570d"],["/categories/js/page/5/index.html","d37cf86ed1450ba5ec13c87fb5001e9e"],["/categories/node/index.html","d1700941cc2206a45305634dcd193b4b"],["/categories/notes/index.html","f21da3405f21e5d088de4ce50a6e0e72"],["/categories/react/index.html","dec0381845d6b0094904848a965a0353"],["/categories/react/ts/index.html","c547c2519cfaabaf5d8737f78d43b236"],["/categories/typeScript/index.html","440cb03a62fbb309d3a09ab496d4e1af"],["/categories/vue/index.html","98f2868100869045cdd820e31a25ce1c"],["/categories/vue3/index.html","6b5ed2c58a4cc0df9b5cfdbf7bff2317"],["/categories/webpack/index.html","ec2db41ee43244819c18f20e68ce56e8"],["/categories/微信小程序/index.html","37330767b04cb367a525ae9947d61ac8"],["/categories/面试/index.html","b70b0ad2d1f0f7d731808ffdcbaab5e4"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","d2f9d80c1f30ff3b496ddae161d23a53"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","b07b18f1404ad41f1de73e503a72282c"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/ts/images/01.png","c922cd12dab12bd6c46ee93bdd4205d8"],["/img/ts/images/02.png","3aa2056326e5d1c796af4ee14d5aa795"],["/img/ts/images/03.png","5d4a8b39b62c2c484b45dffa7f71d2a5"],["/img/ts/images/04.png","9005165e16c5fb263c3850b77b8c60bc"],["/img/ts/images/05.png","996ddffc76d0e5750a82f5a0473501b4"],["/img/ts/images/06.png","a52bf4f321fab1fee87cb087e0d22d04"],["/img/ts/images/07.png","36e3a3b114bcfad55498a774d9342e4f"],["/img/ts/images/08.png","3607e0c5650e9afa1384f2aac4009d62"],["/img/ts/images/09.png","dbeb822550e8eb71e78714035d790d38"],["/img/ts/images/10.png","e4a25517b0548f90ac6bef9d471ba0f1"],["/img/ts/images/11.png","dad677e46db0955c7d139a83b4b82cec"],["/img/ts/images/12.png","9745157eeb18de2635a64f65aeb34ea6"],["/img/ts/images/13.png","da212468d2ee4f8e9ba1f97843983786"],["/img/ts/images/43.gif","37c2e56cbc5c7a6fa18b043f8959a61c"],["/img/ts/images/44.png","6fe8492e0a34f7997c26473101a5352c"],["/img/ts/images/45.png","f799db600172453b1e1c864a85a9809a"],["/img/ts/images/46.png","9035adfac7596edda51156dacec1da06"],["/img/ts/images/47.png","2d75b31e7998a1e3c5ecec69a833a1d0"],["/img/ts/images/48.png","13beb8460f834a2a86866f9efaad66f0"],["/img/ts/images/49.png","540398c418c42be7de9f28b79882a107"],["/img/ts/images/50.png","18e4e8ef181ffd7eff2d1844cb704536"],["/img/ts/images/51.png","76bf41ed3e6bf0c976973364eb52fd76"],["/img/ts/images/52.png","f5d555290bc571215dd3ec30fd8aad42"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","d95e06d7f8cc251a4d4a34cdf56e31d1"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","3d08ade048308445451561bf2bb8ade4"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","2602b06aeeb0ec5a1bd71a9f7af8c084"],["/page/2/index.html","7437cd0735950c06ea419ece5c52f423"],["/page/3/index.html","8055dcdc9eecd4043af87c7570c0c294"],["/page/4/index.html","75cf99b11402d81dc1b1f124aebd7e73"],["/page/5/index.html","f359b0ed2a338cc8f827c75dcc35e8c7"],["/page/6/index.html","2da0d049cd06cfe89b29b1319a12a305"],["/page/7/index.html","11b5304d52bb7d2e540fac6a0a8f7b2c"],["/page/8/index.html","b276836ae2a560f290dd687d123fb1df"],["/page/9/index.html","a8b7972d031038f6f12a2aba85d282af"],["/project/index.html","30f31e4e6548ee390014cf2283364128"],["/sw-register.js","8efcc41ecf84120f812db7ae033d133e"],["/tags/BOM/index.html","1e4828a63b26cc8efa8668cc8fb06732"],["/tags/BTC/index.html","3f4c80828fa80c42b2460bcf119fb380"],["/tags/Dom/index.html","8c0a419f3155a4599887fa8e5348b753"],["/tags/JavaScript面试基础理论/index.html","e1cf44c157497bd9a92383a488bb4c90"],["/tags/ai/index.html","3c13d74b5f3583200b84fc3cc672867e"],["/tags/ajax/index.html","5b84efb8655fb7d6e746375583e64568"],["/tags/ajax2/index.html","038c9d7e3c049809efc7fb60daaca5dc"],["/tags/array-api/index.html","476e83c22bc79458228ecd7247a491ce"],["/tags/bind-call-apply/index.html","d256b66154859e40608ce9305f0e3154"],["/tags/blog/index.html","924d6842bbcbf10b5aafb9cc477a5133"],["/tags/blog个性标签/index.html","8688981eb9d6691f6e68ab33dcd1399b"],["/tags/box/index.html","231724aa4015fa7f0f4daae601c29a9c"],["/tags/cache/index.html","82b5bf424055f4355babb75c67a23680"],["/tags/center/index.html","bb1678145abc0ef1305a5717fea1ba6f"],["/tags/chatGPT/index.html","0f1b8ca38c099f2ee93d6b3ccea63a29"],["/tags/chatbox/index.html","8e45480e280b2393d69afbb791320cc3"],["/tags/closure/index.html","7db5d0ac1d1b6fbfbb597057e90ff190"],["/tags/column-layout/index.html","a9d41797347349890a110a293c74a954"],["/tags/composition/index.html","bb3b15ddb63706e46d5029bd983e474b"],["/tags/context-stack/index.html","974ec4a118472b6ce3769817f0e13035"],["/tags/continue-to-upload/index.html","992d4f5e6d998b6b566e5cf0d3de97a9"],["/tags/copy/index.html","b49c9e5531a13ffea6176427e67430f8"],["/tags/css-performance/index.html","90058479ed81565e0d205dc5ceaef4b0"],["/tags/css/index.html","f4b0691c0bf2ba8fb83d13457312657e"],["/tags/css3-features/index.html","25f48f55a531a9c3e04a6b62470f37b1"],["/tags/css面试/index.html","4e03e3fca2dfe81d8f5acd97a62d48a5"],["/tags/css面试/page/2/index.html","b93728af9a8c22fcec78395b9fa003ea"],["/tags/currentTarget/index.html","736a8a4e6f919227a0d4e5ac411e359f"],["/tags/data-type/index.html","c7957788a4b701509966883a683fb86b"],["/tags/decorator/index.html","1a32b537cb61bf0656cf4a4e717d6ac1"],["/tags/dp-px-dpr-ppi/index.html","001c25ceff83a53638ef93c34ade0005"],["/tags/em-px-rem-vh-vw/index.html","a080d9707f6f6263b19380dcdaf34649"],["/tags/es6/index.html","9ffd5ff4aaf8d70169eea6920f87f0e1"],["/tags/event-Model/index.html","70a98f13e89982da62dce02effbda2ba"],["/tags/event-agent/index.html","58c285d7c83ab8a183bfb9ac986788fe"],["/tags/event-loop/index.html","5c46f07fe6a6a869e72067129f96ba03"],["/tags/fine/index.html","4907860fb6e737790c9bd755275e7bc1"],["/tags/flexbox/index.html","9e9a0de3a3b470ef5484c211f0780944"],["/tags/function-cache/index.html","957afe5d76f8c914c2a907156db81120"],["/tags/function/index.html","6517a59c74db7976527290135739c4c8"],["/tags/functional-programming/index.html","cdf4553ba0247a4b95f321ac862600a6"],["/tags/gametime/index.html","f77505ef1f614c198471d319d7962929"],["/tags/generator/index.html","551b67c61bbc01a13734dec8db3338b5"],["/tags/goal/index.html","79cd4d008fd4c4bb3455dd39ec217fb1"],["/tags/grid/index.html","575811b447825d170445f2ab2c56b467"],["/tags/hide-attributes/index.html","c77999e70347b52d51543cc8f9867c41"],["/tags/his/index.html","825d5c761cd50017a0aac6e78859f3de"],["/tags/hooks使用/index.html","57c65a9623fb2a895df711fd282e4728"],["/tags/html/index.html","33c17d477ba5b8acffe1d57175ae9766"],["/tags/index.html","4445ba58465dd4d8ce0070d14bf78d82"],["/tags/inherit/index.html","07bebab3d0cb53e2f38ad6b8d15b4736"],["/tags/js-data-structure/index.html","9cd1d2ab5deb4799a7e2883182e1a7ae"],["/tags/js/index.html","ca0c86904f094250a38566dee1a3c63c"],["/tags/js面试/index.html","5434fcf13247836f2311a52bb303c9a5"],["/tags/js面试/page/2/index.html","3f673a67c31422e9d8c045f56dc7ef17"],["/tags/js面试/page/3/index.html","127aa14372020ad23214bbc1a588b9c8"],["/tags/layout-painting/index.html","d09002135ddf6d46ec4e45edfd4bccb0"],["/tags/less-12px/index.html","fc411770b70774b964d1e580abb40241"],["/tags/loss-accuracy/index.html","4a9efe5f830596ce556d654ccd6ca850"],["/tags/me/index.html","161b3da93220ad2208b453948e4d4831"],["/tags/memory-leak/index.html","94570598563269502bd3ef6487c39e92"],["/tags/modal-component/index.html","4262df617c2be4ac15e3fa8ab9e3c531"],["/tags/module/index.html","101328cd89e8b32c48ea405a579355d4"],["/tags/my-carousel/index.html","6ec1a5a9e346ee00cc12d604256187eb"],["/tags/new/index.html","9183bfe3ea6e0305aa8188c26fd95a2c"],["/tags/node/index.html","9a56d2caaf4e1ed0b961ccf18797ca66"],["/tags/object/index.html","db84a09150529c88375bda6b339f1e9f"],["/tags/performance/index.html","be8d20e02ad93983da652b1f949db53f"],["/tags/project/index.html","aff585e06f4588135635bbfc458f13cd"],["/tags/promise/index.html","3f8a3bbc89d1ab85f467d07fafd0da80"],["/tags/prototype/index.html","53ab992430295c85917d25d859b2e220"],["/tags/proxy/index.html","8cb99d59fe918a0fa5add05fb829aec8"],["/tags/proxyEs6/index.html","720d4ea2469be469befc8484896bdf17"],["/tags/react/index.html","6711754a5e94c99fbb6cd04a6d34d907"],["/tags/regexp/index.html","b7b9ba5ecff2d08bc6df9909ac7766ab"],["/tags/responsive-layout/index.html","c2e6891bd1851f1b6a8bdb5b224513a1"],["/tags/router5/index.html","dfcea769d978d9fbecf7dfd830d02abb"],["/tags/sass-less-stylus/index.html","afcddcc83d4f9f02950deb6030b13868"],["/tags/scope/index.html","641a47e9d35b4fd3d9b105e2a039ba93"],["/tags/security/index.html","0279fe710130c419087e6d5343fca6de"],["/tags/selector/index.html","7aacb7ccb805fa0c9c5a2aab40bc5a5e"],["/tags/set-map/index.html","51448e883a36a2e678aecf2acb4c4e2a"],["/tags/single-multi-line/index.html","0fa8412fac7bf41f022aaefce7e68904"],["/tags/single-sign/index.html","fd69d8d065d47aff924c73bbe6aec460"],["/tags/string-api/index.html","8caa122e1dc8e571eb5f984425803daf"],["/tags/target/index.html","720a68cbab50f1ee4511b115875e3c27"],["/tags/treeshaking/index.html","fe09e44d8e7af085d7bfec0e630447b9"],["/tags/triangle/index.html","680bb4f9618e540e6275db2ffc856470"],["/tags/ts/index.html","49464f4251a5c257793ef366c3a2f8ac"],["/tags/ts报错解决持续更新/index.html","37ab48e7713447491170b7f5fe413849"],["/tags/typeScript/index.html","deed9e7faf4f202da095e29d605410c0"],["/tags/typeScript基础知识/index.html","cc83ad926693be663a35263e04e2b11f"],["/tags/uniapp返回顶部/index.html","8bda5205e1a25c66a9ce0976a01bf29c"],["/tags/var-let-const/index.html","0789c85956663de23581c8feb91a8c0d"],["/tags/visual-scrolling/index.html","33cc0c0e582f65ff37ff69f48d367057"],["/tags/vue/index.html","b5ed6b2a9634438015dda61ff4c047ec"],["/tags/vue3/index.html","37014e87e6d8e6d4d8508a5ac5b77a67"],["/tags/vue项目部署/index.html","52678e60e2c37e47ed294ede59688939"],["/tags/下拉刷新/index.html","37ae39be6b23429cb05826c0493610a8"],["/tags/反问面试/index.html","07442d36682ceae786b40c2ec9ecdfe3"],["/tags/和/index.html","4795c4e7f7b95bc093a89d19d938e517"],["/tags/如何设置文章置顶/index.html","c94e82b5272f107761b18666ec3db3fc"],["/tags/微信小程序/index.html","08f913241609610136002063294d1135"],["/tags/星星/index.html","a766ecca34152aef93be80c0837994f2"],["/tags/防抖节流/index.html","d6dd90abab62c88f7b07502194c4ae62"],["/tags/面试/index.html","a8b19cd29c03bc7dd2fa57ff5c0fce6e"],["/tags/面试问题集锦/index.html","d9090e73106dd7df587058c940b1bcd0"]];
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
