import { useState } from 'react';
import { useEffect } from 'react';
import { Router, Route, Link, useParams } from 'react-router-dom';
import './Ap.css';
import './Ap1.css';
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
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowGif(false);
    }, 4500);
    

    return () => {
      clearTimeout(timer);
    };
  }, []);

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

      {showGif ? (
          <div className='centered-container'>
          <h4>BIENVENIDO BIENVENIDO BIENVENIDO</h4>
          <h4>BIENVENIDO BIENVENIDO</h4>
          <h4>BIENVENIDO</h4>
          <img className="small-gif" src="/gif2.gif" alt="GIF animado" />
          </div>

      ) : null}

    <div className="header">
    <img src="/logo.png" alt="Logo" width="200" height="135" />
    </div>
    <div className= "fondo">
    <button className="create-post-button">
      <Link to="/create">Create a post</Link>
    </button>
    </div>

    <div className = "post">
      <ul>
      {
          posts.map((post, i) => (
            <li key={i}>

              <div>
              <Link className='title' to={`/post/${i}`}>
                <strong>{post.title}</strong>
              </Link>
              
              {isAdmin && (
          <>
            <button className="cambio" onClick={() => handleDelete(i)}>Borrar</button>
            <Link to={`/editor/${i}`}>
            <button className="editar">Editar</button>
              </Link>

              {console.log("Hola")}
          </>)}
              </div>
            </li>
          )
          )
        }
      </ul>
</div>
    </>
  )
}
export default App
