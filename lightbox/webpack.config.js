const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = require('./package.json')
outputFile = config.name + '.js'
console.log('Output File  = ' + outputFile)


module.exports = {
  entry: './src/index.js',
  output: {
    filename: outputFile,
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devtool: 'eval',
  plugins: [
    new webpack.DefinePlugin({
      // able to use this variable in my bundle files BUT NOT in webpack config itself
      outputFile: JSON.stringify(require("./package.json").name),
    })
  ]
};
