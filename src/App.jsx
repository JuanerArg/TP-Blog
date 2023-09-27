import React from 'react'
import PostCreator from './PostCreator';
import { Router, Route, Link } from 'react-router-dom';
function App() {
  return (
    <>
      <h1>Hola Mundo</h1>
      <Router>
        <Route path="/PostCreator" element={<PostCreator />}>Crear Post</Route>
      </Router>
    </>
  );
}

export default App
