var webpack = require('webpack');

var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
  devtool: 'eval-source-map',
  entry: ['webpack/hot/dev-server', __dirname + '/app/app.js'],
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  module: {
    //loaders加载器
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style", "css!postcss!less")
      }
    ]
  },
  postcss: [
    require('autoprefixer')    //调用autoprefixer插件,css3自动补全
  ],
  plugins: [
    new ExtractTextPlugin('main.css'),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './build',
    colors: true,
    historyApiFallback: true,
    inline: true,
    port: 9090,
    process: true
  }
};