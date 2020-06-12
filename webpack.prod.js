const base = require("./webpack.common");
const path = require('path');
module.exports = Object.assign({}, base, {
  mode: "production",
  // 部署项目后项目读取的入口
  entry:{
    example: './lib/index.tsx',
  },
  output: {
    // 打包后输出的文件名。可以叫bound.js
    filename: "index.js",
    path:  path.resolve(__dirname, 'dist/lib'),
    library: 'xxdui888',  // 指定的就是你使用require时的模块名
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
    'echarts':'echarts'
  }
});