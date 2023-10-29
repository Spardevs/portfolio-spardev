import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


/* add icons to the library */
library.add(fas)

export { FontAwesomeIcon };

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
