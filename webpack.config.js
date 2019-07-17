const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
  mode:"production",
  entry:{
    index: "./lib/index.tsx",
  },
  output: {
    filename: "index.js",
    path:  path.resolve(__dirname, 'dist/lib')
  },
  module:{
    rules:[
      {
        test: /\.tsx?$/,
        loader:'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};