import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import './Input.css';

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [paragraph, setParagraph] = useState('')
    const [authorP, setAuthorP] = useState('')
    const [post, setPost] = useState([{ author: '', title: '', paragraph: '' }])
    const [comments, setComments] = useState([])
    const navigate = useNavigate();
    let input = { author: authorP, title: title, paragraph: paragraph };


    useEffect(() => {
        let jsonPost = JSON.parse(localStorage.getItem('posts'))
        let jsonComments = JSON.parse(localStorage.getItem('comments'))

        if (jsonPost) setPost(jsonPost)
        if (jsonComments) setComments(jsonComments)

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.title != '') {
            let input = { author: authorP, title: title, paragraph: paragraph };
            let newPost = [...post, input];

            let newComment = [...comments, []];

            setPost(newPost);
            setComments(newComment);

            localStorage.setItem('posts', JSON.stringify(newPost));
            localStorage.setItem('comments', JSON.stringify(newComment));

            setParagraph('')
            setTitle('')
            setAuthorP('')
            navigate("/");
        }
    }

    return (
        <>
         <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', margin: '25px' }}>
            <input type="text" value={authorP} onChange={e => setAuthorP(e.target.value)} placeholder='Author' style={{ borderRadius: '5px' }} />
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' style={{ borderRadius: '5px' }} />
      
            <textarea
              cols="30"
              rows="10"
              onChange={e => setParagraph(e.target.value)}
              value={paragraph}
              placeholder='Paragraph'
              style={{ borderRadius: '5px' }}
            />
            <button className='boton-estilo' type="submit">Create</button>

            {input.title === '' && (<p>Obligatorio: Complete el titulo</p>)}
            {input.paragraph === '' && (<p>Obligatorio: Complete el texto</p>)}
            </form>
        </>
    )
}
export default CreatePost
