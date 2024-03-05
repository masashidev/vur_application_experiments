import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Language from '../views/QuestionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/language/:id',
      name: 'Language',
      component: Language
    }
  ]
})

export default router
