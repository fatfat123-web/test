import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index'),
      meta:{
        title: '神秘盒子惊现龙城？！'
      }
    },
]

const router = new VueRouter({
  routes
})

export default router
