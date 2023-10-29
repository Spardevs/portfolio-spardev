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
    html.dark #navBar {
        background-color: rgba(0, 0, 0, 0.80);
    }
</style>