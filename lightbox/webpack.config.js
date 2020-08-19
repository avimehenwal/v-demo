const path = require('path');
// import config from 'package.json'

const outputFile = 'lightbox.js'

module.exports = {
  entry: './src/index.js',
  output: {
    filename: outputFile,            // make it dynamic
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devtool: 'eval',
};