<template>
  <div id="app">
    <header>
      <HeaderPage />
    </header>
    <main>
      <section>
        <HomePort />
      </section>
      <section>
        <SobreMim />
      </section>
    </main>
    <footer>
      <FooterPage />
    </footer>
  </div>
</template>

<script>
import '@/assets/css/class.css';
import '@/assets/css/reset.css';
import HomePort from '@/views/pages/HomePort.vue';
import HeaderPage from './components/header/HeaderPage.vue';
import SobreMim from './views/pages/SobreMim.vue';
import FooterPage from './components/footer/FooterPage.vue';

export default {
  name: 'app',
  components: {
    HeaderPage,
    HomePort,
    SobreMim,
    FooterPage,
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

header {
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0px;

}

</style>
