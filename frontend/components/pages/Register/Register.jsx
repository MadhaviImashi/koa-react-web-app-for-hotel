import React  from 'react'
import {useState, useEffect} from "react";
import {useNavigate} from "react-router";
import { signup } from '../../api/Auth';
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
        let name = event.target.name;
        if(!event.target.name) {
            name = 'type';
        }
        const value = event.target.value;
        setRegistrationData(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('new user data', registeredData);
        //send login data to the backend
        signup('/api/auth/signup', registeredData)
            .then((res) => {
                console.log('result', res);
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
                    required
                />
            </label><br />
            <label>select user type:
                <select name="type" value={registeredData.type} onChange={handleChange}>
                    <option defaultValue={'student'} value="student">student</option>
                    <option value="teacher">teacher</option>
                    <option value="admin">admin</option>
                </select>
            </label><br />
            <label>Enter your email:
                <input
                    type="email" //validation
                    name="email"
                    value={registeredData.email || ""}
                    onChange={handleChange}
                    required
                />
            </label><br />
            <label>Enter your password:
                <input
                    type="number"
                    name="password"
                    value={registeredData.password || ""}
                    onChange={handleChange}
                    required
                />
            </label><br />
            <input type="submit" />
        </form>
    );
}

export default Register;
