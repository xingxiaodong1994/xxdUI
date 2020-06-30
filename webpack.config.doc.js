const base = require("./webpack.common");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = Object.assign({}, base, {
  mode: "production",
  // 部署项目后项目读取的入口
  entry:{
    example: './example.tsx',
  },
  output: {
    // 打包后输出的文件名。可以叫bound.js
    //  filename: "index.js",
    path:  path.resolve(__dirname, 'doc'),
    // library: 'xxdui888',  // 指定的就是你使用require时的模块名
    libraryTarget: 'umd',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    })
  ]
});