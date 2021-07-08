import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Sign/Index.vue'
import Dashboard from '../views/Dashboard/Index.vue'
import Home from '../views/Home/Index.vue'
import MainLayout from '../layouts/MainLayout.vue'

export const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: '/',
      name: 'home',
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
