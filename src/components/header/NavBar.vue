<template>
    <nav class="navbar bg-branco dark:bg-preto">
      <div class="container">
        <SwitchMode />
        <div class="navbar-menu">
          <div class="navbar-end texto-preto subtitulo-s">
            <router-link to="@/view/HomePort" class="navbar-item">Inicio</router-link>
            <router-link to="/about" class="navbar-item">Sobre mim</router-link>
            <router-link to="/contact" class="navbar-item">Skills</router-link>
            <router-link to="/contact" class="navbar-item">Projetos</router-link>
            <router-link to="/contact" class="navbar-item">Contato</router-link>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
    import SwitchMode from './SwitchMode.vue';

    export default {
      name: 'NavBar',
      components: {
        SwitchMode,
      }
    };
  </script>
  
  <style scoped>
  .navbar {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);; 
  }
  .navbar-item {
    margin: 0px 10px;
  }
  .navbar-item:hover {
    color: #EE5A5A;
  }

  </style>
  