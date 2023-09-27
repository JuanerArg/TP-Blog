import { useState } from "react"
const ComentCreator = () => {
    const [Comentario, setComentario] = useState([]);
    const [Autor, setAutor] = useState("");
    const [Parrafo, setParrafo] = useState("");

    const handleAutor = (e) => {
        setAutor(e.target.value)
    }

    const handleParagraph = (e) => {
        setParrafo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoComentario = { autor: Autor, parrafo: Parrafo };
        setComentario([...Comentario, nuevoComentario]);
        setAutor("");
        setParrafo("");
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={Autor}
                    onChange={handleAutor}
                    type="text"
                    placeholder="Autor"
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
        </>
    )
}

export default ComentCreator