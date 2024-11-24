import AboutView from '@/views/AboutView.vue'
import ComposterView from '@/views/ComposterView.vue'
import PathNotFound from '@/views/PathNotFound.vue'
import WastesView from '@/views/WastesView.vue'
import { createRouter, createWebHistory } from 'vue-router'

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
    {
      path: '/:pathMatch(.*)*',
      component: PathNotFound,
    },
  ],
})

export default router
