0. 一个react,ts项目的开启。
1. github上建立远程仓库。
2. 通过`git clone ssh/xxx .` 拉取代码。
3. 新建`.gitignore`文件。
4. 新建`index.html and src/index.js`文件。
5. 安装webpack插件。
6. 新建`webpack.common.js`的文件。
7. 引入`tslint.js and tsconfig.json`文件。

此时你应该可以做到`npx webpack`打包。

潜龙勿用。// 学习阶段，学的越多，懂得越透，潜的越深，将来成就越大。
现龙在田，利见大人。

// 不能想要就要，万事万物都需要时间。
// 需要正当。合理节制自己的欲望，要知道需要的后果，如果需要付出的代价太大，果断不要，等待时机。
// 人心不足
// 天下没有公平这回事，只有公正。
// 付出许多后，需求得到满足。
// 房子有了，小孩有了，成功了。然后别自得自满，或者故步自封。这时候要学会分享。

// 守时待命 ，时也命也。
// 讼卦：高度警惕。不要轻易开启诉讼，不要为了小钱，自私而诉讼。 但是为了公义诉讼。
// 站在不告的立场来告。诉讼是为了化解问题，不是为了告到对方。


{
  "name": "reactUI",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --open --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/xingxiaodong1994/xxdUI.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/xingxiaodong1994/xxdUI/issues"
  },
  "homepage": "https://github.com/xingxiaodong1994/xxdUI#readme",

}
