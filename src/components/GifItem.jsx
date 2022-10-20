import React from 'react'

export const GifItem = ({title, url , id}) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

/**
|--------------------------------------------------
|  este componente dibuja la tarjeta donde se muestra
|  la imagen con el titulo , recibe los valores
| |--------------------------------------------------
*/