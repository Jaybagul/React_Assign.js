import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';
import EditProduct from './EditProduct';

const All = () => {
    return (
        <>
            <div>
                <div className="container-fluid bg-light">
                    <ul className='d-flex list-unstyled' style={{ justifyContent: "space-between", width: "28%", float: "right" }}>
                        <Link style={{ textDecoration: "none" }} to={"/singlepage"}> <li>ProductDetails</li></Link> <br />
                        <Link style={{ textDecoration: "none" }} to={"/list"}> <li>ProductList</li></Link>
                        <Link style={{ textDecoration: "none" }} to={"/editproduct"}> <li>ProductList</li></Link>

                    </ul>
                </div>

                <Routes>
                    <Route path="/singlepage" element={<ProductDetails />}></Route>
                    <Route path="/list" element={<ProductList />}></Route>
                    <Route path="/editproduct/:id" element={<EditProduct />}></Route>
                </Routes>
            </div>
        </>
    );
}

export default All;
