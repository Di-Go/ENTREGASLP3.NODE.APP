class EntidadeCardComponent extends HTMLElement{
    id = '';
    descricao = '';
    acaoEditar; 
    acaoDeletar;
    
    constructor(){
        super();
    };

    
    connectedCallback(){
        this.id = this.getAttribute('id');
        this.descricao = this.getAttribute('descricao');
        this.acaoEditar = this.getAttribute('editar');
        this.acaoDeletar = this.getAttribute('deletar');

        let cardBox = document.createElement('div');
        cardBox.classList.add('card-panel');
        cardBox.classList.add('row');
    
        let primeiraColuna = document.createElement('div');
        primeiraColuna.classList.add('col');
        primeiraColuna.classList.add('s10');
        primeiraColuna.classList.add('m10');
        let titulo = document.createElement('h3');
        titulo.innerHTML = this.descricao;
        primeiraColuna.appendChild(titulo);
    
        let segundaColuna = document.createElement('div');
        segundaColuna.classList.add('col');
        segundaColuna.classList.add('s2');
        segundaColuna.classList.add('m2');
    
        let botaoEditar = document.createElement('button');
        botaoEditar.setAttribute('id', 'btnEditar');
        botaoEditar.classList.add('btn-large');
        botaoEditar.classList.add('waves-effect');
        botaoEditar.classList.add('waves-light');
        botaoEditar.classList.add('blue');
        botaoEditar.innerHTML = '<i class="material-icons">edit</i>';
    
        let botaoDeletar = document.createElement('button');
        botaoDeletar.setAttribute('id', 'btnDeletar');
        botaoDeletar.classList.add('btn-large');
        botaoDeletar.classList.add('waves-effect');
        botaoDeletar.classList.add('waves-light');
        botaoDeletar.classList.add('red');
        botaoDeletar.innerHTML = '<i class="material-icons">delete_forever</i>';
    
        segundaColuna.appendChild(botaoEditar);
        segundaColuna.appendChild(botaoDeletar);
    
        cardBox.appendChild(primeiraColuna);
        cardBox.appendChild(segundaColuna);
        this.appendChild(cardBox);
    }
}

window.customElements.define('entidade-card-component', EntidadeCardComponent);