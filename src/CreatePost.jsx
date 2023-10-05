import { useState, useEffect } from 'react'

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [paragraph, setParagraph] = useState('')
    const [author, setAuthor] = useState('')
    const [posts, setPost] = useState([])

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

    const handleSubmit = (e) => {
        e.preventDefault()
        let input = { title: title, paragraph: paragraph, author: author };
        let newPost = [...posts, input];
        setPost(newPost);
        localStorage.setItem('posts', JSON.stringify(newPost));
        console.log(newPost)
        setParagraph('')
        setTitle('')
        setAuthor('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
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
