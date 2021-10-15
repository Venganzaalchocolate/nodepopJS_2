import BaseDatos from "../servicios/BaseDatos.js"
import PubSub from "../servicios/PubSub.js"


export default class {

    constructor(elemento) {
        this.elemento=elemento
        this.escuchaEventos()
    }

    escuchaEventos(){
        
        this.elemento.addEventListener('submit', async (evento)=>{

            //evitamos el comportamiento por defecto (que el formulario se envie) para poder comprobar antes si es válido
            evento.preventDefault()

            //validamos el formulario
            // El método HTMLSelectElement.checkValidity() comprueba si el elemento tiene restricciones y si las cumple. Si el elemento no cumple sus restricciones, el navegador lanza un evento cancelable invalid (en-US) al momento y luego devuelve false.
            if(this.elemento.checkValidity()){
                try {
                    //La interfaz FormData proporciona una manera sencilla de construir un conjunto de parejas clave/valor que representan los campos de un formulario y sus valores
                    const formulario=new FormData(this.elemento)
                    const nombre = formulario.get('nombre') //<input  name="nombre">
                    const precio = formulario.get('precio') //<input  name="precio">
                    const estado= formulario.get ('estado') //<input  name="estado">
                    // En este caso llamamos a la función compruebaImagen para poner una imagen por defecto en caso de que el cliente no tenga
                    const imagen = this.compuebaImagen(formulario.get ('imagen'))

                    await BaseDatos.creaArticulo(nombre,precio,estado,imagen)
                    PubSub.publish(PubSub.events.SHOW_SUCCESS, "El artículo se ha creado correctamente")
                    //window.alert("Artículo subido con éxito");
                    //window.location.href = 'index.html'
                } catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                }
            }

        })
    }

    compuebaImagen(imagen){
        if(imagen===''){
            return "/nodepopJS/recursos/imagenes/noImagen.jpg"
        } else {
            return imagen
        }
    }

    

}