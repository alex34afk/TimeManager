import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/user/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue')
  },
  {
    path: '/workingTimes/:userId',
    name: 'UserWorkingTimes',
    component: () => import('../views/UserWorkingTime.vue'),
  },
  {
    path: '/chartManager/:userId',
    name: 'ChartManager',
    component: () => import('../views/ChartManager.vue'),
  },
  {
    path: '/userManagement',
    name: 'UserManagement',
    component: () => import('../views/UserManagement.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
