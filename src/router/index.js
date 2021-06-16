import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios'
import {getBaseUrl} from '../url'


function getRouter(tutorials){
  Vue.use(VueRouter)

  function getTutorial(route){
    const tutorial = tutorials.filter(t => t.name == route.params.name)[0]
    return {
      tutorial: tutorial
    }
  }

  function getRandomTutorials(){
    let selected = []
    let indecies = []
    let rand = undefined
    for (let i = 0; i < 3; i++){
      while (rand === undefined || indecies.indexOf(rand) != -1){
        rand = Math.floor(Math.random() * tutorials.length)
      }
      selected.push(tutorials[rand])
      indecies.push(rand)
    }
    return {
      tutorials: selected
    }
  }

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: getRandomTutorials
    },
    {
      path: '/tutorials',
      name: 'Tutorials',
      component: () => import('../views/Tutorials.vue'),
      props: () => ({ tutorials: tutorials})
    },
    {
      path: '/article/:name',
      name: 'Article',
      component: () => import('../views/Article.vue'),
      props: getTutorial
    },
    {
      path: '/video/:name',
      name: 'Video',
      component: () => import('../views/Video.vue'),
      props: getTutorial
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: () => import('../views/Impressum.vue')
    }
  ]

  return new VueRouter({
    routes
  })

}

export default getRouter
