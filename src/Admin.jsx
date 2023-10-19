import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Ap.css'

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
        <div className="container">
          <form onSubmit={handleSubmit} className="form-container">
            <input
              className="admin-input"
              type="password"
              value={inputContraseña}
              placeholder="Password"
              onChange={e => setinputContraseña(e.target.value)}
            />
          </form>
        </div>
    );
}

export default Admin