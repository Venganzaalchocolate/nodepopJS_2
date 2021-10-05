import PubSub from "../services/PubSub.js"

const url="http://localhost:8000/api"

export default {
    GETarticulos: async function(){
        const GETurl=url+"games"
        try {
            const respuesta =  await fetch(GETurl)
            const articulos = await respuesta.json()
            return articulos
        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, 'Error en la base de datos')
        }
    }
}
