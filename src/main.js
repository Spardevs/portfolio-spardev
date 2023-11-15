import { createApp } from 'vue'
import App from './App.vue'

import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from '/src/routes/router.js';

/* add icons to the library */
library.add(fas)

export { FontAwesomeIcon };

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
