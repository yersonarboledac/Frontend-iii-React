import React from 'react'

export default function Cabecera(props) {

  return (
    <header>
      <h1>Carrito de Compras</h1>
      <p>Cantidad de productos <span>{props.compras}</span></p>
    </header>
  )
}
