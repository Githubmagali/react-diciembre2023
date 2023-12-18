import React, { useState, useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import Tienda from "./componentes/Tienda";
import Error404 from "./componentes/Error404";
import Carrito from "./componentes/Carrito";
import "./App.css";

const PRODUCTOS = [
  { id: 1, nombre: "producto 1", cantidad:  },
  { id: 2, nombre: "producto 2" },
  { id: 3, nombre: "producto 3" },
];

const App = () => {
  const [carrito, cambiarCarrito] = useState([]);
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(() => {
    // Cambia la clase del elemento HTML cuando isFakeDark cambia
    document.documentElement.classList.toggle("fake-dark-mode", isFakeDark);
  }, [isFakeDark]);

  return (
    <div className="contenedor">
      <nav className="menu">
        <button
          onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
          className="btn-fake-dark-mode"
        >
          {isFakeDark ? "☀️" : "🌙"}
        </button>
        <NavLink to="/" className="a">
          Inicio
        </NavLink>
        <NavLink to="/tienda" className="a">
          Tienda
        </NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Inicio />} />
          <Route
            path="/tienda"
            element={
              <Tienda
                productos={PRODUCTOS}
                carrito={carrito}
                cambiarCarrito={cambiarCarrito}
              />
            }
          />
        </Routes>
      </main>
      <aside>
        <Carrito carrito={carrito} cambiarCarrito={cambiarCarrito} />
      </aside>
    </div>
  );
};

export default App;
