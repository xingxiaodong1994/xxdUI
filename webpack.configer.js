const path = require('path');

module.exports={
  entry: "./lib/index.tsx",
  output: {
    filename: "index.js",
    path:  path.resolve(__dirname, 'dist')
  }
};