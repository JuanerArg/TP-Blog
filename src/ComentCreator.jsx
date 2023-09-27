import { useState, useEffect } from "react"
const ComentCreator = () => {
    const [Comentario, setComentario] = useState([]);
    const [Autor, setAutor] = useState("");
    const [Parrafo, setParrafo] = useState("");

    useEffect(() => {
        const json = localStorage.getItem("Comentario");
        if (json) {
            const newComentario = JSON.parse(json);
            setComentario(newComentario);
        }
    }, [])

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
            <ul>
                {Comentario.map((comentario, i) => {
                    return (
                        <li key={i}>
                            <h3>{comentario.autor}</h3>
                            <p>{comentario.parrafo}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default ComentCreator