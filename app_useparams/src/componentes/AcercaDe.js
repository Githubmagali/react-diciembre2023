import React from "react";


const AcercaDe = () => {
    return (
        <div>
            <h1>Funciones del código</h1>
            <p>Este código utiliza la biblioteca React para construir una aplicación web de una sola página
                 (Single Page Application o SPA). </p>

  <p>React: Es una biblioteca de JavaScript para construir interfaces de usuario.
     Permite dividir la interfaz en componentes reutilizables, lo que facilita la creación y
      mantenimiento de aplicaciones complejas.</p>

<p>React Router DOM: Es una extensión de React Router que facilita la navegación y manejo de rutas 
    en aplicaciones React. Permite definir rutas y asociar componentes a esas rutas para que se rendericen
     cuando la URL cambie.</p>

 <p></p>BrowserRouter: Componente de React Router DOM que proporciona la funcionalidad de navegación basada en el historial del navegador.

<p></p>Routes y Route: Componentes de React Router DOM que se utilizan para definir rutas en la aplicación. Routes contiene múltiples Route que coinciden con las URL y renderizan los componentes asociados.

<p></p>NavLink: Componente de React Router DOM que proporciona navegación declarativa. Permite crear enlaces a rutas sin tener que preocuparse por la actualización manual de la URL.

<p></p>CSS: Se utiliza para dar estilo a la aplicación. En este caso, se emplea un archivo App.css para definir reglas de estilo, como colores, márgenes y alineaciones.

<p></p>Posts (data/posts.js): Un archivo que contiene un array de objetos, cada uno representando un artículo del blog con propiedades como id, nombre y texto. Este archivo simula ser una fuente de datos para los artículos del blog.

 
        </div>
    );
}

export default AcercaDe;