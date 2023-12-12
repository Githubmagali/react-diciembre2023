import React, { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Tienda from './componentes/Tienda';
import Error404 from './componentes/Error404';
import Carrito from './componentes/Carrito';
import { Provider } from "react-redux";
import {createStore} from 'redux';
import reducer from "./reducers/tiendaReducer";

const App = () => {

    const [carrito, cambiarCarrito] = useState([]);

    const store = createStore(reducer);
  console.log(store.getState);
    return (
        <Provider store={store}>
            <div className="contenedor">
                <nav className="menu">

                    <NavLink to="/" className="a">Tienda</NavLink>
                </nav>
                <main>
                    <Routes>
                        <Route path="*" element={<Error404 />} />
                        <Route path="/" element={<Tienda  carrito={carrito} cambiarCarrito={cambiarCarrito} />} />
                    </Routes>
                </main>
                <aside>
                    <Carrito carrito={carrito} cambiarCarrito={cambiarCarrito} />
                </aside>
            </div>
        </Provider>
    );
}

export default App;