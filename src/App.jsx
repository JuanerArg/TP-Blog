import React from 'react'
import PostCreator from './PostCreator';

function App() {
  return (
    <>
      <h1>Hola Mundo</h1>
      <Routes>
        <Route path="/PostCreator" component={<PostCreator />} />
      </Routes>
    </>
  );
}

export default App
