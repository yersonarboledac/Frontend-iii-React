import React from 'react';
import Item from './Item';
import productos from './data.json';

export default function Listado(props) {
  return (
    <div className='container'>
      {productos.map(producto => <Item key={producto.id} data={producto} manejarCompras={props.manejarCompras} />)}
    </div>
  )
}
