const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports ={
    mode:'development',
    devtool:'cheap-module-eval-source-map',
    entry: {
      main:'./src/index.js',
    },
    devServer:{
      contentBase:'./dist',
      open:true,
      port:8081
    },
    module:{
      rules:[
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
    plugins: [new HtmlWebpackPlugin({
      template:'./index.html'
    }), new CleanWebpackPlugin(['dist']) ],
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname,'dist')
    }
}