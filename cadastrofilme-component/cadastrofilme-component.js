const template = document.createElement('template');
template.innerHTML = '<p> Teste de Componente </p>';

class CadastroFilme extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
window.customElements.define('cadastro-filme', CadastroFilme)
