  <script>
    import SwitchMode from './SwitchMode.vue';

    export default {
      name: 'NavBar',
      components: {
        SwitchMode,
      }
    };
  </script>

<template>
    <nav class="navbar">
        <SwitchMode />
        <div class="navbar-menu subtitulo-s dark:bg-azul">
            <router-link to="@/view/HomePort" class="navbar-item">Inicio</router-link>
            <router-link to="/about" class="navbar-item">Sobre mim</router-link>
            <router-link to="/contact" class="navbar-item">Skills</router-link>
            <router-link to="/contact" class="navbar-item">Projetos</router-link>
        </div>
    </nav>
  </template>
  
  
  <style scoped>
  .navbar {
    padding: 5px;
    display: flex;
    align-items: center;;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);; 
  }

  .navbar-menu {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .navbar-item {
    margin: 0px 10px;
  }
  .navbar-item:hover {
    color: #346CDA;
  }

  </style>
  