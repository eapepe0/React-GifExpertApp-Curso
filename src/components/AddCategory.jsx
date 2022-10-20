import React from 'react'
import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) =>{
        setInputValue(target.value)
    }

    const onSubmit = (event) =>{
    
        event.preventDefault();

        if(inputValue.trim().length <=1) return;
        onNewCategory(inputValue.trim())
        setInputValue('')

    }
  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            name="" id="" 
            placeholder='Buscar gifs' 
            value= {inputValue}
            onChange= { onInputChange }
        />
    </form>
  )
}


/**
 *  Recibimos una funcion del padre de AddCategory (GifExpert) , llamada onAddCategory
 * 
 *  en el <form> , tenemos un evento onSubmit que se llama cuando se apreta <Enter> en el <input>
 *  llama a la funcion onSubmit
 *  en el elemento html <input> , podemos ver que el value es igual al inputValue que es una const estado
 *  y cada vez que cambia llama a la funcion onInputChange (linea 7), que recibe un event, del cual extraemos el target
 *  que es el elemento html que lo dispara y el value , el valor que escribimos en el input
 *  le agregamos a inputValue el valor escrito en el input mediante (setInputValue) (linea 8)
 * 
 *  la funcion onSubmit recibe como valor un evento , para prevenir que al apretar <Enter> se actualice la pagina
 *  usamos event.preventDefault(); (linea 13)
 *  nos preguntamos si lo ingresa sin espacios (trim) es menor o igual a 1 no hacemos nada (return) (linea 15)
 *  sino llamamos a la funcion onNewCategory que en realidad es un puntero que apunta a la funcion onAddCategory del padre 
 *  (ver onAddCategory de GifExpertApp) , que lo que hace es ingresar a la constante estado categories lo ingresado
 *  por el input , despues de ingresar borramos el valor del <input>
 *  
 */