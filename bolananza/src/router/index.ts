import { createRouter, createWebHistory } from 'vue-router'
import app from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dash',
      component: app
    },
  ]
})

export default router
