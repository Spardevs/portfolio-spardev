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
            <a rel="noopener" title="Github" href="https://github.com/Spardevs" target="_blank">
                <i class="fa-brands fa-github"></i>
            </a>
            <a rel="noopener" title="Linkedin" href="https://www.linkedin.com/in/spardev/" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
            </a>
            <a rel="noopener" title="Curriculo - CV" href="/public/download/CV - Gabriel Fernandes Ramos.pdf" target="_blank">
                <i class="fa-solid fa-file-pdf"></i>
            </a>
        </div>
    </div>
</template>

<style scoped>

    #home {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        background-image: url('/public/img/imagemFundo.jpg');
        background-size: cover; /* Ajuste de acordo com sua preferência */

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
        margin-top: 10vh;
        width: 40vh;
        border-radius: 50%;
        border: 5px solid #346CDA;
    }
    
    #icones {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        margin: 3vh 0px;
    }

    #icones i {
        /* color: white; */
        margin: 0px 20px;
        font-size: 7vh;
    }

    /* html.dark #icones i {
        color: black;
    } */
    
    #icones i:hover {
        background: linear-gradient(180deg,#3b82f6, #9134DA);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        text-shadow: none;    
}

</style>