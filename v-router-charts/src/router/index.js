import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Sparklines from '../views/SparklinesView'
import Layout from '../views/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    icon: 'mdi-home'
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    icon: 'mdi-help-box'
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sparklines',
    name: 'Sparklines',
    component: Sparklines,
    icon: 'mdi-view-dashboard'
  },
  {
    path: '/layout',
    name: 'Layout',
    component: Layout,
    icon: 'mdi-aspect-ratio'
  }
]

const router = new VueRouter({
  routes
  // Process all routes at frontend
  // mode: 'hisatory'
})

export default router
