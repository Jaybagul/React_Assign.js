import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AddProduct = () => {

  const [value, setValue] = useState([])

  const Fetchdata = () => {
    axios.get("http://localhost:3000/posts")
      .then((res) => {
        setValue(res.data)
      })
      .catch((Err) => console.log(Err))
  }

  useEffect(() => {
    Fetchdata()
  }, [])

  return (
    <>
      <div className="container mt-5" style={{ width: "90%", margin: 'auto' }}>
        <div className="row">
          {value.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">

              <div className="card" style={{ width: "20rem" }}>
                <img src={product.image} className="card-img-top d-block w-100" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description.substring(0, 95)}</p>
                  <p className="card-text"><strong>${product.price}</strong></p>
                  <a href="#" className="btn btn-primary">View Details</a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AddProduct