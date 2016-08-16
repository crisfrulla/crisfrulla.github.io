module.exports = {
	entry: './js/script.js',
	output: {filename: './js/bundle.js'},
	module: {
		loaders: [
			{test: /\.js?/, loader: 'babel-loader', exclude: /node_modules/}
		]
	}
};
