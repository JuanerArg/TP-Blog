import { useState } from "react"
const PostCreator = () => {
    const [Post, setPost] = useState([]);
    const [Titulo, setTitulo] = useState("");
    const [Parrafo, setParrafo] = useState("");

    const handleTitle = (e) => {
        setTitulo(e.target.value)
    }

    const handleParagraph = (e) => {
        setParrafo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoPost = { titulo: Titulo, parrafo: Parrafo };
        setPost([...Post, nuevoPost]);
        setTitulo("");
        setParrafo("");
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={Titulo}
                    onChange={handleTitle}
                    type="text"
                    placeholder="Title"
                >
                </input>

                <input
                    value={Parrafo}
                    onChange={handleParagraph}
                    type="text"
                    placeholder="Paragraph"
                >
                </input>
                <input type="submit" value="ingresar" hidden />
            </form>
            <ul>
                {Post.map((post, i) => (
                    <li key={i}><strong>{post.titulo}</strong>{post.parrafo}</li>
                ))}
            </ul>
        </>
    )
}

export default PostCreator