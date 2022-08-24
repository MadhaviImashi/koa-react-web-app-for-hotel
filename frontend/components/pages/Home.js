import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
    return (
        <div className="center">
            <h1>Welcome!</h1>
            <Link to="/signup">
                <button>Sign Up</button>
            </Link>
            <br></br>
            <Link to="/login">
                <button>Login</button>
            </Link>
        </div>
    )
}

export default Home;