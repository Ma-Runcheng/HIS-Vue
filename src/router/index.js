import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Basic from './basic'
import Drugs from './drugs'
import Finance from './finance'
import Outpatient from './outpatient'
Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    component: Login 
  },
  //基础信息维护相关

  ...Basic,
  ...Drugs,
  ...Finance,
  ...Outpatient

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
