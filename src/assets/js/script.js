// Funções para criar elementos

function criarIconesTexto(dados ,elemento) {
    const container = elemento;
  
    // percorre o array de dados
    for (let i = 0; i < dados.length; i++) {
      const div = document.createElement('div');
      
      
      const icon = document.createElement('i');
      icon.classList.add('icones');
      icon.classList.add(...dados[i].classes);
      div.appendChild(icon);
      
      const texto = document.createElement('p');
      texto.classList.add('centralizar-div', 'subtitulo-branco-s');
      texto.textContent = dados[i].texto;
      div.appendChild(texto);
      
      div.classList.add('item-carrossel');
      container.appendChild(div);
    }
}

// Funções para montar elementos
function montandoIconesSkills() {
    const elemento = document.querySelector('#icones-skills');
    const dados = [    
      { classes: ['fa-brands', 'fa-html5'], texto: 'HTML5' },
      { classes: ['fa-brands', 'fa-css3-alt'], texto: 'CSS3' },
      { classes: ['fa-brands', 'fa-js'], texto: 'JavaScript' },
      { classes: ['fa-brands', 'fa-git-alt'], texto: 'Git' },
      { classes: ['fa-brands', 'fa-node'], texto: 'NodeJS' },
      { classes: ['fa-brands', 'fa-react'], texto: 'React' },
      { classes: ['icon-php'], texto: 'php' },
      { classes: ['icon-postgresql'], texto: 'Postgresql' },
      { classes: ['icon-adobexd'], texto: 'Adobe XD' },
      { classes: ['fa-brands', 'fa-figma'], texto: 'Figma' },
    ];
  
    criarIconesTexto(dados, elemento);
}

montandoIconesSkills();