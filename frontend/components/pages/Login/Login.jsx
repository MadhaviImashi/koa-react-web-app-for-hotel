import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router";
import { login } from "../../api/Auth";
import {Link} from "react-router-dom";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const [isLoggedIn] = React.useState(localStorage.getItem("token"));

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginData(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('login data', loginData);
    //send login data to the backend
    login('/api/auth/login', loginData)
        .then((res) => {
            console.log('ress', res);
            //if login is successful, save login data in the local storage
            localStorage.setItem('type', res.data.type);
            localStorage.setItem('name', res.data.name);
            localStorage.setItem("user_id", res.data.userId);
            localStorage.setItem('email', res.data.email);
            navigate('/');
        })
  }

  return (
      <form onSubmit={handleSubmit}>
        <label>Enter your email:
          <input
              type="text"
              name="email"
              value={loginData.email || ""}
              onChange={handleChange}
          />
        </label><br />
        <label>Enter your password:
          <input
              type="number"
              name="password"
              value={loginData.password || ""}
              onChange={handleChange}
          />
        </label><br />
        <input type="submit" />
          <br/><Link to='/signup'><span>Not registered yet?</span></Link>
      </form>
  );
}
export default LoginForm;
