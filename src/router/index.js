import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue'
import Getusers from '../components/Getusers.vue'
import Addusers from '../components/Addusers.vue'
import Allposted from '../components/Allposted.vue'
import CommentsList from '../components/CommentsList.vue'

const routes = [
  {
    path: '/home/:id',
    name: 'home',
    component: HomeView
  },

  {
    path: '/',
    name: 'Allposted',
    component: Allposted
  },
  

  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/getusers/:id',
    name: 'getusers',
    component: Getusers
  },
  {
    path: '/CommentsList/:id',
    name: 'CommentsList',
    component: CommentsList
  },
  {
    path: '/addusers/:id',
    name: 'Addusers',
    component: Addusers
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
