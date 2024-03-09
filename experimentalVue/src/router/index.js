
import { createRouter, createWebHistory } from 'vue-router'

import Main from '../views/MainView.vue'
import Backside from '../views/BacksideView.vue'
import ThirdPage from '../views/ThirdPageView.vue'
import ForthPage from '../views/ForthPageView.vue'
import FifthPage from '../views/FifthPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/backside',
      name: 'Backside',
      component: Backside
    },
    {
      path: '/thirdpage',
      name: 'ThirdPage',
      component: ThirdPage
    },
    {
      path: '/forthpage',
      name: 'ForthPage',
      component: ForthPage
    },
    {
      path: '/fifthpage',
      name: 'FifthPage',
      component: FifthPage
    }
  ]
})

export default router
