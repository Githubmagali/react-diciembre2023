import React from "react";
import posts from "../data/posts";
import { NavLink } from "react-router-dom";

const Blog = () => {
    return (
        <div>
          
            <h1>Objetos con imagenes </h1>
            <div className="blog-contenedor" >
                {posts.map((post, index) => {
                    return <div key={index} className="blog-div" > <NavLink to={`/post/${post.id}`}>{post.nombre}</NavLink></div>
                })}
                
                <div className="blog-boton"><NavLink to={`/`}>Volver</NavLink> </div>
            </div>
        </div>
    )
}

export default Blog;
