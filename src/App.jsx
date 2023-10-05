import { useState } from 'react';
import { useEffect } from 'react';
import { Router, Route, Link, useParams } from 'react-router-dom';

function App() {
  const [posts, setPost] = useState([]);

  const useLocalStorage = (key) => {
    useEffect(() => {
      // Traemos del localStorage el valor asociado a la clave
      const jsonValue = localStorage.getItem(key);

      if (jsonValue) {
        // Parseamos el valor si existe y lo asignamos
        const parsedValue = JSON.parse(jsonValue);
        setPost(parsedValue);
        console.log(parsedValue);
      }
    }, []);
  }

  useLocalStorage("posts");

  return (
    <>
      <Link to="/create">Create a Post</Link>
      <ul>
        {
          posts.map((post, i) => (
            <li key={i}>
              <Link to={`/post/${i}`}>
                <strong>{post.title}</strong>
              </Link>


            </li>
          )
          )
        }
      </ul>

    </>
  )
}
export default App