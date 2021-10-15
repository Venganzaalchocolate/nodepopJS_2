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

            // comprobamos si el formulario valida en el html.
            // El método HTMLSelectElement.checkValidity() comprueba si el elemento tiene restricciones y si las cumple. Si el elemento no cumple sus restricciones, el navegador lanza un evento cancelable invalid (en-US) al momento y luego devuelve false.
            if (this.elemento.checkValidity()) {
                try {
                    //La interfaz FormData proporciona una manera sencilla de construir un conjunto de parejas clave/valor que representan los campos de un formulario y sus valores
                    const formulario=new FormData(this.elemento)
                    const username = formulario.get('username')  //<input  name="username">
                    const email = formulario.get('email')  //<input  name="email">
                    const password = formulario.get('password1') 

                    // comprobamos si son iguales las contraseñas y si no estan intentando injectar codigo en el username o email
                    if (this.comparaContrasenas(formulario.get('password1'), formulario.get('password2'))
                        && this.validaCampos(username)===false
                        && this.validaCampos(email)===false) {
                        //si son iguales lo grabamos en la BD
                        await BaseDatos.creaCuenta(username, password, email)
                        PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Registrado correctamente')

                    }

                } catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error.message)
                    
                } 
                
            } else {
                console.log('falla en el checkvalidity')
            }
        })
    }

    comparaContrasenas (pass1, pass2){
        if(pass1===pass2){
            return true
        } else {
            PubSub.publish(PubSub.events.SHOW_ERROR, 'Las contraseñas no son iguales')
        }
    }

    validaCampos(campo){
        const expresionRegular = new RegExp('[<>\*\$=_]')
        debugger
        const validado = expresionRegular.test(campo)
        if (validado) {
            return PubSub.publish(PubSub.events.SHOW_ERROR, 'Error al validar los campos, contiene caracteres especiales')
        } else {
            return validado
        }
    }


}