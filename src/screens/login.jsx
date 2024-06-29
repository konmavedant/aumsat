import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [isActive, setIsActive] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'aumsat@gmail.com' && password === 'aumsat@123') {
            navigate('/home');
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <div className={`container ${isActive ? 'active' : ''}`} id="container">
            <div className="form-container sign-up">
                <form>
                    <h1>Create Account</h1>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form onSubmit={handleLogin}>
                    <h1>Sign In</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site's features</p>
                        <button
                            className="hidden"
                            id="login"
                            onClick={() => setIsActive(false)}
                        >
                            Sign In
                        </button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Aumsat Technologies</h1>
                        <p>Register with your personal details to use all of site's features</p>
                        <button
                            className="hidden"
                            id="register"
                            onClick={() => setIsActive(true)}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
