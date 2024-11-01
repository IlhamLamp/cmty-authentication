```
authentication
├─ src
│  ├─ config
│  │  ├─ database.js
│  │  ├─ db_connect.ts
│  │  ├─ email.ts
│  │  ├─ redis_client.ts
│  │  └─ token.ts
│  ├─ controllers
│  │  ├─ login.controller.ts
│  │  ├─ logout.controller.ts
│  │  ├─ otp.controller.ts
│  │  ├─ register.controller.ts
│  │  └─ token.controller.ts
│  ├─ db
│  │  ├─ migrations
│  │  │  └─ 20241001025730-create-user.js
│  │  ├─ models
│  │  │  └─ User.ts
│  │  └─ seeders
│  ├─ helpers
│  │  ├─ otp.ts
│  │  └─ password_hash.ts
│  ├─ index.ts
│  ├─ middleware
│  │  └─ protected_route.ts
│  ├─ routes
│  │  └─ v1
│  │     └─ routes.ts
│  ├─ seeders
│  ├─ types
│  │  └─ user.ts
│  └─ validation
│     ├─ otp.ts
│     └─ register.ts
└─ tsconfig.json
```
```
authentication
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           └─ main
│  ├─ objects
│  │  ├─ 01
│  │  │  └─ 97b6e08b2243645e993780c914236cb1b88af0
│  │  ├─ 02
│  │  │  ├─ 5e8bb456cd2c077448071b3c2770537bbc3f65
│  │  │  └─ 75e4b91ac365749beba0c187a9fd4666ada00b
│  │  ├─ 03
│  │  │  └─ 24fdde6ad143b992086b8eb3137ef95a68c602
│  │  ├─ 06
│  │  │  └─ db58c9aeed96ab95675f6f21a3c6016805dedd
│  │  ├─ 08
│  │  │  └─ 9ce64eac8d77c01567b4b080df45313d6e142b
│  │  ├─ 0e
│  │  │  └─ 487e3df8faf687650956b796e7a431964a5481
│  │  ├─ 0f
│  │  │  └─ 4c0f42206bfe5f48703e9c8a0f501658d6d2c1
│  │  ├─ 10
│  │  │  ├─ 5474bb57b14ba58e12cb02a8cf678e84b43cff
│  │  │  └─ d374133edf53d9c3e1591c95275770e654aa42
│  │  ├─ 13
│  │  │  └─ 384e007cdde9990341f89726964586f0ba2aaa
│  │  ├─ 14
│  │  │  ├─ 01b0a32f0f2a22bdd0aa345c73385be2460c99
│  │  │  └─ 7b01af8569fffc835d7bd3ea6d380b66919d88
│  │  ├─ 18
│  │  │  ├─ 329f13b9a87e4cab857f711e5c7898e6fad092
│  │  │  └─ 9550f39e9ffcfd342ee5b0b2e57a7961a2fada
│  │  ├─ 1b
│  │  │  ├─ 65f4a8234b496c4c2438ce7d82c10320278220
│  │  │  └─ 9207f935e6560522c8ae8c6f5e9897fdcbc2ac
│  │  ├─ 20
│  │  │  └─ 4c839f559b42a835af860749d79df77d552139
│  │  ├─ 21
│  │  │  └─ 67854fc6073df6f7167b2104f7578d347b90c1
│  │  ├─ 24
│  │  │  ├─ 3e89b17100712a913ce8fef87cc9fb296615c5
│  │  │  └─ e1287da0e0bfd56a3311cf487b68e11151e0f2
│  │  ├─ 25
│  │  │  ├─ 41446ef9baccfbe91bd60b1a7e08c6ffb6dec0
│  │  │  ├─ 44a73008bc22808a57b2f53572af544e0b26c1
│  │  │  └─ 6e5184e6729925e25bba334d5d9fa643f9b9e7
│  │  ├─ 26
│  │  │  └─ 3a20841ffb6fcb4c2a9590cc362b732dad3efd
│  │  ├─ 28
│  │  │  └─ e190a25d2601a0bef14cb1c9e6f3059f582ff1
│  │  ├─ 29
│  │  │  └─ cc2befe39e65551af3a94d86e8b20856ab748f
│  │  ├─ 2a
│  │  │  └─ 3e424aeec7aaa20b65a5a3e07ab87e49d99662
│  │  ├─ 2e
│  │  │  └─ 7afdd324ce16315a77d3a37d6dee225651caa8
│  │  ├─ 30
│  │  │  └─ cb7665a862265385ec63ed8539757526c87bed
│  │  ├─ 32
│  │  │  └─ 05e89d5f8731be3b8a2b007022ccf327a6dace
│  │  ├─ 33
│  │  │  └─ a0648c128de4dc263b3b5f2357c6c1ed1961a3
│  │  ├─ 34
│  │  │  ├─ 443c3a651f2217970fb7006bf54f9e11eeac76
│  │  │  └─ 5bf94bc7d150aaae923bf0666fc4a77525c387
│  │  ├─ 37
│  │  │  └─ 44c16762387a3e793447460a4db279476288fd
│  │  ├─ 3b
│  │  │  └─ 9e8c497d0019302b1b4b83f11bfc2b6eaddbdd
│  │  ├─ 3c
│  │  │  └─ 3ae7650c017b5b7798e9dc520bf24e55586ab7
│  │  ├─ 3e
│  │  │  └─ 39b7422ac03165d9247adef75caf19146c4b30
│  │  ├─ 40
│  │  │  └─ 2b499a50636b44a445fe0d325dfbe1d481bb0e
│  │  ├─ 41
│  │  │  └─ c97d6d042408fd2c786df7b2a3ba8d5d61f1ee
│  │  ├─ 43
│  │  │  └─ 88ae76f45dc29b0261a192848fe38859e9572b
│  │  ├─ 4a
│  │  │  └─ 1701a9476fbc3fb88dc7577983742913245dbd
│  │  ├─ 4f
│  │  │  └─ fea42455c0451e3473fe24d6d93d65fc7859da
│  │  ├─ 52
│  │  │  └─ a35b2e0cc0755af53a53761e4be83d9b30ad14
│  │  ├─ 53
│  │  │  └─ 20c9b57b8238fd6d32398bbbc7867916a47150
│  │  ├─ 55
│  │  │  └─ a9916b26a60ab0aba0d90ef41144dec789abcc
│  │  ├─ 58
│  │  │  └─ 5721ce44c5ca0db5aeba994d1af4994f764d00
│  │  ├─ 59
│  │  │  └─ f9b4972812cf5d6ff557f3430ba83f627c1784
│  │  ├─ 5b
│  │  │  ├─ 4da00c19129195d500fe2685874576dc123613
│  │  │  ├─ b1432de3f54fe63088367640ce6b70668dc155
│  │  │  └─ ec6844bd8cd6d3d45ec48576521798d6a8b987
│  │  ├─ 63
│  │  │  ├─ 0d6212182cd261e575c6e28eb01939e295a22d
│  │  │  └─ 349f7981310dc843d19fb471b28d0dd3ee5153
│  │  ├─ 68
│  │  │  └─ 506a9f53999089789043cde59841482237b91b
│  │  ├─ 6c
│  │  │  ├─ 607574f869ad63fd615a02ecc96106eb75591c
│  │  │  └─ 858dbb2f38791da7cd3a6d9f68ed8ee0222f03
│  │  ├─ 6f
│  │  │  └─ 7d0a3a83e5977364375ffba1b05b70830afba2
│  │  ├─ 71
│  │  │  └─ b2ec419d60fa646a2b7bb891ff8e8177e19ca0
│  │  ├─ 77
│  │  │  └─ d028e034ac044280a3195967726ba72fe392a0
│  │  ├─ 7a
│  │  │  └─ eb431ab5019f32b1160ca7bf19f7daefa2cb71
│  │  ├─ 7b
│  │  │  ├─ f3ef5a04f680871866c16d25d9d554158b9565
│  │  │  └─ fbfc53c5ffa4f3ad837434005e590e2920a59f
│  │  ├─ 7e
│  │  │  └─ 5742d94c47d21918205cbeea9005e685cebc87
│  │  ├─ 7f
│  │  │  └─ bd15d956d126193513335180d29a4f89080317
│  │  ├─ 83
│  │  │  └─ d1e41e941e7ccb4fe77f1f86abfd69f36de67b
│  │  ├─ 87
│  │  │  ├─ a0b28adc29d2ee62333e291385a86654de7cec
│  │  │  └─ b977ae620d9c86f92c287f3a3b4efc1b766f8e
│  │  ├─ 8a
│  │  │  ├─ b90952f92ab8744c30ffaa1a904b6aff296143
│  │  │  └─ bb27652a79df3be8c3d8ab1973d65f5c4d06f9
│  │  ├─ 8c
│  │  │  └─ a671c66bbb965c42aa8cc8e763b1dde0d37fb6
│  │  ├─ 92
│  │  │  └─ fb3f094f2a12a8707964d560a866787e778e88
│  │  ├─ 93
│  │  │  ├─ 735650197adebd7fba0fb4f72af3f93a07add0
│  │  │  └─ 891d9599f2d62162a3e191aab107619107f6ce
│  │  ├─ 9a
│  │  │  └─ fb16f368b458950b3c7a74291dc326a8e5632b
│  │  ├─ 9b
│  │  │  └─ 80ac901b16e146a140c9259e28b79bc2ab2220
│  │  ├─ 9c
│  │  │  └─ 2aa8392de20e0f19d2ffcd8740dd413529c81f
│  │  ├─ a1
│  │  │  └─ b0ece161945eafe17a8c6ae43e9b7b0f46a3e4
│  │  ├─ a4
│  │  │  └─ 082a23fd36977b137607fc68983b11d7858764
│  │  ├─ aa
│  │  │  ├─ 2978958275a1f18bf83b901862bc2c7320644f
│  │  │  └─ 70f2b17fe18a8d675571276aa7ca08b14ca813
│  │  ├─ ab
│  │  │  ├─ 8744e7b00918282e9eeccaf2201b629104addb
│  │  │  └─ 932c29b90e0ced7f34db029091f7ec66dcbc04
│  │  ├─ ac
│  │  │  └─ 40c265204242ca7ea33715ed763613bc0fe83d
│  │  ├─ b0
│  │  │  ├─ 5262ade61202cea99017c557768b467e625019
│  │  │  ├─ 76ed7ea280223f1ebcc9d4f90521e8141c9b55
│  │  │  └─ bb582beab89cf539cfa87c461423fc22ecf692
│  │  ├─ b8
│  │  │  └─ 28df9ba57816e4d40836fb95943a5592910f28
│  │  ├─ bc
│  │  │  └─ 886410e13b8282947d3b27b395e0a7738c4e6f
│  │  ├─ be
│  │  │  └─ 2e77f2729929f69c417e453d1e42c9f61dc368
│  │  ├─ bf
│  │  │  └─ 4cd106482af14899ed56a61d0c8e7a0b12ee0a
│  │  ├─ c1
│  │  │  └─ 7e4266b54f17e78ab1e11dfc09c781fae4cc56
│  │  ├─ c4
│  │  │  └─ 9631c7e2c6e86dc806c7490fcd91d2bcb797db
│  │  ├─ c6
│  │  │  ├─ 16185bf099e90067f1493c6e8e6d087406672f
│  │  │  ├─ 698bf40f73a415033e89447d49562b27a6699e
│  │  │  └─ 8309c1658bb76b9765a172e27df317dc6ffea8
│  │  ├─ c9
│  │  │  └─ 27f2ad48c1576e9af76c07c982a820926c1a2d
│  │  ├─ cb
│  │  │  ├─ 1c17c66f3defdfc2b274efb61a1965b9f8f8cd
│  │  │  └─ c0adb5bf828c1366249919bcf3205fd661a3fb
│  │  ├─ ce
│  │  │  └─ 442946f357dd0b173906c1839634993f40cc8d
│  │  ├─ cf
│  │  │  ├─ 1ed04b00790e61d50a770a90a7ebafa655461f
│  │  │  ├─ 5b25806233613b218792b9300f49369d6e1fce
│  │  │  └─ 987880daca84d82093275aab720438389cdd70
│  │  ├─ d0
│  │  │  └─ 2bebfe11c6e37f4f0ec0139b7d0cd6108a67a4
│  │  ├─ d1
│  │  │  └─ 90c970eaedd49a45f93db507eaa25de1fef977
│  │  ├─ d2
│  │  │  └─ 99dddec2042f5d5ab80d1442cbbb2185683478
│  │  ├─ d3
│  │  │  └─ a4b0e411317746ce2148bdfc4c734cf15dfc5b
│  │  ├─ d5
│  │  │  └─ 71743c5003953c6c32600c747589f3f3198baa
│  │  ├─ d7
│  │  │  └─ 25be882d568e3543de6d51e453085e505842ad
│  │  ├─ d8
│  │  │  └─ 3ec280118dfe5ded6bc143ceec058d3028e569
│  │  ├─ da
│  │  │  └─ 0f4e015d10f38c95fa44a385478dc87b6fae8d
│  │  ├─ db
│  │  │  ├─ 8c5f587e0d083ee7385c7469c06341bc44f9fd
│  │  │  └─ ed0bf425526123bbc2ee154cc17304763a8343
│  │  ├─ de
│  │  │  └─ 49fa94cb0d77d0690173662a6b0e44b81abb0c
│  │  ├─ e1
│  │  │  └─ deb32d32032a31ae6f4a65c140d12f48f3e9f4
│  │  ├─ e2
│  │  │  └─ b100be374163face0ee92b230d83e1943d0a8d
│  │  ├─ e4
│  │  │  └─ 96b99a09a74d3058324bd31f7ee5a63183a6e4
│  │  ├─ e6
│  │  │  ├─ 401cc4fe9b1863ec093f2e99bd1c30e164e877
│  │  │  ├─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  │  ├─ d44082bca261fef2af94d612c33f7bc0bf3d6b
│  │  │  └─ f54453c51745e633cf00f951506a6cbacf447d
│  │  ├─ e7
│  │  │  └─ 541edecc85117f63a9f18e07fb3b7192328999
│  │  ├─ e8
│  │  │  ├─ 66da8500130e06642888b7d142142793d0dde2
│  │  │  └─ 8420da31b4db0cc82805318f19740b3c8d0f6c
│  │  ├─ eb
│  │  │  └─ aaaec2ee11d0fe826abfbc6e4e84901e8ee74b
│  │  ├─ ec
│  │  │  └─ be3bb4913f4d7c23ecd0bef6983e119d946989
│  │  ├─ ed
│  │  │  └─ 5e5dfc2c85879f4345bf23f0faf1d9ef326bf5
│  │  ├─ ef
│  │  │  └─ 2a00671b037068d33575e841bc0f7d28cef264
│  │  ├─ f2
│  │  │  └─ 5098c36102b22440646d7b4c8d6670bf125f6d
│  │  ├─ f3
│  │  │  └─ 97fdce20cda60a55a856fa155ea5756f21efb1
│  │  ├─ f4
│  │  │  └─ 1ad97cd12cc36c020d20966da36c5643b5bfb8
│  │  ├─ f5
│  │  │  └─ 259752ea37e0d7424a1996d08677de414d7e17
│  │  ├─ f6
│  │  │  └─ b37f035c506bd5ebcfa60090a890ad48e76c6a
│  │  ├─ f7
│  │  │  └─ 50ce9cf98e1b89d1f773b64394569408ab1229
│  │  ├─ fa
│  │  │  └─ 07571dd8640a0b766928b74da7e8fcdf3ef571
│  │  ├─ fc
│  │  │  └─ aa6fa08997d51d705b227f841bdcb22bf2b43b
│  │  ├─ fd
│  │  │  └─ dc31dfb78508a86b3ccae4daa1cb1f10a60cf0
│  │  ├─ fe
│  │  │  └─ 23af8c25774951577170d3899c7e005bfee375
│  │  ├─ ff
│  │  │  └─ 6be843e0d954f42b1fac65eb6d49e4f48fa459
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ .sequelizerc
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ config
│  │  ├─ database.js
│  │  ├─ db_connect.ts
│  │  ├─ email.ts
│  │  ├─ redis_client.ts
│  │  └─ token.ts
│  ├─ controllers
│  │  ├─ login.controller.ts
│  │  ├─ logout.controller.ts
│  │  ├─ otp.controller.ts
│  │  ├─ register.controller.ts
│  │  └─ token.controller.ts
│  ├─ db
│  │  ├─ migrations
│  │  │  └─ 20241001025730-create-user.js
│  │  └─ models
│  │     └─ User.ts
│  ├─ helpers
│  │  ├─ email_body.ts
│  │  ├─ otp.ts
│  │  └─ password_hash.ts
│  ├─ index.ts
│  ├─ middleware
│  │  └─ protected_route.ts
│  ├─ routes
│  │  └─ v1
│  │     └─ routes.ts
│  ├─ types
│  │  └─ user.ts
│  └─ validation
│     ├─ otp.ts
│     └─ register.ts
└─ tsconfig.json

```