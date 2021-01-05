import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//导入 编写好的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Home from '../components/Home'
import Library from '../components/library/LibraryIndex'
import Test from '../components/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    //下面都是固定的写法
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      //home 页面并不需要被访问，当访问home是重定向到index
      redirect: '/index',
      children:[
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: Library,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path: '/test',
      name: '/Test',
      component: Test
    }
  ]
})
