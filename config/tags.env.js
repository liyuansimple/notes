'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"tagsing"',
  api: '"https://t-tags-api.wksaas.net"',
  imApi: '"https://t-tags-im.wksaas.net"',
})
