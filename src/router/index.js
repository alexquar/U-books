import { createRouter, createWebHistory } from 'vue-router'

// view components
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import { auth } from '../firebase/config'
import All from '@/views/All.vue'
import About from '@/views/About.vue'
const requireAuth = (to, from, next) => {
  let user = auth.currentUser
  if (!user) {
    next({ name: 'Login' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter : requireAuth
  },
  {
    path: '/all',
    name: 'All',
    component: All,
    beforeEnter : requireAuth
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    beforeEnter : requireAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
