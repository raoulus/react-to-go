const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const pkg = require('./package.json')

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'js/[name].[chunkhash].js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'client'),
      path.resolve(__dirname, 'node_modules')
    ],
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
    open: true,
    historyApiFallback: true,
    writeToDisk: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.EnvironmentPlugin({
      VERSION: pkg.version
    }),
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      filename: 'index.html',
      minify: false,
      showErrors: true
    }),
    new CopyPlugin([{ from: 'client/assets' }]),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
      chunkFilename: '[id].css',
      ignoreOrder: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        include: [path.resolve(__dirname, 'client')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
          }
        ]
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
          'less-loader'
        ]
      }
    ]
  }
}
