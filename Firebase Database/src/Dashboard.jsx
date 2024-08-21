import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Product.css"

const Dashboard = () => {

  const [data, setData] = useState([])

  const getdata = () => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((Err) => console.log(Err))
  }

  useEffect(() => {
    getdata()
  }, [])
  return (
    <>
      <div className="container-fluid">
        <div className="container mt-5" style={{ width: "90%", margin: 'auto' }}>
          <div className="row">
            {data.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card product-card">
                  <img src={product.image} className="card-img-top product-image" alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description.substring(0, 30)}...</p>
                    <p className="card-text"><strong>${product.price}</strong></p>
                    <a href="#" className="btn btn-primary">View Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
