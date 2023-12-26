<script>
    export default{
        name: 'SobreMim',
    }
</script>
<template>
    <div id="sobreMim">
        <div id="fotoSobreMim">
            <img src="public/img/imagem_perfil.jpg" alt="Imagem Perfil">
        </div>
        <div id="apresentacao">
            <div id="textoSobreMim">
                <h1 class="bold texto-azul texto-paragrafo-primario-md"> 
                    Olá,
                </h1>
                <p class="texto-paragrafo-primario-sm">
                    me chamo <b class="texto-azul bold">Gabriel Ramos</b>, porém uso o nick de <b class="texto-azul bold">Spardev</b> / <b class="texto-azul bold">Spardinha</b> nas comunidades dev e gamer, sou um desenvolvedor web apaixonado por games e cultura geek no geral. Programar é tanto meu hobby quanto a minha profissão, mesmo quando não estou fazendo algo profissional ou acadêmico eu gosto de codar. No meu tempo livre, quando não estou programando, estou jogando video-game ou participando em uma aventura de rpg de mesa
                </p>
            </div>
            <div id="ocupacoes">
                <h3 class="subtitulo-m">
                    Ocupação
                </h3>
                <ul class="texto-paragrafo-primario-sm">
                    <li> 
                        <font-awesome-icon icon="angles-right" class="texto-azul"/> 
                        Analista Desenvolvedor na Agenda Assessoria
                    </li>
                    <li>
                        <font-awesome-icon icon="angles-right" class="texto-azul"/> 
                        Estudante de Análise e Desenvolvimento de sistemas
                    </li>
                    <li>
                        <font-awesome-icon icon="angles-right" class="texto-azul"/>
                        Desenvolvedor Web Freelancer
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style>
    #sobreMim {
        background-color: #F2F2F2;
        padding: 10vw;
        display: flex;
        align-items: center;
        justify-content: center;
        justify-items: center;
        height: 100vh;
        display: flex;
    }

    html.dark #sobreMim {
        background-color: #262626;
    }

    #textoSobreMim, #ocupacoes {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: self-start;
    }
    p, ul {
        text-align: left;
    }

    #apresentacao {
        margin: 10px;
    }

    #fotoSobreMim {
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #fotoSobreMim img {
        border-radius: 50%;
        border: 5px solid #346CDA;
    }
  

</style>