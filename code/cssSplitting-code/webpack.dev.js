const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
    mode:'development',
    devtool:'cheap-module-eval-source-map',
    devServer:{
      contentBase:'./dist',
      open:true,
      port:8081,
      hot:true,
    },
    module:{
      rules:[
        {
          test:/\.css$/,
          use:['style-loader',
          'css-loader',
          'postcss-loader'
          ]
        },
        {
          test:/\.scss$/,
          use:['style-loader',
          {
            loader:'css-loader',
            options:{
              importLoaders:2,
              // modules:true
            }
          },
          'sass-loader',
          'postcss-loader'
          ]
        }
      ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}

module.exports = merge(commonConfig,devConfig)