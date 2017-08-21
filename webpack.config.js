var webpack = require('webpack');

var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({size: 5});

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
        loaders: ['happypack/loader?id=js']
      },
      {
        test: /\.(css|less)$/,
        loader: ExtractTextPlugin.extract("style", "css!postcss!less")
      }
    ]
  },
  postcss: [
    require('autoprefixer')    //调用autoprefixer插件,css3自动补全
  ],
  plugins: [
    new ExtractTextPlugin('main.css'),
    new webpack.HotModuleReplacementPlugin(),
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      loaders: ['babel?{"presets":["es2015","stage-0","react"],"plugins":[["import",{"libraryName":"antd","style":true}]]}'],
    }),
    new HappyPack({
      id: 'styles',
      threadPool: happyThreadPool,
      loaders: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
    })
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