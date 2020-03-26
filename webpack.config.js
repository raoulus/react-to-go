const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'js/[name].[chunkhash].js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'client'),
      path.resolve(__dirname, 'node_modules'),
    ],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      filename: 'index.html',
      minify: false,
      showErrors: true,
    }),
    new CopyPlugin([{ from: 'client/assets' }]),
    new MiniCssExtractPlugin(),
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
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          },
        ],
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
    ],
  },
}
