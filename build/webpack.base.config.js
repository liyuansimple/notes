/*
 * @Author: your name
 * @Date: 2021-08-25 13:40:53
 * @LastEditTime: 2021-09-07 14:38:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\notes\webpack.config.js
 */
const path = require('path')
// 
const webpack = require('webpack')
// HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
// VueLoaderPlugin
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// css 提取
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// css 压缩
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// 加载测试配置
const envConfig = require('../config/test.env')
// 
module.exports = {
  mode: "development",
  // 入口
  entry: "./src/main.js",
  // 出口
  output: {
    // webpack 如何输出结果的相关选项
    path: path.resolve(__dirname, "../dist"),
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    filename: "static/js/[name].[chunkhash].js",
    // 「入口分块(entry chunk)」的文件名模板
    publicPath: "", // string
  },
  devServer: {
  
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.js', '.vue', '.json', '.css', '.scss']
  },
  module: {
    rules: [
      {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      },
      { test: /\.vue$/, use: ['vue-loader'] },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // css 提取为单独的css文件
          MiniCssExtractPlugin.loader,
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type:"asset",
        //解析
        parser: {
          //转base64的条件
          dataUrlCondition: {
            maxSize: 25 * 1024, // 25kb
          }
        },
        generator:{ 
          filename:'static/image/[name].[hash:6][ext]',
          //打包后对资源的引入，文件命名已经有/img了
          publicPath:'./'
        },
      },
      {
        test: /\.(woff2?|woff|eot|ttf|otf)(\?.*)?$/,
        type:"asset",
        generator:{ 
          filename:'static/fonts/[name].[hash:6][ext]',
        }
      }
    ],
  },
  plugins: [
    // 添加自定义全局变量
    new webpack.DefinePlugin({
      envConfig: JSON.stringify(envConfig)
    }),
    // 自动生成html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    // 加载vue文件
    new VueLoaderPlugin(),
    // css 抽取
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css'
    })
  ],
}