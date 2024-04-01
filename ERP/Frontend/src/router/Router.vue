<script>
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Views/Home.vue'
import Estoque from '../Views/Estoque.vue'
import Comandas from '../Views/Comandas.vue'
import Agenda from '../Views/Agenda.vue'
import NotFound from '../Views/NotFound.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Estoque',
      name: 'Estoque',
      component: Estoque
    },
    {
      path: '/Comandas',
      name: 'Comandas',
      component: Comandas
    },
    {
      path: '/Agenda',
      name: 'Agenda',
      component: Agenda
    },
    {
      path: '/NotFound',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
</script>