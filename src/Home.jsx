import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Hola Mundo</h1>
            <Link to="PostCreator">Crea tu Post</Link>
        </>
    );
}

export default Home