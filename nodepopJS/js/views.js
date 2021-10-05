

export function esquemaArticulo(articulo){
    return `<div>
            <img src="${articulo.image}">
            </div>
            <h2>${articulo.name}</h2>
            <p>${articulo.scores.metacritic}</p>
            <p>${articulo.platform}</p>
            <p>${articulo.relaseDate.split('T')[0]}</p>`
}

export function esquemaError(error){
    return `<p>${error}</p>`
}