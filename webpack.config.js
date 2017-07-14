var webpack = require('webpack');

var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
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
        test: /\.css/,
        loader: ExtractTextPlugin.extract("style", "css")
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style", 'css', "less")
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'app'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("bundle.css")
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