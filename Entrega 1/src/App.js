import React, { useState } from 'react';
import Listado from './components/Listado';
import Cabecera from './components/Cabecera';

function App() {

  const [compras, setCompras] = useState(0);

  const manejarCompras = () => {
    setCompras(compras + 1);
  }

  return (
    <div className="App">
      <Cabecera compras={compras} />
      <Listado manejarCompras={manejarCompras} />
    </div>
  );
}

export default App;
