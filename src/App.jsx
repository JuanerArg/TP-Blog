import React from 'react'
import PostCreator from './PostCreator';
import { Router, Route, Link } from 'react-router-dom';
function App() {
  return (
    <>
      <h1>Hola Mundo</h1>
      <Link to="/PostCreator">Crear Post</Link>
    </>
    //Cuando hagas el lugar para los post inclui el ComentCreator adentro de los Posts
  );
}

export default App
