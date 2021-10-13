import BaseDatos from "../servicios/BaseDatos.js"
import PubSub from "../servicios/PubSub.js"


export default class {

    constructor(elemento) {
        this.elemento=elemento
        this.escuchaEventos()
    }

    escuchaEventos(){

        this.elemento.addEventListener('click', async ()=>{
            try {
                // me miras si está logueado
                const estaLogin = await BaseDatos.isAuthenticed()
    
                //si está logueado me muestras los botones para crear y modificar
                if (estaLogin) {
                    // cierras sesion
                    await BaseDatos.cerrarSesion()
                    location.href = 'index.html'
                } else {
                    location.href = 'login.html'
                }
                
            } catch (error) {
                PubSub.publish(PubSub.events.SHOW_ERROR, 'Error al comprobar si está logueado')
            }
        })

    }
}