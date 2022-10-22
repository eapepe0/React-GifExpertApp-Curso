import 'whatwg-fetch';
export const getGifs = async( category ) =>{ // funcion asincrona
    const apiKey = 'uEYHwC8J7LKadEKDZaRWqNba2LGYEUgZ';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`
    const resp = await fetch (url); // pide a la url
    const {data} = await resp.json(); // espera la respuesta
   
    const gifs = data.map(img =>({ 
        id:img.id,
        title : img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}

/**
 * getGif es una funcion asyncrona por que debe esperar el resultado de la peticion fetch
 * recibe un valor a buscar
 * 
 * transforma lo devueltro en un json y lo pone en la constante data
 * 
 * mapea toda la data , donde cada img recorrida devuelve un objeto con los valores
 * id
 * title
 * url
 * 
 * despues es devuelta para su uso
 */