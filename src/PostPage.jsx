import { useParams } from "react-router-dom"
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState, useEffect } from 'react'


const PostPage = () => {
  let { id } = useParams();

  const [posts, setPost] = useState([])
  const [comments, setComments] = useState([])
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let jsonPost = JSON.parse(localStorage.getItem("posts"))
    if (jsonPost) setPost(jsonPost);

    let jsonComments = JSON.parse(localStorage.getItem('comments'))
    if (jsonComments) setComments(jsonComments)

    const jsonAdmin = localStorage.getItem('isAdmin');
    if (jsonAdmin) {
      const parsedAdmin = JSON.parse(jsonAdmin);
      setIsAdmin(parsedAdmin);
    }
  }, [])

  // En lugar de usar filter para encontrar el post por su índice, puedes usar find
  let post = posts.find((elem, i) => i === parseInt(id)); // Parsea el id a un número entero

  // Asegúrate de manejar el caso en que el post no se encuentre
  if (!post) {
    return <div>No se encontró el post</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let input = { author: author, text: text };
    let newComment = [...comments];
    newComment[parseInt(id)] = [...newComment[parseInt(id)], input]
    setComments(newComment);
    localStorage.setItem('comments', JSON.stringify(newComment));
    console.log(newComment);
    setAuthor('');
    setText('');
  }


  return (
    <>
      {isAdmin && (<h1>Modo Admin</h1>)}
      <h1>{post.title}</h1>
      <Markdown remarkPlugins={[remarkGfm]}>{post.paragraph}</Markdown>
      <h3>{post.author}</h3>

      <form onSubmit={handleSubmit}>
        <input type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" />
        <textarea
          cols="30"
          rows="10"
          onChange={e => setText(e.target.value)}
          value={text}
          placeholder='Text'
        />
        <button type="submit">Create</button>
      </form>

      <br></br>
      {comments[parseInt(id)].map((elem, i) => (
        <div key={i}>
          <h2>{elem.author}</h2>
          <Markdown remarkPlugins={[remarkGfm]}>{elem.text}</Markdown>
        </div>
      ))}
      <br></br>
    </>
  )
}
export default PostPage