import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
    return (
        <div className="login ">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input className="loginInput container" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input className="loginInput container" type="password" placeholder="Enter your password..." />
                <button className="loginButton container">Login</button>
            </form>
            <button className="loginRegisterButton ">
                <Link to='/register'>Register</Link>
            </button>
        </div>
    );
};

export default Login;