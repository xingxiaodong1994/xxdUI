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

yarn add <packageName> （--save 是 yarn 默认的，依赖会记录在 package.json 的 dependencies 下）

yarn add <packageName> --dev （ 简写 -D，依赖会记录在 package.json 的 devDependencies 下）

yarn global add <packageName> （全局安装依赖）

// 写Icon组件
1. 下载svg图片从阿里开源。新建icons文件夹放进去。

npm版本变化规则。
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch
 npm version patch
API没变化，只修复bug 16.7.0--》16.7.1

API有变化 16.7.0--》16.8.0

大版本： 16.7.0--》17.0.0

git tag <tagName> //创建本地tag

git push origin <tagName> //推送到远程仓库


git tag -a 0.1.3 -m “Release version 0.1.3″

git tag 是命令
-a 0.1.3是增加 名为0.1.3的标签
-m 后面跟着的是标签的注释

// 删除标签的命令
git tag -d 0.1.3




// 删除远端服务器的标签

git push origin :refs/tags/0.1.3

git push origin master
git push origin --tags


> 1.ui框架风格:联通经分系统风格.

类组件：
onclick绑定this:
 1.bind(this)
 2.x= ()=>{};
 箭头函数问题：浪费内存。this不能共用。无解，我们就需要20个当前的this.
 
 指定默认值：
  static defaultProps={指定参数props的默认值。}
  
 指定函数的名字。 
  static displayName='frank' 不指定默认使用函数或者类的名字。避免调试时重名。
  
  prop-types:检查类型的库
  import PropTypes from 'proptypes' 
  给js加上类型检查。如果不通过，会在控制台报错。
  ```
  static propTypes={
        message:PropTypes.string
  }
  ```
  计算属性：
  get name(){
     return this.state.firstName+this.state.lastName
  }
  通过this.name就可以得到计算属性。
  set name(newName){
     const [firstName,lastName]=newName.split(" ");
     this.setState({
        firstName,
        lastName
     })
  }
  
  
 
 cloneElement(<div>,{key:'1'})
 bug:遮罩层遮不住问题。父div的z-index小。压死怎么办。传送门ReactDOM.creatPortal(dom,document.body)
 
 外面要用到封装好的函数
 函数是延迟执行的。
 
 代码重构：写完代码立即重构。
 消除重复。
 抽象。然后合并为一个。
 抽象成函数的形式。()=>void
 dialog: 
 要有一个例子，
 帮助函数，高阶函数。
  fragment：包裹 
  条件判断：&& 表达式 
  动态生成组件
  操作函数内变量，闭包返回API