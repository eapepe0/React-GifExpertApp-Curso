import React, { useEffect , useState } from 'react'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types'

export const GifGrid = ({category}) => {
    const {images , isLoading} = useFetchGifs(category)
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className='card-grid'>
                {
                    images.map((imagen) =>(
                        <GifItem key={imagen.id} {...imagen}/>
                    ))
                }

            </div>
        </>
    )
}





GifGrid.propTypes={
   category : PropTypes.string.isRequired  ,
}

/**
 * por cada categoria (busqueda)
 * llamamos la funcion useFetchGifs con el valor a buscar
 * nos devuelve un array con objetos con los valores id , titulo ,url
 * 
 * despues mapeamos por cada item en el array images
 * un componente que tome el id y despues destructuramos los valores , 
 * como ya el objeto devuelto tiene su title , su id y su url
 * los usamos en el componente GifItem
 */


/**
|--------------------------------------------------
| cada vez que se hace un cambio se vuelve a renderizar 
| el componente , ciertas funciones vamos a querer que 
| se ejecuten una sola vez , como por ej una llamada a
| un api, 
|     
|--------------------------------------------------
*/

/**
|--------------------------------------------------
| useEffect debe devolver una funcion , no una promesa
|
| por eso no podemos usar:
|
|
| 
| const [images, setImages] = useState([]);
| 
| useEffect( async () =>{
|    const newImages = await getGifs(category);
|    setImages(newImages)
| },[])
|
|
|--------------------------------------------------
*/

/**
|--------------------------------------------------
| podemos usar :
|
| useEffect( async () =>{
|    getGifs(category);
|         .then(newImages => setImages(newImages))
|        // cuando la funcion devuelve la promesa
|        // newImages es donde hace el return
|        // getGifs
|        // entonces newImages es igual setImages
| },[])
|
|
|--------------------------------------------------
*/

/**
 * podemos llamar al GifItem de esta forma pasando las props asi
 * <GifItem key={imagen.id} title= {imagen.url} url = {imagen.url}/>
 * 
 * o usando un spread y recibiendo automanticamente
 * 
 * <GifItem key={imagen.id} {...imagen}/>
 */

/**
 * first
 */

/**
|--------------------------------------------------
| en la linea 12, hace un renderizado condicional
| si la const isLoading es verdadera renderiza
| de lo contrario no
|--------------------------------------------------
*/