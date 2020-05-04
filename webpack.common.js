const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader',
                ],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
				  'file-loader',
				],
			},
		],
	},
};
