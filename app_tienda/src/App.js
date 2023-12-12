import React, {useState} from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Inicio from './componentes/Inicio';
import Blog from './componentes/Blog';
import Tienda from './componentes/Tienda';
import Error404 from './componentes/Error404';
import Carrito from './componentes/Carrito';

const App = ()=>{

    const productos = [{id:1, nombre: 'producto 1'}, {id:2, nombre: 'producto 2'}, {id:3, nombre: 'producto 3'}]
    const [carrito, cambiarCarrito]= useState([]);
  
    return( 
        <div className="contenedor">
            <nav className="menu">
            <NavLink to="/" className="a">Inicio</NavLink>
           <NavLink to="/blog" className="a">Blog</NavLink>
           <NavLink to="/tienda" className="a">Tienda</NavLink>
            </nav>
   <main>
   <Routes>
                    <Route path="*" element={<Error404 />}/>
					<Route path="/" element={<Inicio />}/>
					<Route path="/blog" element={<Blog />}/>
					<Route path="/tienda" element={ <Tienda  productos={productos} carrito={carrito} cambiarCarrito={cambiarCarrito} />}/>
				</Routes>
   </main>
   <aside>
    <Carrito carrito={carrito} cambiarCarrito={cambiarCarrito}  />
    </aside>
        </div>
    );
}

export default App;