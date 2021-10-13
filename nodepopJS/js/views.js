

export function esquemaArticulo(articulo) {
    return `<div>
            <img src="${articulo.image}">
            </div>
            <h2>${articulo.name}</h2>
            <p>${articulo.scores.metacritic}</p>
            <p>${articulo.platform}</p>`
}

export function esquemaError(error) {
    return `<p class="textoError">${error}</p>`
}

export function esquemaExito(message) {
    return `<p class="textoExito">${message}</p>`
}
