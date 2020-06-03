import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue'),
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: () =>
      import(/* webpackChunkName: "details" */ '../views/Details.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "details" */ '../views/About.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
