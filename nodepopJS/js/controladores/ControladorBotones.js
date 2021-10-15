import BaseDatos from "../servicios/BaseDatos.js"
import PubSub from "../servicios/PubSub.js"


export default class {

    constructor(elemento) {
        this.elemento=elemento

    }

    async pintaBotones() {

        try {
            // Compruebo que haya iniciado sesión 
            const estaLogin = await BaseDatos.isAuthenticed()

            //si está logueado me muestras los botones para crear y modificar
            if (estaLogin) {
                this.elemento.forEach(element => {
                    element.setAttribute("style", "visibility:visible;")
                });
                document.querySelector(".fa-sign-in-alt").setAttribute("style", "color:rgb(0, 156, 140)")
            }
            
        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        }
    }

    



}