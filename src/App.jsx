import React from 'react'
import PostCreator from './PostCreator';
import { Router, Route, Link } from 'react-router-dom';
function App() {
  return (
    <>
      <h1>Hola Mundo</h1>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/PostCreator" element={<PostCreator />} />
      </Routes >
    </>
  );
}

export default App
