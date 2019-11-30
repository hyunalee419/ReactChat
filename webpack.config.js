const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
		'@babel/polyfill',
		'whatwg-fetch',
		path.join(__dirname, '/src/') + 'index.js'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react']
				}
			}
		}, {
			test: /\.tsx?$/,
			exclude: /(node_modules)/,
			loader: 'ts-loader'
		}, {
			test: /\.scss$/,
			exclude: /(node_modules)/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}]
	},
	resolve: {
		modules: [path.join(__dirname, 'src'), 'node_modules'],
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.json'],
	},
};
