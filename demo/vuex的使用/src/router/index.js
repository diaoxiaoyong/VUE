import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hello from '@/components/hello'
import { resolve } from 'path';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'],resolve),
      meta:{
        title:'首页',
        index:1,
      }
    },
    {
      path: '/hello',
      name: 'hello',
      component: resolve => require(['@/components/hello'],resolve),
      meta:{
        title:'首页2',
        index:2,
      }
    }
  ]
})
