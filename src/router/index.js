/*
 * @Author: pzzz 
 * @Date: 2017-07-14 15:34:27 
 * @Last Modified by: pzzz
 * @Last Modified time: 2017-07-14 17:00:56
 */

import Vue from 'vue'
import Router from 'vue-router'
const index = {
  path:'/index',
  name:'index',
  component:r=>(require(['../components/index/index.vue'],r)),
    children: [
        {
          path: 'content',
          component: r=>(require(['../components/content/index.vue'],r))
        }
      ]
}
const routerDefault = {
  //设置默认页面
      path: '/',
      components: {
        default: r=>(require(['../components/index/index.vue'],r))
      }
    
}

let  routes  = [routerDefault,index];


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
