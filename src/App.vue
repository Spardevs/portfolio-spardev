<template>
  <div id="app">
    <header>
      <HeaderPage />
    </header>
    <section>
      <HomePort />
    </section>
  </div>
</template>

<script>
import '@/assets/css/class.css';
import '@/assets/css/reset.css';
import HomePort from './views/HomePort.vue';
import HeaderPage from './components/header/HeaderPage.vue';

export default {
  name: 'app',
  components: {
    HeaderPage,
    HomePort
  }
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Iceland&family=Play:wght@400;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html.dark {
  color-scheme: dark;
}

#app {
  text-align: center;
}
section {
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
}


</style>
