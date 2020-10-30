import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../components/Home.vue')
const Note = () => import('../components/Note.vue')
const About = () => import('../components/About.vue')
const Article = () => import('../components/Article.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/home',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    components: {
      main: Home
    }
  },
  {
    path: '/about',
    name: 'About',
    components: {
      main: About
    }
  },
  {
    path: '/note',
    name: 'Note',
    components: {
      main: Note
    }
  },
  {
    path: '/article/:id',
    name: 'Article',
    components: {
      main: Article
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
