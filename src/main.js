import { createApp } from 'vue';
import App from './App.vue';

// Importação de estilos e ícones
import './assets/tailwind.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importação do router
import router from '/src/routes/router.js';

// Adiciona ícones ao FontAwesome
library.add(fas);

// Exporta o componente FontAwesomeIcon
export { FontAwesomeIcon };

// Cria e configura a aplicação Vue
const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
