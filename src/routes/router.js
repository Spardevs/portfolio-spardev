// router.js
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HomePort from '../views/HomePort.vue'
const routes = [
  { path: '/', component: HomePort },
]

const router = new VueRouter({
  routes
})

export default router
