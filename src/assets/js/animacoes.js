function escrevendoApressentacao(){
    let titulo_spardev = "SPARDEV";
    let id_titulo_spardev = document.getElementById("spardev-inicio");

    escreverTexto(titulo_spardev, id_titulo_spardev, function(){
      let txt_desenvolvedor = "Desenvolvedor";
      let id_txt_desenvolvedor = document.getElementById("desenvolvedor-inicio");

      let txt_freelancer = "Web";
      let id_txt_freelancer = document.getElementById("freelance-inicio");

      let caractere_freelancer = "/"
      let id_caractere_freelancer = document.getElementById("spardev-inicio")
      
      escreverTexto(txt_desenvolvedor, id_txt_desenvolvedor, function(){
        var bolinha = document.querySelector('#subtitulo p');
        bolinha.id = 'bolinha';
        escreverTexto(txt_freelancer, id_txt_freelancer, function () {
          piscarCaractere(caractere_freelancer, id_caractere_freelancer);
        })
      });
    });
}

function escreverTexto(texto, idElemento, callback){
    let elemento = idElemento
    let letras =  texto.split("");
    let i = 0;

    function adicionarLetra() {
        if(i < letras.length){
            elemento.innerHTML += letras[i];
            i++;
            setTimeout(adicionarLetra, 150);
        } else {
          if (callback) {
            callback();
          }
        }
    }
    adicionarLetra();
}

function piscarCaractere(caractere, idElemento) {
    let elemento = idElemento;
    let span = document.createElement("span");
    span.innerHTML = caractere;
    span.setAttribute("id", "piscar");
    elemento.appendChild(span);
    
    setInterval(function() {
      let piscar = document.getElementById("piscar");
      if (piscar.style.visibility === "visible") {
        piscar.style.visibility = "hidden";
      } else {
        piscar.style.visibility = "visible";
      }
    }, 500);
}

escrevendoApressentacao();