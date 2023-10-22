import Vue from 'vue'
import App from './App.vue'
import router from '../src/routes/router.js'
import './assets/tailwind.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')