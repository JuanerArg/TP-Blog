import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState, useEffect } from 'react'
import { Router, Route, Link, useParams } from 'react-router-dom';
import './Posts.css'

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

  let post = posts.find((elem, i) => i === parseInt(id));

  if (!post) {
    return <div>No se encontró el post</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let authorName = author.trim() !== '' ? author : 'Anonimo'; // Si el autor está vacío, utiliza 'Anonimo'
    let input = { author: authorName, text: text };
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
      <button className='lol'>
      <Link to={`/`}>
        <strong>Home</strong>
      </Link>
      </button>

      <div className="container">
      <h1>{post.title}</h1>
      <div className="post-content">
        <Markdown remarkPlugins={[remarkGfm]}>{post.paragraph}</Markdown>
        <h3>{post.author}</h3>
      </div>

      <form onSubmit={handleSubmit} className="form-container">

        <input type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" className="input-field" />

        <textarea 
        cols="30" 
        rows="10" 
        onChange={e => setText(e.target.value)} 
        value={text} 
        placeholder='Comment' 
        className="input-field" 
        />

        <button type="submit" className="submit-button">Create</button>

      </form>

      <br></br>
     {comments[parseInt(id)] ? comments[parseInt(id)].map((elem, i) => (
  <div key={i} className="comment">
    <h2>{elem.author}</h2>
    <Markdown remarkPlugins={[remarkGfm]}>{elem.text}</Markdown>
  </div>
)) : null}
      <br></br>
      </div>
    </>
  )
}
export default PostPage
