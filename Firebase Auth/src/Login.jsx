import React, { useState } from 'react';
import GoogleButton from 'react-google-button';
import "./Login.css";
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from './service/Firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('User signed in with Google:', result.user);
        navigate('/dashboard'); // Redirect to a protected route
      })
      .catch((error) => {
        setError('Error during Google sign-in: ' + error.message);
      });
  };

  const handleEmailLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log('User signed in with email:', result.user);
        navigate('/dashboard'); // Redirect to a protected route
      })
      .catch((error) => {
        setError('Error during email sign-in: ' + error.message);
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back!</h2>
        <p>Please log in to your account</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />

        <button className="login-button" onClick={handleEmailLogin}>
          Login with Email
        </button>
        {error && <p className="error-message">{error}</p>}
        <p style={{ marginTop: "5%" }}>Don't have an account? <a href="/signup">Sign up here</a></p>
        <GoogleButton style={{ marginTop: '8%', width: '340px', margin: 'auto', borderRadius: '10px' }} onClick={handleGoogleLogin} />
      </div>
    </div>
  );
};

export default Login;
