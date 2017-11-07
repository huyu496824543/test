import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'
import Error from '@/components/Error'
 
Vue.use(Router)
 
export default new Router({
		mode:'history',
  routes: [
//  {
//    path: '/',
//    components: {
//      default:Hello,
//      left:Hi1,
//      right:Hi2
//    }
//  },{
//    path: '/Hi',
//    components: {
//      default:Hello,
//      left:Hi2,
//      right:Hi1
//    }
//  }

	{
      path: '/',
      name:'Hello',
      component:Hello 
    },{
      path:'/goback',
      redirect:'/'
    },{
  path:'/params/:newsId(\\d+)/:newsTitle',
  component:Params
		},{
  path:'/goParams/:newsId(\\d+)/:newsTitle',
  redirect:'/params/:newsId(\\d+)/:newsTitle'
		},
		{
    path: '/hi1',
    component: Hi1,
    alias:'/jspang'
 		},
 	{
      path: '*',
      component:Error 
    }
  ]
})