const template = document.createElement('template');
template.innerHTML = '<p> Tesntando Grande Texto </p>';

class BarraNavegacao extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector()
        
    }
}
window.customElements.define('barra-navegacao', BarraNavegacao)
