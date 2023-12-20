import React from "react";
import "./App.css";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Menu from "./componentes/Menu";
import { CartProvider } from "./CartContext";
import CartDisplay from "./componentes/CartDisplay";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Menu />
        <CartDisplay />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
