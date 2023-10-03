import {useState, useEffect} from 'react'

const CreatePost = () =>{
    const [title, setTitle] = useState('')
    const [paragraph, setParagraph] = useState('')
    const [post, setPost] = useState([])

    useEffect(() => {
        let jsonPost = JSON.parse(localStorage.getItem('posts'))
        if (jsonPost) setPost(jsonPost)
    },[])

    const handleSubmit = (e) =>{
        e.preventDefault()
        let input = { title: title, paragraph: paragraph };
        let newPost = [...post, input];
        setPost(newPost);
        localStorage.setItem('posts', JSON.stringify(newPost));
        console.log(newPost)
        setParagraph('')
        setTitle('')
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <textarea
              cols="30"
              rows="10"
              onChange={e => setParagraph(e.target.value)}
              value={paragraph}
            />


            <button type="submit">Create</button>
        </form>
        </>
    )
}
export default CreatePost
