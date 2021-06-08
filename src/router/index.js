import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios'
import {getBaseUrl} from '../url'

Vue.use(VueRouter)

let tutorials = undefined

axios.get(getBaseUrl() + '/tutorials.json')
  .then(res => tutorials = res.data)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: () => ({ tutorials: tutorials})
  },
  {
    path: '/tutorials',
    name: 'Tutorials',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Tutorials.vue'),
    props: () => ({ tutorials: tutorials})
  }
]

const router = new VueRouter({
  routes
})

export default router
