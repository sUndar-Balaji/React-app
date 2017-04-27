module.exports = {
	devtool: 'source-map',
    context: __dirname,
    entry: "./main",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
	  loaders: [
	    {
	      test: /\.js$/,
	      exclude: /node_modules/,
	      loader: 'babel-loader',
	      query: {
	        presets: ['es2015', 'react', 'stage-0']
	      }
	    }
	  ]
	}
}