import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Tienda from './componentes/Tienda';
import Error404 from './componentes/Error404';
import Carrito from './componentes/Carrito';
import { Provider } from "react-redux";
import {createStore} from 'redux';
import reducer from "./reducers/tiendaReducer";
import Inicio from './componentes/Inicio'

const App = () => {

    const store = createStore(reducer);
    return (
        <Provider store={store}>
            <div className="contenedor">
                <nav className="menu">
                    <NavLink to="/" className="a">Inicio</NavLink>
                    <NavLink to="/tienda" className="a">Tienda</NavLink>
                
                </nav>
                <main>
                    <Routes>
                        <Route path="*" element={<Error404 />} />
                        <Route path="/tienda" element={<Tienda />} />
                        <Route path="/" element={<Inicio />} />
                    </Routes>
                </main>
                <aside>
                    <Carrito  />
                </aside>
            </div>
        </Provider>
    );
}

export default App;