const base = require("./webpack.common");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, base, {
  mode: "development",
  entry:{
    index: './example.tsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    })
  ]
});