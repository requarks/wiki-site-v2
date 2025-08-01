import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/modules',
    name: 'modules',
    component: () => import('./views/Modules.vue')
  },
  // {
  //   path: '/cloud',
  //   name: 'cloud',
  //   component: () => import('./views/Cloud.vue')
  // },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('./views/Blog.vue')
  },
  {
    path: '/feedback*',
    name: 'feedback',
    component: () => import('./views/Feedback.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/About.vue')
  },
  {
    path: '/get-started',
    name: 'get-started',
    component: () => import('./views/GetStarted.vue')
  },
  {
    path: '/donate',
    name: 'donate',
    component: () => import('./views/Donate.vue')
  },
  {
    path: '/support',
    name: 'support',
    component: () => import('./views/Support.vue')
  },
  {
    path: '/telemetry',
    name: 'telemetry',
    component: () => import('./views/Telemetry.vue')
  },
  {
    path: '/newsletter',
    name: 'newsletter',
    component: () => import('./views/Newsletter.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router