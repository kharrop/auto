if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,a,c)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const n={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return t;case"module":return n;default:return e(s)}}))).then((e=>{const s=c(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/auto/_next/static/chunks/061a1c0b42e572f83f2a5d5ceacb0951ddbee2b6.d65b136bc73a15f931c4.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/121a96deea437ec6f4eb06ef11fd373073d8091f.dcd964a49a4df3e8b4c5.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/44301ee5da96bd1439f01bd54b0c901ffb491453.26ea98c5ff80c11a609d.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/7099324e.3bbe0c84743f3f8d6181.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.cfdabd25e11f0be40970.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/92ed37a802c09eecadd6f8b05d72c09eadedb848.78ec618f79eb4b0af8e3.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/9598fa14.b30bcf3ce5f6b93a4201.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/c0d60241.15909a4bc03a7108ef04.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/fad10ed4fe30e9b4290d0f5f822e85f2fbd13176.e6ba2a6a7dcda3e2075b.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/ffd4daddbb32ad1e02d714eb0ba3bd454f8be05f.7719d8e5bdc3deb6665e.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/framework.4e17f312d9f9b3aad38a.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/main-f6532be1535b198c60f4.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/_app-5ba64146854c56cf041a.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/_error-1c401249061c496dd0b0.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/blog-b3cfeb3c2f6a3d7aac53.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/blog/both-worlds-9bd3a600dd1d89eaf8a8.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/blog/npm-canary-scope-65251613bb791e63ff20.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/blog/pr-in-progress-a06bbb3d9b5638e19670.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/blog/using-shipit-787a4ad1f97972452696.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/blog/v8-d98dbcf9dea7019a189f.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/blog/why-3ad63f75523dc4d63b13.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs-0b416f03cc37cc4979ac.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/_sidebar-e6a69e2a8902f1e94817.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/build-platforms/circleci-bb98534840014bb824c0.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/build-platforms/github-actions-0c1e97909e8651fedc0f.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/build-platforms/jenkins-18c9a5e872fbbcf42bac.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/build-platforms/travis-a8cb47e64ff9d24fe85d.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/configuration/autorc-950c3557624cbe1c0461.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/configuration/non-npm-2d33edaa660762efded7.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/configuration/plugins-d5a5557f6f65ca2c3e33.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/configuration/troubleshooting-17c70099df7bfd89615c.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/all-contributors-7e734d10b42c3015db85.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/brew-cbac883dca749f982c12.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/canary-f3114c62227678320d93.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/changelog-9ef3264b5783046452b6.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/chrome-17336c6f744012edbf48.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/cocoapods-b3df9661f4ee589c78b1.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/comment-e1c1c992c64ae42b1305.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/conventional-commits-2144fe953a0bf687178f.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/crates-42056729e53b0522e597.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/create-labels-e356720d20d10f162950.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/defaultLabelsRenderer-f0009ac51e6f9c9cbb76.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/docker-0bc80d1f2a0b59050e82.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/exec-c0d480a56dc5e462bb8b.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/first-time-contributor-85765f5dfe1821eb1a6b.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/gem-40738fd398c0bd98f5c9.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/gh-pages-aa83c691c2b29c52c0a6.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/git-tag-d4a3721106643385e338.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/gradle-637c7e4fe1dbce5913ba.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/info-d737ea6c8452f27a2889.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/init-081f0e835f0dccf84634.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/jira-572a99d2edb2970dbe63.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/label-841f98c05a802469565a.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/latest-de58c80e3356e648b7eb.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/magic-zero-267daf5f8c31e5373e43.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/maven-c0fc615ae912255b4d41.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/microsoft-teams-680d73b9fef51b26233e.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/next-c16317696017e98878b9.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/npm-77f350b52be910306ab0.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/omit-commits-789a41f8154e736d046c.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/omit-release-notes-52c3f1c565290a9eadaa.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/pr-body-201a78671e992d8a44d1.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/pr-body-labels-e907f7e9f7a674b783b8.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/pr-check-92c1256659b30910dd28.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/pr-status-f83be1fd2855acad4b75.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/release-e380b2fc1ca4beb06051.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/released-1a2234b36fa114d1cb82.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/s3-4211cc23388cb0f5545d.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/shipit-47dfd903c56077dadcc1.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/slack-dc43bd8e113dd0aaddcb.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/twitter-63e557d4fc7dadce80fb.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/upload-assets-6c969e013497aeef3903.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/version-bd01cd8712df784842e5.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/generated/vscode-9f2f0317643de9717662.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/plugins/changelog-hooks-3a734d3efd41750010d4.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/plugins/configuration-hooks-78fc684db5f289b210db.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/plugins/hook-api-docs-8222e094b963ce830c4d.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/plugins/init-hooks-eda6b124342aca523b2a.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/plugins/log-parse-hooks-ab4c36f7f748ad83013b.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/plugins/release-lifecycle-hooks-9c164f2118120baf537e.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/plugins/writing-plugins-1c125ffad1297ed6b30d.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/plugins/writing-publishing-plugins-2ffa9b07d959d0b10b3a.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/welcome/getting-started-af8068abc6c7f46a6d79.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/docs/welcome/quick-merge-eb1f21711dbd8a1e0e53.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/pages/index-57b9cd685f080355b8f6.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/polyfills-1d9142429d485cad21e4.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/css/b2a6d9973598118e01a9.css",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/zXd6TNJtLxOJVz33uqCp6/_buildManifest.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/_next/static/zXd6TNJtLxOJVz33uqCp6/_ssgManifest.js",revision:"zXd6TNJtLxOJVz33uqCp6"},{url:"/auto/add-label.png",revision:"f2b968f7e3d84670bc16af4aa74f6842"},{url:"/auto/changelog-example.png",revision:"f60e279f44546fa6e4cfcdb16f438a94"},{url:"/auto/complete-auto.png",revision:"cd23d487dd711fa1595591ee767ec313"},{url:"/auto/dark-logo-large.png",revision:"41842c84192b5bb5672de18a2d5f2022"},{url:"/auto/dark-logo-small.png",revision:"256999e58384ce0a2b93e6fb41885f00"},{url:"/auto/default-auto.png",revision:"31a739982521181c0ac1cf9e811db93f"},{url:"/auto/favicon-dark.png",revision:"a247e2a6b79538d9d418174a6673d74e"},{url:"/auto/favicon.png",revision:"28aae0a66373b9ae9587b39275bdb009"},{url:"/auto/hook-overview.png",revision:"56043ff5ebc9c262541c359e31d6effd"},{url:"/auto/jenkins-next-branches.png",revision:"3ed8eeb905f23c0c0e1c072341f375f1"},{url:"/auto/light-logo-large.png",revision:"f64c4a54fcacaab9686083441a4c0bdf"},{url:"/auto/light-logo-small.png",revision:"dc112bbedbbc6372fc71e3a3d291ca5a"},{url:"/auto/logo-dark.svg",revision:"c7cf81afc1a072236632286919ac3b3e"},{url:"/auto/logo-large-dark.png",revision:"bc383dd01e9bf5953d337b7fa30641db"},{url:"/auto/logo-large.png",revision:"e6afaa6147ac2fe10cd2d282a20338f7"},{url:"/auto/logo.svg",revision:"322df941652d3e0de765d9c2bc41b586"},{url:"/auto/manifest.json",revision:"b6c3cdbbfbadb16a9cbbdccec5b9dbaf"},{url:"/auto/merge.png",revision:"8299143c7200ec59b526f089d4c04922"},{url:"/auto/monochrome-logo-large.png",revision:"46b3e951b5c930f05d3f23f4a2ac2663"},{url:"/auto/monochrome-logo-small.png",revision:"4dbaea3d3ded52a919dc29cc0b11e394"},{url:"/auto/next-branch.png",revision:"2b17e2231cf69bbcb476c139949fc630"},{url:"/auto/open-pr.png",revision:"1d7d061a7a381ef74a6cebd9834e9c95"},{url:"/auto/pr-to-pr.png",revision:"cc03166a9e46e584fd9c1c9dc4665ab4"},{url:"/auto/readme-logo.png",revision:"6027375edf23a3022a23c96b631892e5"},{url:"/auto/release-example.png",revision:"dbf0498df867bb178c9fae2a1fd098dc"},{"url":"/auto/404.html","revision":"766786773ce5d9b1b8064bb28179acfd"},{"url":"/auto/blog.html","revision":"0d476a6f98e6c7f013b1a9aba9bf3ecf"},{"url":"/auto/docs.html","revision":"212173d69509b689bf01d3768ede4a10"},{"url":"/auto/index.html","revision":"6fd9cab25cf6f620cc6d5a9dd332786f"},{"url":"/auto/blog/both-worlds.html","revision":"10b1ddd517eeefc791452e6ea26977d2"},{"url":"/auto/blog/npm-canary-scope.html","revision":"69b59368d4f13f13b1faa7f67139e5cc"},{"url":"/auto/blog/pr-in-progress.html","revision":"244520bef48b944be28685db9390bb30"},{"url":"/auto/blog/using-shipit.html","revision":"f5bbc55c2932f2b45dcb3196f606b53a"},{"url":"/auto/blog/v8.html","revision":"60842eb36fe368ed55225352564bf791"},{"url":"/auto/blog/why.html","revision":"cb1b218dcbea35ed2c8a7871fc5768d9"},{"url":"/auto/docs/_sidebar.html","revision":"a22a19133d40ba3be9e0242d4fa7cb5f"},{"url":"/auto/docs/build-platforms/circleci.html","revision":"3c6d674d7cead8fb064f12edfb2f6cb4"},{"url":"/auto/docs/build-platforms/github-actions.html","revision":"0333bf611db1366dd70311fc549887d5"},{"url":"/auto/docs/build-platforms/jenkins.html","revision":"9a33e4ce85f723a1c45f63db4ac31660"},{"url":"/auto/docs/build-platforms/travis.html","revision":"8bf7e6829c695f33b98e271cd7fa85a4"},{"url":"/auto/docs/configuration/autorc.html","revision":"f77b9ffe8cb296f5800e93a6360e4996"},{"url":"/auto/docs/configuration/non-npm.html","revision":"6e39f6f33e84e9060835af7821b00674"},{"url":"/auto/docs/configuration/plugins.html","revision":"774edba65dc3e99c6645e48e13a91936"},{"url":"/auto/docs/configuration/troubleshooting.html","revision":"ba91b86d632f7ea83ef8e17054702b9f"},{"url":"/auto/docs/generated/all-contributors.html","revision":"bdbc547b7c647e8c1cf6cc8b91370e61"},{"url":"/auto/docs/generated/brew.html","revision":"486824e3b9d41c0cecd4a7214f644cc3"},{"url":"/auto/docs/generated/canary.html","revision":"a30602aa322e2c6ee0539c6732c26c90"},{"url":"/auto/docs/generated/changelog.html","revision":"e97d8929c8b7dae27b1492b1d2c2c1e7"},{"url":"/auto/docs/generated/chrome.html","revision":"f499cb558cebcfcbef21279a0f2198a8"},{"url":"/auto/docs/generated/cocoapods.html","revision":"af088d87224eae036540d71882d120e3"},{"url":"/auto/docs/generated/comment.html","revision":"e9b0fec30806f4991ef33e7d71b4b8af"},{"url":"/auto/docs/generated/conventional-commits.html","revision":"430c75235df69b218a609ca514095c15"},{"url":"/auto/docs/generated/crates.html","revision":"b146665269eebf21d678d6ca14ef20b9"},{"url":"/auto/docs/generated/create-labels.html","revision":"3affd929e0111e3ad5b6ed19336a21bf"},{"url":"/auto/docs/generated/defaultLabelsRenderer.html","revision":"9c59d4db995961ffbad8dbc695c32d77"},{"url":"/auto/docs/generated/docker.html","revision":"c170b6487f7afb483f5fb392786350ea"},{"url":"/auto/docs/generated/exec.html","revision":"0f1de843c96537afcf23e59c053b4d8d"},{"url":"/auto/docs/generated/first-time-contributor.html","revision":"ab41cd44c8ecd38b2bd1be669198a27b"},{"url":"/auto/docs/generated/gem.html","revision":"e324795a633a83c20eee80cb48236ef2"},{"url":"/auto/docs/generated/gh-pages.html","revision":"da83860d48923859c75e29a35a6afdc0"},{"url":"/auto/docs/generated/git-tag.html","revision":"2f0b39d639fc59f7098794cf72d910e8"},{"url":"/auto/docs/generated/gradle.html","revision":"4b9f7be2fd130f7f6d713af79de24b56"},{"url":"/auto/docs/generated/info.html","revision":"a5b1dd1837c1ca72a0421a367e85544e"},{"url":"/auto/docs/generated/init.html","revision":"bea1e125560508bc50d889e23fc10b78"},{"url":"/auto/docs/generated/jira.html","revision":"41712db96ae099cc46dbe44f4bd355ae"},{"url":"/auto/docs/generated/label.html","revision":"9324a5f5cf704707a6dee1418ff8fc22"},{"url":"/auto/docs/generated/latest.html","revision":"c4d52e847304be9e7a851a9cf9283d10"},{"url":"/auto/docs/generated/magic-zero.html","revision":"129c9a8cb671be6c2c4a2a50174bad31"},{"url":"/auto/docs/generated/maven.html","revision":"630af59a5085b41f761cccb6cc2ff23f"},{"url":"/auto/docs/generated/microsoft-teams.html","revision":"7a22487257b3919833e1c29c2069d085"},{"url":"/auto/docs/generated/next.html","revision":"74a54123401610b037334074cfb326e4"},{"url":"/auto/docs/generated/npm.html","revision":"8c31041d72dcb4933ccfcef9bf765942"},{"url":"/auto/docs/generated/omit-commits.html","revision":"11d1ca18000d6cff508bf37a9b2a45e0"},{"url":"/auto/docs/generated/omit-release-notes.html","revision":"2c9788504d2e27cee1a011dc3387476d"},{"url":"/auto/docs/generated/pr-body-labels.html","revision":"8f81ca22f89be68461b9dc5ace2a8013"},{"url":"/auto/docs/generated/pr-body.html","revision":"1467f8fc751fb35780ec3fbd1675f6fc"},{"url":"/auto/docs/generated/pr-check.html","revision":"23dd43000fec0a8d6cf252f4c2205d5f"},{"url":"/auto/docs/generated/pr-status.html","revision":"1ce96ad24fe93d9bcc5f403ec03fb06e"},{"url":"/auto/docs/generated/release.html","revision":"6ec51f7cb88a74c905aade007aa9a5e5"},{"url":"/auto/docs/generated/released.html","revision":"c019e543bacacf7ac76889e50317b620"},{"url":"/auto/docs/generated/s3.html","revision":"bb6c92bc97cb2e30e27c3816e6647576"},{"url":"/auto/docs/generated/shipit.html","revision":"ce675317290a319373972156a220e4a5"},{"url":"/auto/docs/generated/slack.html","revision":"4df65780763361d77174c1ca899f2f2d"},{"url":"/auto/docs/generated/twitter.html","revision":"36089a825bcc8a066c2e35566e79dc67"},{"url":"/auto/docs/generated/upload-assets.html","revision":"21f437d23ebe858b077c127f64a2281b"},{"url":"/auto/docs/generated/version.html","revision":"c63e77629bb8b45b9a9f6fd88eaea8b4"},{"url":"/auto/docs/generated/vscode.html","revision":"e542e1194e05d291c5ee51e22c307ed6"},{"url":"/auto/docs/plugins/changelog-hooks.html","revision":"f82df17701c5a167bdddd5d6b93c7463"},{"url":"/auto/docs/plugins/configuration-hooks.html","revision":"3f2d6a0c879f38b475ffe97331be5759"},{"url":"/auto/docs/plugins/hook-api-docs.html","revision":"6f4acc9c55741d91c6b31282c8b1426b"},{"url":"/auto/docs/plugins/init-hooks.html","revision":"5e5d6c609bb8467c83cf51ce12a607f8"},{"url":"/auto/docs/plugins/log-parse-hooks.html","revision":"83f5d72be90a4df37623ac091a759f33"},{"url":"/auto/docs/plugins/release-lifecycle-hooks.html","revision":"54fcd2ed39731c53949261a934b8e5ee"},{"url":"/auto/docs/plugins/writing-plugins.html","revision":"1770f697e0b55379ab2c16b03dca4264"},{"url":"/auto/docs/plugins/writing-publishing-plugins.html","revision":"cd64a0d2730f3039264139e2909077ad"},{"url":"/auto/docs/welcome/getting-started.html","revision":"27f0f2fb0d940d09f858454a4228492e"},{"url":"/auto/docs/welcome/quick-merge.html","revision":"d7ca1e253d63be940a25c6c04036ffad"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/auto",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
