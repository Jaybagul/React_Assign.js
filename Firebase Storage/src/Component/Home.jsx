import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section text-center text-white">
        <h1 className="display-3">Welcome to Our Clothing Store</h1>
        <p className="lead">Discover the latest trends in fashion. Shop now and elevate your style!</p>
        <a href="/product" className="btn btn-primary btn-lg">Shop Now</a>
      </div>
      <div className="categories-section mt-5">
        <h2 className="text-center mb-4">Shop by Category</h2>
        <div className="row mt-5 mb-5">
          <div className="col-md-3">
            <div className="category-card">

              <h3>Men's Clothing</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="category-card">

              <h3>Women's Clothing</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="category-card">

              <h3>Jewelery</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="category-card">

              <h3>Electronics</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
