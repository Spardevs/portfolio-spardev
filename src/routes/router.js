// router.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePort from '../views/HomePort.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomePort },
]

const router = new VueRouter({
  routes
})

export default router
