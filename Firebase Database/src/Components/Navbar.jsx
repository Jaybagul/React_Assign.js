import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid" >

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" style={{ justifyContent: "space-between", backgroundColor: '', width: "98%" }}>
                            <div className="div pt-2">
                                <Link to={"/"} style={{ textDecoration: "none" }}>      <a className="navbar-brand" href="#">Navbar</a>
                                </Link></div>
                            <div>
                                <ul className="navbar-nav" >
                                    <Link to={"/"} style={{ textDecoration: 'none' }}>      <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Login</a>
                                    </li></Link>
                                    <Link to={"/product"} style={{ textDecoration: 'none' }}>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Product</a>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navbar;
