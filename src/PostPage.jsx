import { useParams } from "react-router-dom"
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {useState, useEffect} from 'react'


const PostPage = () =>{
let {id} = useParams();

const [posts, setPost] = useState([])

useEffect(() => {
  let jsonPost = localStorage.getItem("posts")
  if (jsonPost) {
    let newPost = JSON.parse(jsonPost);
    setPost(newPost);
    console.log(newPost)
    }
  },[])

  // En lugar de usar filter para encontrar el post por su índice, puedes usar find
  let post = posts.find((elem, i) => i === parseInt(id)); // Parsea el id a un número entero

  // Asegúrate de manejar el caso en que el post no se encuentre
  if (!post) {
    return <div>No se encontró el post</div>;
  }

  return(
        <>
        <h1>{post.title}</h1>
        <Markdown remarkPlugins={[remarkGfm]}>{post.paragraph}</Markdown>
        </>
  )
}
export default PostPage