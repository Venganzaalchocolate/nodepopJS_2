import BaseDatos from "../servicios/BaseDatos.js"
import PubSub from "../servicios/PubSub.js"
import { esquemaArticuloDetalle } from "../views.js"


export default class {

    constructor(elemento, id) {
        this.elemento=elemento
        this.cargaDetalleArticulo(id)
    }


    async cargaDetalleArticulo(id){
        try {
            const articulo = await BaseDatos.getDetalleArticulo(id)
            this.elemento.innerHTML = esquemaArticuloDetalle(articulo)
        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, "No existe este artículo")
        } finally {
            this.hayBoton(id)
        }
    }

    hayBoton(id){
        const boton = document.querySelector('.borrar')
        if(boton!==null){
            boton.addEventListener('click', async ()=>{
                const pregunta = window.confirm('¿Seguro que quieres borrar')
                if (pregunta) {
                    try {
                        await BaseDatos.deleteBorraArticulo(id)
                        PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Se ha borrado con éxito')
                    } catch (error) {
                        PubSub.publish(PubSub.events.SHOW_ERROR, "No se ha podido borrar el artículo")
                    }
                }
            })
        }
    }
}