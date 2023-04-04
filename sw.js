/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f9084331a91b2c2bb418269a07acb7cc"],["/archives/10bf1714.html","45fd246cfc189d49213236c5ca271f7d"],["/archives/14015a55.html","28e8827f4594116782b0d4b826469d17"],["/archives/171d1754.html","533f62e97dac7503de6bb6fa2d0b1aeb"],["/archives/17a85756.html","428eaf4fe2cee8a50bd35b558058f91b"],["/archives/1879f8e5.html","a6dc0c3917434ae2a7b6901367815d1f"],["/archives/1be48ee.html","243cddde821027a361135930c3ea245b"],["/archives/1e021099.html","4bae3fe2836a4e1ff1dbcb7f34a19a78"],["/archives/2021/06/index.html","92ae1f990299ca6838c2777fb3e6b283"],["/archives/2021/07/index.html","540f4b8fba9dc8b8a1d593ee4de7ff7c"],["/archives/2021/index.html","7938facaf44146cb35b55b46e4b391dc"],["/archives/2022/01/index.html","f11dc93660367e3229757d963f2451ce"],["/archives/2022/02/index.html","da8cb5ce09807b54fb822f5de94ea536"],["/archives/2022/03/index.html","29082a075eec0f3b23aaccbf40aed116"],["/archives/2022/05/index.html","53f3861da4b1f201ea071a226ad26534"],["/archives/2022/05/page/2/index.html","783d704999d29b95b4bf013f76e15048"],["/archives/2022/05/page/3/index.html","41946306e4f06e49f5363ed110d08190"],["/archives/2022/06/index.html","3a8f33a256440fff806931f4c303ef65"],["/archives/2022/06/page/2/index.html","f064751101eceb906ae4a1ea9c862d75"],["/archives/2022/06/page/3/index.html","9ebceb1dec13a428966cdd0e73e6e79a"],["/archives/2022/06/page/4/index.html","839ad4757fd7b8ac9b637140a8a94d5e"],["/archives/2022/06/page/5/index.html","71dd817fa222294dca420fcb2cca3109"],["/archives/2022/07/index.html","44f82630535443978bcc0624d2fb8238"],["/archives/2022/index.html","1577ec56382eabb5269d76a194677776"],["/archives/2022/page/2/index.html","80ff92381c61d8bab14ba5bb69870706"],["/archives/2022/page/3/index.html","5b255a5cdedc262b5cc41398975623c5"],["/archives/2022/page/4/index.html","a9cda10b3955adc768f4f2d141dbad82"],["/archives/2022/page/5/index.html","2804dc1ac12bdd37c9f61ff479f2807f"],["/archives/2022/page/6/index.html","b9649888d504c15da506aadf20d5e33d"],["/archives/2022/page/7/index.html","845cf1fc5c986145efd9a738fa28fc67"],["/archives/2022/page/8/index.html","35f77686a810dfedd60da530fa005577"],["/archives/2022/page/9/index.html","243fa861ef7d12ea7007cb78255e4871"],["/archives/2023/03/index.html","45e03019dcd94111043b240c84533e13"],["/archives/2023/04/index.html","3b6981a03d661c444d68875e99ed225a"],["/archives/2023/index.html","b922518c325b5570de47aab4d87e1ce6"],["/archives/203410a2.html","2542a51291f65f4cb7c5bc43a3e301b1"],["/archives/2039e3ed.html","ca3839735c3e528ecb511560d71bb653"],["/archives/28d88e6.html","c52041bcf96deade2c61ee669a4ad2d0"],["/archives/294b86eb.html","b081d652f1582c4e38c9a71b64b9cb58"],["/archives/2e20d937.html","0c51d55c59fae3ca239729e5adf482a5"],["/archives/2f8b36fc.html","9e528cb57b71a45ec4182a69489e824f"],["/archives/30b90bc0.html","8ee905b3dbf6f98558069daf495f3e94"],["/archives/336f0513.html","e8f4e9cc94126da016a34c66cb618b07"],["/archives/33b9c85e.html","fb12a2f861b6fb7fca019f7642dd8023"],["/archives/36044e1a.html","32efdccdee4d7791d4d097ed54cbc65d"],["/archives/37919ccb.html","6e09713576fae153065f1836421864aa"],["/archives/39a5927a.html","d7149cd0eb8c4e00e105eeaed958ecdd"],["/archives/3f038ede.html","dbad832df931d324d3a155f01a6cb1bb"],["/archives/40f0eb24.html","d325426cc0948024b94f601d82657b46"],["/archives/41476be7.html","485c455c511e38bfd146929ec954e852"],["/archives/42b82995.html","4b0a146105b82c7eda89fef02550d548"],["/archives/47c3840f.html","9be823b7b892acddd95e85abe028c898"],["/archives/48078dd1.html","2b61dd168c1a7e322298f09a3b446e86"],["/archives/4dbabb82.html","b15b25fab8e6a401925467a37f7d1908"],["/archives/50cfbdee.html","bf9cd162e9affc4843baf7016c296a30"],["/archives/574fecf1.html","6e0342db897b539e552b39b803c5bcc1"],["/archives/59b49683.html","3bcd5ce5b0c4b5690ef8d23d69597732"],["/archives/67902db1.html","c7c69b9601f4767e6a94c0a50fabfc61"],["/archives/6be34445.html","44f0d9ce0345f76da129cdcc19280d91"],["/archives/7331f3bb.html","0329b82c3886bbdd64507fbaea50b968"],["/archives/7472fc2f.html","12ad98b2b1707bee83b1d35567f1b1e4"],["/archives/77971af0.html","cfcfaa23c6ef20cc7af4f71cef38f1d6"],["/archives/78ca6597.html","79b8a9c6b81519a85dd307f5c396da51"],["/archives/78cea6d8.html","805ef136102e373d32f1b90089e3e494"],["/archives/7b268071.html","9fc4a9bf87100ab4a097249e39c4813c"],["/archives/7c942302.html","7b513f1a0da02128cef7d530eca70864"],["/archives/7d76407e.html","4c57ddc1497e394868c9319de2ac344e"],["/archives/7f6cf7b0.html","e006d05bb6eabbc095945803273b1885"],["/archives/82d79681.html","3efa699cd3f472370018a35bdf037bd7"],["/archives/84a91e69.html","b3dc18c95e042dbed6b06e611be87536"],["/archives/857fe845.html","e8c6fb3fd310366e0d95bff8624fca2c"],["/archives/8a9483a.html","f5f7e953d06068c0893c5e1f06e3f667"],["/archives/8d5284dc.html","be740faa9e5ccd6d21fea9991a115a25"],["/archives/92004154.html","2bff5b0ffe24cbe849bd8de9f3efd53f"],["/archives/9370d73f.html","57c48475bd7ee408295a901b4b4b9a34"],["/archives/93ae9a14.html","0991d5b3ac6bf3fddd04cc8c24f5976f"],["/archives/9417ce47.html","cecfc59c7b9ab8a7d112ef76be43d5de"],["/archives/942a5c06.html","3142df64b21af7e5d2e77e7d7501c43c"],["/archives/958c57b5.html","f149ac23f44500bb2b5bccb8d44bb941"],["/archives/9692e25d.html","e54e9742b4140fa5cce41baede596e48"],["/archives/97a9ab5c.html","ffd49130bf1fa8991953fe9eed031659"],["/archives/97b76847.html","2aa6b61fa48010d3c20670ed39e1c507"],["/archives/9a0dce2d.html","f3f3532cf73a1c14e092d6e2b584761b"],["/archives/9b0c2390.html","3c94fcab4a9269f8c0d1fd8a3a92e5d1"],["/archives/9e5f33b7.html","1fd1a2541e6065db3f23b4adf5986f48"],["/archives/9f1ed84.html","230e4e219b87ebc80be9bc0fa6cd2501"],["/archives/a0245a2a.html","e914c7488b56e692b0db20330d9f3f8a"],["/archives/a10ceeb7.html","54cb3fe48148992f4cb88496f3b5eef4"],["/archives/a36a5ae4.html","42c080ab020f51b82722ec9fd33a7559"],["/archives/a8adabec.html","ac0482b4d410a200764536418acf59ad"],["/archives/ac5292c2.html","caac9cd587eeac25961802f8951cf870"],["/archives/adb78c8a.html","7c841eb3d2d6ae63f90b8425f7f43810"],["/archives/ae4c07b8.html","28f950dc8588b71edbb62f7d99d41b39"],["/archives/af55d3.html","22da03a251224ab4c8fc187a91ba7c81"],["/archives/afcd4575.html","cbcd2630f7271183d6bb6ba37e4dc9d9"],["/archives/b21f48b9.html","5f42a7f67a99b6e28dcf64f4c3f46f6c"],["/archives/b51bdcfa.html","420bc54d841e959c121fd9d2f91c2cae"],["/archives/b7b51641.html","242c2ab817cb1ce286a9d89b73271964"],["/archives/b9f20a20.html","e524576e109953be228f71adf4ec46d5"],["/archives/be945145.html","4c020055c3a726e7afdf948cc42d56f2"],["/archives/c0add594.html","a6e46dbd129620245539dad121f87c9b"],["/archives/c242628.html","e06cf075838fc0e7ba2fd56e18016e97"],["/archives/c59bd5c1.html","227506661786b77e1150c137871e52c2"],["/archives/c5a6a264.html","23f5f857497d054ed03516e0b1adb684"],["/archives/c5a97815.html","16603a282d387fa4727ad197c90ee3f1"],["/archives/c7f4347.html","a19606a291e4e7fcfa869f851015c2bf"],["/archives/caae163d.html","22e4596c41b25d5ba649f199a124db9b"],["/archives/caae7b70.html","b2f01acb759380f487649e6cc73ec804"],["/archives/ced3960e.html","bed90ebf546b9984ae0930ddea2dac8a"],["/archives/cf2f5248.html","d69dfdcd044dcfc14184d43fe1a530e8"],["/archives/d3b694df.html","47c8bd907fd167a31c985aac49b62bed"],["/archives/dc3acdcc.html","ea2dbae84cc46eb6f4cbf23a54530780"],["/archives/df976d87.html","4b6b1da3226f530b044454b4484fcea3"],["/archives/e0c98e7a.html","898e3df807a682094fc55b9f2ac60552"],["/archives/e6437fbd.html","27eb044f045aa1dc0ec2b2d10d598955"],["/archives/eab5cc79.html","1716f5a31a0c21d8259e732b4916db34"],["/archives/eb05a173.html","625b2b5d62440438ef8c27c042ebf78f"],["/archives/f1d0391c.html","6153a5f5703b38ce93960293fa00d0ba"],["/archives/f3d3ee5b.html","541d805081483eb03da6938e629bb45f"],["/archives/f7feebc7.html","2288db6174118c0434d2cfcd53c790da"],["/archives/f9f4b1e7.html","2f3b639971ca11780d9b6fdb28943833"],["/archives/fcdceb2e.html","d67d77792f86d1ea3e80fa08691cd024"],["/archives/index.html","92ec7fec4009b482aac2abf0ce210922"],["/archives/page/10/index.html","4f497bad31cd761b6e4c4a608b7d1e23"],["/archives/page/2/index.html","be15caadbb360443fae024dda08f9b7d"],["/archives/page/3/index.html","137099ed1942a3575e1737ee38891060"],["/archives/page/4/index.html","e8ceb644caf461ae84acae1f78293582"],["/archives/page/5/index.html","3ae991d6db0cc8997307159046ef842c"],["/archives/page/6/index.html","63e1216433534fda201b6cd65e140d66"],["/archives/page/7/index.html","4616473953ddcd49665a0506ec5feef9"],["/archives/page/8/index.html","1f990edc72837c0162f67ecac39ece34"],["/archives/page/9/index.html","4a2557291ec8957d25a57c158fbef33e"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","0364bd6f6c3d5c69dc39242209dce470"],["/categories/blog/index.html","5653b46ace27af34fb5130bd9666b031"],["/categories/css/index.html","f37bbb674f0668922c22a66e431dc3c5"],["/categories/css/page/2/index.html","73539d9142a4b68c11ee2cc202d020d5"],["/categories/css/page/3/index.html","f3bb9a7c32f80e127b6a80491afc39c2"],["/categories/fine/index.html","51f63211e85451d6a3b176553d97f9bb"],["/categories/html/index.html","91512ba2d3682c20c0dbe51c4f5c7741"],["/categories/index.html","14a8742aa6b6a78e41216ed51065da24"],["/categories/js/index.html","3c306fe8734f542b8f6a018d11d93885"],["/categories/js/page/2/index.html","7c96dcdb92417cddcf6085cbe1d397a4"],["/categories/js/page/3/index.html","ffaa98c760b730c3c89cb5bd68bd08f3"],["/categories/js/page/4/index.html","4248dff8d0c9ef655a807725487ca0aa"],["/categories/js/page/5/index.html","8cf03696894374b4ad5fd8f1b2333fce"],["/categories/node/index.html","8198ae6feeda4dd58d86e7ca9721e359"],["/categories/notes/index.html","6f7c3599e92578cc7d342c9b99bd2d09"],["/categories/react/index.html","7b9b3947e53e6d6b16d9889bcf47d905"],["/categories/typeScript/index.html","fcd275b81fc1cc715244910cb411ddea"],["/categories/vue/index.html","c8c0eac70b95e5514c4b6cc0bad822ba"],["/categories/vue3/index.html","0a3f0c2a5a9e55a1fb34ed0df71879f4"],["/categories/webpack/index.html","8a358c24f0ffa4fe09fc73a797b9a619"],["/categories/微信小程序/index.html","86ede5e77a1ddf39c3391e427b3b443d"],["/categories/面试/index.html","2e60bfdbbb7223fce210105a50845268"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","49c6e9327a80d4d56259c6001644d83d"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","c56a2fe0e4f90146f5448786389e7b2c"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/ts/images/01.png","c922cd12dab12bd6c46ee93bdd4205d8"],["/img/ts/images/02.png","3aa2056326e5d1c796af4ee14d5aa795"],["/img/ts/images/03.png","5d4a8b39b62c2c484b45dffa7f71d2a5"],["/img/ts/images/04.png","9005165e16c5fb263c3850b77b8c60bc"],["/img/ts/images/05.png","996ddffc76d0e5750a82f5a0473501b4"],["/img/ts/images/06.png","a52bf4f321fab1fee87cb087e0d22d04"],["/img/ts/images/07.png","36e3a3b114bcfad55498a774d9342e4f"],["/img/ts/images/08.png","3607e0c5650e9afa1384f2aac4009d62"],["/img/ts/images/09.png","dbeb822550e8eb71e78714035d790d38"],["/img/ts/images/10.png","e4a25517b0548f90ac6bef9d471ba0f1"],["/img/ts/images/11.png","dad677e46db0955c7d139a83b4b82cec"],["/img/ts/images/12.png","9745157eeb18de2635a64f65aeb34ea6"],["/img/ts/images/13.png","da212468d2ee4f8e9ba1f97843983786"],["/img/ts/images/43.gif","37c2e56cbc5c7a6fa18b043f8959a61c"],["/img/ts/images/44.png","6fe8492e0a34f7997c26473101a5352c"],["/img/ts/images/45.png","f799db600172453b1e1c864a85a9809a"],["/img/ts/images/46.png","9035adfac7596edda51156dacec1da06"],["/img/ts/images/47.png","2d75b31e7998a1e3c5ecec69a833a1d0"],["/img/ts/images/48.png","13beb8460f834a2a86866f9efaad66f0"],["/img/ts/images/49.png","540398c418c42be7de9f28b79882a107"],["/img/ts/images/50.png","18e4e8ef181ffd7eff2d1844cb704536"],["/img/ts/images/51.png","76bf41ed3e6bf0c976973364eb52fd76"],["/img/ts/images/52.png","f5d555290bc571215dd3ec30fd8aad42"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","72ae9597dd4028bb2f9e1fd38d83ca61"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","dae948f904908f9292839abad1f0de20"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","5a8436899f7b48fad3980b14d7a38327"],["/page/2/index.html","284bd1c7a460c64b16351b026a0c878d"],["/page/3/index.html","a468a87661f72b409e1326dae201ec90"],["/page/4/index.html","b3acfb35089eeb7a8b3cf5ceb1d5bd36"],["/page/5/index.html","73ddce59eaed6db096598c9dfc11324c"],["/page/6/index.html","cf390573bd5fb6e0d74269a80fc0c248"],["/page/7/index.html","6deff974af45f818215b037f4801a8e1"],["/page/8/index.html","c988efc59085f84e9d872752fe9bbfd4"],["/page/9/index.html","75da67d1685d056c81d06e9a08159bba"],["/project/index.html","8fdb2d92f5a03fb8d4e11d8c6ce9f200"],["/sw-register.js","78ef4c9aa3e9dcfbb96bfbbf3340cf5f"],["/tags/BOM/index.html","4d5cecf67c00641e3dade7d112f09788"],["/tags/BTC/index.html","656a8e65ee7914ca5d7165437035de10"],["/tags/Dom/index.html","d51f92e52cdb8ab59b46291af1a6cf67"],["/tags/JavaScript面试基础理论/index.html","89fa8e180d10f3be379f09b3e03af3c4"],["/tags/ai/index.html","d210afef7b9a39e52427cd21729f8c4f"],["/tags/ajax/index.html","97b117e9c3dce1dc09a1dea1278c89d6"],["/tags/ajax2/index.html","4f266700044adea7f36738f8dcbfd090"],["/tags/array-api/index.html","c65a4530b172385b165a800aab77556f"],["/tags/bind-call-apply/index.html","b2446e69660d12ac6891c905ba671619"],["/tags/blog/index.html","8c9909eac084294d39e9c21e8143a6ec"],["/tags/blog个性标签/index.html","66c9c486f4e096665d492835e18404c1"],["/tags/box/index.html","2a169258cee4e6938f6b668d00031bb5"],["/tags/cache/index.html","ffb6cffad8825b931a09053c51db135f"],["/tags/center/index.html","414050311da05aeb82e49de8e0b07210"],["/tags/chatGPT/index.html","f61c45dd4ad35509fb40b588fd5399fb"],["/tags/chatbox/index.html","eca70d3b421b317db17a1efa371d2361"],["/tags/closure/index.html","256b0e04f438fdc2758f6ab346aed091"],["/tags/column-layout/index.html","3ca8e85517da0623fbc12f5607756ee6"],["/tags/composition/index.html","22a50e515de2791bdba9c9ce952d5cad"],["/tags/context-stack/index.html","8cbce45cc99b404399c44a30bbae312e"],["/tags/continue-to-upload/index.html","ead57aba97fb4946fa0387ca9b3b7c70"],["/tags/copy/index.html","293b9a2c1500a2fc0c14cafdbb00287f"],["/tags/css-performance/index.html","50b22c353b65e3a8488b3e63973bdc7b"],["/tags/css/index.html","e39aab7ed06d842fab4488f49357c47d"],["/tags/css3-features/index.html","50f02b6c8f8bb19d81475a7088bcfe99"],["/tags/css面试/index.html","a55bdfb172b15c097f28ba22206e72c1"],["/tags/css面试/page/2/index.html","6ab9ac7d61d90abb1a304c9151873528"],["/tags/currentTarget/index.html","bfe243ffd2d028686f970d53d7e180dc"],["/tags/data-type/index.html","5606c89eb1885e7aca93c2be7065ccb3"],["/tags/decorator/index.html","b5132bff98988344366d7a38dd1c5701"],["/tags/dp-px-dpr-ppi/index.html","6cffff4ff1f00a18556319b0dcde81f9"],["/tags/em-px-rem-vh-vw/index.html","cbe3188c44ee8b650befef6015b7aaa6"],["/tags/es6/index.html","f13c48cbbbf550c65a9607ecb29978a7"],["/tags/event-Model/index.html","bc4f1bda76a63d7ebc63500cb3708d06"],["/tags/event-agent/index.html","23fd2bdd1c3d0d93bb215c658ab428d3"],["/tags/event-loop/index.html","c5dfa070816a87466af0f68616f0898c"],["/tags/fine/index.html","47fab5c9d88550966fd8caff60ab16a2"],["/tags/flexbox/index.html","c1863149b75f9a6ad9825fa00becf0db"],["/tags/function-cache/index.html","d319b691c9ffa0390d7c36ccff5054fe"],["/tags/function/index.html","d5d18b2f5b02a8c769cbc5a58c4e802b"],["/tags/functional-programming/index.html","99d7b01072d3de0b73e1fdc493c1fcad"],["/tags/gametime/index.html","dbb762acedcb4bf7c97fc488fea00b2a"],["/tags/generator/index.html","224b581c221ede463a6069458a9c9d0e"],["/tags/goal/index.html","9e30cbf1391a09b9e610fe6679e93749"],["/tags/grid/index.html","455bc553c98ad28aafb7856e4ad6d439"],["/tags/hide-attributes/index.html","e66b9e7d07f78596366d4381148f6c0d"],["/tags/his/index.html","7ee325554ff9e30f7de2db038f1dd23a"],["/tags/hooks使用/index.html","b4030680960961dc4b5eaca27fa79174"],["/tags/html/index.html","a48da362816c8d278d47bba253b7d242"],["/tags/index.html","25b23e99ede636315757b3ead50886e1"],["/tags/inherit/index.html","76d5da15fbfba2c5654bc6365578176c"],["/tags/js-data-structure/index.html","9650ac23270bac0094f699e3db49296b"],["/tags/js/index.html","1e529cdafdf53970fe5b8b53ae35c720"],["/tags/js面试/index.html","82f5173d572f1651a2b43c909b026b91"],["/tags/js面试/page/2/index.html","2422d94adb2cb9404491532f8baaa158"],["/tags/js面试/page/3/index.html","0331b2a67a389bd50c8e110b6755dd4d"],["/tags/layout-painting/index.html","bc5e401289cf0833a73c7c72e9d0f863"],["/tags/less-12px/index.html","a9c9a2debea14a336b7ff2aa9037d884"],["/tags/loss-accuracy/index.html","89a71f7183d455038d3bb888d7cbe2ff"],["/tags/me/index.html","bb3ef711512d90bb52ef5ac5f26a406c"],["/tags/memory-leak/index.html","a0812cf7fee97d0d1a98bf5e8403d0e2"],["/tags/modal-component/index.html","5a1083a62e4d3d3a1903b146fe0dd481"],["/tags/module/index.html","39a2b848993fe086d7b37754997d601d"],["/tags/my-carousel/index.html","6d4113e50a875e7ddcb871888cfc2c94"],["/tags/new/index.html","eb8ad41dd60219a6c6d513c9a97aaff3"],["/tags/node/index.html","3031382a0fa8e9b15c7966697cc8b680"],["/tags/object/index.html","130e730f216bd3bdb431293680fc6e81"],["/tags/performance/index.html","822eef3882dc91813d28e20ae5e8bac3"],["/tags/project/index.html","55c7e5139e8ca83a563f8013f496c170"],["/tags/promise/index.html","db6326e06efd772efeeba1522ea991c2"],["/tags/prototype/index.html","674d3d62d79ccff664946a3abbb45a7a"],["/tags/proxy/index.html","22b67d6df4cf4b365805b78939ef5997"],["/tags/proxyEs6/index.html","5647db1191734d72c739ac27433b02d9"],["/tags/react/index.html","856d4bc5b863deb02b42dc680663dd54"],["/tags/regexp/index.html","614784e2eff8e3e17a2078120d80db41"],["/tags/responsive-layout/index.html","0240e8930444a98082ab1873d0a2794a"],["/tags/sass-less-stylus/index.html","d621fdcaf1b157249d2f9a1d3cfd55a2"],["/tags/scope/index.html","59d0f27c840e5a849a421b6d9ade90b2"],["/tags/security/index.html","03cfeb4e6f66d4ed8e91fd428ee76356"],["/tags/selector/index.html","c559c87c7a58366d574bd8005c4c91e2"],["/tags/set-map/index.html","898517f820ca867a75a7b1cd5069e6c3"],["/tags/single-multi-line/index.html","dfcafc9be8a3338a9a5a1887d1cda2cf"],["/tags/single-sign/index.html","ddeac98a76a3ca0005e93b379067cb6d"],["/tags/string-api/index.html","0448d1d474612ed5446b7ea1cbecc0cb"],["/tags/target/index.html","90fac001ee55e50220b904223a314c42"],["/tags/treeshaking/index.html","71d2b477673c388931f3478f818d9b24"],["/tags/triangle/index.html","0dbdf6de81949be028f2eea820b9d8c8"],["/tags/ts/index.html","1d3ed8e65c8b67d95e42b90a148e4edf"],["/tags/ts报错解决持续更新/index.html","9f86852c11ff73777a819ba411b2aa4b"],["/tags/typeScript/index.html","cbe2583842a58f9a3c7a78c81dec734c"],["/tags/typeScript基础知识/index.html","edc5bb388aecd030ca2b1aeee8113de5"],["/tags/uniapp返回顶部/index.html","c358494b9cdcd295e9c63da03fa7ee92"],["/tags/var-let-const/index.html","d8af2a50be56e17399d94856e9fee71b"],["/tags/visual-scrolling/index.html","a8a6a711adcdcf58f6ecfcf4c2743706"],["/tags/vue/index.html","4f5ea10672f99f3d6cd51fd518cf1ee9"],["/tags/vue3/index.html","3801cc80cce42f03fe61f78baeeac772"],["/tags/vue项目部署/index.html","798f227b635d8bd0bca2d59d8c2b734c"],["/tags/下拉刷新/index.html","44c45958158ee1ab772cc0577bc2f139"],["/tags/反问面试/index.html","a99b036085b2b10338e6c882c9a629e7"],["/tags/和/index.html","d2bc628a466ddffb14e5e5ec077822d0"],["/tags/如何设置文章置顶/index.html","5ec42131e39d386f3157eb4c148d07a1"],["/tags/微信小程序/index.html","ccf3642524d048da942d43d5ea2aa510"],["/tags/星星/index.html","dc6bf4f667cbb10d9b3fb4b33c771dd4"],["/tags/防抖节流/index.html","dfe12e3e395df407ba68249c060f5495"],["/tags/面试/index.html","3a63a501da5d8e021da08ef6a243f2dd"],["/tags/面试问题集锦/index.html","01bf93be5147a17b25d524c95f723a96"]];
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
