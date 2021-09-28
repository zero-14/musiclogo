import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layout'

const routes = [
 {
   path:'/redirect',
   component: Layout,
   hidden: true,
   childern:[
    {
      path: '/redirect/:path(.*)',
      component: () => import('@/views/redirect/redirect')
    }
   ]
 },
 {
    path: '/login',
    component: () => import('@/views/login/login'),
    // hidden: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
