import { createRouter, createWebHistory } from 'vue-router';

// Importação dos componentes que serão usados nas rotas
import HomePort from '@/views/pages/HomePort.vue';
import SobreMim from '@/views/pages/SobreMim.vue';

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
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, savedPosition) {
    // Rola para a posição salva em navegações para trás/para frente
    if (savedPosition) {
      return savedPosition;
    }
    // Rola para um elemento específico se a rota tem um hash e o elemento existe
    if (to.hash && document.querySelector(to.hash)) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    // Rola para o topo para todas as outras navegações
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;
