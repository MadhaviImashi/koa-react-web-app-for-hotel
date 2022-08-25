import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Teachers = () => {
    const navigate = useNavigate();

    const logoutUser = () => {
        localStorage.clear()
        navigate('/login');
    }
    return (
        <div className="center">
            <h1>Welcome Teachers!</h1>
            <button onClick={logoutUser}>Logout</button>
        </div>
    )
}

export default Teachers;