import { useParams } from "react-router-dom"
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState, useEffect } from 'react'
import Coments from './CreateComent';

const PostPage = () => {
  let { id } = useParams();
  const [posts, setPost] = useState([]);
  const [coment, setComent] = useState('')
  const [comentAuthor, setComentAuthor] = useState('')

  useEffect(() => {
    // Traemos del localStorage el valor asociado a la clave
    const jsonValue = localStorage.getItem("posts");

    if (jsonValue) {
      // Parseamos el valor si existe y lo asignamos
      const parsedValue = JSON.parse(jsonValue);
      setPost(parsedValue);
      console.log(parsedValue);
    }
  }, []);


  useEffect(() => {
    // Traemos del localStorage el valor asociado a la clave
    const jsonValue = localStorage.getItem("comentarios");

    if (jsonValue) {
      // Parseamos el valor si existe y lo asignamos
      const parsedValue = JSON.parse(jsonValue);
      setComent(parsedValue);
      console.log(parsedValue);
    }
  }, []);

  // En lugar de usar filter para encontrar el post por su índice, puedes usar find
  let post = posts.find((elem, i) => i === parseInt(id)); // Parsea el id a un número entero

  // Asegúrate de manejar el caso en que el post no se encuentre
  if (!post) {
    return <div>No se encontró el post</div>;
  }

  if (!coment) {
    return <div>No se encontraron comentarios</div>
  }

  return (
    <>
      <h1>{post.title}</h1>
      <h2>Author:{post.author}</h2>
      <Markdown remarkPlugins={[remarkGfm]}>{post.paragraph}</Markdown>
      <Coments />
    </>
  )
}
export default PostPage