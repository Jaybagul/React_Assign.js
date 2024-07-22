import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate=useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    let user = {
      email,
      password
    };
    console.log(user);

    axios.post("https://reqres.in/api/login", user)
      .then((res) => {
        alert("login successful 😍")
        navigate('/');

        let tokenfromdata = (res.data.token)
        localStorage.setItem("token", tokenfromdata)
        navigate('/');

        setEmail(""),
        setPassword("")

      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 login-container mt-5">

            <div className="login-card mt-2">
              <form onSubmit={(e) => handlesubmit(e)}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="whatsappUpdates"
                  />
                  <label className="form-check-label" htmlFor="whatsappUpdates">
                    Get updates on WhatsApp
                  </label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign In</button>
              </form>
              <div className="mt-3 text-center">
                <p>New member? <a href="#">Create an Account</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
