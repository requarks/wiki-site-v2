import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/modules',
      name: 'modules',
      component: () => import(/* webpackChunkName: "modules" */ './views/Modules.vue')
    },
    {
      path: '/cloud',
      name: 'cloud',
      component: () => import(/* webpackChunkName: "cloud" */ './views/Cloud.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import(/* webpackChunkName: "blog" */ './views/Blog.vue')
    },
    {
      path: '/feedback*',
      name: 'feedback',
      component: () => import(/* webpackChunkName: "feedback" */ './views/Feedback.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/get-started',
      name: 'get-started',
      component: () => import(/* webpackChunkName: "get-started" */ './views/GetStarted.vue')
    },
    {
      path: '/donate',
      name: 'donate',
      component: () => import(/* webpackChunkName: "donate" */ './views/Donate.vue')
    },
    {
      path: '/newsletter',
      name: 'newsletter',
      component: () => import(/* webpackChunkName: "newsletter" */ './views/Newsletter.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
