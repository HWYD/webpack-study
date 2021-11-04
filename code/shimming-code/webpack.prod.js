const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const prodConfig = {
    mode:'production',
    // devtool:'cheap-module-source-map',
    optimization:{
      minimizer:[new OptimizeCSSAssetsPlugin({})]
    },
    plugins: [new MiniCssExtractPlugin({
      filename:'[name].css',
      chunkFilename:'[name].chunk.css'

    })],
    module: {
      rules: [
        {
          test:/\.css$/,
          use:[
            MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
          ]
        },
        {
          test:/\.scss$/,
          use:[MiniCssExtractPlugin.loader,
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
      ],
    },
    output:{
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js',
    }
}

module.exports  = merge(commonConfig,prodConfig)