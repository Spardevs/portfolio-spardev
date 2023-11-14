// router.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePort from '../views/HomePort.vue'
import SobreMim from '../views/SobreMim.vue'

Vue.use(VueRouter)

const routes = [
  { path: "/", component: HomePort },
  { path: "/sobreMim", component: SobreMim },
]

const router = new VueRouter({
  routes
})

export default router
