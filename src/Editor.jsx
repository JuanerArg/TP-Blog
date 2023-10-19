import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import './Ap1.css'

const Editor = () => {
    const [title, setTitle] = useState('');
    const [paragraph, setParagraph] = useState('');
    const [authorP, setAuthorP] = useState('');
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        let jsonPost = JSON.parse(localStorage.getItem("posts")) || [];
        setPosts(jsonPost);
    }, []);

    useEffect(() => {
        if (id && !isNaN(parseInt(id))) {
            let post = posts.find((elem, i) => i === parseInt(id));

            if (post) {
                // Set the initial values from the post data
                setTitle(post.title);
                setAuthorP(post.author);
                setParagraph(post.paragraph);
            }
        }
    }, [id, posts]);

    const handleCreatePost = () => {
        const input = { author: authorP, title: title, paragraph: paragraph };
        const newPosts = [...posts, input];
        setPosts(newPosts);
        localStorage.setItem('posts', JSON.stringify(newPosts));
        setParagraph('');
        setTitle('');
        setAuthorP('');
        navigate("/");
    }

    const handleEditPost = () => {
        if (id && !isNaN(parseInt(id))) {
            const updatedPosts = [...posts];
            updatedPosts[parseInt(id)] = {
                author: authorP,
                title: title,
                paragraph: paragraph,
            };
            setPosts(updatedPosts);
            localStorage.setItem('posts', JSON.stringify(updatedPosts));
            navigate("/");
        } else {
            console.log("No se proporcionó un ID válido para editar.");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            handleEditPost();
        } else {
            handleCreatePost();
        }
    }

    return (
        <div className="container">
          <form onSubmit={handleSubmit} className="form-container">
            <input
              className="input-field"
              type="text"
              value={authorP}
              onChange={(e) => setAuthorP(e.target.value)}
              placeholder="Author"
            />
            <input
              className="input-field"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
      
            <textarea
              className="input-field"
              cols="30"
              rows="10"
              onChange={(e) => setParagraph(e.target.value)}
              value={paragraph}
              placeholder="Paragraph"
            />
      
            <button type="submit" className="submit-button">
              {id ? "Update" : "Create"}
            </button>
          </form>
        </div>
    );
}

export default Editor;