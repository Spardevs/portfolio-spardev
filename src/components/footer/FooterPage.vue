<template>
    <div id="footer">
        <HeaderFooter />      
        <div id="conteudoFooter">
            <MenusFooter />
            <RedesFooter />
            <ContatoFooter />
        </div>  
        <p class="texto-paragrafo-sm ml-2">Copyright © 2023 Spardev</p>
    </div>
</template>

<script>
    import HeaderFooter from './HeaderFooter.vue'
    import MenusFooter from './MenusFooter.vue'
    import ContatoFooter from './ContatoFooter.vue'
    import RedesFooter from './RedesFooter.vue'
    export default {
        name: 'FooterPage',
        components: {
            HeaderFooter,
            MenusFooter,
            ContatoFooter,
            RedesFooter,
        }
    }
</script>

<style scoped>

    #footer {
        background-color: white;
    }

    html.dark #footer {
        background-color: black;
    }

    #conteudoFooter {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }

</style>