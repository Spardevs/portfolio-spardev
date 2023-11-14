<template>
    <div id="header">
        <div id="apresentacao">
        <h1 class="titulo-s texto-gradiente">SPARDEV</h1>
        <div id="subtitulo">
            <h3 class="subtitulo-s">Desenvolvedor</h3>
            <div id="bolinha"></div>
            <h3 class="subtitulo-s">Web</h3>
        </div>
    </div>
    <div id="linha"></div>
    </div>

</template>

<script>
    export default {
        name: 'HeaderFooter',
    }
</script>

<style scoped>
    #header {
        display: flex;   
        justify-content: center;
        align-items: center;
    }

    #apresentacao {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #apresentacao h1 {
        margin-bottom: 0px;
    }

    #subtitulo{
        display: flex;
        align-items: center;
        margin-top: 0px!important;
    }

    #bolinha {
        background-color: black;
        width: 0.5vw;
        height: 0.5vw;
        border-radius: 50%;
        margin: 0 10px;
    }
    
    #linha {
        width: 80%;
        margin: 10px;
        height: 1px;
        background-color: white;
    }

    .titulo-s {
        line-height: 1;
    }

    html.dark #bolinha {
        background-color: white;
    }
</style>