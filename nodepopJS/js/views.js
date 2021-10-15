

export function esquemaArticulo(articulo) {
    return `
            <div class="imagen">
            <img src="${articulo.imagen}">
            </div>
            <h2 class="nombre">${articulo.nombre}</h2>
            <p class="precio">${articulo.precio} €</p>
            <p class="estado">${articulo.estado}</p>
            <a href="/nodepopJS/html/modificaArticulo.html?id=${articulo.id}">+ info</a>`
}

export function esquemaError(error) {
    return `<div class="mensaje">
                <i class="fas fa-bomb fa-3x"></i>
                <p class="textoError">${error}</p></div>`
}

export function esquemaArticuloDetalle(articulo) {
    const fecha = new Date(articulo.updatedAt).toLocaleDateString()
    const hora = new Date(articulo.updatedAt).toLocaleTimeString()
    const boton = articulo.sePuedeBorrar ? `<button class="borrar">borrar</button>` : ''
    return `<article class="detalle">
            <div class="imagen">
                <img class="detalleImagen"src="${articulo.imagen}">
            </div>
            <div class="datos">
                <h2 class="nombre">${articulo.nombre}</h2>
                <p class="precio">${articulo.precio} €</p>
                <p class="estado">Se ${articulo.estado}</p>
                <p class="autor">Publicado por: ${articulo.user.username}</p>
                <p class="fecha">Se publicó el ${fecha} a las ${hora}</p>
            </div>
            <div class="botonBorrar">
                ${boton}
            </div>
            </article>`
}


