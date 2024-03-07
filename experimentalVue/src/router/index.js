
import { createRouter, createWebHistory } from 'vue-router'

import Main from '../views/MainView.vue'
import Backside from '../views/BacksideView.vue'
import Thirdpage from '../views/ThirdPageView.vue'

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
      name: 'Thirdpage',
      component: Thirdpage
    },
  ]
})

export default router
