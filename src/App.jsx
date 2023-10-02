import React, { useEffect, useState } from 'react'
import PostCreator from './PostCreator';
import PostPage from './PostPage';
import { Router, Route, Link } from 'react-router-dom';
function App() {

  const [Post, setPost] = useState([]);
  const [id, setID] = useState(0);

  useEffect(() => {
    const json = localStorage.getItem("Posts");
    const jsonID = localStorage.getItem("Ids")
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
        {Post.map((post, id) => (
          <Link to="/PostPage">
            <li key={id}>
              <strong>{post.titulo}</strong>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default App
