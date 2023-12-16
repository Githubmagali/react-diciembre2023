import React from "react";


const Inicio = ()=>{
    return(
        <div>
        <h1>Presentacion</h1>
        <p>La aplicación permite la navegación entre diferentes secciones, como la página de inicio, el blog, 
            la página "Acerca de" y los detalles de cada artículo del blog.
             La estructura de la aplicación se organiza mediante componentes de React y
              se gestiona la navegación con React Router DOM.
             Además, se utiliza CSS para dar estilo a los elementos de la interfaz.</p>
             <p>Componentes de React:</p>
       <p> App: El componente principal de la aplicación. Contiene el enrutador y define las rutas principales.</p>
       <p>Header: Componente que representa el encabezado de la aplicación con enlaces de navegación.</p>
<p>Inicio, Blog, AcercaDe, Post: Componentes asociados a rutas específicas que se renderizan cuando la URL coincide.</p>
    
<p>Navigate y useParams: Hooks de React Router DOM. Navigate se utiliza para realizar redireccionamientos programáticos, y useParams para acceder a los parámetros de la URL.
    </p>
    </div>
    );
    }

    export default Inicio;