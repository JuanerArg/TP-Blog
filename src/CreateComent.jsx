import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Coments = () => {
    const [coments, setComents] = useState([]);
    const [autor, setAutor] = useState('');
    const [parrafo, setParrafo] = useState('');

    useEffect(() => {
        // Traemos del localStorage el valor asociado a la clave
        const jsonValue = localStorage.getItem('comentarios');

        if (jsonValue) {
            // Parseamos el valor si existe y lo asignamos
            const parsedValue = JSON.parse(jsonValue);
            setComents(parsedValue);
            console.log(parsedValue);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        let input = { parrafo, autor };
        let newComents = [...coments, input];
        setComents(newComents);
        localStorage.setItem('comentarios', JSON.stringify(newComents));
        console.log(newComents);
        setParrafo('');
        setAutor('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={autor} onChange={e => setAutor(e.target.value)} />
                <textarea
                    cols="30"
                    rows="10"
                    onChange={e => setParrafo(e.target.value)}
                    value={parrafo}
                />
                <button type="submit">Create</button>
            </form>
            <br></br>
            {coments.map((coment, index) => (
                <div key={index}>
                    <h2>{coment.autor}</h2>
                    <Markdown remarkPlugins={[remarkGfm]}>{coment.parrafo}</Markdown>
                </div>
            ))}
            <br></br>
        </>
    );
}

export default Coments;
