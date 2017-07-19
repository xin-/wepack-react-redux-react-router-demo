
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var isDEV = process.env.NODE_ENV == 'development'
var plugins = [
	new webpack.HotModuleReplacementPlugin(),//热替换
	new webpack.optimize.CommonsChunkPlugin({//提取公共模块
		filename: 'js/commons-[chunkhash:8].js',
		children: true,
		minSize: 10 * 1000, // 10k
		
		minChunks: 5,
		// 在传入  公共chunk(commons chunk) 之前所需要包含的最少数量的 chunks 。
	  	// 数量必须大于等于2，或者少于等于 chunks的数量
	  	// 传入 `Infinity` 会马上生成 公共chunk，但里面没有模块。
	  	// 你可以传入一个 `function` ，以添加定制的逻辑（默认是 chunk 的数量）

	})
]
if(!isDEV) {
	plugins.concat([
		new HtmlWebpackPlugin({
			title: 'xhl',
			template: path.join(__dirname, 'template.html'),
			filename: 'index.html',
			inject: true,
			hash: false,
			chunks: ['main'],
			showErrors: true,
			minify: {
		      	collapseWhitespace: true,
		      	collapseInlineTagWhitespace: true,
		      	removeRedundantAttributes: true,
		      	removeEmptyAttributes: true,
		      	removeScriptTypeAttributes: true,
		      	removeStyleLinkTypeAttributes: true,
		      	removeComments: true,
		    }
		}),
		new webpack.optimize.UglifyJsPlugin({//压缩js css
		    compress: {
		        warnings: false
		    }
		})
	])
}

module.exports = {
	entry: {
		main: './src/index.js',
	},
	output: {
		filename: isDEV ? 'bundle.js' : '[name]-[hash:8].js',
		path: path.resolve(__dirname, isDEV ? 'devServer' : 'dist'),
		publicPath: isDEV ? '/' : '/',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 1000
						}
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015', 'react', 'stage-3'],
							plugins: ['add-module-exports', 'transform-runtime'], //增加对exports的支持， 2，将webpack的工具函数从每个文件中改为require
						}
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			assets: path.resolve(__dirname, 'assets') //此配置相当于 变量引入 字符串替换  解析出来的路径 依据 import所在文件的位置查找
		}
	},
	devtool: "cheap-eval-source-map", //代码调试
	plugins: plugins,
	devServer: {
		hot: true,
		contentBase: path.resolve(__dirname, 'devServer'),
	    publicPath: '/',
	    port: 9000,
	    allowedHosts: ['xhl.com'],
	    historyApiFallback: true, //配置devserve 总是返回index.html 配合react-router
	}
}