const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: './src/bootstrap.ts',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'build.js'
	},
	devtool: 'source-map',
	stats: {
		color: true,
		modules: true,
		reasons: true
	},
	resolve: {
		extensions: ['.ts', '.js', '.json', '.html']
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "src/index.pug",
			inject: "body",
			hash: true
		})
	],
	module: {
		rules: [
			{
				test: /\.ts$/,
				enforce: 'pre',
				loader: 'tslint-loader'
			},
			{test: /\.ts$/, use: 'awesome-typescript-loader'},
			{test: /\.html$/, use: 'html-loader'},
			{
				test: /\.pug$/, use: [
				{
					loader: 'pug-loader'
				}
			]
			},
			{test: /\.css$/, use: 'style!css'},
			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							modules: true,
							localIdentName: '[path][name]__[local]--[hash:base64:5]'
						}
					},
					{
						loader: "sass-loader"
					}
				]
			},
			{test: /\.(jpg|png|ttf|eot|svg|woff|woff2)$/, use: "file?name=lib/[hash].[ext]"}
		]
	}
};
