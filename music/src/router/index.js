import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Manage from '@/views/Manage.vue'
import useUserStore from '@/stores/user'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    name: 'manage',
    path: '/manage',
    alias: '/manage-music',
    component: Manage,
    beforeEnter: (to, from, next) => {
      // console.log(to, from)
      next()
    },
    meta: {
      requiresAuth: true
    }
  },
  // {
  //   path: '/manage',
  //   redirect: { name: 'manage' }
  // },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
})

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    next()
    return
  }

  const store = useUserStore()

  store.isLoggedIn ? next() : next({ name: 'home' })
})

export default router
