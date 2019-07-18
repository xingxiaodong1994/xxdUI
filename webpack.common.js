const path = require('path');

module.exports={
  // mode:"production",
  entry:{
    index: "./lib/index.tsx",
  },
  output: {
    filename: "index.js",
    path:  path.resolve(__dirname, 'dist/lib'),
    library: 'xxdUI',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module:{
    rules:[
      {
        test: /\.tsx?$/,
        loader:'awesome-typescript-loader'
      }
    ]
  },
};