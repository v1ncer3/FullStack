<script>
import { createRouter, createWebHistory } from 'vue-router'

import Home     from '../Views/Home.vue';
import Login    from '../Views/Login.vue';
import Products from '../Views/Products.vue';
import Finances from '../Views/Finances.vue';
import Settings from '../Views/Settings.vue';
import Users    from '../Views/Users.vue';
import Command  from '../Views/Command.vue';
import Schedule from '../Views/Schedules.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/Products',
      name: 'Products',
      component: Products
    },
    {
      path: '/Finances',
      name: 'Finances',
      component: Finances
    },
    {
      path: '/Users',
      name: 'Users',
      component: Users
    },
    {
      path: '/Commands',
      name: 'Commands',
      component: Command
    },
    {
      path: '/Schedules',
      name: 'Schedules',
      component: Schedule
    }
  ]
})

export default router
</script>