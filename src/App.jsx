import React from 'react'
import PostCreator from './PostCreator';
import { Router, Route, Link } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PostCreator" element={<PostCreator />} />
      </Routes >
    </>
  );
}

export default App
