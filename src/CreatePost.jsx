import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const CreatePost = () =>{
    const [title, setTitle] = useState('')
    const [paragraph, setParagraph] = useState('')
    const [authorP, setAuthorP] = useState('')
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        let jsonPost = JSON.parse(localStorage.getItem('posts'))
        let jsonComments = JSON.parse(localStorage.getItem('comments'))

        if (jsonPost) setPost(jsonPost)
        if (jsonComments) setComments(jsonComments)

    },[])

    const handleSubmit = (e) =>{
        e.preventDefault()
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

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={authorP} onChange={e => setAuthorP(e.target.value)} placeholder='Author'/>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder='Title'/>
        
            <textarea
              cols="30"
              rows="10"
              onChange={e => setParagraph(e.target.value)}
              value={paragraph}
              placeholder='Paragraph'
            />


            <button type="submit">Create</button>
        </form>
        </>
    )
}
export default CreatePost
