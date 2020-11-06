import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//导入 编写好的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'


Vue.use(Router)

export default new Router({
  routes: [
    //下面都是固定的写法
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/index',
      name:'AppIndex',
      component: AppIndex
    }
  ]
})
