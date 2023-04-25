import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Artworks',
      name: 'Artworks',
      component: () => import('../views/ArtworksView.vue')
    },
    {
      path: '/Recommendations',
      name: 'Recommendations',
      component: () => import('../views/RecommendationsView.vue')
    },
    {
      path: '/Form',
      name: 'Form',
      component: () => import('../views/FormView.vue')
    },
    {
      path: '/DetailsRecommendation',
      name: 'DetailsRecommendation',
      component: () => import('../views/DetailsRecommedationView.vue')
    },
    {
      path: '/Information',
      name: 'Information',
      component: () => import('../views/InformationView.vue')
    },
    {
      path: '/Information1',
      name: 'Information1',
      component: () => import('../information/Information1.vue')
    },
    {
      path: '/Information2',
      name: 'Information2',
      component: () => import('../information/Information2.vue')
    },
    {
      path: '/Information3',
      name: 'Information3',
      component: () => import('../information/Information3.vue')
    },
  ]
})

export default router
