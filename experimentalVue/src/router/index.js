
import { createRouter, createWebHistory } from 'vue-router'

import Main from '../views/MainView.vue'
import Backside from '../views/BacksideView.vue'

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
    }
  ]
})

export default router
