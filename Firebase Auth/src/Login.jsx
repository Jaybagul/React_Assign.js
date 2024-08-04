import React from 'react';
import GoogleButton from 'react-google-button';
import "./Login.css";
import { auth, provider } from './service/Firebase';
import { signInWithPopup } from 'firebase/auth';


const Login = () => {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log('User signed in:', res.user);
      })
      .catch((err) => {
        console.error('Error during sign in:', err.message);
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back!</h2>
        <p>Please log in to your account</p>

        <GoogleButton style={{ marginLeft: "16%" }} onClick={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
