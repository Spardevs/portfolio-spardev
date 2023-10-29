<script>
    export default {
    name: 'HomePort',
}
</script>

<template>
    <div id="home">
        <div id="img">
            <img src="../assets/imgs/imagem_ia.jpg" alt="Imagem Perfil">
        </div>
        <div id="apresentacao">
            <h1 class="titulo-l texto-gradiente">SPARDEV</h1>
            <div id="subtitulo">
                <h3 class="subtitulo-m">Desenvolvedor</h3>
                <div id="bolinha"></div>
                <h3 class="subtitulo-m">Web</h3>
            </div>
        </div>
        <div id="icones">
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-solid fa-file-pdf"></i>
        </div>
    </div>
</template>

<style scoped>

    #home {
        background-color: #f2f2f2;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    html.dark #home {
        background-color: #272727;
    }

    #apresentacao {
        display: flex;
        flex-direction: column;
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
        width: 1.5vw;
        height: 1.5vw;
        border-radius: 50%;
        margin: 0 10px;
    }

    html.dark #bolinha {
        background-color: white;
    }

    img {
        width: 40vw;
        border-radius: 50%;
        border: 5px solid #346CDA;
    }
    #icones {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        margin-bottom: 5vh;
    }

    #icones i {
        color: white;
        margin: 0px 20px;
        font-size: 7vw;
        text-shadow: 1px 1px 3px black;
    }

    #icones i:hover {
        color: #346CDA;
    }

</style>