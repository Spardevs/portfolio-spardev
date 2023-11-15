import { createRouter, createWebHistory } from 'vue-router';

// Importação dos componentes que serão usados nas rotas
import HomePort from '@/views/HomePort.vue';
import SobreMim from '@/views/SobreMim.vue';

// Definição das rotas
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePort
  },
  {
    path: '/sobreMim',
    name: 'Sobre mim',
    component: SobreMim
  }
];

// Criação da instância do router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
