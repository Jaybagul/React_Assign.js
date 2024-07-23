import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditProduct = () => {
  const [formdata, setFormdata] = useState({})
  const { id } = useParams()

  const handlechange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handlesubmit = (e) => {
    e.preventDefault()

    axios.put(`http://localhost:3002/posts/${id}`, formdata)
      .then((res) => alert("data updated!"))
      .catch((err) => console.log(err))
  }

  const getdata = () => {
    axios.get(`http://localhost:3002/posts/${id}`)
      .then((res) => setFormdata(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getdata()
  }, [])

  const { image, title, category, price, description } = formdata

  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row">
          <h4>Update Product</h4>
          <form className='text-center' onSubmit={(e) => handlesubmit(e)}>
            <input name='image' value={image} onChange={handlechange} type="text" placeholder="Image" /><br />
            <input name='title' value={title} onChange={handlechange} type="text" placeholder="Title" /><br />
            <select name='category' value={category} onChange={handlechange}>
              <option>men's clothing</option>
              <option>jewelry</option>
              <option>electronics</option>
              <option>women's clothing</option>
            </select><br />
            <input name='price' value={price} onChange={handlechange} type="text" placeholder="Price" /><br />
            <input name='description' value={description} onChange={handlechange} type="text" placeholder="Description" /><br />
            <input type="submit" value="Update" />
          </form>
        </div>
      </div>
      <hr />

       
    </>
  )
}

export default EditProduct
