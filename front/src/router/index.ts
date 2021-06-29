import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

export const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { layout: 'MainLayout', auth: true },
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { layout: 'AuthLayout' }
    }
  ]
})

export default router
