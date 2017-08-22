var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({size: 5});
var WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
  // devtool: 'eval-source-map',
  entry: {
    main: __dirname + '/app/app.js',
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].[chunkhash:8].[id].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, './app'),
        use: 'happypack/loader?id=js'
      },
      {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'less-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].[contenthash:8].css'),
    new webpack.HotModuleReplacementPlugin(),
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      loaders: ['babel-loader?{"presets":["es2015","stage-0","react"],"plugins":[["import",{"libraryName":"antd","style":true}]]}'],
    }),
    new HappyPack({
      id: 'styles',
      threadPool: happyThreadPool,
      loaders: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {warnings: false},
      output: {comments: false}
    }),
    new webpack.optimize.CommonsChunkPlugin({name: 'common', chunks: ['main', 'vendor']}),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      filename: 'manifest.[hash:8].[id].js',
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.OccurrenceOrderPlugin,
    new WebpackMd5Hash(),
  ],
  devServer: {
    contentBase: './build',
    hot: true,
    historyApiFallback: true,
    inline: true,
    port: 9090,
    open: true,
    openPage: '/home'
  }
};