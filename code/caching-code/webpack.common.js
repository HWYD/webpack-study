const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  entry: {
    main:'./src/index.js',
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test:/\.jpg$/,
        use:{
          loader:'url-loader',
          options:{
            name:'[name]_[hash].[ext]',
            outputPath:'images/',
            limit:'204800'
          }
        }
      },
  {
    test:/\.(eot|ttf|svg)$/,
    use:{
      loader:'file-loader',
    }
  },
]
  },
  plugins: [new HtmlWebpackPlugin({
    template:'./index.html'
  }), new CleanWebpackPlugin(['dist'])
  ],
  optimization:{
    usedExports : true,
    splitChunks:{
      chunks: 'all',
    }
  },
  performance:false,
  output: {
    path: path.resolve(__dirname,'dist')
  }
}