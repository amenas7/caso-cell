import { LitElement, html, css} from 'lit-element';
import './listado-component';

export class ContenedorComponent extends LitElement {

    static get styles(){
        return [
            css`

            `
        ]
    }

    static get properties() {
        return {
            listDataRegistrosContent: {
                type: Array
            }
        }
    }

    constructor() {
        super();
        this.listDataRegistrosContent = [];
        this.apiGet();
    }

    render() { 
        return html`
        <div class="contenedor">
            <listado-element .listDataRegistros="${this.listDataRegistrosContent}"></listado-element>
        </div>
        `;
        
    }

    apiGet(){
        fetch("http://localhost:3002/accionistas")
        .then((response) => {
            if(response.ok) return response.json();
            return Promise.reject(response);
        })
        .then((data) => { this.listDataRegistrosContent = data; })
        .catch((error) => { console.warn("Algo salio mal", error); })
    }

    

}

customElements.define('contenedor-component', ContenedorComponent)