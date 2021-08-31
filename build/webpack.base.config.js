/*
 * @Author: your name
 * @Date: 2021-08-25 13:40:53
 * @LastEditTime: 2021-08-31 14:24:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\notes\webpack.config.js
 */
const path = require('path')
// HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
// VueLoaderPlugin
const VueLoaderPlugin = require('vue-loader/lib/plugin')
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
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.s[ac]ss$/,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    // 
    new VueLoaderPlugin()
  ],
}