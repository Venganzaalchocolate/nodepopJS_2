import ControladorListadoJuegos from "./controladores/ControladorListadoJuegos.js"


window.addEventListener('DOMContentLoaded', ()=>{

    // Selecciono la section del html
    const section = document.querySelector('section')

    // Creo el controlador de listado de juegos
    const controladorListado = new ControladorListadoJuegos(section)

    //Ejecuto el método que me pinta los juegos en pantalla del ControladorListadoJuegos
    controladorListado.pintarJuegos()

    


} )