/*
 * @Author: your name
 * @Date: 2021-08-24 11:25:27
 * @LastEditTime: 2021-09-07 14:54:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\notes\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss'
require('../mock')

Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")