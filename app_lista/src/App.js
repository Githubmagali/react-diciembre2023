import React, { useState } from 'react';
import './App.css';
import Formulario from './componentes/Formulario';
import Header from './componentes/Header';
import ListaDeNotas from './componentes/ListaDeNotas';

const App = () => {
  const [notas, cambiarNotas] = useState([
    {
      id:1,
      texto: 'pasear a ciro',
      completada:false

    },
    {
      id:2,
      texto: 'pasear a ciro',
      completada:false

    }

  ]);

  return (
    <div className="contenedor">
      <Header />
      <Formulario notas={notas} cambiarNotas={cambiarNotas} />
      <ListaDeNotas notas={notas} cambiarNotas={cambiarNotas} />
    </div>
  );
};

export default App;
