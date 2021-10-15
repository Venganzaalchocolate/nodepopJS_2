import ControladorBotonServidor from "./controladores/ControladorBotonServidor.js"

window.addEventListener('DOMContentLoaded', ()=>{
    const boton = document.querySelector('button')

    const controladorBoton=  new ControladorBotonServidor(boton)

    controladorBoton.escuchaEventos()
})