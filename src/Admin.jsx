import { useState } from "react";

const Admin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const contraseña = "1234";
    const [inputContraseña, setinputContraseña] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(inputContraseña);
        if (contraseña === inputContraseña) {
            setIsAdmin(true);
            localStorage.setItem("isAdmin", JSON.stringify(true));
        } else { alert("Error"); }
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