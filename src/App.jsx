import React, { useEffect, useState } from 'react'
import PostCreator from './PostCreator';
import PostPage from './PostPage';
import { Router, Route, Link } from 'react-router-dom';
function App() {

  const [Post, setPost] = useState([]);
  useEffect(() => {
    const json =  localStorage.getItem("Post");
    if(json){
      const newPost = JSON.parse(json);
      setPost(newPost);
    }
  },[])

  return (
    <>
      <h1>Hola Mundo</h1>
      <button>
        <Link to="/PostCreator">Crear Post</Link>
      </button>
      <ul>
        {Post.map((post, id) => (
          <Link to="/PostPage" onClick={() => {localStorage.setItem("id", id);}}>
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
