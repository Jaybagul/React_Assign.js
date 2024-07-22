import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import { Products } from './Components/Products';
import Private from './Components/Private';
import Singlepage from './Components/Singlepage';

const All = () => {
    return (
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path='/singlepage/:id' element={<Singlepage />}></Route>
            <Route path="/products" element={
                <Private >
                    <Products />
                </Private>
            } />

        </Routes>
    );
};

export default All;
