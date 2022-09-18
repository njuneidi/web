'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d41d8cd98f00b204e9800998ecf8427e",
".git/config": "276cab0878f31820f4e9563e16080578",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4b2ee2ff0204e4b1f48406320fcde21b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3a21e4f4f52e35b0e6d5f04320bff14b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ae2ac99e22e96d42d597aa9978c5f64d",
".git/logs/refs/heads/master": "048ba25f1be9cad98de10ed743b968f4",
".git/logs/refs/remotes/dhikr/master": "9c1268fca6e7fc6db0f798427e51c5a4",
".git/logs/refs/remotes/web/master": "29dea777c1647c535f0ba7344e0069c4",
".git/objects/01/4f09c1743a167ecaea98db7243e461db83af1e": "c6de057a6c6efb4a5b16b9a28ae01219",
".git/objects/01/d72cbe622b8d01aa4949d9b6670f9a077cf887": "d26b37189b72e3f1d0ca546a02c02ea6",
".git/objects/02/56f74eb6e41a42203929eef8bc83b6583bb44c": "da8445884bedaaa92dfc35dd1d01a949",
".git/objects/07/aff707a8633e5c21c8a25245196d324cbe4714": "a1f58aa5167295ba3988d9b3306689ef",
".git/objects/07/fe76612269b69ff2e98e2c00ad7a60c9289c32": "e8048b4676cc8a72be3a1e6b80db0e8f",
".git/objects/0d/cd7e2108410eda5ac639fe49b17f40f825bfac": "4b81787c4cfcc1791582172e6934a967",
".git/objects/0f/ede29ea7963fd8fd99c9750e737159b5586def": "a1443d8e0184bad333a06a99fb9f6b36",
".git/objects/11/f7a164a373226870d187583c4238cae4adf844": "44c0b5673e7d7593844c9033663f5b7e",
".git/objects/12/261723ebf607b49e5b04c4b2bdfe3be388ba11": "d33c5cbd2a2a20618967c0a70c5eeeee",
".git/objects/12/def93bd866b505619da7e38ee50a3fbddc9683": "1ff1e9582f236aa7165782eca2fe57ab",
".git/objects/13/f3b466fdcabcda2d8822720a732efc2211ce36": "7c9782198f25a7f742b630187553e40f",
".git/objects/16/f019406ed906248d466167c97700d3c62cb237": "c834adecb1406621669078831d0cf50a",
".git/objects/17/53717056b20c5693687c52262b1abafbeeb96c": "19b4b3d440d004af6592d8f18b43a864",
".git/objects/18/d0dd72ca2b4bb6b180aff3ecff6e0df6d4d8f8": "13630fce4217bbaaf2d98b04dc2fd439",
".git/objects/19/56c715a4e5fe473df862b45645f7fc89e7ad05": "ac5fc44da460e77791ef05708239ef8e",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1d/ab89779b09aec46e440b9a08f1da4fd15ab23a": "f83596ba3456d11b34e3cb890fb39199",
".git/objects/22/a502dadc3d29d941f7433c783f76d9b746878a": "67cb5305f52422ce113d4e74d88eeae8",
".git/objects/26/666907187246097896eae296e0bd89f1bbb980": "09689ac1e7ce080e484eafe080661359",
".git/objects/27/36e33eaf00022817332513df8e7d09dae4d4d2": "0450df70322d0244a85e971a795ec54f",
".git/objects/2a/7b15da95548991f9900e738ab5b8a0a8107530": "5859f9213bb7b1aa6419cb153adc15b2",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2c/76100bfb599fd09af23a6f53b59e6e20c4940a": "015da2b03403da25225045516a0d3ffb",
".git/objects/2c/d3662c287bbefc83701cfbbfedcf746f2bb26e": "0fba199f94a4f681e9e8ba15b783bc50",
".git/objects/31/9ac459a81d1feae0617ecf09d24a7661f173c9": "8a7337ec8ec7ded681067cb0af079fa7",
".git/objects/31/de6d6b3f9015e7d47a506a6b29a917b44fee90": "5c18953a86183343a294bbbb8011d231",
".git/objects/32/d6ec2b4d05c2634322fc6d4d3fd9ae1de18a69": "4cc5ddd855c17c049677fdddca15b9d1",
".git/objects/33/2c766beed465935532e6b58dbe57b035a3f36d": "e23e94783e7b29c4456f4bc91c98bb07",
".git/objects/33/a232156b319c123deed111b7f26d826a9c73d4": "d436c1049b38e38064a66e3839ce719a",
".git/objects/37/89d057ea415c64f4288f4242954534874250fd": "58764e412884f04257cc677aeab0306a",
".git/objects/38/8fc57bd8f0bc9eb281c149bf092311c2035902": "dab0896a4a641e444d21986f774e6442",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3d/a7905707eeefd6a9baf3d9d15d7c332a6ea927": "5f679e5ff219bd90ab27f33bac5bb348",
".git/objects/3d/dc2a053cb5042c7666fb37b287eeefafdd8e90": "5d0068570c012d48eaa19778b5b290f7",
".git/objects/3e/0cac7d39817ef316748659b149e654041dbdec": "f51374e9005131b177715e33025b5dee",
".git/objects/3f/09be15455a2e8ea1364a5cce8a46040289537b": "5d2ca1a1d1a3de45294c409d85df432e",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/42/7e5bf550579e0affb279f708c945416d5edc27": "db3dcb9554dbc58bec8e68457079ac7a",
".git/objects/44/ad9012fafb639f35950595e694d75883c0d0eb": "e801ba22d7f41896f0ec735281fa7355",
".git/objects/47/ccc047d551d327a3900b41fc16db93a7a11d4b": "7f15f798f499568be6867a4e9c6accd1",
".git/objects/48/bf938da8001dafcad1cd5e63576a620cd75b65": "de58b19e466979ecb2247122b733d735",
".git/objects/49/6a50a44f67eeae5c1128373d5863780397a615": "fd7f119f67fc21e7b6bd190294173e4d",
".git/objects/4e/37c1264c7e6d29b239f59bb61efb99bc6015dd": "2c01588f4ab13f5eaffb68b42c2154e9",
".git/objects/4f/471b78ea3f3ce36b9bba0e090e815cf118c737": "95c4c843042c8fddbb9131fcd992da00",
".git/objects/51/a312346fc9a3a0d7eadc8cc581bd4da2ca8a5b": "83c66c5ee5f375372a813cd7c74b3f60",
".git/objects/54/821a480fab8ff29454886cc03ff8ba15580fbf": "4679a022e91f96d12fdac91bc447afaf",
".git/objects/56/0543813cbd3b158b751eeae4a1528f6354a830": "4fe225c05347a7193d939f1c9f0a6e01",
".git/objects/5e/113b1975c2be33ab1f7490d8bf289dad57b1f3": "b21d79b66623c121194ff52361a8c8fb",
".git/objects/63/df28f79054150a150bf24e1512ac981cf98d3c": "34026814edcaa2be474a1d36543afb81",
".git/objects/66/4ad3536a2be662a36e55f3779361ee9cf2d0ad": "af1b9780990cad96d808d60f38f70714",
".git/objects/68/3e55095bd5fbb74cab1434bd3860e38457fcef": "f9933617d663af8dca41b66f62c135cc",
".git/objects/6d/a98936ec6271d2a9f33385962206e88d71bac9": "753c83900fa77baf45ad3811a7a093e6",
".git/objects/6f/728c4268d9ac79d7474c0118213f308d9c69ea": "f6f05ac7175e4e6499ec244ba84d4db5",
".git/objects/6f/fb227141457de636f646099e49833930b38928": "2910a91a718d0beaf90cfe6974ec6c46",
".git/objects/71/93b7ccdd3d3c25326eba6994aea8327d013dd0": "a5171d07985a2d0f9f2717b10d728345",
".git/objects/72/f51336aa914fec97cbfd13575c99653930933d": "e375a6bec288ee357487d08807d994d6",
".git/objects/73/d4e7710aa152f586d8160867a942b30dec9332": "7077ba9f4aefb7d8956fa346387c9112",
".git/objects/74/bd5b2bb0d85a210e09e65f08c57faf3f672761": "e4d99ba0f7196b0e3a32c1d31ae5abf3",
".git/objects/75/f5edcf68e9e8e17ab1f4e519656188a9b4db94": "bcd52ab51a2d9f90c3cad58b200490e7",
".git/objects/76/0ae65da0ae673438c7d8f0752a6f1271f9207c": "5a9a525a0174c69f50f272b260de6960",
".git/objects/7a/f3f4a33687b7d97a60e0e63db11b94ac9f97f4": "e978ae973800edb2cd2279542e2aa1ae",
".git/objects/7b/a94c38640a75a01918a4b09900842bdc76ce41": "dd117d947e23a1cfd76e0c58a01f3e9b",
".git/objects/7c/be93becb6dab8b9883bcc2b4ff78b6db7eae3c": "409a6e29d3346a2eeb2025020a8d6154",
".git/objects/7c/e434425a7951b72c14f3efce1ac2be9f90f258": "4ea32918b79e44a1a32076debde62dea",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/d10f2875cee4558c67b5bc845909c0bc0ec82f": "1515aed2f4b8bed173ebe2f57e232418",
".git/objects/82/2e9cfbbf46a96d65880352fe2b505a359587a8": "ea40bd550b6ccc34f84b9572c7bd5cf5",
".git/objects/82/e186d7f1ff0512cc9478c7f63335d0d3c0fdd5": "2f212637fdbbd0052c8283e3ac4ffb5a",
".git/objects/86/d1397404677d5ee616e1c2fc650be3d7aa783a": "02982cc87c00013f06046bef38583120",
".git/objects/88/e94c7caa41e4db99cf0441f9f37b672a1e92b3": "3fd50bc33b1778a7126009213cb93e24",
".git/objects/89/1baf62ff5554733ec34b6249303d9e8804b57a": "6146767cf4face8448f0f0cab2881b67",
".git/objects/8a/727856a75a53be47ff772653c2eef9165ece3d": "d6c83369088ed4196818ec55d80ad70c",
".git/objects/8d/24f1405eee2f40bdbd074bb7f5f3ec4c9b5765": "8de397d259d3902a0d24eab672dd2597",
".git/objects/8f/1326aa47b1e443f644293b860abb2b99f951d9": "e5e4ee5504cf19025f2f7fbeaf4f35c6",
".git/objects/90/aef419d1d5bcf99fd499da8080433518056dff": "a59b11645039d6ac14c519f55d1fb105",
".git/objects/92/82791eb0f6b231c295bbb86b8dd798b3e962f1": "9c0f4a63b27b5fbc5c0f129b3f573251",
".git/objects/92/bbe7e6c5169937fbc86067819477828daf6ef8": "f4a166eb0a6dc60b4e052b786e857338",
".git/objects/94/fcdc3f91676bbecf60d98aa9c64304c4e10b3d": "645658fff46be96a8aff2c2792a5762d",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/e5dc9af6e1093966c5cd42d608fd6fbb6a0c59": "769bbf0edfb872ed024f198c9d8d02c4",
".git/objects/98/42532769ee5ba7e5a8ae71ac0faf7cbefd23ed": "e9733fc2c515184d5d253b96fc425898",
".git/objects/99/1ed553c96dc1c6c569614f0228a7021c7b9020": "d8f667a168513fc888ecbf15f4455e2d",
".git/objects/99/ac517bb359d6a7c08fd374cbe6a35621e78d22": "3e3e61bd346d00c814930f2939e41f3e",
".git/objects/9a/92ce76315211d07c27b244fcaac19989708f1f": "a13d88527832fe5eda4a576905d6a6fc",
".git/objects/9c/9458be117bcba5fff3ebbed7aaceff19ab4a12": "35b04cb4a0f09ea21d8dac82a64e0605",
".git/objects/a0/41611a801273c7d98837a272cfc2c4dd4caac8": "4f7600367cdfd8df7a2bf8114b7c6629",
".git/objects/a1/f3bed10fc6c6422033cbfed5e7e2e648015d20": "54c66fa0727e7120c344906b0401e085",
".git/objects/a2/1c212336f776e1d8a3eed1c87c7a30cf425d8f": "93487440694ae911082551585a68f331",
".git/objects/a3/eed5addbee09402d61da51e1f57c31a3b7c80b": "86ed853e7ac34bb71f3f73f42f645071",
".git/objects/a9/b5a224cba9b422690fde0365775b1ee7368394": "391b776b464cb91fdce6c3a03518aa72",
".git/objects/ab/be34a76dbf0dc5348e9af8df85528d47e3840c": "056810e9d19020a3ebaad516e94de0b3",
".git/objects/ac/57202f5a807aa2c49b7109a5a47a946d2d7909": "ca4ba58f98d57aa2ee2c3b2689e904d4",
".git/objects/ac/b7be89bbe0fd0cec5a39b4fb29e58f06400fa0": "2ff26f2c82d96168ed0abb5511f2daa4",
".git/objects/ad/2aa8de07c6951ecb6dc872c7c42771eb531bad": "015093990fca183650c12f8473f8875d",
".git/objects/ae/36f975fa9e809ff74fbc5f638fac5511c810d5": "e13ed662315e25f4f1e45a881fee57d2",
".git/objects/ae/4bb10636b7d26927a45d5c9c7580d23d48c5b8": "a76dde57dc7ac8456902718709580103",
".git/objects/af/0178b862a61504f7e1e3f74b98f01669925ff6": "84fcd8c9861250a963ad752780fc8884",
".git/objects/b0/f22831728066557538e54ffe8f7fdac47cfc56": "996a039b69f5813298da1959bbba55fc",
".git/objects/b2/59da1d472a6ab33b67e29f5613123d3a064d6c": "607fc31b3dcb6489f9bf6120d2c6eb44",
".git/objects/b2/acae15b7780935d718ee5124ef98b310d9e57a": "ec5175141ccb1f6d1b0c38ff4170f08a",
".git/objects/b5/c6ca710c937527ca8d2d344214243d6db33832": "1e6ca9406fc3150067eabb10040766e1",
".git/objects/b6/5164de707ffeaf0adfca5fca65532bf97e6903": "b0c794f74453ae77a83e942b9d58d94f",
".git/objects/b6/c6828a9161b3958af477558819616f7359eadd": "37e6968e4ca54badb5c283cdf8d23ab0",
".git/objects/b8/108c28bc55da0cd2b4e1419053f177c6a9efb3": "eebe36b0eada8f92cc55210daa28d3c7",
".git/objects/b9/0c95ddf102deb3ad4782260b10a31b44f9cb30": "c81d4bcf5e7995e343062e5fcb3ea310",
".git/objects/c0/e0a1f78a1081bef9aece63ff4d3067c7fe27f3": "94c78cffa36218d1849bf5b39da3697f",
".git/objects/c2/1420717f5be5f7f6399e560f5d76f3b4fd8b93": "1a1684561d920b1cc3526ceaa1cd559d",
".git/objects/c5/8b1be1138718d2d0181275a6175c8f82f398b2": "a9529233b9d9b344b0cbe7adc7ced999",
".git/objects/c5/cd82368acc707cfc04e982b1bc0e77f61798f3": "cc807ca780ebfccb5637ae6600c0a735",
".git/objects/ca/3541abb58783f3546d1b18863aa75ea1c80502": "f4580c768aabb57e449635ddf51441c0",
".git/objects/ca/46d5ab6c4d6014d135318120e157552a58264d": "3a6ed320c4ff1ec6600aafc87b3c0992",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/febff4b074cb03737e731f63e717e95a256694": "5bdf80f2892dd8cc82bf375af3402493",
".git/objects/d0/0e47ed9f1669df022d9908714d65ace3d01af5": "3d5bc33b30f87d6e8a0e9d79fe65dce8",
".git/objects/d1/36193e117004b36ec477e13273e494560fa407": "5a7a90c13c38226f8aa6bb50cca63889",
".git/objects/d2/e601154f92056eb0a7ae9d597ca0acbba64b32": "5ff1758f4b731b1e20ec12400d025887",
".git/objects/d7/6ac8321724d39b436a0bff0af77c54d7d9b98b": "3198805e720e6ad12ca7a2a4246ea17f",
".git/objects/d9/3ac7df4c948fd6ac1ff6b0b31a0527b7c3ba8e": "1206268c647ef702ceb7e7ba0415a57f",
".git/objects/d9/bba3ca9d0fd614d18200ffc864ad1eca05fdbe": "2aa7b3a8e221127d21904d519fbd6d81",
".git/objects/da/b581361db1e9f8bd27688e8c9538cd7c6c08ef": "771427cbe0f1e9f8de96a649f4146842",
".git/objects/dc/dc79946a3ce734ec12b01d0443b0a57806872f": "672b2864d6ef8a7874030f3f092e5ab6",
".git/objects/dd/38c7aa5efd11cb6c9b0930b279ea8994986957": "214eba57d2cb3de287d160b22e267f3a",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/c87d574bb0466bf46418008bade250c6196f16": "cb56684ef987542155586088dec040b4",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/83a0aaa4702e3e788eacf3a84b4ebd5457d8bc": "786f5100f648bd82eaf22c0ea09be5c7",
".git/objects/e0/ad32a234e426bfd25538338f4105c64528705f": "562204313cf73e7b8aa9c07862a12684",
".git/objects/e3/32b669f9249c00b2db7226935754304874f801": "a9af39c05fea6810158a590b6ec75005",
".git/objects/e4/1b20fc6571fc3a0e302f4c5712f02dab8dc82c": "0a16afb7653908ef888bad785fa59268",
".git/objects/e5/2c59fdc8397dc5b74ea8715aec69123f77c74f": "cf75bee37bc4c4c5baa466a036751acf",
".git/objects/e7/94a3a7e54e899db64ac50e76a14cbfcc854002": "439af35256b4a38ffd0111188a639a0d",
".git/objects/eb/3dcc170f24f2944f7a0988fd43051f9f7bd74a": "6c45b48272c2cd118bafec4d4c705f71",
".git/objects/ed/b428e6ce312e0e1e84608b67d63b8898d84c8c": "a64665a3696da6a5387a388af8b1c795",
".git/objects/ef/518854d7d3dabe2105bfbaa96ece42cca95fe2": "641b9624f786550a64db8a27cad08da4",
".git/objects/f2/e1db57c7cdd52a322e9f8502c27f6b6bc1e74c": "4aa8915a5d17771decd0e07987cdb7c5",
".git/objects/fd/a6adac491aaac81803f7e867ca1cdde23e9ea0": "23073b9bcc664ddb0bb65c3ca49a2218",
".git/objects/fe/3c8434d516f9b12fbe98f7518cdb223d63332c": "6fb1a4adbe564888ed68efa90dac4d3a",
".git/objects/ff/484053c8e226f5022d1f15a35a54f2cf0b272f": "5efbe05abcda70ccd86e74a089c269d8",
".git/ORIG_HEAD": "5539741ec9ea67acd49d878e4ef9fabd",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "5539741ec9ea67acd49d878e4ef9fabd",
".git/refs/remotes/dhikr/master": "5539741ec9ea67acd49d878e4ef9fabd",
".git/refs/remotes/web/master": "5539741ec9ea67acd49d878e4ef9fabd",
"assets/AssetManifest.json": "15f963eb497c35618e9f1d605e87f8f1",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/aboutUs.png": "59529e34fd9a736cc01776857c7e7bbe",
"assets/assets/images/b4.jpg": "4d177da708220f2484422d330e8a5f60",
"assets/assets/images/background.jpg": "cc80317251bd92790f004c984580c833",
"assets/assets/images/favorite.png": "d35134fe7c20dd25b6b40a6e0b253325",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/home.png": "e3f4194350c6081ae70947439d45551f",
"assets/assets/images/home3.png": "20df676129740f21f4130ab669550f2d",
"assets/assets/images/icons8-about-us-58.png": "200b301b6b38f9e3ba4c405a289aee26",
"assets/assets/images/icons8-settings-48.png": "dd65d3968087f296b56970f835baba41",
"assets/assets/images/logo.png": "fbf5c3d3821e691ba5011f7c868dce81",
"assets/assets/images/p1.jpg": "9d8cce5b35ee3dcdbfe3360cee107901",
"assets/assets/images/pages/4_5926943731906252243.pdf": "5550d91e96e55dd27007b21d1ddaa872",
"assets/assets/images/pages/89406413-a4-size-covers-mandala-round-elements-ethnic-background-japanese-arabic-islamic-eastern-oriental-mus.webp": "7e106930ada18123a0d658919b676449",
"assets/assets/images/pages/p1.jpg": "89d6e44de2079800ae4b17325c0b432b",
"assets/assets/images/pages/p10.jpg": "e8d333e50db7f09122240594d1bffc1e",
"assets/assets/images/pages/p11.jpg": "0b036437127b9dc19a0b8ec0aeda40d5",
"assets/assets/images/pages/p12.jpg": "be7f980b56ff5631de19cc8d0c346683",
"assets/assets/images/pages/p13.jpg": "6ee78f36d1ceb0d307993bca340e35d0",
"assets/assets/images/pages/p14%2520(1).jpg": "0d19d04668cfda492ef182c4ca523b34",
"assets/assets/images/pages/p14.jpg": "a2fa2f66d5ab9aea55f327b8aba5b77e",
"assets/assets/images/pages/p15.jpg": "bf910af0529cd72f18ed4fae07c3e03c",
"assets/assets/images/pages/p16.jpg": "7d508575958997f4cc6513f18e01f7b5",
"assets/assets/images/pages/p17.jpg": "b56dd0e4faa88249eb12474ce40fb3a1",
"assets/assets/images/pages/p18.jpg": "8989f48d36f5b989c087ddd9889e3bf8",
"assets/assets/images/pages/p19.jpg": "0beb145c77589b4db6a9e6c862e5ab80",
"assets/assets/images/pages/p2.jpg": "4cb29324d1e8013129baacc0a2027f96",
"assets/assets/images/pages/p20.jpg": "02ebc3ff5db67c9e99594d2444e4905a",
"assets/assets/images/pages/p21.jpg": "aaa9ffa7964574b3452a41d926e96312",
"assets/assets/images/pages/p22.jpg": "4fcd98bb27a2bafed02f902200ec24ac",
"assets/assets/images/pages/p23.jpg": "d59f320536b0e9a48254dfc20eadc5ba",
"assets/assets/images/pages/p24.jpg": "42540c9d7337cf492668f402b7554411",
"assets/assets/images/pages/p25.jpg": "d068c94918071fae14c9f3b8c2b75d79",
"assets/assets/images/pages/p26.jpg": "a4e146983d4044feb075d4c1f19740c6",
"assets/assets/images/pages/p27.jpg": "d870adb8d4d0066159b89914b51785f6",
"assets/assets/images/pages/p28.jpg": "5cfeb5a14121996f1f91ba69ae6376d4",
"assets/assets/images/pages/p29.jpg": "6aaeba77ff769ce045d4102fddf0b815",
"assets/assets/images/pages/p3.jpg": "02d231f6fa741084bc8f20481bca378a",
"assets/assets/images/pages/p30.jpg": "9c91bc7378532752364681ea68aa65de",
"assets/assets/images/pages/p31.jpg": "4d32ac9fd30a3290c2a8800b9ba0f756",
"assets/assets/images/pages/p32.jpg": "318046bbea64a58e2669ce1a55f6e747",
"assets/assets/images/pages/p33.jpg": "be0e20e2bd3b51a97099c135b991ab1c",
"assets/assets/images/pages/p4.jpg": "c40aad21663824d030a058082983980c",
"assets/assets/images/pages/p5.jpg": "1c4e7cc79124110bc7f37895249a422f",
"assets/assets/images/pages/p6.jpg": "b4db5484277171b1ebb691434c80b6bc",
"assets/assets/images/pages/p7.jpg": "b11641619629d7deb12f422b10075119",
"assets/assets/images/pages/p8.jpg": "f4540383344ca13590cda3fa271f7eeb",
"assets/assets/images/pages/p9.jpg": "13a88850ae4c5ecce8930e550e57d523",
"assets/assets/images/pages/vecteezy_abstract-background-with-ornament-mandala-pattern-vector_6869123_545.zip": "80e5091aaa8cedb1fc327c2195db0ec0",
"assets/assets/images/settings.png": "636f40a4b62a9aae86cecaf1e2aafa8a",
"assets/assets/images/splash.png": "6335cd74e90da375d7362c73da988af9",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "17eb9f93bbb87027ab14db37267b1af4",
"assets/shaders/ink_sparkle.frag": "e8313b10f32f480b6de77d905249f192",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "bc67c2d1a36747dd03f36a2372f29d37",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "2a38a964d31c050d6e18d622610bb07b",
"icons/Icon-512.png": "abb0db963ec019e2501e283696150409",
"icons/Icon-maskable-192.png": "2a38a964d31c050d6e18d622610bb07b",
"icons/Icon-maskable-512.png": "abb0db963ec019e2501e283696150409",
"index.html": "b7c93eef47b14bd375188f660fa9762c",
"/": "b7c93eef47b14bd375188f660fa9762c",
"main.dart.js": "7343e244f02f72fafdba99a94fe58628",
"manifest.json": "7f83b4fc42a253eedc0405ffe6745c9f",
"README.md": "e660fecadca5b67b99f83e21535e9bb8",
"splash/img/light-background.png": "6335cd74e90da375d7362c73da988af9",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "78accff22beb7ef068999d99adff10b6",
"version.json": "626d07dab661c4d991002b1eaa6bffab"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
