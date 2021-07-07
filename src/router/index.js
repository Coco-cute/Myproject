import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //我的简介
  {
    path: '/my_message/jj',
    component: ()=>import('../components/MyMessage0')
  },
  {
    //获奖记录
    path: '/my_message/hj',
    component: ()=>import('../components/MyMessage1')
  },
  { //工作经历
    path: '/my_message/jl',
    component: ()=>import('../components/MyMessage2')
  },

  //我的博客
  {
    path: '/docum/jd',
    component: ()=>import('../components/Blogs0')
  },
  { //c/c++
    path: '/docum/c',
    component: ()=>import('../components/Blogs1')
  },
  { //后端开发
    path: '/docum/hd',
    component: ()=>import('../components/Blogs2')
  },

  //我的音乐
  {
    path: '/musics',
    component: () => import('../components/MyMusic')
  },

  //游戏视频
  {
    path: '/videos',
    component: () => import('../components/MyVideo')
  },
  //我的小游戏
  {//黑白快
    path: '/games/bw',
    component: () => import('../components/Game0')
  },
  {//抓怪兽
    path: '/games/yx',
    component: () => import('../components/Game1')
  },
]

const router = new VueRouter({
  routes
})

export default router
