/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","3b694064d76d4eef73ed1b3ab279d66b"],["/archives/10bf1714.html","7e1bf913945e9630f65a2777d29923e2"],["/archives/12529ae2.html","2823162b13acfa9bcb07389461644eca"],["/archives/14015a55.html","1292d7da046f08f2f46575b69249c344"],["/archives/171d1754.html","df8615566d5103a1bb7b4e117c4bae99"],["/archives/17a85756.html","687cb10712c763f710d7b5d2837d60cc"],["/archives/1879f8e5.html","92e09b9c0c038dd082787291b481a6df"],["/archives/1be48ee.html","4c3d95263b2c0645679cd4c44d0d1e73"],["/archives/1e021099.html","673cdfeeac82f5439948ae27bf582a75"],["/archives/2021/06/index.html","dc0939aeca8e4fc106a4856207f335df"],["/archives/2021/07/index.html","972ef4cc747ad20c465e0b62ceb7b1b2"],["/archives/2021/index.html","55aa61279555508086713b6256324342"],["/archives/2022/01/index.html","635eb71725fbd4fc4f2182d2831df5da"],["/archives/2022/02/index.html","df428cfead9987b557d72f8f5690f351"],["/archives/2022/03/index.html","3e70fbeeef0d4e743cd0739278214776"],["/archives/2022/05/index.html","44b5ff9992f7af254faa01700fde214c"],["/archives/2022/05/page/2/index.html","534a604547e4e6d23e4431ca43167729"],["/archives/2022/05/page/3/index.html","eda3e621d8dfa2912b84df5e3a1bfa29"],["/archives/2022/06/index.html","f2d0ff79c71e9dfabfd245d3b78c040c"],["/archives/2022/06/page/2/index.html","6630b8011620d8526b6e67f4e70c5b73"],["/archives/2022/06/page/3/index.html","6961c803b0164a49565800f16d2ce04b"],["/archives/2022/06/page/4/index.html","6cdc9a011a0ec038af0ee0fdca717cdb"],["/archives/2022/06/page/5/index.html","aa4bed5a7d1cdabc1205e161bbba68a5"],["/archives/2022/07/index.html","e283d5fdcff95e938151b42e61e5557b"],["/archives/2022/index.html","da4f134b953ceca680e629bb905a850d"],["/archives/2022/page/2/index.html","0aa562f056f2c4ca409c5ef599734bb8"],["/archives/2022/page/3/index.html","bc04471ce541b7d179660efd401fe232"],["/archives/2022/page/4/index.html","390cfd3ac168667990bceed062efef68"],["/archives/2022/page/5/index.html","72ddbd0d45f85a5adedc3064de7bd779"],["/archives/2022/page/6/index.html","0aa754d1aa823a51e93454c4b81c8382"],["/archives/2022/page/7/index.html","62fc8eb36074f95c5dcbc9356bce132c"],["/archives/2022/page/8/index.html","831c674a898193e9a6ea82ec8e62ca30"],["/archives/2022/page/9/index.html","26698a8b8b8b7cad1d5783cf24e4e271"],["/archives/2023/03/index.html","70d30f032bc43a1256502e4d491e8f7e"],["/archives/2023/04/index.html","0e344d5658c3834d9f11489665bf0923"],["/archives/2023/index.html","55f821b0f7b638c5ccd928f7bf4a0434"],["/archives/203410a2.html","8ab7e3e044760e15a4c99b5e613f4f59"],["/archives/2039e3ed.html","30218dd1a9cb21e34e51cf4528f6317a"],["/archives/28d88e6.html","593ccecd23fa83bd7b952db7507dbbf9"],["/archives/294b86eb.html","24c235051eb0f91a8e6119415eaf3c40"],["/archives/2b098523.html","61a6b757ae8e41101440c22cab83c5c9"],["/archives/2e20d937.html","d64f056a1d8e7af5ba778dab2b337957"],["/archives/2f8b36fc.html","4efee0c5b8b62ca3df5f7e77f29ed16f"],["/archives/30b90bc0.html","837120dec8ba0cca6c9a91e5981453e8"],["/archives/336f0513.html","37cd5eb9747776b1c6497b36fa14bb60"],["/archives/33b9c85e.html","f95cd9f7930583dc30a2c43ddf361e69"],["/archives/36044e1a.html","36a3e8e2506db53b4c0b0844f4e1b8af"],["/archives/37919ccb.html","7858429d9fe885156de656968222da89"],["/archives/39a5927a.html","8356ff559e7b498875aa41df3de49d6c"],["/archives/3f038ede.html","01506de08765139a674e58bdada1a6e6"],["/archives/40f0eb24.html","0b492995c7658447ebf4feffe9166f97"],["/archives/41476be7.html","c05c066f06a70f01a37f4ec322e06621"],["/archives/42b82995.html","ac7bbb6afaba47fbacf672604e834c7f"],["/archives/47c3840f.html","6183a59e11dbbaf117a521a31de57211"],["/archives/48078dd1.html","4ef00473cc0d64b903265c05d9f57b6b"],["/archives/4dbabb82.html","3631254cbc645eeccc7ebb9f3116a2a7"],["/archives/50cfbdee.html","0b93d62270b04d1ada41c52bf6582731"],["/archives/574fecf1.html","ff27c5f17e49eef2989c119f1a2000a4"],["/archives/59b49683.html","6a791422a6a16fa1e3ae496c3d79210e"],["/archives/67902db1.html","fb2ae7d60c7fc64dee53db0d5d3f448f"],["/archives/6be34445.html","5973d0a4c1abaad1cc3903ad703d61a4"],["/archives/7331f3bb.html","69ee31c24353b1cfb44acbb248368041"],["/archives/7472fc2f.html","46124d71509ce4e4a76ad2d6d6bc6244"],["/archives/75b2f6c6.html","07b249cc2f83275141ad522663523241"],["/archives/77971af0.html","d21253c99219f76accf5dbb7e3309f26"],["/archives/78ca6597.html","154560ad3d660bd845699899abf3b680"],["/archives/78cea6d8.html","bd372659cec6244db6d14637c41e9f21"],["/archives/7b268071.html","ae972da0592158615aa266f2965376e4"],["/archives/7c942302.html","d8cb139fa12514755d06242865c98a1f"],["/archives/7d76407e.html","f18068a68553ab97d432c0c1834265b8"],["/archives/7f6cf7b0.html","4592b568fd4c573862429c795ee754d6"],["/archives/82d79681.html","992dbafd45732787e3aa2ae94707778b"],["/archives/84a91e69.html","d22af397a2a549fbe2d5aeac22617a1c"],["/archives/857fe845.html","0967dfc1b92ebc97f262702431daf3e6"],["/archives/88d3d46f.html","2850328e6af71e389fd7866feaa69aa2"],["/archives/8a9483a.html","3313611e8e5a18d513247d043a10630f"],["/archives/8ad35e55.html","81f0d17ea21285b9888a5009cddb29f7"],["/archives/8d5284dc.html","c9028ce8dae07c1cbb67df05391e3349"],["/archives/92004154.html","899c9b70fc37ff8429ca42bbb1ec46c1"],["/archives/9370d73f.html","c9526273aaceed995a7f1109724b25f7"],["/archives/93ae9a14.html","5343d0b4e992c86bd1cb6b72926aae31"],["/archives/9417ce47.html","2ee2d41cb3ecf0c5e23a8ea9aeb016a4"],["/archives/942a5c06.html","6137bd60025a6b1b9c0f1c816efa4e74"],["/archives/958c57b5.html","3548ed4fc45f2ad6c1836d52ba896073"],["/archives/9692e25d.html","8f946c760b44a800a18de91fdadf7fad"],["/archives/97a9ab5c.html","2e324427567f1c0e9d903026c1945d77"],["/archives/97b76847.html","f68507a9eac3c85f68a54ad359aca747"],["/archives/9a0dce2d.html","5820f6ae7ab54b0710f353bcf47ba201"],["/archives/9b0c2390.html","160049b2bc970114870e2561ae7882c2"],["/archives/9e5f33b7.html","e2517f1423f58415af8826c172743f81"],["/archives/9f1ed84.html","f6ec85d318b89c84af573ca580dad4d7"],["/archives/a0245a2a.html","edb59987b472bfc16d0f46014e669d27"],["/archives/a10ceeb7.html","ecbed23a75a40e1c4418c656e444d6db"],["/archives/a36a5ae4.html","62483023100b38db4ce80a74b692bc52"],["/archives/a8adabec.html","b4f5a9638b817d0c136b69565b061f48"],["/archives/a9432027.html","8df624136b6b3ddf005782652d7cdc6e"],["/archives/ac5292c2.html","d061f10c9be0d569e4ae3df8270e0292"],["/archives/adb78c8a.html","b1274eb80b6ab769833433f3ae511f45"],["/archives/ae4c07b8.html","f3300dfebee72c09e4d3ddd3ef582a13"],["/archives/af55d3.html","858270a128c5bb6ed6351582632ee991"],["/archives/afcd4575.html","216e262cbf9bbe262c1d9b3d3bcc883f"],["/archives/b21f48b9.html","e5e9ca34452f7f9b5c1b57bd2582b182"],["/archives/b51bdcfa.html","95f0e9f03e97f4314282c6d881d7cb90"],["/archives/b7b51641.html","63cbf9aa96894a98638a385988ee9568"],["/archives/b9f20a20.html","0ec8f338c0dc61929e85fb2f918b84af"],["/archives/be945145.html","8fddec9851ac16b8abf90cc70647cafb"],["/archives/c0add594.html","119278215b01648efda7b2e3d1c4566e"],["/archives/c242628.html","95bb8fd3763ee22d0fee19f5976cc3c1"],["/archives/c59bd5c1.html","c7829d77f21c79ddeb84c22d6a292a0b"],["/archives/c5a6a264.html","e06936d811ce3999c75db4e62d52aafb"],["/archives/c5a97815.html","cdcf4d747e57f77eab647566371637c3"],["/archives/c7f4347.html","8e69f154ea2977962a3a0380e67cae35"],["/archives/caae163d.html","fac01fb9eb8fa1c9d926a59bffc4855f"],["/archives/caae7b70.html","c0cfea1a1dc41b7810cf4ae28e71fd9b"],["/archives/ced3960e.html","29d9a41ac387eb95630f41bba3782730"],["/archives/cf2f5248.html","ee2878004410a6e44a651b727acc6b65"],["/archives/d3b694df.html","4804a5392a1debff4ded114046e0bffd"],["/archives/dc3acdcc.html","d79a1d99ded25d140571786b408d78a7"],["/archives/df976d87.html","0a3d2bd2c6481731d8fc241b7e50855b"],["/archives/e0c98e7a.html","708d6d6a73e02a77cb2f83bea0d90c1f"],["/archives/e6437fbd.html","13469933a1d82bde88b36ab571eaf86f"],["/archives/eab5cc79.html","c90fd8e6dcdc5aeda6ef12a41bacdb0e"],["/archives/eb05a173.html","404d98b8c4d5c5a6f73547f6c3efa5af"],["/archives/f1d0391c.html","91369580c65fb7510eecb1292b4c7fef"],["/archives/f3d3ee5b.html","77bb8b536fc6381ee1d997ea1c63db20"],["/archives/f7feebc7.html","10c4efb8a36e523368a624e648a13543"],["/archives/f9f4b1e7.html","9cb3cb310ef6c9ca209e79177a1a18ee"],["/archives/fcdceb2e.html","1350cfbdd53c70074a5c82447f122278"],["/archives/index.html","f2669e1cb0e2139bf1d9e0dac21b32ca"],["/archives/page/10/index.html","9734d638ed84ae93888a55fa5a9ea3e5"],["/archives/page/11/index.html","97dac474b247a62409f5c6ed545894ab"],["/archives/page/2/index.html","2494c484756ed3dc6c7f440d39dc779b"],["/archives/page/3/index.html","e137cb8b183a9c3467fee8d05761be24"],["/archives/page/4/index.html","396838aceb40b85ac15e0e7b2518b579"],["/archives/page/5/index.html","7e7baa12c82cb888a02cfabae3758104"],["/archives/page/6/index.html","0001bf1025be7d721da263db5a5153f8"],["/archives/page/7/index.html","692c942e05481213325d4646eb376193"],["/archives/page/8/index.html","0b21ffc0ad05a055514d2fbe91294e47"],["/archives/page/9/index.html","48beff167b4d5cb05c0d6868d32a0b10"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/ajax/index.html","85a9f14110e6469f84edf54c7e629edf"],["/categories/blog/index.html","6eba87b1e712b2ceea77e05ba9024a26"],["/categories/css/index.html","2aae8deaa3903db56adfd73c785c2d31"],["/categories/css/page/2/index.html","a3cda2f6d3cb2cffb253c33de7a09233"],["/categories/css/page/3/index.html","595ef8e04b26f1e3556e82363a338483"],["/categories/fine/index.html","3fc6c480edd8d905ec1ef3e7fbe05eb1"],["/categories/html/index.html","326ebe1215323813c021c03956236960"],["/categories/index.html","f78b8219a175587439840e6d05b8be4e"],["/categories/js/index.html","d8833b36afb5a80e3bc86715126a69fa"],["/categories/js/page/2/index.html","20feb66f4289bf03031ffd9ab5e3d9d2"],["/categories/js/page/3/index.html","f1d86179d47bdf2cc58eb1da96f22b83"],["/categories/js/page/4/index.html","0b02d20a1e446985fe0d9a21684ea298"],["/categories/js/page/5/index.html","381a2b24fa38f9c7998ee3bbcf16cf76"],["/categories/node/index.html","701638d33513235fb40534618187c360"],["/categories/notes/index.html","2ab19cb8d8531ac10ccce71c2fca6084"],["/categories/react/index.html","74249457b6741d50cf43b623dcb016dd"],["/categories/react/ts/index.html","b95813a054d3e8db761c963259ebcac5"],["/categories/typeScript/index.html","0c4dc415daf95ff0a0968921d14ec2e5"],["/categories/vue/index.html","b8bbcc65a60ad6ea344ed4f35d25ce3c"],["/categories/vue3/index.html","ad8c9b4a8a1f86b960cd5ffc5b6f5a72"],["/categories/webpack/index.html","7a0b7d980fa42972f90c42390be5018c"],["/categories/微信小程序/index.html","1a1f8e898f446bd570dd550bd0a4cf4a"],["/categories/面试/index.html","aad1b90296cbe52dbfee89e32dd7dabb"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","c5e35fe353acdce3e2190ea52c34eb6e"],["/css/main.css","761962f2f86cac33fdcbe17ab370d701"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data/chinaMap/ChinaMap.html","61fc0e9bde67f41eedad285ea8d6dc97"],["/data/chinaMap/js/echarts.min.js","aea11a8b62b83d86de4cbd84bf2cee58"],["/data/chinaMap/js/jquery.js","46836bbc603c9565b5cc061100ccbac8"],["/data/photos-main/README.html","0a0e3a12b39e069602f246c5e7cf8b18"],["/data/photos-main/index.html","49c6e9327a80d4d56259c6001644d83d"],["/data/photos-main/wrist.html","e28f03f95ea765ce3aa3af85eefaa72e"],["/fine/index.html","ab4e28d037ef4384e78d12e6e61658b6"],["/img/1.png","c67f528baec913de34616eb6f5ff689e"],["/img/10.png","c3a3008dcc9887bdf6eaf39194d91034"],["/img/11.png","a5a9c350083e68bdab221a001872983b"],["/img/12.png","3635fc1a7f90ce27ab82d04b6d5bd94f"],["/img/13.png","c3f2dc414407a42c538f9e00312dd909"],["/img/14.png","e955a55b972cee0528a3eb072ba360ca"],["/img/15.png","32a8fc723823bd3ebcbc981bb3979971"],["/img/16.png","6a7c25f4613692cb9f65d5d8d2f4e980"],["/img/17.png","4665384d70224cbb84394670b220277c"],["/img/18.png","9e6dc060e426c0b1429b1c19c058608b"],["/img/19.png","b772f4843bdc4f813f54d07bd8a2aacc"],["/img/2.png","a21db7eb8ab547e8eb8e85103ea9532f"],["/img/20.png","93692970117f35c1870b0097e398119f"],["/img/21.png","4a7fee045bc4f24258a766e888838f9a"],["/img/22.png","63d5375e9a442ea0a3086db3c2b8950f"],["/img/224.png","d8928d52fa183c0cd05da258ba4ec2c1"],["/img/23.png","708292c429cfc2e89084fefe0e3d2d57"],["/img/25.png","82b9d6945951307989d9a2e58c11e8bc"],["/img/26.png","e78d172755566afda78998bbb9fa1652"],["/img/27.png","d8a4ba51a9c554b7125f8c7ae92bfdba"],["/img/28.png","9ba4688e21d2273c6af97b8f03b1291a"],["/img/29.png","4993a211efa0ceb4f32170d4f94c7d37"],["/img/3.png","12807dd7e424b6ef50395e7f65f7a558"],["/img/30.png","b09c8a7fda1caa9cba6fbbea2cfe73f8"],["/img/31.png","25b99aeb625a9b894f7133c8cbf82213"],["/img/32.png","c5b50cb3ed990302ddafa2b589be020a"],["/img/33.png","693e27aed28e555752b4911757145b05"],["/img/34.png","2209c3b86f78c1602ab8d20b1b341b2d"],["/img/35.png","9ddc3c64a94e2e90fe7a9412af18ef34"],["/img/36.png","2779fbabd204c51d2e273e36d70761bb"],["/img/37.png","b5e0864090536c64b95935b3bc15eaa7"],["/img/38.png","f34698098f2d5927bbfe658e877a15ba"],["/img/39.png","7c2df889867202abebc0e50ee8fa01aa"],["/img/4.png","5db8d155c9b5c78f9305ec7198a23630"],["/img/40.png","aaf6dbb67048b54e9653cf3d59947694"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/41.png","3f238d0cff5ad64c4498251aa7f55886"],["/img/42.png","1409cf41db4d515ff7a68bfda7a3e88a"],["/img/43.png","78606ff8443435e03c371c48ef7f02dd"],["/img/44.png","dda6fb6ef082f1f27158815ba239ec8b"],["/img/449.png","8192bd9e186b63c8c1d50414c25bac68"],["/img/45.png","35e4cac8ba85eca722f242f70456488d"],["/img/46.png","cdef4857db218bf4a27510003df0c8a7"],["/img/47.png","c42fcb614721d22c9cdd8315c06f2ffe"],["/img/48.png","47ba240d84fe7e0ca028f97a2bdfda7f"],["/img/5.png","b4b655405272a9ac0243ee4bbcc59eec"],["/img/50.png","d7cd491ba18b06f6ac29db7c203f54b8"],["/img/51.png","dd3c362e4b8ec4c11b2eb61153b98841"],["/img/52.png","ceb4052aea768c9af8be73224a2d8914"],["/img/53.png","af629fe655683b7188c0cbf949be34ee"],["/img/54.png","fe63b6bd4f86e0986eacc6e23f9ccac6"],["/img/55.png","ba221974710785254247e4057f881baa"],["/img/56.png","bab240e7f67f443c8ed0aeb1c8290a23"],["/img/57.png","59fad7ac172be254b77aeaa5a84722d9"],["/img/58.png","af5ff2367feb9816c7045eba6fee5b3c"],["/img/59.png","3147b0efff78694f43ba91763c300684"],["/img/6.png","7474cece3154126e26381f0d4022886b"],["/img/60.png","a2e8df632a197d6ffa6b90de412f0bf8"],["/img/61.png","e5aefbe1889e50d8edf1593f04518ac1"],["/img/62.png","bb089646a48140b32e9e9b0d2797817e"],["/img/63.png","b84683f1517b5faf8679e1c7b25c5ff6"],["/img/64.png","7724e6b6d6c3f8963b0e8511eb79ddbd"],["/img/7.png","d49e5a77187e54e3db2ad05efa04ce2f"],["/img/8.png","c444b64ba1207472b67dcc183e38d230"],["/img/9.png","43fa704f3689fac002483490c8571f58"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/base/1.jpg","e9b2f36de0502cc6c66f5ec57db5a4bb"],["/img/base/10.jpg","939978ba438f80c5f291f6a2bb9ca60b"],["/img/base/11.jpg","abee31548a1a1c15de74cfd19fc5382f"],["/img/base/13.jpg","a742a36ae9435cc34140c40e34738c25"],["/img/base/14.jpg","827bf7119fcf504d28c993b248ddb6eb"],["/img/base/17.jpg","7ab1628cb8d7b33d02b6d20db4e807de"],["/img/base/18.jpg","8b929dae15ae4fecd1f9c7d067c8631d"],["/img/base/19.jpg","e454066e91fff00665ebf507e1ea6158"],["/img/base/2.png","a97636b3d48be9ba49b2eeebe8662d67"],["/img/base/20.jpg","0d18fce962a5e71a8001707bacebaaef"],["/img/base/21.jpg","db25745e3f7b3253c29bc8b759b65498"],["/img/base/22.jpg","bdc38fbdc5ba4323259e1aa8862986ec"],["/img/base/23.jpg","dc4b560a2f5b66cf8cdc23790bb4bbb1"],["/img/base/24.jpg","3ca8e15dfc457e1477f8e85c74f895a9"],["/img/base/25.jpg","45af2b100bc342f2eb82f273bb6cefdd"],["/img/base/26.jpg","befef95dc400f04da8bde7ded44f0e50"],["/img/base/27.jpg","634b0ab0d15bd9f90122855c26740fea"],["/img/base/28.jpg","ac6012fa8a359957ef51e6a1522ce3b9"],["/img/base/29.jpg","dd90e7bc80de852747df8eeeefd6520e"],["/img/base/3.jpg","41248b9e4b1fdb7b6de027f268ca9435"],["/img/base/30.jpg","0788ad779fc0e10689ad2fee5ae565d5"],["/img/base/31.jpg","d60e673f3b2cedff9e811adfecad10d4"],["/img/base/32.jpg","a43a02103f2ede6502d7a81579f4da6e"],["/img/base/33.jpg","2c21af53e93d73456d03a99f454c4b4e"],["/img/base/34.jpg","53f2eb7eadeb127eda6950da0a628f8c"],["/img/base/35.jpg","e6685f6c95322ed3dc66d7900caec0c5"],["/img/base/36.jpg","02d80b60754a6ff1094106bdaadaec2c"],["/img/base/38.jpg","70b63d2560f5c54456bcb8a479113a94"],["/img/base/4.jpg","6304fdca6d543d604b86327e398015d1"],["/img/base/40.jpg","8137f514f1d0b8d81447dd9b0f13a417"],["/img/base/42.jpg","936f464cbbc98aaf7e31a469001ed7dc"],["/img/base/5.jpg","f6de87f6e4dd5e8c1538a2b4874cc962"],["/img/base/7.jpg","944132b586b290bd5bf29a2365485f33"],["/img/base/8.jpg","f5786ab54386db401aa174a09a2f89f9"],["/img/base/w1.jpg","768f2b869bba55e3c8c564b2eb30d5c4"],["/img/base/w10.jpg","9011bcf07d02c101ba179c1f02691968"],["/img/base/w11.jpg","5d76a0b66a04fc7e4f78ca4d146b8adf"],["/img/base/w12.jpg","0ca304ae4944936bb9546a085c1297c8"],["/img/base/w13.jpg","112d54745f059b4c4e976c2dce464eb9"],["/img/base/w14.jpg","577ee10427e52d506ea3ada5a1876827"],["/img/base/w15.jpg","0d55e414d9ec5fe5fe94b6facb15020b"],["/img/base/w16.jpg","84d0e3be272f68f013adfb0e44d5160e"],["/img/base/w17.jpg","ec5aed2cd1f31cc43f01207af8b7ef63"],["/img/base/w18.jpg","4f9b3a784dc79fab02272f59dc724290"],["/img/base/w19.jpg","19aaf535039cc72557c21600c18d31ed"],["/img/base/w2.jpg","f698ab32937cd065060d4da6793af003"],["/img/base/w20.jpg","e769b79ba2b5f7945d48da9874d3d082"],["/img/base/w21.jpg","c4fce4dfa1e6697bd3512f3e32e49450"],["/img/base/w22.jpg","e59e75d61b252690ed54149779511b54"],["/img/base/w23.jpg","12942a34fe04aaf50e39b55a1409fa9a"],["/img/base/w24.jpg","6c2b97f8db4ef4fb4aaf07e6617fcd49"],["/img/base/w25jpg.jpg","faaa5cbcd370bdc2f8d5261755957a47"],["/img/base/w26.jpg","1b987773c4725d80d2e60c34c3aef72b"],["/img/base/w27.jpg","bdff99c451f88b1c84f747bf5e179572"],["/img/base/w28.jpg","61a62920ffc5d16f0600bf60037ba2b6"],["/img/base/w29.jpg","3d974a1a2508b14c5a44e2dfe3fe60e6"],["/img/base/w3.jpg","8a8a6d52c2689a3de50c88213a3fe2f2"],["/img/base/w30.jpg","0c9821730e9c90ceab647f38af5bb7f2"],["/img/base/w31.jpg","d9d42dc1b7ce0acc0cfd32644cfd6b60"],["/img/base/w32.jpg","3cdad4fec9fd8d90da7e88ee5081a9fd"],["/img/base/w33.jpg","c2ab4c4400aec36155b3bb9777fb6934"],["/img/base/w34.jpg","5451b88951216b73a7ba8e446e9abd50"],["/img/base/w35.jpg","260559578ff5602ecf6c7ea5bf15a7d3"],["/img/base/w36.jpg","a1396740c136533283828232c04ef292"],["/img/base/w37.jpg","6dd1c2c89d156a014d3e51759cebc6f8"],["/img/base/w38.jpg","6ed289515d7b18f3910d0d80c8bf2459"],["/img/base/w39.jpg","1ec04787e6c24bbecb9ec8e3da51ff1b"],["/img/base/w4.jpg","e78ba53d23910216a2f780a05e1b0fe9"],["/img/base/w40.jpg","595e214d7303eec40d9fab417a078be4"],["/img/base/w41.jpg","d5a0eb1c21976d0767a3b9e06ba8fb8d"],["/img/base/w42.jpg","19b27cebe79c8e8c6f7a8c1f8fa2d6ab"],["/img/base/w43.jpg","672b18b6c80828b2b08fbdc729760ce3"],["/img/base/w44.jpg","9568b05022646e99643a6ded3292c017"],["/img/base/w45.jpg","c841eeef51e328b0e26097502f3516cf"],["/img/base/w46.jpg","f827cc2c86d0befd1032df5600ac38b1"],["/img/base/w47.jpg","af4a45f98b5c366f8eb3244c7302c089"],["/img/base/w48.jpg","66b9ddb771a4d3dcb52cf6003189be92"],["/img/base/w49.jpg","a9452896d0966c95d019410d55b46b3d"],["/img/base/w5.jpg","a965eee011b1cceab3de8c5e2aae7c39"],["/img/base/w50.jpg","928204727692a38fa8222814cee4760e"],["/img/base/w51.jpg","b50a59faadf04d546200f232f6c10659"],["/img/base/w52.jpg","43d4f67671777cea77c9502d5746c1dc"],["/img/base/w53.jpg","0e8a8342d3489f57197f36d4d7ca3fa5"],["/img/base/w54.jpg","9dea3896a9f2cdc40bae095fbffd33f6"],["/img/base/w55.jpg","c333fcc4f0621fb4caa213f15939c37f"],["/img/base/w6.jpg","6448962f815a726cbb05b71292a5ec5e"],["/img/base/w7.jpg","5338b871da35d4ae72273c641dff9d20"],["/img/base/w8.jpg","616dc0e8d983aa737322d2389ebaa474"],["/img/base/w9.jpg","27f24bd309de8a9b9ccc7b4581441c0f"],["/img/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/comment_bg.png","c4702098cd37774056c2f5ffcceb3130"],["/img/favicon.png","a2138ca7b864576f9218975d9a3f1a64"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/header.svg","160b17de4b2fe9b2101e44d9c20f93aa"],["/img/l (1).jpg","9f4c8f5d48891eb8ec5d61cadabb9ef9"],["/img/l (1).png","c6c9e8a5ddbef6da3f85f0c7d7178372"],["/img/l (10).jpg","0015467e36e1be80263cadf8439ccefb"],["/img/l (11).jpg","546c099ac8165df3d6b813134bdb0af5"],["/img/l (12).jpg","3ec9434632a579a663de2dd5ca90d8a3"],["/img/l (13).jpg","10a460a987988b957250c5c117caf4a1"],["/img/l (14).jpg","5b41c8623e5739a42730cd308ca4964d"],["/img/l (15).jpg","6bc25dfa6ea8b9610ad3b64b53dc446a"],["/img/l (16).jpg","309986aa51aa6c53f1101e581b534cb9"],["/img/l (17).jpg","12259ef35b8f0a9c2ff742629510df54"],["/img/l (18).jpg","ae7f9fc77b62c5a237c465de071da7e0"],["/img/l (19).jpg","9fc2033a36382ea2f85b7a31534e7223"],["/img/l (2).jpg","04a0c17c11b11b062e3b1fc63cd1d913"],["/img/l (2).png","a99a56dcf0d136f4ee1bb2a975a528aa"],["/img/l (20).jpg","a401678ca5590873647284b37324602b"],["/img/l (21).jpg","41c9f2f13df2ea7f61173b1f9fb90cd0"],["/img/l (22).jpg","383caa31ab2ba915145a1eddfa657b54"],["/img/l (23).jpg","f27eb5201f1be5e05d18aca2708f6557"],["/img/l (24).jpg","ed4a4d8aac36a70b5a25ad966b49121f"],["/img/l (25).jpg","c82b7f3af1b42e97d6e5c018f9142361"],["/img/l (26).jpg","171632121fb0f6a9959a19c077f78772"],["/img/l (27).jpg","2e30ddb940a6fd6637b9c79bba23cfb9"],["/img/l (28).jpg","a229b5b0ad90a5ac79bb18920b63e57e"],["/img/l (29).jpg","077770401af51b1c50e010f7f91c83d8"],["/img/l (3).jpg","14e793d51725f90b1f627eb74f4aad28"],["/img/l (30).jpg","a4f4672e6df02feca377df1ec07d2e64"],["/img/l (31).jpg","e0ac5d08d88d5603587788c1515e5807"],["/img/l (32).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (33).jpg","a401678ca5590873647284b37324602b"],["/img/l (34).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (35).jpg","63ddbc267a206f496eb8da01f3a34cb2"],["/img/l (36).jpg","2b53b87f5f4d43f67837ad31068ce1b6"],["/img/l (37).jpg","26e4f8dcf9b4216c32de70da067f7e6c"],["/img/l (38).jpg","505d07c875549cbef08e2099a08f9aa6"],["/img/l (39).jpg","b3aaad8971913b0384f86a2b77cd4d6e"],["/img/l (4).jpg","f0bd54b6a10049f389661c552a9e37b7"],["/img/l (40).jpg","9c3d83ec86ef7ce9a6f1ebef48adb451"],["/img/l (41).jpg","66ff6e0ff341cab945669d80ea84d411"],["/img/l (42).jpg","b31387d28f29a3909784bc783a8826dc"],["/img/l (43).jpg","1087b8747c018aaad61ef15049bc7744"],["/img/l (44).jpg","a11f73f26e07f99a357f4b40bc94c231"],["/img/l (45).jpg","bcafa5ab5580ad22a565ceb3cb4184ee"],["/img/l (46).jpg","16c489fd5ad972879c0152940fd3b87a"],["/img/l (47).jpg","2a951cd59981d0db6b59c56aa9e3d849"],["/img/l (48).jpg","80dc2f1c58d78afd0d889c01d27b6efe"],["/img/l (49).jpg","3c3fc947ac2f05d131163b5a426cf146"],["/img/l (5).jpg","f056a01967d04774e03fc97efc380017"],["/img/l (50).jpg","82810981ec4ce6174624607d3cc23e99"],["/img/l (51).jpg","e2c991c7b553eb748ffb6d943a2cc0f0"],["/img/l (52).jpg","0345fc38268423978eaa098cd6beedd7"],["/img/l (53).jpg","6eca339a6a7c538bd1aa660710ba9ea1"],["/img/l (54).jpg","7b78bff650e5a7c242ccaa84ac7cbfdf"],["/img/l (55).jpg","41624bf4a35b5e29c84362d19d5be435"],["/img/l (56).jpg","f9ed25bda510b85b7a98ca89d9f8a260"],["/img/l (57).jpg","86402c610074335aed655c9f3d73b257"],["/img/l (58).jpg","f445e09e0b06c5bb5836f6504a9f4f0d"],["/img/l (59).jpg","717444b9eb39a127f4de81ed780fe6f9"],["/img/l (6).jpg","9634b533a4b05f26378beb820a43920e"],["/img/l (60).jpg","cfea1f21e0a40c09a51dc7cbdaf9ec2b"],["/img/l (7).jpg","f267ccb553abedf0c59647d44c75024f"],["/img/l (8).jpg","6adc3a28afe21c487f13c303320fa3d1"],["/img/l (9).jpg","fd74ce5fc04cd858fa3cd656944fae81"],["/img/love.gif","0ee16b8920f9f0f77781eb818e1f85b4"],["/img/mvv.png","b0bbafcf7cd0cec64873bd8bdba2e9b6"],["/img/picfive/wallfive (1).png","b963577ec28764b05544a3e410dadf59"],["/img/picfive/wallfive (10).png","1475a78f5dd0fe4f972604696fa244dc"],["/img/picfive/wallfive (11).png","b168c26b11b08150c0ed4f262776ff6e"],["/img/picfive/wallfive (12).png","6c59c20764a28618a92e6cbc7267b53e"],["/img/picfive/wallfive (13).png","309b49dc2f341701afc05db43b5542db"],["/img/picfive/wallfive (14).png","72febc78bac92406d1374c008f263f61"],["/img/picfive/wallfive (15).png","d3a9df4b1432707ff0412b4571dd9eea"],["/img/picfive/wallfive (16).png","5c700a6edd8dfa2e2e32c6f873099680"],["/img/picfive/wallfive (17).png","176dcb45e57000cefe2a18e65eb74bd6"],["/img/picfive/wallfive (18).png","e83eb991cbb8ac711b6e9b2f5b744038"],["/img/picfive/wallfive (2).png","ff078eb6c98a4ddbb2a40acff8998df2"],["/img/picfive/wallfive (20).png","79ee831296ea96d20542fc4d1f080be2"],["/img/picfive/wallfive (21).png","8776929635fbddd1841e6f3d38db3079"],["/img/picfive/wallfive (22).png","6755132e263af1b52f03659a926c0872"],["/img/picfive/wallfive (23).png","d79340aa6fba37258e099b1776cc4137"],["/img/picfive/wallfive (24).png","967f8b90979411247fd3cbca7412db18"],["/img/picfive/wallfive (25).png","0db2503b7253e7c470b641b68a79ba30"],["/img/picfive/wallfive (26).png","d447248d5b5bd7c97b0401978d8a9327"],["/img/picfive/wallfive (27).png","d94cc744867f046953db280f96457963"],["/img/picfive/wallfive (29).png","bc1225b68bc027c00e5ac9abc7460d6c"],["/img/picfive/wallfive (3).png","5c3b353b4131dfc557cc7e0debbe016b"],["/img/picfive/wallfive (32).png","e38b8e020023212b3df557e9e7c8fa8f"],["/img/picfive/wallfive (4).png","184596742eb2146ba9e070889b2a6be2"],["/img/picfive/wallfive (6).png","48b329cddc32080b6d4d9243fe5bcee5"],["/img/picfive/wallfive (7).png","da7d5c33e45e1248d116ff8462f72daa"],["/img/picfive/wallfive (8).png","781c0ca20ca0bb05c64e1edd9afa6d81"],["/img/picfive/wallfive (9).png","35386e27765a2a778e0727ac81447051"],["/img/picsix/wallsix (1).png","4bf1a2ae733b0287e5b7664c6a7cb7d7"],["/img/picsix/wallsix (2).png","a9949f08993979bb7484d4f636cbd306"],["/img/picsix/wallsix (3).png","ac16844d3f32636f72832867480e2322"],["/img/picsix/wallsix (4).png","e9c2355a1d9cde53b393f94b6a28f875"],["/img/picsix/wallsix (5).png","dfe00fc5dd1eb0e452e5f34bdffef5e2"],["/img/picsix/wallsix (6).png","c81bc68506446f136c9b694ed7db050d"],["/img/picsix/wallsix (8).png","ab6a356e6385d341bdfdac65bd7c6abd"],["/img/ts/images/01.png","c922cd12dab12bd6c46ee93bdd4205d8"],["/img/ts/images/02.png","3aa2056326e5d1c796af4ee14d5aa795"],["/img/ts/images/03.png","5d4a8b39b62c2c484b45dffa7f71d2a5"],["/img/ts/images/04.png","9005165e16c5fb263c3850b77b8c60bc"],["/img/ts/images/05.png","996ddffc76d0e5750a82f5a0473501b4"],["/img/ts/images/06.png","a52bf4f321fab1fee87cb087e0d22d04"],["/img/ts/images/07.png","36e3a3b114bcfad55498a774d9342e4f"],["/img/ts/images/08.png","3607e0c5650e9afa1384f2aac4009d62"],["/img/ts/images/09.png","dbeb822550e8eb71e78714035d790d38"],["/img/ts/images/10.png","e4a25517b0548f90ac6bef9d471ba0f1"],["/img/ts/images/11.png","dad677e46db0955c7d139a83b4b82cec"],["/img/ts/images/12.png","9745157eeb18de2635a64f65aeb34ea6"],["/img/ts/images/13.png","da212468d2ee4f8e9ba1f97843983786"],["/img/ts/images/43.gif","37c2e56cbc5c7a6fa18b043f8959a61c"],["/img/ts/images/44.png","6fe8492e0a34f7997c26473101a5352c"],["/img/ts/images/45.png","f799db600172453b1e1c864a85a9809a"],["/img/ts/images/46.png","9035adfac7596edda51156dacec1da06"],["/img/ts/images/47.png","2d75b31e7998a1e3c5ecec69a833a1d0"],["/img/ts/images/48.png","13beb8460f834a2a86866f9efaad66f0"],["/img/ts/images/49.png","540398c418c42be7de9f28b79882a107"],["/img/ts/images/50.png","18e4e8ef181ffd7eff2d1844cb704536"],["/img/ts/images/51.png","76bf41ed3e6bf0c976973364eb52fd76"],["/img/ts/images/52.png","f5d555290bc571215dd3ec30fd8aad42"],["/img/wall1.png","b6add3dd6aff44201269b81ca67330a1"],["/img/wall2.png","1d91432b0cb2c6dab9eb37cfc60e4f3e"],["/img/wallseven/wallseven1.png","13bc14d96f03ed575a032c2e36dc1b67"],["/img/wallseven/wallseven10.png","e843e64281eebbf3e981525f4ed0ec33"],["/img/wallseven/wallseven11.png","cd4903c4b1b50393adda2af6f8b8318e"],["/img/wallseven/wallseven12.png","2152b9ba4995757f1b3951974787171c"],["/img/wallseven/wallseven13.png","48099f39bece037c1c247cae35ab3e07"],["/img/wallseven/wallseven14.png","c21b7a0f02ef4a13314d124f30db292e"],["/img/wallseven/wallseven15.png","fac66e898624f02d39f6ab1c5e09cfc4"],["/img/wallseven/wallseven16.png","21bf01bab13d08277a0bead303b977dd"],["/img/wallseven/wallseven17.png","b9b15e76c2f2d08621525ef7a93fb88f"],["/img/wallseven/wallseven18.png","5a0d08801eda1992ae5b2fe98f43e213"],["/img/wallseven/wallseven19.png","d4e4f2198840c36c0ecd991e01b617cf"],["/img/wallseven/wallseven2.png","f4d99eb2073c404a177dd0d5b45d8d86"],["/img/wallseven/wallseven20.png","8ecc00db53042e9f391cd4af8779d7c0"],["/img/wallseven/wallseven21.png","b56aed3ace935b5c74acecd25d860172"],["/img/wallseven/wallseven22.png","fa680fbd7ecd10009122a63c7ac4dbc5"],["/img/wallseven/wallseven23.png","318440bd80fa0805f80e53df2db341a7"],["/img/wallseven/wallseven24.png","d390a13e228f48c608952aed7dbf5aa2"],["/img/wallseven/wallseven25.png","0a18b52410a7b3f8d60fa18f2d9ed21a"],["/img/wallseven/wallseven26.png","b9598d4ae97bd537e4c6f36a78759a91"],["/img/wallseven/wallseven27.png","bde1b3cf7aed83b7ad72edb62760b9fe"],["/img/wallseven/wallseven28.png","6d37604c18d80110f7105fb84309c56c"],["/img/wallseven/wallseven29.png","7d8a27dace47053730d7250a518e5bcb"],["/img/wallseven/wallseven3.png","95e16c489c2bad301c78b8007a17d9f1"],["/img/wallseven/wallseven30.png","e2aa8ff188da4c77ecd2564f95ddfe78"],["/img/wallseven/wallseven31.png","2868ccd459b91bb82f2600f8903d6cb6"],["/img/wallseven/wallseven32.png","50ddd1c07815f7f7b1e10999df08c372"],["/img/wallseven/wallseven33.png","64e09eab1b6f0b99aec5c7cf733f5740"],["/img/wallseven/wallseven34.png","16c97edba6a2cfc310085a21583fbacb"],["/img/wallseven/wallseven35.png","bbeb7dda05a9847e03bcb8b9e4fff15a"],["/img/wallseven/wallseven36.png","de24ceac326c9a27935dad408aa88a21"],["/img/wallseven/wallseven37.png","378dc1499ec05e07b0778f8519d29bc6"],["/img/wallseven/wallseven38.png","a47f861c90df5de7a4aed5733314b2bb"],["/img/wallseven/wallseven39.png","da673cc445699c17b0244d3b92494600"],["/img/wallseven/wallseven4.png","f7897334207bb164551a0f8431047429"],["/img/wallseven/wallseven40.png","8660029f41d12617117ea3267dad0021"],["/img/wallseven/wallseven41.png","f2e34219f41e9d78ba6a606d04a1fa7c"],["/img/wallseven/wallseven42.png","f451b9af66ca530905c11e9b7b42876c"],["/img/wallseven/wallseven43.png","8a73f92cb25e164a924e44a5914e6806"],["/img/wallseven/wallseven44.png","1a3e2fe2bd543656d1ed7951b4ca0d9c"],["/img/wallseven/wallseven45.png","db0b4207fe7631fc3af944498be88d1a"],["/img/wallseven/wallseven46.png","9b25e25cd2186ac895180fb27cd4dff0"],["/img/wallseven/wallseven47.png","26d366a14d2cfb4ace52fde94c09bc20"],["/img/wallseven/wallseven48.png","308eead59b6c5e785ebc33109c6f92e5"],["/img/wallseven/wallseven49.png","2fc0446ea65e45a459ae5c6394c7a40c"],["/img/wallseven/wallseven5.png","589a6d3e7c1e176fae8e168765f4cec4"],["/img/wallseven/wallseven50.png","11d8caef90c7b3bce3443d9c870f6104"],["/img/wallseven/wallseven51.png","3d8116a3c1dd5b6d4734ab72e3938df5"],["/img/wallseven/wallseven52.png","5945c4b13cdf94d0bff27d11012b177e"],["/img/wallseven/wallseven53.png","748740a27e3960089042b12d3a00733d"],["/img/wallseven/wallseven54.png","8d8d860c72a859ad4ceca49d3d421681"],["/img/wallseven/wallseven55.png","8574539736b8dd5eefd3b4252571aadc"],["/img/wallseven/wallseven56.png","fa663154b570078838df5d72ba615d2c"],["/img/wallseven/wallseven57.png","753f23e5b927a0bd9df75c274189f995"],["/img/wallseven/wallseven58.png","6dcd861db279085f2de79e78ed8176f5"],["/img/wallseven/wallseven59.png","9b04cb77b3e853d2dd06bb296c867e71"],["/img/wallseven/wallseven6.png","d75e4f1492ca5a3a80c093106672c1f5"],["/img/wallseven/wallseven60.png","01c4c1bd6c681eb23ba697e1e0a8a16c"],["/img/wallseven/wallseven61.png","f311995a084c7d8bf54d6de5c705346e"],["/img/wallseven/wallseven62.png","d30df753bafa2ee95a33a6d27384cc48"],["/img/wallseven/wallseven63.png","05134732fda535ef0c14f9afa95c7e11"],["/img/wallseven/wallseven64.png","ad1e02e78d3ebe0c68e1e08ccfb8343c"],["/img/wallseven/wallseven65.png","869ef1ef63b3ebb4fa6d4a08a15ec6f5"],["/img/wallseven/wallseven66.png","a01acebbbfc567be47575adc1baeb97a"],["/img/wallseven/wallseven67.png","677916a8444a9b401b9a58c0d01f7c43"],["/img/wallseven/wallseven68.png","75a29dd14ffe7f9056c14d4d04efb551"],["/img/wallseven/wallseven69.png","9dc78e7625588991cc78eee20bebedec"],["/img/wallseven/wallseven7.png","bc1111a3a1fdca2075f5deb5df51be97"],["/img/wallseven/wallseven70.png","950a10f62778aaef5e3523d3596f1c46"],["/img/wallseven/wallseven71.png","6c2c89532c2989e29e66c4da97213a86"],["/img/wallseven/wallseven72.png","42d4dbe7df2450acfdd0e8af13a81587"],["/img/wallseven/wallseven73.png","d3874e6f7ab5a1d73491124ba946fc96"],["/img/wallseven/wallseven74.png","d89fc8a28ca796875d59d4d238cbcfe7"],["/img/wallseven/wallseven75.png","c9b67a9a3182cd40f9859e522d704d59"],["/img/wallseven/wallseven76.png","2b1f6c4aabbeb1c173ef5ff6a28ddf72"],["/img/wallseven/wallseven77.png","4c34073e2b8d575cf115cdd24e736066"],["/img/wallseven/wallseven8.png","1bd6e7e066025ce207c315d97559a70d"],["/img/wallseven/wallseven9.png","4010901c60f16ee7ee293209cfa2eb21"],["/img/zheng.png","d6a3255024154c6b43b221b9c0dd8b44"],["/index.html","cf5d12e587dadebe92d227c8e660b273"],["/js/flower.js","35d04ca6fc9a3f23d0d1fe9a2668cc7e"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/toos.js","a0d9843e5cf613520be20a7fa8ed4100"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","ef8235d54ed1c08a6c25ecb23b6387b3"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","f0acbb29be3c55181586737bc3487eb2"],["/page/11/index.html","9b422dfb0ac67ed5f6559bae32078e49"],["/page/2/index.html","a4fa09bac1c503875a9a811873144982"],["/page/3/index.html","fe1331acc03c47b584beb86333d37959"],["/page/4/index.html","3102dd7755bf79dfd44537bb1d061726"],["/page/5/index.html","45f599b92173c3463d130cf343eefd96"],["/page/6/index.html","61f4866313c39721ef27cee3e7582222"],["/page/7/index.html","484215502113feed0321a0d99c9dc915"],["/page/8/index.html","35ece746dae8f40040fdbbc2c59abbf8"],["/page/9/index.html","f278a5d2342bb48d9bceb07e5db86630"],["/project/index.html","f44ade11931f0f22d122c148668236dd"],["/sw-register.js","2d839ed40cdc6308b16d9da834d04eb9"],["/tags/BOM/index.html","6bfc3ba96589b788b44aaea090f6e376"],["/tags/BTC/index.html","2ab59ae7731f67ddb4b6659db12ab67f"],["/tags/Dom/index.html","7ef31ba485228b8bfdf9a5651b76e4e8"],["/tags/JavaScript面试基础理论/index.html","dcdb901044e8e22bb1cf09b87b284679"],["/tags/ai/index.html","7c267dd816e54f22af2b1b2436100243"],["/tags/ajax/index.html","dfe1478f26faa049a10f645831f41445"],["/tags/ajax2/index.html","ed444521f87332927ce870a2d6cc785f"],["/tags/array-api/index.html","2c69743968a3e0d326a740df2ed4776e"],["/tags/bind-call-apply/index.html","bb594684005e1c7a760065f381f65bce"],["/tags/blog/index.html","fa28d64881d264b008846552c055ca4b"],["/tags/blog个性标签/index.html","5722cddb8d3c6a378726dcbda571a304"],["/tags/box/index.html","0195d2aba239c6921ce86c8ae2821998"],["/tags/cache/index.html","c7f883f8447c534cd35870f23328bb70"],["/tags/center/index.html","97686a4a281cf9162e61d2a65d96a7cb"],["/tags/chatGPT/index.html","1e202355fd2a81434d55cb23e1734f54"],["/tags/chatbox/index.html","3bb95c8f6276fe81a59a478c8a6c1787"],["/tags/closure/index.html","ac1beb2f1d32a0383418188e31980668"],["/tags/column-layout/index.html","0a17edcde40cba1ab0b334b1ce779e99"],["/tags/composition/index.html","5ce1e81d9e6554565d2c512e87223dda"],["/tags/context-stack/index.html","6de3c0847905d4b621c40419f55f414a"],["/tags/continue-to-upload/index.html","02297f556abcbdd7aa7d6aedcfd9abd1"],["/tags/copy/index.html","567880678fc76b696843a071bd2dc225"],["/tags/css-performance/index.html","17ab6632f0f05fa9c2ea6974a83063c9"],["/tags/css/index.html","6ae85b4e8201db26f7b2c45b7ee7bf4b"],["/tags/css3-features/index.html","ba692b1637133ed19b387a43bf260acf"],["/tags/css面试/index.html","087803e535f75486156a0d1cee44ee84"],["/tags/css面试/page/2/index.html","c9069fcbaad9663bc4f3fee30fdd47cb"],["/tags/currentTarget/index.html","76ecd113631d492811499a1a24fd4b46"],["/tags/data-type/index.html","642b352b8e11c0b7acb3d2c4b37de7b4"],["/tags/decorator/index.html","d24a4e2be3614c5b3ad59b9f32a9ef15"],["/tags/dp-px-dpr-ppi/index.html","cd5a26cd3645e010f2169c468d05bb57"],["/tags/em-px-rem-vh-vw/index.html","1d54a1409f5e9f586fcc608e1f6edf06"],["/tags/es6/index.html","ab4218900e92ec50321fa2b23cae921a"],["/tags/event-Model/index.html","ac945c1286e3305bc2fc59894e093224"],["/tags/event-agent/index.html","cec0b3d90136881534b3ab3ef4d34955"],["/tags/event-loop/index.html","46cd6f77e91e9240e7f6385bbf0ff123"],["/tags/fine/index.html","dfc5554bcfbbe36e224051ec2c73b1a1"],["/tags/flexbox/index.html","edd922b005e0e2004bc89e343c60bd4f"],["/tags/function-cache/index.html","4ef3ccd44be20d2eaabc74a72bea567a"],["/tags/function/index.html","391209409734d4307cd78301845e68ef"],["/tags/functional-programming/index.html","a1a2306a5625ac7e21cbc7fba687beb9"],["/tags/gametime/index.html","97ee9b64300a3c10dda7e1ab5f08122a"],["/tags/generator/index.html","2074a441ed555df846ed307afb600ee0"],["/tags/goal/index.html","aaf28bcea4040b72ca8f282759c7861f"],["/tags/grid/index.html","71221da6a98270318ca12fa469d93b56"],["/tags/hide-attributes/index.html","73667c4a5416435fdb682b644c9edc20"],["/tags/his/index.html","3572a71a25f4cccb9a3bf135344ac676"],["/tags/hooks使用/index.html","9bb72d23ad88889c0dd4c6d1b035437c"],["/tags/html/index.html","a4eb8690c3dff05a303209113b5a0baf"],["/tags/icp/index.html","9b00b76d42ae363ea322bd5c6a445cca"],["/tags/index.html","146fe88e659053c7eb9d0b72739017a9"],["/tags/inherit/index.html","386fb7de76c139f3806150008fdf72d3"],["/tags/js-data-structure/index.html","a5e8fe4d862e54221b6fbf40b3328618"],["/tags/js/index.html","9b447a2b9b25a0a4b68447c9589ff50f"],["/tags/js面试/index.html","9986e287b6decad18084e7324e4d2c70"],["/tags/js面试/page/2/index.html","1dc45793b8dcf174b082637022d92dca"],["/tags/js面试/page/3/index.html","acc57ec7a2e5edc52fb3146971bcb1ce"],["/tags/layout-painting/index.html","cc2c27e2d625272b6de82e02c8b6b391"],["/tags/less-12px/index.html","8c0a8859a444e9dd27bfb00f4fb71a9e"],["/tags/loss-accuracy/index.html","068988bccb552aed73f052d65775ae54"],["/tags/me/index.html","08e5421407c184fe93648ca74473fb3f"],["/tags/memory-leak/index.html","7e22375c7270b8b3f8a6cbd61b67c66b"],["/tags/modal-component/index.html","7458b4292a6ca0187f5fc8cb07c60b80"],["/tags/module/index.html","72475eea22ce3d4bf3e3d8d417ea2cf2"],["/tags/my-carousel/index.html","4aa350933eacfd359ed491dac2eba17c"],["/tags/new/index.html","6859e041ea69d6dee9d1871221011a14"],["/tags/node/index.html","1bf8162c0c5abb9192a8295f22e6e752"],["/tags/object/index.html","c678b6cff79550cb12bf7dd44ed50489"],["/tags/performance/index.html","5fa721549797044136132e18ec815a6d"],["/tags/project/index.html","c3b46c933e406800250de434e9badd51"],["/tags/promise/index.html","a2a4aa6883bfb225060b131e0a8877de"],["/tags/prototype/index.html","5348c1341a9964e63ffbb29dfbad2c89"],["/tags/proxy/index.html","de50f0c0cf28339cbced5a6d6a44da35"],["/tags/proxyEs6/index.html","13e7d0a7d0584e17c32e35472711f7a1"],["/tags/react/index.html","eeda2bcf86fd62e162e993c16527c63b"],["/tags/regexp/index.html","999f95332f5fbbc7dcc93d39d7f0e4ed"],["/tags/responsive-layout/index.html","1e282bad456508789d3bf3d1969cd483"],["/tags/router5/index.html","a5357a6ee472a757e1dbad13f9c52939"],["/tags/sass-less-stylus/index.html","de348aa012bff509e7f7424641edadab"],["/tags/scope/index.html","837bf9615ca8d47ed93ea8cc3ce1ade9"],["/tags/security/index.html","662563b2dff9159a5cd9963e4d2bdc0f"],["/tags/selector/index.html","130a5cd44dd51357038c7de9f3ee26c8"],["/tags/set-map/index.html","f0593fde82d6db29a9dd520afe135962"],["/tags/single-multi-line/index.html","9adcf435f8b0732e4557e2c739faae77"],["/tags/single-sign/index.html","c9600c94d556e21af346dd8b1f5ef534"],["/tags/string-api/index.html","87e4829850ac18d4956a334e3c0abd91"],["/tags/target/index.html","7328c93e95b58a7971d85fe2d5ad9be6"],["/tags/treeshaking/index.html","8e01d33a91a314dbaf131e57f515501c"],["/tags/triangle/index.html","55477396ed9120a2e028b8a49c5e7d65"],["/tags/ts/index.html","305af94470866ef9c2e958dddf00c2f9"],["/tags/ts报错解决持续更新/index.html","a8433ec61cbde6b559aa8093fa7182ed"],["/tags/typeScript/index.html","97aed9f3e8bab684ab02a53b7c93dca9"],["/tags/typeScript基础知识/index.html","372babe61378a2ddacdf1cddd6f4c8f3"],["/tags/uniapp返回顶部/index.html","4dba7948fb9aaba9078ea12a0f67e017"],["/tags/var-let-const/index.html","2939c5236ca60b7eccd2383c8dd025d3"],["/tags/visual-scrolling/index.html","99d90bc768512af4a4c2db76d65f5289"],["/tags/vue/index.html","e209c4ba573e414684c98bba2de89a53"],["/tags/vue3/index.html","40e0e081c9f049af55c6fd90ec493004"],["/tags/vue项目部署/index.html","082bd8de53285baa5ac714e034d7ae19"],["/tags/下拉刷新/index.html","5c19f4b44888cce75b50d7189cb94f93"],["/tags/分页/index.html","73b340aa9c50605af604f25f5fa2a178"],["/tags/反问面试/index.html","5b57499fd2d89c4537d8f2565db88e69"],["/tags/和/index.html","2c3a864cbedf698e9ea700a540fbad2d"],["/tags/备案/index.html","504ddc7388915d1a0cf99034aa4617b6"],["/tags/如何设置文章置顶/index.html","fd3c9e7610ee00282c518e259642de55"],["/tags/微信小程序/index.html","5af02b6da98c04d463191fdcc3fdd921"],["/tags/星星/index.html","bfacc75b5becb6edad9debaaaffa86a5"],["/tags/防抖节流/index.html","a473ea2e273875bbb6e7867d3b115ef1"],["/tags/面试/index.html","474037cb49aa0bd8b48f7ad9a1d584c0"],["/tags/面试问题集锦/index.html","1d2034c71bf4c93ca50bf8125db424b6"]];
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
