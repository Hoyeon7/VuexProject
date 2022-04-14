

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)


const routes = [

  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },



  {
    path: "/page1/:id",
    name: "page1",
    component: function() {
      return import("../components/PageOne.vue")
    }
  },

  {
    path: "/page2/:id",
    name: "page2",
    component: function() {
      return import("../components/PageTwo.vue")
    }
  },

]





const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
