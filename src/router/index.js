import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Comic from '../views/Comic.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/collections',
    name: 'Collection',
    component: () => import('../views/Collection.vue')
  },
  {
    path: '/comic/:id/:num',
    name: 'Comic',
    component: Comic
  }
]

const router = new VueRouter({
  routes
})

export default router
