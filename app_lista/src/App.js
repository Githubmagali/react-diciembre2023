import React, { useState } from 'react';
import './App.css';
import Formulario from './componentes/Formulario';
import Header from './componentes/Header';
import ListaDeNotas from './componentes/ListaDeNotas';

const App = () => {
  const [notas, cambiarNotas] = useState([]);

  return (
    <div className="contenedor">
      <Header />
      <Formulario notas={notas} cambiarNotas={cambiarNotas} />
      <ListaDeNotas notas={notas} cambiarNotas={cambiarNotas} />
    </div>
  );
};

export default App;
