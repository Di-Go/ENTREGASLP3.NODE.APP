class EntidadeCardComponent extends HTMLElement{
    
    constructor(){
        super();
    };

    
    connectedCallback(){
        let id = this.getAttribute('id');
        let descricao = this.getAttribute('descricao');

        let cardBox = document.createElement('div');
        cardBox.classList.add('card-panel');
        cardBox.classList.add('row');
    
        let primeiraColuna = document.createElement('div');
        primeiraColuna.classList.add('col');
        primeiraColuna.classList.add('s10');
        primeiraColuna.classList.add('m10');
        let titulo = document.createElement('h3');
        titulo.innerHTML = descricao;
        primeiraColuna.appendChild(titulo);
    
        let segundaColuna = document.createElement('div');
        segundaColuna.classList.add('col');
        segundaColuna.classList.add('s2');
        segundaColuna.classList.add('m2');
    
        let botaoEditar = document.createElement('button');
        botaoEditar.setAttribute('id', id);
        botaoEditar.setAttribute('descricao', descricao);
        botaoEditar.classList.add('btn-large');
        botaoEditar.classList.add('waves-effect');
        botaoEditar.classList.add('waves-light');
        botaoEditar.classList.add('blue');
        botaoEditar.innerHTML = '<i class="material-icons">edit</i>';
        botaoEditar.addEventListener('click', function Editar() {
            let boxId = document.getElementById('categoria-id');
            let boxDescricao = document.getElementById('categoria-descricao');
            boxId.setAttribute('value', this.attributes.id.value);
            boxDescricao.setAttribute('value', this.attributes.descricao.value);
            boxDescricao.focus();
        });
        
        let botaoDeletar = document.createElement('button');
        botaoDeletar.setAttribute('id', this.id);
        botaoDeletar.setAttribute('descricao', this.descricao);
        botaoDeletar.classList.add('btn-large');
        botaoDeletar.classList.add('waves-effect');
        botaoDeletar.classList.add('waves-light');
        botaoDeletar.classList.add('red');
        botaoDeletar.innerHTML = '<i class="material-icons">delete_forever</i>';
        botaoDeletar.addEventListener('click', function Deletar() {
            let categoria = {
                id: this.attributes.id.value,
                descricao: this.attributes.descricao.value
            };
            
            const url = 'http://localhost:8082/api/excluir_categoria_filme';
            
            const opcoesEnvio = {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(categoria)
            };
    
            fetch(url, opcoesEnvio)
                .then(async (resposta) => {
                    let CodigoStatusDeErro = 400;
                    if (resposta.status >= CodigoStatusDeErro){
                        return await resposta.json().then((respostaComErro) => {
                            const erro = new Error("Requisição retornou com erro!");
                            erro.data = respostaComErro;
                            throw erro;
                        });
                    }
                })
                .then((conteudo) => {
                    console.log(conteudo);
                    location.reload();
                })
                .catch((erro) => {
                    console.log(erro, erro.data);
                });
        });
    
        segundaColuna.appendChild(botaoEditar);
        segundaColuna.appendChild(botaoDeletar);
    
        cardBox.appendChild(primeiraColuna);
        cardBox.appendChild(segundaColuna);
        this.appendChild(cardBox);
    }

}

window.customElements.define('entidade-card-component', EntidadeCardComponent);