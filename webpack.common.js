

module.exports={

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module:{
    rules:[
      {
        test: /\.tsx?$/,
        loader:'awesome-typescript-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
};