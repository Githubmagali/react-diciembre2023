import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from './componentes/Error404';
import Inicio from './componentes/Inicio';
import Blog from './componentes/Blog';
import AcercaDe from './componentes/AcercaDe';
import Post from './componentes/Post';
import './App.css';
import Header from './componentes/Header';



function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="app-contenedor">
    <main className='app-main'>
      <Routes>
        <Route path='*' element={<Error404 />}></Route>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path="/acerca-de" element={<AcercaDe />}></Route>
        <Route  path="/post/:id" element={<Post />} />
      </Routes>
    </main>

    </div>
    </BrowserRouter>
  );
}

export default App;
