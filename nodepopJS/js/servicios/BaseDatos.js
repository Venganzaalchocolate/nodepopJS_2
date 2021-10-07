

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

    creaCuenta: async function(username, password, email) {
        const REGISTROurl = url+'/auth/register'
        return await this.post(REGISTROurl, {username, password, email})
    },

    loginCuenta: async function(username,password){
        const LOGINurl = url+'/auth/login'
        const formulario = await this.post(LOGINurl, {username, password})
        const token = formulario.accessToken
        localStorage.setItem('AUTH_TOKEN', token)

    }, 


    post: async function(url, body) {
        return await this.request('POST', url, body)
    },

    request: async function(method, url, body) {
        const requestConfig = {
            method: method,
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        };

        if (this.isAuthenticed()) {
            const token = localStorage.getItem('AUTH_TOKEN')
            // requestConfig.headers.Authorization = `Bearer ${token}`
            requestConfig.headers['Authorization'] = `Bearer ${token}`
        }

        const respuesta = await fetch(url, requestConfig)

        try {
            const formulario = await respuesta.json()
            if (respuesta.ok) {
                return formulario
            } else {
                throw new Error(formulario.response)
            }
        } catch (error) {
            throw error
        }

    },

    isAuthenticed: function() {
        return localStorage.getItem('AUTH_TOKEN') !== null
    },


}


