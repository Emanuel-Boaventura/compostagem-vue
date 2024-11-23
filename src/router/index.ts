import ComposterView from '@/views/ComposterView.vue'
import WastesView from '@/views/WastesView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Residuos',
      component: WastesView,
    },
    {
      path: '/composteira',
      name: 'Composter',
      component: ComposterView,
    },
    {
      path: '/sobre',
      name: 'About',
      component: AboutView,
    },
  ],
})

export default router
