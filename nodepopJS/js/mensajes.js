


export function mensajesError(error) {
    const errores= 
    error==="Wrong username/password" ? "El usuario y/o la contraseña con incorrectos" 
    :error==="Username is taken" ? "El usuario ya existe, porfavor elige otro nombre"
    :error==="Cannot read properties of null (reading 'updatedAt')" ? "Este artículo no existe"
    :error==="articulo is null" ? "Este artículo no existe"
    :error
    
    
    
    
    
    
    return errores
    
}