import { LitElement, html, css } from 'lit-element';

export class ListadoComponent extends LitElement {

    static get styles(){
        return [
            css`
                .vista{
                    background-color: #517AC4;
                    padding-top: 35px;
                    padding-left: 60px;
                    padding-right: 60px;
                    padding-bottom: 60px;
                }

                .t_right{
                    text-align: right;
                }

                .title_accionista{
                    padding: 10px; 
                    font-size: 24px
                }

                .description_accionista{
                    padding: 10px; 
                    font-weight: bold
                }

                .ul_lista{
                    list-style: none; 
                    padding: 0;
                }

                .line-gray{
                    padding: 10px; 
                    color: #888; 
                    padding-top: 0;
                }

                .accionista{
                    padding: 10px; 
                    display: flex;
                }

                .avatar{
                    width: 40px; 
                    height: 40px; 
                    background-color: #3E8CCE; 
                    border-radius: 50%;
                }

                .card{
                    padding: 10px; 
                    padding-top: 0; 
                    margin-left: 5px; 
                    padding-bottom: 0;
                }

                .title-card{
                    margin-top: 0; 
                    color: #307EBF
                }

                .participacion{
                    color: #498B54; 
                    font-style: italic;
                }

                .card-celeste{
                    text-align:center; 
                    background-color: #D9F2FF; 
                    padding: 5px; 
                    margin: 15px; 
                    margin-right: 40px;
                }

                .card-celeste-parrafo{
                    color: #1C1919; 
                    padding: 10px; 
                    font-weight: bold;
                }
            `
        ]
    }

    static get properties(){
        return {
            listDataRegistros: {
                type: Array
            }
        }
    }

    constructor(){
        super();
        this.listDataRegistros = [];
    }

    render(){
        return html`
            <div class="" @click="${this.handlerClick}">
                <h1 class="title_accionista">ACCIONISTAS (2 of 3)</h1>
                <p class="description_accionista">Esta es la información sobre los accionistas de tu empresa</p>

                <ul class="ul_lista">
                    ${this.listDataRegistros.map(valor => 
                        html`
                        <li>
                            <div class="accionista">
                                <div class="avatar">
                                </div>
                                <div class="card">
                                    <h3 class="title-card">${valor.Nombre}</h3>
                                    <p>${valor.TipoDocumento} ${valor.Documento}</p>
                                    <span class="participacion">Participación: ${valor.Porcentaje}</span>
                                </div>
                            </div>
                            <div class="line-gray">
                                __________________________________________
                            </div>
                        </li>`
                    )}
                    </ul>

            </div>

            <div class="card-celeste">
                <p class="card-celeste-parrafo">Recuerda que si deseas actualizar la información de los accionistas, deberás dirigirte a tu oficina o canal web.</p>
            </div>
        `;
    }

    handlerClick(event) {
        const menuText = event.target.innerText;
        let data = "";
        // if (menuText == 'Inicio') {
        //     data = 1;
        // }
        // else if (menuText == 'Detalle'){
        //     data = 2;
        // }
        // else if (menuText == 'Formulario'){
        //     data = 3;
        // }
        // else if (menuText == 'Vista 4'){
        //     data = 4;
        // }


        // this.dispatchEvent(
        //     new CustomEvent('click-menu', {
        //         bubbles: true,
        //         composed: true,
        //         detail: data
        //     })
        // );

        //const demo = document.querySelector('#')
        const demo = event.target;
        const demo2 = demo.shadowRoot;
        console.log("click...", event.target.innerText)
        //console.log("click 2...", demo2)


    }



}

customElements.define('listado-element', ListadoComponent);