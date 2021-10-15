
export default class {

    constructor(elemento) {
        this.elemento=elemento
        this.escuchaEventos()
    }

    escuchaEventos(){

        this.elemento.addEventListener('click', async ()=>{
            window.location.href = "index.html"

        })

    }
}