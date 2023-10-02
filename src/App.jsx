import React, { useEffect, useState } from 'react'
import PostCreator from './PostCreator';
import PostPage from './PostPage';
import { Router, Route, Link } from 'react-router-dom';
function App() {

  const [Post, setPost] = useState([]);
  const [id, setID] = useState(0);

  useEffect(() => {
    const json = localStorage.getItem("Post");
    const jsonID = localStorage.getItem("Id");
    if (json && jsonID) {
      const newPost = JSON.parse(json);
      setPost(newPost);
      const newId = JSON.parse(jsonID);
      setID(newId);
    }
  }, [])

  return (
    <>
      <h1>Hola Mundo</h1>
      <button>
        <Link to="/PostCreator">Crear Post</Link>
      </button>
      <ul>
        {Post.map((Post, index) => (
          <li key={index}>
            <Link to={`/PostPage/${index}`}>
              <strong>{Post.titulo}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App
