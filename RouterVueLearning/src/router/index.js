import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BacksideView from '../views/BacksideView.vue'
import VariableView from '../views/VariableView.vue'
import ContactView from '../views/ContactView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/backside',
      name: 'backside',
      component: BacksideView
    },
    {
      path: "/variable/:id",
      name: "variable",
      component: VariableView,
      children: [
        {
          path: "contact",
          component: ContactView
        }
      ]

    },
    {
      path: "/philosopher/:name",
      name: "philosopher",

    }

  ]
})

export default router
