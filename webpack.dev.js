const base = require("./webpack.common");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, base, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: "xxd的react轮子"
    })
  ]
});