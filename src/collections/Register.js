import React, { useState } from "react";
import './styles/Login.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Password matching validation
    if (password !== repassword) {
      return setMessage('Passwords do not match');
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/register', {
        email,
        password,
        repassword
      });
      setMessage(response.data.message);
      navigate('/login');
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <form onSubmit={handleRegister} className="login-div p-5 login-form text-center rounded-4">
        <h1 className="text-white m-3 fw-bolder">Register</h1>
        <div>
          <input
            type="text"
            className=" my-2 div-input p-2 rounded-2 border-0"
            placeholder="Email/Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            className=" my-2 div-input p-2 rounded-2 border-0"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="password"
            className=" my-2 div-input p-2 rounded-2 border-0"
            placeholder="Re-enter Password"
            value={repassword}
            onChange={(e) => setRePassword(e.target.value)}
            required
          />
        </div>

        <p className="my-2">Already registered?&nbsp;
          <Link to="/Login" className="text-decoration-none">Login</Link>
        </p>
        <button
          type="submit"
          className="div-input p-2 rounded-2 mb-5 bg-primary border-0 text-white"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
