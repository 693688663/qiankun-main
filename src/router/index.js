/*
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-09-22 17:24:05
 * @Description: 路由
 */
import { createRouter, createWebHistory } from "vue-router";

// import qiankun from '@/views/qiankun/index.vue'

import home from './home'
console.log(home)
const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页'
    },
    // redirect: "/rds",//重定向位置
    component: () => import('../views/home/home.vue'),
    // children: [
    //   {
    //     path: '/app2',
    //     name: 'app2',
    //     meta: {
    //       title: 'app2'
    //     },
    //     component: qiankun
    //   },
    // ]
  }, {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login/login.vue')
  }
]
// 创建路由
const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes: routes
})

// 路由拦截
router.beforeEach((to, from, next) => {
  // console.log('to', to)
  // console.log('from', from)
  // if (to.path === '/login') return next();
  // const token = window.sessionStorage.getItem('token')
  // if (!token) return next('/login')
  next()
})

export default router