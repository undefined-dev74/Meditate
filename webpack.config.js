const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlLoader = require('html-loader');
module.exports = {
	entry: ['@babel/polyfill', './src/js/index.js'],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/bundle.js',
	},
	devServer: {
		contentBase: 'dist',
	},
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
				test: /\.(png|svg|gif|jpg)$/,
				use: ['file-loader'],
			},
		],
	},
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
};
