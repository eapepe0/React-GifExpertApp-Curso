import React, {useState} from 'react'
import { AddCategory , GifGrid} from './components';


export const GifExpertApp = ( ) =>{
  const [categories, setCategories] = useState(['One Punch'])


  const onAddCategory = (newCategory ) =>{
    if(categories.includes(newCategory)) return; 
    setCategories([ newCategory, ...categories ]);
  }

  return (
  <>
    <h1>GifExpertApp</h1>
    <AddCategory onNewCategory = {onAddCategory}/>
      {categories.map(itemCategory =>  (
          <GifGrid key={itemCategory} category={itemCategory}/>
        )
      )}
  </>)
}


/**
|--------------------------------------------------
| creamos una constante que tenga un array con categorias , la inicializamos con un valor
* 
* funcion que se encarga de agregar el valor ingresado , en array donde tenemos los valores buscados
* si lo nuevo buscado es igual a lo ya buscado no hagas nada , de lo contrario agregar al array
* usamos el componente AddCategory y le pasamos una funcion
*
*  despues renderiza por cada categoria buscada un GifGrid, que seria un contenedor de cada busqueda
*
|--------------------------------------------------
*/