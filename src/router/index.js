import Vue from 'vue'
import Router from 'vue-router'
import  ids from '@/components/ids'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ids',
      component: ids
    }
  ]
})
