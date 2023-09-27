import React from 'react'
import PostCreator from './PostCreator';
import PostPage from './PostPage';
import { Router, Route, Link } from 'react-router-dom';
function App() {
  return (
    <>
      <h1>Hola Mundo</h1>
      <button>
        <Link to="/PostCreator">Crear Post</Link>
      </button>
      <Link to="/PostPage">Aca iria el post vamos a tener que hacer que esto se genere con un map o algo por el estilo</Link>
      <ul>
        {Post.map((post, i) => (
          <li key={i}>
            <strong>{post.titulo}</strong>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App
