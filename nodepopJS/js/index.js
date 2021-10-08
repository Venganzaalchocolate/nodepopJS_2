import ControladorBotones from "./controladores/ControladorBotones.js"
import ControladorListadoJuegos from "./controladores/ControladorListadoJuegos.js"
import ControladorMensaje from "./controladores/ControladorMensajes.js"


window.addEventListener('DOMContentLoaded', ()=>{

    // Selecciono la section del html
    const section = document.querySelector('section')

    // Creo el controlador de listado de juegos
    const controladorListado = new ControladorListadoJuegos(section)

    // Ejecuto el método que me pinta los juegos en pantalla del ControladorListadoJuegos
    controladorListado.pintarJuegos()

    // Seleccionamos el nodo para mostrar mensajes de error
    const mensajes = document.querySelector('section')

    // Crear una instancia de ErrorMessageController
    new ControladorMensaje(mensajes)

    // Seleccionamos el nodo de los botones
    const botones = document.querySelectorAll('.boton')

    // Creo el controlador de Botones
    const controladorBotones=  new ControladorBotones(botones)

    controladorBotones.pintaBotones()


} )