'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"testing"',
  api: '"https://t-shtlc-api.wksaas.net"',
  imApi: '"https://t-shtlc-im.wksaas.net"',
})
