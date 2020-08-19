const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
require('@babel/register');

const config = require('./package.json')
const outputFile = config.name + '.js'
console.log('Output File  = ' + outputFile)


module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFile,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      // able to use this variable in my bundle files BUT NOT in webpack config itself
      outputFile: JSON.stringify(require("./package.json").name),
    }),
    new HtmlWebpackPlugin({
      title: outputFile,
      template: 'src/index.html',
      filename: 'index.html'
    })
  ],
  // stats: {
  //   logging: 'verbose'
  // }
};
