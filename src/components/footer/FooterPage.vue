<template>
    <div id="footer">
        <HeaderFooter />        
    </div>
</template>

<script>
    import HeaderFooter from './HeaderFooter.vue'
    export default {
        name: 'FooterPage',
        components: {
            HeaderFooter,
        }
    }
</script>

<style scoped>

    #footer {
        background-color: black;
    }

</style>