import React from 'react'
import PropTypes from 'prop-types'

export const GifItem = ({title, url , id}) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}




GifItem.propTypes={
  title : PropTypes.string.isRequired,
  url : PropTypes.string.isRequired,
  id : PropTypes.number
}
/**
|--------------------------------------------------
|  este componente dibuja la tarjeta donde se muestra
|  la imagen con el titulo , recibe los valores
| |--------------------------------------------------
*/

/**
|--------------------------------------------------
| 1 . Añadir proptypes
|   a. titulo obligatorio
|   b. url obligatorio
|
| 2. Evaluar snapshot 
|--------------------------------------------------
*/