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
  
  
  
  scroll 与 下拉更新
  包裹框需要有一个固定的高度。设置overflew:scroll;overflew:auto; 就会产生滚动条
  下拉更新：滚动到最底部继续滚，触发下拉更新。但是原生滚动条做不到。需要自己做滚动条。
  如何获取滚动条宽度？ 自己写一个div然后产生滚动条，获取它宽度。
  
  如何查看一个库的源代码？
  
  折叠代码功能
  
  赋值不看
  ctrl + [
  
  
  useState 运行原理
  1. 一开始大脑想象和react的setState一样。定义了一个初始变量，定义了一个设置这个值的函数。
  同样的函数代码，运行不同的次数得到的值不一样。n会每次加1，如何实现？ 找个全局地方把state存起来。
  由于同一个组件可能要调用多次useState 所以这个局部变量需要是一个数组，有啦数组就需要有下标。
  2. 手动触发react更新 update=React.useState(null)[1]
  
  React Hooks
  1. 状态 useState
  2. 副作用 useEffect  useLayoutEffect
  3. 上下文 useContext
  4. Redux useReducer
  5. 记忆 useMemo useCallback
  6. 引用 useRef useImperativeHandle
  7. 自定义 useDebugValue
  
  1. const[n,setN]=useState(0)
  2. const[user,setUser]=useState({name:"xxd",age:"18"})
  setUser({...user,age:"26"}); // setUser是局部更新，不会帮我们合并属性。所以要写...user! 地址要变，地址不变不渲染。
  如果要对state进行多次操作可以使用函数即setN(i=>i+1);setN(i=>i+2); 这样会执行两次把n变成3.
  如果直接写setN(n+1);setN(n+2);n只会变为2.因为每次操作的n都是初始的0，你不会变。
  3. useReducer
  使用的是Flux/Redux的思想
  3.1. 创建初始值initialState
  3.2. 创建所有操作reducer(state,action)
  3.3. 传给useReducer,得到 读和写 API
  3.4. 调用写（{type:"操作类型"}）
  总的来说userReducer 是 useState 的复杂版。
  小技巧： 
  reducer中函数可以用对象包裹一下，通过{...userReducer}把它们引入到reducer中。
  const {state,dispatch} = useReducer(reducer,state);
  初始请求接口只需要请求一次，可以写到useEffect中。
  4. useContext
  4.1 C=React.createContext(initial) 创建上下文
  4.2 <C.provider value={{state,dispatch}}><C.provider/> 圈定作用域
  4.3 在作用域中使用const {state,dispatch}=useContext(C)来使用上下文。
  5. useEffect 副作用，改变环境变量
  5.1  useEffect(()=>{},[]) // 第一次执行
  5.2 useEffect(()=>{}) // 第123...次执行.有任何一个变量变化就执行
  5.3 useEffect(()=>{},[n]) // 第一次执行 + n变化的时候执行（第一次也算n变化了，从无到有）
  5.4 useEffect(()=>{return ()={console.log('组件卸载挂掉了执行')}},[])
  6.useLayoutEffect 渲染之前执行
  7. useMemo
  7.1 React默认有多余的render 使用React.memo(Child).则Child 函数组件只会在props改变的时候render
  7.2 但是如此做有bug.如果Child组件接收了一个回调函数。每次渲染父组件，回调函数的地址发生了改变，导致Child任然会再次执行
  7.3 此时可以使用useMemo(()=>{return (m)=>{console.log(这里是回调函数)}},[m,n])。只有m或者n变化了。这个回调函数的引用地址才会改变。
  7.4 这等价于 useCallback((m)=>{console.log(这里是回调函数)})
  8. 函数式组件每执行一次，都会重新生成state中的n.十分蛋疼。如果你需要一个值在render时保持不变。使用useRef
  8.1 初始化 const value=useRef(0);
  8.2 读取 value.current 每次render value.current不会变。 value会变
  8.3 注意由于两次值相同，不会触发渲染render.需要手动render.比如引入一个保证会变化的其他值来触发render。监听current.
  9. 由于函数组件不能使用refs
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  