import React from 'react'
import PostCreator from './PostCreator';
import { Router, Route, Link } from 'react-router-dom';
function App() {
  return (
    <>
      <h1>Hola Mundo</h1>
      <button><a href='/PostCreator'>Creador de Posts</a></button>
    </>
  );
}

export default App
