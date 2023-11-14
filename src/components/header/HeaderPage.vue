<script>
    import NavBar from './NavBar.vue';

    export default {
        name: 'HeaderPage',
        components: {
            NavBar,
        }
    }
</script>
<template>
    <div id="navBar">
        <NavBar />
    </div>
</template>

<style>
    #navBar {
        background-color: white;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
    }
    html.dark #navBar {
        background-color: rgba(0, 0, 0, 0.95);
    }
</style>