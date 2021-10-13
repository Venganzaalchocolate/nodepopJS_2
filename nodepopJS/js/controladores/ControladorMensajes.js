import PubSub from "../servicios/PubSub.js"
import { esquemaError } from "../views.js"


export default class ControladorMensaje{
    constructor(elemento){
        this.elemento=elemento
        PubSub.subscribe(PubSub.events.SHOW_ERROR, error => {
            this.pintarError(error)
        })
        PubSub.subscribe(PubSub.events.SHOW_SUCCESS, message => {
            this.exito(message)
        })

        
    }

    pintarError(errores){
        this.elemento.innerHTML=esquemaError(errores)
        
    }

    exito(message) {
        this.elemento.innerHTML=esquemaExito(message)
    }

    
}