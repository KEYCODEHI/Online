import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/index/index.vue'
import City from 'pages/city/index.vue'
import Detail from 'pages/detail/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
