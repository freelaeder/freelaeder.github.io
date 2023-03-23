/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","139adb7aa141cb8d7430553b7de34143"],["/archives/10bf1714.html","f5aaa53466821a92859025da2129a017"],["/archives/14015a55.html","732c32f155f03ca476224e0c888e7a84"],["/archives/171d1754.html","b6689b61de2929f9df6f4055a9fc0031"],["/archives/17a85756.html","867fecdcc24e64efe86db77881abbe72"],["/archives/1879f8e5.html","367d7096d2c28749f8f538e410aff19d"],["/archives/1be48ee.html","c60eb6811b157733fb47b0187e46fc08"],["/archives/1e021099.html","a62bdf8ba87a0a018264ea8c4a2216fe"],["/archives/2021/06/index.html","8cad6cf7a67ddf3cd79396857b31841f"],["/archives/2021/07/index.html","c2cf0c52e39a55c6814b0a829dc9be37"],["/archives/2021/index.html","1f60aabf673baf15811ec1cab8127cb0"],["/archives/2022/01/index.html","b54c40740f2bb6fd9b8d20aeebdc0c90"],["/archives/2022/02/index.html","46cee1d7f981f116e0bf17ad0ce8f0cb"],["/archives/2022/03/index.html","89df183da4b60f6974258cc43f3e775c"],["/archives/2022/05/index.html","0a6405665f17a4d04253532c7df7d538"],["/archives/2022/05/page/2/index.html","a24898b50c882fa9d2f2ae3adfb4b56e"],["/archives/2022/05/page/3/index.html","90e26d5ba4c63b5f43c8eeee0884f84f"],["/archives/2022/06/index.html","dad08a17a1b8fb75cd285a8acce13cef"],["/archives/2022/06/page/2/index.html","dc58eb61fd175da40f5c6bc22112f4e1"],["/archives/2022/06/page/3/index.html","c9b37275e6f6f64f3e8543d3b53fa318"],["/archives/2022/06/page/4/index.html","7d29e89e9170c0e14ea4eedf2c4c5c2d"],["/archives/2022/06/page/5/index.html","63a9321c1a1f98cb08a5ce5a0d505f53"],["/archives/2022/07/index.html","4526006ea65f1ae181e6935cdae85a6e"],["/archives/2022/index.html","1f3490169edb509d1e8157d52defb63a"],["/archives/2022/page/2/index.html","f723f0405a6bcbd9cce7d7e5ed472a81"],["/archives/2022/page/3/index.html","75a0019bff8aa6ae94c89495c0908807"],["/archives/2022/page/4/index.html","c4cf6075713f1b90e5e55d0afce6f609"],["/archives/2022/page/5/index.html","381edfa249091d111812a36780827ae6"],["/archives/2022/page/6/index.html","1a170ed9c07eeca9412a2ebc0b8b14d3"],["/archives/2022/page/7/index.html","72bad0541701ea9cc6de142b1254aaac"],["/archives/2022/page/8/index.html","c07fbdd184405b17f4bdfe8f8879182a"],["/archives/2022/page/9/index.html","154726d4d508dea6d3d4d95ac829fa3a"],["/archives/203410a2.html","52cab9e18f806a3201163e71c84868a2"],["/archives/2039e3ed.html","f77de3148b5c7dc1b45b9d46516d8b09"],["/archives/28d88e6.html","4437ad0c75e4ccecf9187e33bd24b7bb"],["/archives/294b86eb.html","933c5f598dae4243ea42ec45e2b58d87"],["/archives/2e20d937.html","5b82ede91082540a53a337248d54fc8c"],["/archives/2f8b36fc.html","8ac5d88f1789c0c4a2f845f1a615486b"],["/archives/30b90bc0.html","6da92425fb863ac9199df22a58b95caf"],["/archives/336f0513.html","1c3aaacfd48c2bc5a5f1e2fa0a580757"],["/archives/33b9c85e.html","fd892ed7fa88781bee5c763ed8115adf"],["/archives/37919ccb.html","5f66204f8b41de08224d7608fadf68dd"],["/archives/39a5927a.html","93db640e64915f94fb8fc8c512e21376"],["/archives/3f038ede.html","f8882d6c0007536ba3451a4f0c8f9e74"],["/archives/40f0eb24.html","23a8aa44a45b14ae9bcf85acd7685045"],["/archives/41476be7.html","cd299fa4e7e98a2b049dd9617356daf5"],["/archives/42b82995.html","5dca40eff60abb38dc8bdf69a9a34f2f"],["/archives/47c3840f.html","eef743f80d43bdd633147ad18f724f03"],["/archives/48078dd1.html","43b565fcd02266886219ef9c34430980"],["/archives/4dbabb82.html","ab8ebfae15c13278c04a279def29b89c"],["/archives/50cfbdee.html","50d8e5c97fb7d8e28f5d6d18b08538c3"],["/archives/574fecf1.html","4cf5fb8aa1ee10e8cbba8536fc569fda"],["/archives/59b49683.html","51974d27d3094b633c3e646187702af9"],["/archives/67902db1.html","ec5f7687c9ec876d567a55d134c85f9e"],["/archives/6be34445.html","d275c743160a747b0ab22d89cc5ace5e"],["/archives/7331f3bb.html","8994f036d051d0c94ed1c69965463e53"],["/archives/77971af0.html","fc17b5997112a679bda37cfc8aa3a884"],["/archives/78ca6597.html","bf54e5f711c9696032d588e7025fd9a7"],["/archives/78cea6d8.html","285b236f3efacbc7513900f1d0fb9dd3"],["/archives/7b268071.html","0da27e76f50ac592fd53360a0503479e"],["/archives/7c942302.html","05e84db4b16db93a7ca738fca6e5df0a"],["/archives/7f6cf7b0.html","b458eda2e7667a79490f1d9196d9b573"],["/archives/82d79681.html","0ac214ce64b11b16f90f923c65ff9c51"],["/archives/84a91e69.html","281e08721a9e359ab02721341141ed8a"],["/archives/857fe845.html","ad70571cea69544e0c3abe493f6fca72"],["/archives/8a9483a.html","42aa0cce1bf3e8210e3109beb0ad7f01"],["/archives/8d5284dc.html","22e377a8fd2a62fb0d0e59b0521fcd18"],["/archives/92004154.html","3324146dddb096e4bdc73c9104877f85"],["/archives/9370d73f.html","1ae91829cbe5ce52197313b90636c77f"],["/archives/93ae9a14.html","b6599026172c943557dfea878e072079"],["/archives/9417ce47.html","f9ad62720163f70db847bb9cad67da0b"],["/archives/958c57b5.html","1a0781754472050640a1821105e5e73b"],["/archives/9692e25d.html","c3a0d245f409e0896ad5ac7556813717"],["/archives/97a9ab5c.html","a93e3160f809276a4ac7e202b2dd3922"],["/archives/97b76847.html","d5ffd6d3eb0185ae9967498366c8ea05"],["/archives/9a0dce2d.html","8b51e47e1e4eaeca589b4d2eb59a9247"],["/archives/9b0c2390.html","a8fb1d91580a59b4164a8611677bcce9"],["/archives/9e5f33b7.html","0e97f763a6bcb57b2fad85f08fa68bc5"],["/archives/9f1ed84.html","93c724869a857d8c3d36723747c393c0"],["/archives/a0245a2a.html","f153a724228626d1d5ede0b1ffdcfe69"],["/archives/a10ceeb7.html","3b8dd6557e3247cd94ecf259f52b05c0"],["/archives/a36a5ae4.html","8a8e602c76b46a443a689ad21a29f311"],["/archives/a8adabec.html","32f1d72077f1b8d8403fa8b29b6850d7"],["/archives/ac5292c2.html","7df01d67f6d4e27f0d031cda4b66c347"],["/archives/adb78c8a.html","b7d825c42c9e0ca374b199738cd5a0e9"],["/archives/ae4c07b8.html","c14e2bb6181deecd03ede8aae687471c"],["/archives/af55d3.html","244c7cd0c19dcac5f19efcbcd3aa5f70"],["/archives/afcd4575.html","13cdcdd47b61f8b9c3337ec857cca5d8"],["/archives/b21f48b9.html","305b042c4e39a187c6730a81b321d134"],["/archives/b51bdcfa.html","13d107b18fc97de14306ff135a35f014"],["/archives/b7b51641.html","846a459c5b7c5f66e02b39b6463c8d3d"],["/archives/b9f20a20.html","423a19c5c8bb616decd677a89c2e55c9"],["/archives/be945145.html","8e0bd0ed9aa36172b41d60df97dd292f"],["/archives/c0add594.html","9a7e5a47a239025b9c2af72e3daaba06"],["/archives/c242628.html","159f8f9d6ab5d31990011e395e340501"],["/archives/c59bd5c1.html","c101925757c27eed3bfe37dda0114ee6"],["/archives/c5a6a264.html","c9206e8f621fdc3302e9d9d272f7aefb"],["/archives/c5a97815.html","e406ca722a8ed7c02f74de46dde9358b"],["/archives/c7f4347.html","1e3990e82da25704d1beaf63ec88eff7"],["/archives/caae163d.html","0574d353775517273a01e65b033173cf"],["/archives/caae7b70.html","b29cfdeaae028da294573346d88ae1ae"],["/archives/ced3960e.html","8b5ad9631a6d170cd2123ce1db63ff7f"],["/archives/cf2f5248.html","e6f41a8d15ea40ce45aba3a256bfadb8"],["/archives/d3b694df.html","fb04dc84692ee8354d058aab6efd2b5e"],["/archives/dc3acdcc.html","cca091baf2dfd94ba5314e42fdd0244e"],["/archives/df976d87.html","700570648944c13296bbbef6821d7fda"],["/archives/e0c98e7a.html","9f48f1df89fc8a4d20e4e3ab5fe44a69"],["/archives/e6437fbd.html","cd4271c38866c7612fd06ca127251e1f"],["/archives/eab5cc79.html","3f7a70014f698392e9116d884bf7e6d8"],["/archives/eb05a173.html","02e14eca484adae653a8423b84af057c"],["/archives/f1d0391c.html","f2f35cbb0871e5cb08862bf7f5fb995b"],["/archives/f3d3ee5b.html","ad757837c5d7f202db629a5b9ee779e4"],["/archives/f7feebc7.html","c318e62cd2776ec9a6d364958e25a7dd"],["/archives/f9f4b1e7.html","cac5257ac0bb2f51af9ef41b800b151d"],["/archives/fcdceb2e.html","e5b3559f647cafcc9bd3b7844115e8ca"],["/archives/index.html","54f0c9e5164bfa8ab7fd02d153cb9bd1"],["/archives/page/10/index.html","afd63f19dd3731246b4bd9853d58d6a8"],["/archives/page/2/index.html","2811b98c354aeb4d3a727e42eb6381c6"],["/archives/page/3/index.html","3481868504457a864e46391ad1876bc5"],["/archives/page/4/index.html","0d65c2016e07b03ef34a4e4c8aa5fc47"],["/archives/page/5/index.html","6444309cf28b1cb3be5a95e031f5371f"],["/archives/page/6/index.html","14bbfb7153c9c11f071b36e702e64217"],["/archives/page/7/index.html","01102e7169c50df660dda084b45e5a46"],["/archives/page/8/index.html","5c30020080ea288b79b477264dc1ce96"],["/archives/page/9/index.html","8f925fbfff742a03c2f5d314f8e6c914"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","1921185bcd9b564714774768b3a3a22f"],["/categories/blog/index.html","92d7a72346f8bd714dccd6983fd8928a"],["/categories/css/index.html","23a569c49f75ba5e633632ecffb2e329"],["/categories/css/page/2/index.html","ae434d4263abe65220ed54e3980d0293"],["/categories/css/page/3/index.html","69f1ab0c4f873b3d08c1f38375c7fbb0"],["/categories/fine/index.html","dadf772c5078e5702641b5c3c161a25f"],["/categories/html/index.html","4ddb8a8905ac328e29485e400420a069"],["/categories/index.html","4c44ccdd3f10c424f9f4e950360d384d"],["/categories/js/index.html","cddeecd9bedf9cbcf9383f9d653147c7"],["/categories/js/page/2/index.html","eaa72da1acb3bbf40f43b4431068b3fd"],["/categories/js/page/3/index.html","1fc2675f6e1cd6bf5516b3ce97f53f15"],["/categories/js/page/4/index.html","0e35c4e0b878e9b99298ed73006f16ee"],["/categories/js/page/5/index.html","43319347d7af25f198495d1cd58252ba"],["/categories/node/index.html","3b55e4fe6fcac516ea4b33fde9ebc1b8"],["/categories/notes/index.html","9d77a997fbf115ce44802d5cdedabe0a"],["/categories/typeScript/index.html","9f26c5a839742cddf305e3d6d31ac094"],["/categories/vue/index.html","78468dbcd8369fd9552ac1091ba4db89"],["/categories/vue3/index.html","502262cdad8d5493985df8fdb1fa4b0f"],["/categories/webpack/index.html","cc4818bd9687ad0786b074607452835b"],["/categories/微信小程序/index.html","f4ac5cad66cbba90eb7fb79cfe391cf7"],["/categories/面试/index.html","1d2e4226b08f14632fd0032f2279c167"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","49c6e9327a80d4d56259c6001644d83d"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","4fd270983594b4077640e6aa2212a021"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/ts/images/01.png","c922cd12dab12bd6c46ee93bdd4205d8"],["/img/ts/images/02.png","3aa2056326e5d1c796af4ee14d5aa795"],["/img/ts/images/03.png","5d4a8b39b62c2c484b45dffa7f71d2a5"],["/img/ts/images/04.png","9005165e16c5fb263c3850b77b8c60bc"],["/img/ts/images/05.png","996ddffc76d0e5750a82f5a0473501b4"],["/img/ts/images/06.png","a52bf4f321fab1fee87cb087e0d22d04"],["/img/ts/images/07.png","36e3a3b114bcfad55498a774d9342e4f"],["/img/ts/images/08.png","3607e0c5650e9afa1384f2aac4009d62"],["/img/ts/images/09.png","dbeb822550e8eb71e78714035d790d38"],["/img/ts/images/10.png","e4a25517b0548f90ac6bef9d471ba0f1"],["/img/ts/images/11.png","dad677e46db0955c7d139a83b4b82cec"],["/img/ts/images/12.png","9745157eeb18de2635a64f65aeb34ea6"],["/img/ts/images/13.png","da212468d2ee4f8e9ba1f97843983786"],["/img/ts/images/43.gif","37c2e56cbc5c7a6fa18b043f8959a61c"],["/img/ts/images/44.png","6fe8492e0a34f7997c26473101a5352c"],["/img/ts/images/45.png","f799db600172453b1e1c864a85a9809a"],["/img/ts/images/46.png","9035adfac7596edda51156dacec1da06"],["/img/ts/images/47.png","2d75b31e7998a1e3c5ecec69a833a1d0"],["/img/ts/images/48.png","13beb8460f834a2a86866f9efaad66f0"],["/img/ts/images/49.png","540398c418c42be7de9f28b79882a107"],["/img/ts/images/50.png","18e4e8ef181ffd7eff2d1844cb704536"],["/img/ts/images/51.png","76bf41ed3e6bf0c976973364eb52fd76"],["/img/ts/images/52.png","f5d555290bc571215dd3ec30fd8aad42"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","404c579584bbc63e25b7432aaa2deb11"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","a18f590a8277246a8228b8b0ac6cbfef"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","4b0d51e8fa9565c8a0b80375868bb413"],["/page/2/index.html","56b441952e661ca4134cb4c06362d1d0"],["/page/3/index.html","1e6b7ae578ffe033165298ec8a1d53ab"],["/page/4/index.html","c22f3c022fed7a001c023ac4655fbf8f"],["/page/5/index.html","01164dbbf12be489c7e6f988bee9ad46"],["/page/6/index.html","a784a40ebe20241a2a1e3ad4ca533c74"],["/page/7/index.html","0947ecd508b5fb8909d5b3b007b67552"],["/page/8/index.html","7cfd46c318c64b76d58858551ed450ce"],["/page/9/index.html","7431b7ad9792388a30fc692947b4fd10"],["/project/index.html","522f9da4197c8e299a5c6af850d131e3"],["/sw-register.js","053a4d6a82380b67dbe6179e9111a8e3"],["/tags/BOM/index.html","a1613fbe7e691c3b83ee554bd92ec870"],["/tags/BTC/index.html","ae5ff9edba021e13693e5b58e9506b39"],["/tags/Dom/index.html","cdd34980c25da160a79bf7a739d35b1d"],["/tags/JavaScript面试基础理论/index.html","bcb561ac5508302aaad6d048264d9ea8"],["/tags/ajax/index.html","4edcacc6f9578e2967fe638bb8b0dad9"],["/tags/ajax2/index.html","3f8e69521298a2a660d3b00fa9a0da45"],["/tags/array-api/index.html","2d1f4e6c31ec7a80d490f6089a0e51ea"],["/tags/bind-call-apply/index.html","583eef2f55bb1a485ec1f7b17fd2911a"],["/tags/blog/index.html","9325618b9ac108d260233b061f1cdfbd"],["/tags/blog个性标签/index.html","e640102dc8570782a13cb93eced1d285"],["/tags/box/index.html","9b5c74865b8b1085316c19466cad35d6"],["/tags/cache/index.html","a67e5967b48c8b1b87a53e9d423049ac"],["/tags/center/index.html","726ad74112286ce63e294d34375ca53d"],["/tags/closure/index.html","b182df713477e96d00c76133a08dc941"],["/tags/column-layout/index.html","f47bc43c32ab7d9b1b5f760a3398106b"],["/tags/composition/index.html","fe6b7eb98619e9b1d98d62ab67e27a23"],["/tags/context-stack/index.html","6428b1c8cdf4c6c35f6a0137211e3582"],["/tags/continue-to-upload/index.html","6fc49eacd79378b5ceb1f5f40979dd0f"],["/tags/copy/index.html","f8d1419d019da26f206ffd9f2a112231"],["/tags/css-performance/index.html","1307540ca868bb02ec6690f90214c3ee"],["/tags/css/index.html","840eaaf8f319265b54e36a59901d26d2"],["/tags/css3-features/index.html","96c64d63052b4ab6f71f5860184e44ea"],["/tags/css面试/index.html","7e860a3ccb39ebe7e44df99a3d6e3660"],["/tags/css面试/page/2/index.html","9fb7ef94c2ae30bc119e47cb8d31df15"],["/tags/data-type/index.html","89a492e4247262698173294fe27f8063"],["/tags/decorator/index.html","26b460f41386c5cd7213cb52858fdeec"],["/tags/dp-px-dpr-ppi/index.html","519905695a40e445a0924fe3e711fa9a"],["/tags/em-px-rem-vh-vw/index.html","b8dbea7f1914fa88b5d82ab17026e207"],["/tags/es6/index.html","bc0f11e7762396dc52f7baa86a62935c"],["/tags/event-Model/index.html","0e8fb985fda351eee4fd3a38c0a1fb28"],["/tags/event-agent/index.html","ec9852efdf963399d60657dbe5d182ba"],["/tags/event-loop/index.html","5c5faa006d27884a27e466735bf1d03c"],["/tags/fine/index.html","066358cf9ac60b77bf109af8fbb59269"],["/tags/flexbox/index.html","7231db42ee3195d6193344e6bc3cd8d0"],["/tags/function-cache/index.html","0dab38282591454c7a3481364edf53f3"],["/tags/function/index.html","cb65770ef3221203ef698e5a73d8a5e4"],["/tags/functional-programming/index.html","4a41727380e0db31dc46081d6d1c9b19"],["/tags/gametime/index.html","9fcca552117b71f328988853788c29db"],["/tags/generator/index.html","236c03490a1ecf93351d4d256ecee275"],["/tags/goal/index.html","9393160388365cb391fa4dd5dcc59090"],["/tags/grid/index.html","d55dad550dd584f93d04fe64ca0ea298"],["/tags/hide-attributes/index.html","2907d5de0ffc7f6ca66351cc8fb11c99"],["/tags/his/index.html","b7ed407237c8a433c8672a3253b8b46b"],["/tags/hooks使用/index.html","6ae392936076cb30bea39a4912dcc9eb"],["/tags/html/index.html","006371139cf055082ac63f63ff7f8189"],["/tags/index.html","adc7c7b8180acea51f3bfffb6a454e9f"],["/tags/inherit/index.html","ac9d806e1948ae7a89f7a865d4aeb392"],["/tags/js-data-structure/index.html","50712b0ca6837a86bc0764820456bf93"],["/tags/js/index.html","3587ff12ad040aedde1c74fae6bf1e51"],["/tags/js面试/index.html","952f9064a0ab3b1b454f936c2aae4989"],["/tags/js面试/page/2/index.html","a9df811c79316f0a268aef30fd16bc51"],["/tags/js面试/page/3/index.html","085ff94185d712f8b0499d08c2004fd2"],["/tags/layout-painting/index.html","42b73aa4e972c96ad62b7520d6a91e3b"],["/tags/less-12px/index.html","c3c214391a0d8402d7fe25245976bc27"],["/tags/loss-accuracy/index.html","d9127873ac57d33dd846617b2a563c08"],["/tags/me/index.html","0eebffebd63f0b6368cef4f005ab9a0a"],["/tags/memory-leak/index.html","7c4e2e85b262b23c06ab639a92b2de10"],["/tags/modal-component/index.html","a52232f1cd0bf2fef3aa7aa5c75f131b"],["/tags/module/index.html","227e6027d2387ced37c9d1aea8723c80"],["/tags/my-carousel/index.html","de5ce3b940fbf318f1d00ce765f633ca"],["/tags/new/index.html","9020d39d013eabf4a7622c5e5def7af1"],["/tags/node/index.html","05e1f791d3e51e9c371268bf0a1edca5"],["/tags/object/index.html","66b6640da6374f390c316cc7764b299a"],["/tags/performance/index.html","c602e70bb9d5e7f3efee6d063d9a856f"],["/tags/promise/index.html","d87147a3b75e4e96ab59328c7f380a7a"],["/tags/prototype/index.html","76b3c606086233bc1ea623e255a02d65"],["/tags/proxy/index.html","53e8810cb9213b0955a5557d0de9423e"],["/tags/proxyEs6/index.html","8eae408ea0193c13f7f3895a6aa3f4f0"],["/tags/regexp/index.html","795ee1b71c58fdfa0d7adc8f149063b7"],["/tags/responsive-layout/index.html","9a54f423d2f243e943a10702611958e3"],["/tags/sass-less-stylus/index.html","0c1d020814e0910be1c5bbc13e0cc1a2"],["/tags/scope/index.html","9a913bcac63f9d89f9d5c6a6f0295e4b"],["/tags/security/index.html","2482a549a9e8f6627f995790d3d67407"],["/tags/selector/index.html","572e5f090e5ccc8ff5a87f3c76304de7"],["/tags/set-map/index.html","ad02aaddf2c5499d6ebf4383c39eb68d"],["/tags/single-multi-line/index.html","0fc2ab14fb02c9c63cdeee7dcb2259e0"],["/tags/single-sign/index.html","cefefb22a9f22ccd40ec09857eb55a9c"],["/tags/string-api/index.html","5525a7a9e1ceb76fce10a99722daa847"],["/tags/treeshaking/index.html","191a5fd38fdb358b5ad351c7986b4afa"],["/tags/triangle/index.html","9264d12f3c72af6508fb42a653d67fa0"],["/tags/ts报错解决持续更新/index.html","1cf5c673659935552acae6a734cfdcba"],["/tags/typeScript/index.html","39138527594c14e8d59d7f820b482819"],["/tags/typeScript基础知识/index.html","ecd4dab69a05f6ee6fca717401f6e77b"],["/tags/uniapp返回顶部/index.html","a835cfb84a4c4f15b887c1100eb7831e"],["/tags/var-let-const/index.html","9bee0b5327a2d2af31163721ae775415"],["/tags/visual-scrolling/index.html","abb3158a0f2b959bea9dee424de36d77"],["/tags/vue/index.html","46ae1039a16a497dd7d802ea28a2b984"],["/tags/vue3/index.html","b73ad8015ef7e100814c40af6862ad25"],["/tags/vue项目部署/index.html","3a15b4ef8929c2476184f41409418f88"],["/tags/下拉刷新/index.html","4221bf57eca93bcb9492afe9d19c048a"],["/tags/反问面试/index.html","ca339e14a9e674ea2e7a6d8d33334a20"],["/tags/和/index.html","7927999154a14263400f9bfe32b9a76d"],["/tags/如何设置文章置顶/index.html","8fe91587027ff42f0abdad88a30444e2"],["/tags/微信小程序/index.html","d078d8964b9a14f6190ffe45fa77c05a"],["/tags/星星/index.html","4c98e4946c81de100ea24e5d3874c2d9"],["/tags/防抖节流/index.html","4e3ed3635008530c4350338946c90539"],["/tags/面试/index.html","25ed0e281bd2da729a2580f6547e7667"],["/tags/面试问题集锦/index.html","554644eff4f34f3d9f7041a07c6ef491"]];
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
