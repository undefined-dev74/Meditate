const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
<<<<<<< HEAD
=======
const isDevelopment = process.env.NODE_ENV === 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlLoader = require('html-loader');
>>>>>>> e848c0b388c29c39a004e22a5b28968403e82e8c
module.exports = {
	entry: ['@babel/polyfill', './src/js/index.js'],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/bundle.js',
	},
	devServer: {
<<<<<<< HEAD
		contentBase: './dist',
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
		}),
	],
=======
		contentBase: 'dist',
	},
>>>>>>> e848c0b388c29c39a004e22a5b28968403e82e8c
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader',
				},
			},
			{
<<<<<<< HEAD
=======
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true },
					},
				],
			},

			{
				test: /\.scss$/, 
				use: ['style-loader', 'MiniCssExtractPlugin.loader','css-loader', 'sass-loader'],
			
			},
			{
>>>>>>> e848c0b388c29c39a004e22a5b28968403e82e8c
				test: /\.(png|svg|gif|jpg)$/,
				use: ['file-loader'],
			},
		],
	},
<<<<<<< HEAD
=======
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
		}),
		new ExtractTextPlugin('/dist/css/main.css'),
		new MiniCssExtractPlugin({
			filename: "app.css",
			chunkFilename: "[id].css"
		})
	],
>>>>>>> e848c0b388c29c39a004e22a5b28968403e82e8c
};
