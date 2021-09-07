/*
 * @Author: your name
 * @Date: 2021-09-07 13:41:17
 * @LastEditTime: 2021-09-07 15:01:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tianAnd:\work\project\notes\src\mock\index.js
 */
const MOCK = require('mockjs')

MOCK.mock(/t-shtlc-api.wksaas.net/,'get',{
  "number|+1": 202
})