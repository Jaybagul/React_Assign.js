import axios from 'axios';
import React, { useState } from 'react';

const intialvalue = {
  image: '',
  title: '',
  category: '',
  price: '',
  description: ''

}

const AddProduct = () => {
  const [formdata, setformdata] = useState(intialvalue)


  const handlechange = (e) => {

    setformdata({ ...formdata, [e.target.name]: e.target.value })

  }

  const { image, title, category, price, description } = formdata

  const handlesubmit = (e) => {
    e.preventDefault()

    axios.post("http://localhost:3002/posts", formdata).
      then((res) =>
        console.log(res)).catch((Error) => console.log(Error))

  }


  return (
    <>
      <div className="container ">
        <div className="row justify-content-center">
          <h4>Add Pitch</h4>
          <form className="form-group" onSubmit={(e) => handlesubmit(e)}>
            <input className="u-full-width" type="text" name='image' value={image} placeholder='image' onChange={(e) => handlechange(e)} /> <br />
            <input className="u-full-width" type="text" name='title' value={title} placeholder='title' onChange={(e) => handlechange(e)} /><br />
            <select name="category" value={category} className="u-full-width" onChange={(e) => handlechange(e)}>
              <option value="">select your category</option>
              <option value="">mens clothing</option>
              <option value="">womens clothing</option>
              <option value="">jewllery</option>
              <option value="">electronics</option>
            </select>
            <input className="u-full-width" type="text" name='price' value={price} placeholder='price' onChange={(e) => handlechange(e)} /><br />
            <input className="u-full-width" type="text" name="description" value={description} placeholder='description' onChange={(e) => handlechange(e)} />
            <br />  <input type="submit" className="u-full-width button button-primary" />
          </form>

          <hr />
        </div>
      </div>

      <hr />
    </>
  );
}

export default AddProduct;
