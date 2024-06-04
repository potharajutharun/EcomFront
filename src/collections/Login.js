import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from 'axios';
import './styles/Login.css';
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:5000/login', {
        params: {
          email,
          password
        }
      });
      console.log(response.data.message); 
      navigate('/');
    } catch (error) {
      console.error(error.response.data.message); 
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <form onSubmit={handleSubmit} className="login-div p-5 login-form text-center rounded-4">
        <h1 className="text-white m-3 fw-bolder">Login</h1>
        <div>
          <input
            type="text"
            className=" my-2 div-input p-2 rounded-2 border-0"
            placeholder="Email/Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            className=" my-2 div-input p-2 rounded-2 border-0"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="my-2">Don't have an account?&nbsp;<Link to="/register" className="text-decoration-none">Register</Link></p>
        <button
          type="submit"
          className="  div-input p-2 rounded-2 mb-5 bg-primary border-0 text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
