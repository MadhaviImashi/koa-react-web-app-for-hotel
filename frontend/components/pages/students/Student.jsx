import React from "react";
import { useNavigate } from "react-router-dom";

const Students = () => {

    const navigate = useNavigate();

    const logoutUser = () => {
        localStorage.clear()
        navigate('/login');
    }
    return (
        <div className="center">
            <h1>Welcome Students!</h1>
            <button onClick={logoutUser}>Logout</button>
        </div>
    )
}

export default Students;