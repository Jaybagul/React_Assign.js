import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const getProducts = () => {
    axios.get(`https://fakestoreapi.com/products?limit=9&page=${page}`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        alert("Error: " + err.message);
      });
  };

  useEffect(() => {
    getProducts();
  }, [page]);

  const truncateText = (text, length) => (text.length > length ? text.substring(0, length) + '...' : text);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container mt-5" style={{ width: "90%", margin: 'auto' }}>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <Link to={`/singlepage/${product.id}`}>
                  <div className="card" style={{ width: "20rem" }}>
                    <img src={product.image} className="card-img-top d-block w-100" alt={product.title} />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{truncateText(product.description, 20)}</p>
                      <p className="card-text"><strong>${product.price}</strong></p>
                      <a href="#" className="btn btn-primary">View Details</a>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button className='btn btn-primary m-2' onClick={handlePrevPage} disabled={page <= 1}>Prev</button>{page}
        <button className='btn btn-primary m-2' onClick={handleNextPage}>Next</button>
      </div>
    </>
  );
}

export default Products;
