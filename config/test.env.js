/*
 * @Author: your name
 * @Date: 2021-08-25 15:12:05
 * @LastEditTime: 2021-09-07 15:02:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tianAnd:\work\project\notes\config\test.env.js
 */
'use strict'
const { merge } = require('webpack-merge')
const prodEnv = require('./prod.env')
module.exports = merge(prodEnv, {
  NODE_ENV: 'testing',
  api: 'https://t-shtlc-api.wksaas.net',
  imApi: 'https://t-shtlc-im.wksaas.net',
})
