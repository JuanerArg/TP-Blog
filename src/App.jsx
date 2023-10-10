import { useState } from 'react';
import { useEffect } from 'react';
import { Router, Route, Link, useParams } from 'react-router-dom';
import Admin from './Admin';

function App() {
  const [posts, setPost] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [comments, setComments] = useState([])
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

  useEffect(() => {
    const jsonAdmin = localStorage.getItem('isAdmin');
    if (jsonAdmin) {
      const parsedAdmin = JSON.parse(jsonAdmin);
      setIsAdmin(parsedAdmin);
    }
    let jsonComments = JSON.parse(localStorage.getItem('comments'))
    if (jsonComments) setComments(jsonComments)
  }, []);

  const handleDelete = (index) => {
    // Copiamos el array actual para no mutar el estado directamente
    const updatedPosts = [...posts];
    const updatedComments = [...comments];
    // Eliminamos el elemento en la posición index
    updatedPosts.splice(index, 1);
    updatedComments.splice(index, 1)
    // Actualizamos el estado con el nuevo array
    setPost(updatedPosts);
    setComments(updatedComments);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  const toggleAdmin = () => {
    setIsAdmin(!isAdmin);
    localStorage.setItem("isAdmin", JSON.stringify(!isAdmin));
  };

  useLocalStorage("posts");

  return (
    <>
      {isAdmin && (<>
        <h1>Modo Admin</h1>
        <button onClick={toggleAdmin}>Toggle Admin</button>
      </>)}
      <Link to="/create">Create a Post</Link>
      <ul>
        {
          posts.map((post, i) => (
            <li key={i}>
              <Link to={`/post/${i}`}>
                <strong>{post.title}</strong>
              </Link>
              {isAdmin && (
                <>
                  <button onClick={() => handleDelete(i)}>Borrar</button>
                  <button>Editar</button>
                  {console.log("Hola")}
                </>
              )}
            </li>
          )
          )
        }
      </ul >
    </>
  )
}
export default App