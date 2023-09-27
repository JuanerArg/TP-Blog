import React from 'react'
import PostCreator from './PostCreator';

function App() {
  return (
    <>
      <h1>Hola Mundo</h1>
      <routes>
        <route exact path="/PostCreator" component={PostCreator} />
      </routes>
    </>
  );
}

export default App
