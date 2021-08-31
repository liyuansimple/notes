'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"localing"',
  api: '"http://172.31.56.0:51002"',
  imApi: '"http://172.31.56.0:52001"',
})
