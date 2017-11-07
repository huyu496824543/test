import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
        {
      path: '/hi',
//    name: 'Hi',不起作用
      component: Hi,
      children:[
//    {path: '/',component: Hi},
      {path: 'hi1',name: 'hi1',component: Hi1},
      {path: 'hi2',name: 'hi2',component: Hi2},
      
      ]
    }
  ]
})