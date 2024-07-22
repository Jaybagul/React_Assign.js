import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const intialstate = {
    image: "",
    price: "",
    description: "",
    title: ""
}
const Singlepage = () => {
    const [singledata, setSingledata] = useState(intialstate)

    let params = useParams()
    console.log(params.id)

    const getdescdata = () => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then((res) => {
                setSingledata(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }
    const { image, price, description, title } = singledata

    useEffect(() => {
        getdescdata()
    }, [])
    return (
        <>

            <div className="conatiner pt-5 mt-5">

                <div className="row me-5">
                    <div className="col-3" style={{ width: "25rem", margin: "auto" }}>
                        <img src={image} className='d-block w-100 img-fluid' alt="" />
                    </div>
                    <div className="col-4 m-0 p-0" style={{ margin: "0%" }}>
                        <div className="card-body mt-5 p-0 ">
                            <h5 className="card-title" style={{ fontSize: "40px", width: "70%" }}>{title}</h5>
                            <p className="card-text" style={{ width: "70%", fontFamily: "poppins" }}>{description}</p>
                            <p className="card-text" style=
                                {{ fontSize: "20px" }}><strong>₹{price}</strong></p>
                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Singlepage;
