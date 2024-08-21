import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg" style={{

      backgroundSize: "cover",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)"
    }}>
      <div className="container">
        <NavLink className="navbar-brand text-black" to="/">Clothes</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" style={({ isActive }) => ({
                color: isActive ? 'white' : '#C0C0C0',
                fontSize: isActive ? "20px" : "16px",
                fontWeight: isActive ? "bold" : "normal",
                padding: "10px 15px",
                textTransform: "uppercase",
                borderRadius: "8px",
                transition: "all 0.3s ease-in-out",
                color: "black"
              })} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={({ isActive }) => ({
                color: isActive ? 'white' : '#C0C0C0',
                fontSize: isActive ? "20px" : "16px",
                fontWeight: isActive ? "bold" : "normal",
                padding: "10px 15px",
                textTransform: "uppercase",
                borderRadius: "8px",
                transition: "all 0.3s ease-in-out",
                color: "black"
              })} to="/product">Product</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={({ isActive }) => ({
                color: isActive ? 'white' : '#C0C0C0',
                fontSize: isActive ? "20px" : "16px",
                fontWeight: isActive ? "bold" : "normal",
                padding: "10px 15px",
                textTransform: "uppercase",
                borderRadius: "8px",
                transition: "all 0.3s ease-in-out",
                color: "black"
              })} to="/addproduct">Add Product</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={({ isActive }) => ({
                color: isActive ? 'white' : '#C0C0C0',
                fontSize: isActive ? "18px" : "16px",
                padding: "8px 15px",
                textTransform: "uppercase",
                borderRadius: "8px",
                transition: "all 0.3s ease-in-out",
                color: "black"
              })} to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
