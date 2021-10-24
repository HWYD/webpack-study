const path = require('path')

module.exports ={
    mode:'development',
    entry: {
      main:'./src/index.js'
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
		  test:/\.css$/,
		  use:['style-loader',
		  {
			  loader:'css-loader',
			  options:{
				  importLoaders:1,
			  }
		  },
		  'postcss-loader'
		  ]
		}
      ]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname,'dist')
    }
}