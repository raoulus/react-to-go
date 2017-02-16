const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'client'),
      path.resolve(__dirname, 'node_modules')
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['public/']),
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      filename: 'index.html',
      minify: false,
      showErrors: true
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'client')],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react']
          }
        }]
      }
    ]
  }
};
