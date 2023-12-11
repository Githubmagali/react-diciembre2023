import React, { useState, useEffect } from 'react';
import './App.css';
import Formulario from './componentes/Formulario';
import Header from './componentes/Header';
import ListaDeNotas from './componentes/ListaDeNotas';

const App = () => {
  const notasGuardadas = localStorage.getItem('nota') ?
   JSON.parse(localStorage.getItem('nota')) : [];
  //console.log(notasGuardadas);

  const [notas, cambiarNotas] = useState(notasGuardadas);

  useEffect(()=>{
    localStorage.setItem('nota', JSON.stringify(notas));
  }, [notas]);

    let configMostrarCompletadas = '';
  if (localStorage.getItem('mostrarNotas') === null){
    configMostrarCompletadas = true;
  }else{
    configMostrarCompletadas = localStorage.getItem('mostrarNotas') === 'true';
  }
  const [mostrarNotas, cambiarMostrarNotas]= useState(configMostrarCompletadas);
  useEffect(()=>{
    localStorage.setItem('mostrarNotas', mostrarNotas.toString());
  }, [mostrarNotas]);

  
  return (
    <div className="contenedor">
      <Header mostrarNotas={mostrarNotas} cambiarMostrarNotas={cambiarMostrarNotas} />
      <Formulario notas={notas} cambiarNotas={cambiarNotas} />
      <ListaDeNotas notas={notas} cambiarNotas={cambiarNotas} mostrarNotas={mostrarNotas} />
    </div>
  );
};

export default App;