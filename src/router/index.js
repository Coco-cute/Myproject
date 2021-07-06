import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/myifmx',
    component: ()=>import('../components/a')
  },
  {
    path: '/docum',
    component: ()=>import('../components/h')
  },
  {
    path: '/games',
    component: () => import('../components/HelloWorld')
  }
]

const router = new VueRouter({
  routes
})

export default router
