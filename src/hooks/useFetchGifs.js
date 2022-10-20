import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category) => {
  
  const [images, setImages] = useState([]); 
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async ( ) =>{
      const newImages = await getGifs(category)
      setImages(newImages);
      setIsLoading(false);
  }

  useEffect(() => {
    getImages();
  }, [])

  return {
    images : images,
    isLoading : isLoading
  }
}


/**
 * Un hook es una funcion que regresa algo,
 * regresa un objeto que devuelve las images
 * y el isLoading
 */

/**
 *  creamos un hook que es una funcion que recibe lo que vamos a buscar (category)
 *  creamos una const useState que se va a llenar con las imagenes encontradas , las ponemos en un state para que permanezcan en pantalla
 *  creamos un useState que maneja si se terminaron de cargar las fotos en pantalla inicializamos como verdaero
 *  
 *  funcion getImages es asincrona por que depende de la llamada a la funcion getGifs usa un fetch por eso es async
 *  guardamos las imagenes que encontramos, pasamos esas imagenes a la const images (linea 11)
 *  ponemos setIsLoading en falso para mostrar que se terminaron de cargar
 * 
 *  usamos un useEffect para que cada vez que se renderize el componente lance la funcion getImages y busque una sola vez las fotos
 * 
 *  devolvemos un objeto con las imagenes 
 */