import ControladorBotonServidor from "./controladores/ControladorBotonRespuestaHTTP.js"

window.addEventListener('DOMContentLoaded', ()=>{
    const boton = document.querySelector('button')

    const controladorBoton=  new ControladorBotonServidor(boton)

    controladorBoton.escuchaEventos()
})