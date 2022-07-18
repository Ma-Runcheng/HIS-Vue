import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Basic from './basic'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/login', 
    component: Login 
  },
  //基础信息维护相关
  ...Basic
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
