<template>
    <div id="menus">
        <h3 class="texto-azul titulo-sl">MENUS</h3>
        <ul class="subtitulo-s">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/sobreMim">Sobre Mim</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'MenusFooter',
    }
</script>

<style scoped>
    li:hover {
        color: #346CDA;
    }
</style>