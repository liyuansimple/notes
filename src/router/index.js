/*
 * @Author: your name
 * @Date: 2021-07-22 16:30:23
 * @LastEditTime: 2021-08-31 10:38:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SCRM-Admin-Webd:\work\project\isearch\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/main',
    component: layout,
    children: [
      {
        path: 'main',
        name: 'main',
        component: () => import('@/views/main.vue'),
      },
      {
        path: '/doc',
        name: 'doc',
        component: () => import('@/views/doc.vue')
      },
      {
        path: '/tools',
        name: 'tools',
        component: () => import('@/views/tools.vue')
      },
      {
        path: '/blogs',
        name: 'blogs',
        component: () => import('@/views/blogs.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
      }
    ]
  },
  
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
