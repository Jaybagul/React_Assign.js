import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './../Login';
import Dashboard from '../Dashboard';
import Privatepage from './../Privatepage';

const All = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/product" element={<Privatepage><Dashboard /></Privatepage>} />
        </Routes>
    );
}

export default All;
