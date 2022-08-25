import React  from 'react'
import {useState, useEffect} from "react";
import {useNavigate} from "react-router";
import {login, signup} from '../../../../backend/api/auth';
import {Link} from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [isLoggedIn] = React.useState(localStorage.getItem("token"));
    const [registeredData, setRegistrationData] = useState({});

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/")
        }
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRegistrationData(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('new user data', registeredData);
        //send login data to the backend
        login('/api/auth/signup', registeredData)
            .then((res) => {
                console.log('ress', res.data);
                navigate('/login');
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your Name:
                <input
                    type="text"
                    name="name"
                    value={registeredData.name || ""}
                    onChange={handleChange}
                />
            </label>
            <label>select user type:
                <select name="type" value={registeredData.type} onChange={handleChange}>
                    <option value="student">student</option>
                    <option value="teacher">teacher</option>
                    <option value="admin">admin</option>
                </select>
            </label>
            <label>Enter your email:
                <input
                    type="text"
                    name="email"
                    value={registeredData.email || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your password:
                <input
                    type="number"
                    name="password"
                    value={registeredData.password || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    );
}

export default Register;
