import BaseDatos from "../servicios/BaseDatos.js"
import { esquemaArticulo } from "../views.js"
import PubSub from "../services/PubSub.js"

export default class ControladorListadoJuegos{
    constructor(elemento){
        this.elemento=elemento
    }

    async pintarJuegos(){
        try {
            const articulos= await BaseDatos.GETarticulos()
            for (const articulo of articulos) {
            // por cada articulo se crea un elemento en el html
            // document=HTML
            // createElement método propio del HTML
                const etiquetaHTMLconArticulo= document.createElement('article')
            // con innerHTML inserta el elemento con el esquema de las views 'esquemaArticulo'
                etiquetaHTMLconArticulo.innerHTML=esquemaArticulo(articulo)
                this.elemento.appendChild(etiquetaHTMLconArticulo)
        }
        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, 'Error en la base de datos')
        }
    } 
    }

