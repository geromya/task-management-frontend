import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const errorParam = queryParams.get('error');
        const token = queryParams.get('token');

        if (errorParam === 'authentication_failed') {
            setError('Google Sign-In failed. Please try again.');
        }

        if (token) {
            // Store the token in localStorage
            localStorage.setItem('authToken', token);

            // Navigate to the home screen
            navigate('/home');
        }
    }, [location.search, navigate]);

    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:8081/auth/google';
    };

    return (
        <div className="login-container">
            <h2>Task Management Login</h2>
            {error && <div className="error">{error}</div>}
            <button className="google-btn" onClick={handleGoogleLogin}>
                Sign in with Google
            </button>
        </div>
    );
};

export default Login;
