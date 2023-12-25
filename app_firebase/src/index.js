import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IniciarSesion from './componentes/IniciarSesion';
import RegistroUsuarios from './componentes/RegistroUsuarios';
import GastoPorCategorias from './componentes/GastoPorCategorias';
import ListaDeGastos from './componentes/ListaDeGastos';
import EditarGasto from './componentes/EditarGasto';
import { Helmet } from 'react-helmet';
import favicon from './img/logo.png';


const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
  return (
    <>
  
    <BrowserRouter>
    <div className='index-contenedor'>
      <Routes>
        <Route path='/iniciar-sesion' element={<IniciarSesion />} />
        <Route path='/crear-cuenta'element={<RegistroUsuarios />} />
        <Route path='/categorias' element={<GastoPorCategorias />} />
        <Route path='/lista' element={<ListaDeGastos />} />
        <Route path='/editar-gasto' element={<EditarGasto />}/>
        <Route path='/' element={<App />} />
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}
const helmetContent = (
  <Helmet>
    <link rel="shortcut icon" href={favicon} type='image/x-icon'/>
    <title>App</title>
  </Helmet>
);

root.render(
<> 
{helmetContent}
<Index />
</>);
