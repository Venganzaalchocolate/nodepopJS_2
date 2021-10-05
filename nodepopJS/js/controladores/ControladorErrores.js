import PubSub from "../servicios/PubSub.js"
import { esquemaError } from "../views"


export default class ControladorError{
    constructor(elemento){
        this.elemento=elemento
        PubSub.subscribe(PubSub.events.SHOW_ERROR, error => {
            this.pintarError(error)
        })

    }

    pintarError(errores){
        
        const etiquetaHTMLconError = createElement('div')

        for (const error of errores) {
            etiquetaHTMLconError.innerHTML=esquemaError(error)
            this.elemento.appendChild(etiquetaHTMLconError)
        }
        
    }
}