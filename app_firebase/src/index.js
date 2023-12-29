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
import { AuthProvider } from './contextos/AuthContext';
import RutaProtegida from './componentes/RutaPrivada';


const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
  return (
    <>
    
  <AuthProvider>
    <BrowserRouter>
    <div className='index-contenedor'>
      <Routes>
        <Route path='/iniciar-sesion' element={<IniciarSesion />} />
        <Route path='/crear-cuenta'element={<RegistroUsuarios />} />
        <Route path='/categorias' element={ <RutaProtegida><GastoPorCategorias /></RutaProtegida> } />
        <Route path='/lista' element={<RutaProtegida><ListaDeGastos /></RutaProtegida> } />
        <Route path='/editar-gasto' element={<RutaProtegida><EditarGasto /></RutaProtegida> }/>
        <Route path='/' element={<RutaProtegida><App /></RutaProtegida>} />
      </Routes>
    </div>
    </BrowserRouter>
    </AuthProvider>
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
