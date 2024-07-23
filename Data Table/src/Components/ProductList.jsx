import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import { Link } from 'react-router-dom'

const ProductList = () => {

  const [value, setValue] = useState([])
  const [category, setCategory] = useState('electronics')

  const setCategorydata = (e) => {
    setCategory(e.target.value)
  }

  const Fetchdata = () => {
    axios.get(`http://localhost:3002/posts?category=${category}`)
      .then((res) => {
        setValue(res.data)
      })
      .catch((Err) => console.log(Err))
  }

  useEffect(() => {
    Fetchdata()
  }, [category])  // Added category to the dependency array

  return (
    <>
      <div className="container-fluid mt-3 pt-5 ">
        <div className="row m-0">
          <div className="col-3">
            <AddProduct />

          </div>
          <div className="col-9">
            <div>
              <select name="" id="" onChange={setCategorydata}>
                <option value="">Select your category</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="jewelry">Jewelry</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's clothing</option>
              </select>
            </div>
            <div className="row pt-5">
              {value.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                  <div className="card" style={{ width: "20rem" }}>
                    <img src={product.image} className="card-img-top d-block w-100" alt={product.title} />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <h6>{product.category}</h6>
                      <p className="card-text"><strong>${product.price}</strong></p>
                      <button className='btn text-center'><Link to={`/editproduct/${product.id}`}>Edit</Link></button>
                      <button className='btn text-center'>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList
