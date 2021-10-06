

const url="http://localhost:8000"

export default {
    GETarticulos: async function(){
        const GETurl=url+"/api/games"
        try {
            const respuesta =  await fetch(GETurl)
            const articulos = await respuesta.json()
            return articulos
        } catch (error) {
            console.log(error)
        }
    },

    creaCuenta: async function(username, password) {
        const url = '/auth/register'
        return await this.post(url, {username, password})
    }

}
