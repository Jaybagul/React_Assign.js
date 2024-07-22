// Components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link style={{ textDecoration: 'none' }} to={"/"}>
                                    <a class="nav-link active" aria-current="page" href="#">Home</a> </Link>
                            </li>
                            <li class="nav-item">
                                <Link style={{ textDecoration: 'none' }} to={"/login"}>
                                    <a class="nav-link active" aria-current="page" href="#">Login</a> </Link>
                            </li>
                            <li class="nav-item">
                                <Link style={{ textDecoration: 'none' }} to={"about"}>        <a class="nav-link" href="#">About</a> </Link>
                            </li>
                            <li class="nav-item">
                                <Link style={{ textDecoration: 'none' }} to={"products"}>
                                    <a class="nav-link" href="#">Product</a>
                                </Link>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            Navigator
                        </span>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
