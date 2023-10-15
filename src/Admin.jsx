import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Admin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const contraseña = "1234";
    const [inputContraseña, setinputContraseña] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(inputContraseña);
        if (contraseña === inputContraseña) {
            setIsAdmin(true);
            localStorage.setItem("isAdmin", JSON.stringify(true));
        } else { alert("Error"); }
        navigate('/');
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputContraseña}
                    onChange={e => setinputContraseña(e.target.value)}
                />
            </form>
        </>
    )
}

export default Admin