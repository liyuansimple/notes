/*
 * @Author: your name
 * @Date: 2021-08-25 13:53:20
 * @LastEditTime: 2021-08-25 15:19:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\notes\build\build.js
 */
// path
const path = require('path')
// webpack 配置
const webpackConfig = require('./webpack.base.config.js')
// 删除文件插件
const rm = require('rimraf')
// webpack
const webpack = require('webpack')
// 文件配置
const config = require('../config')
// 删除文件夹
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      process.exit(1)
    }
  })
})