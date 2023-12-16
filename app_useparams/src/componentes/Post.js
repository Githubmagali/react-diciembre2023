import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import posts from '../data/posts'; 
import { NavLink } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();

  return (
    <>
      {posts[id] ? (
        <div>
          <p>{posts[id].nombre}</p>
          <img src={posts[id].imagenUrl} alt={`${posts[id].nombre}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <p>{posts[id].texto}</p>
    
          <NavLink to={`/blog`}>Volver</NavLink>
         
        </div>
      ) : (
        <Navigate replace to="/" />
      )}
    </>
  );
};

export default PostDetail;