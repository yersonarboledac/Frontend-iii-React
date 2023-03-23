import React, { useState } from "react"

export default function Item(props) {

  const [cantStock, setCantStock] = useState(props.data.stock);

  const manejarCantStock = () => {
    setCantStock(cantStock - 1);
    props.manejarCompras();
  }

  return (
    <div className='producto'>
      <h3>{props.data.producto.nombre}</h3>
      <p>{props.data.producto.descripcion}</p>
      <h5>En Stock <span className={cantStock > 0 ? "visible" : ""}>{cantStock > 0 ? cantStock : "Agotado"}</span></h5>
      <button onClick={manejarCantStock} disabled={cantStock > 0 ? false : true}>{cantStock > 0 ? 'comprar' : 'sin stock'}</button>
    </div>
  )
}
