import React, { useState, useEffect } from 'react';
import './post.css';

const Fetchdata = () => {
    const [data, setData] = useState([]);
    const [counts, setCounts] = useState(1);

    useEffect(() => {
        FetchMe();
    }, [counts]);

    const FetchMe = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${counts}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div>
                {data.length > 0 && (
                    <div>
                        {data.map((item) => (
                            <div className="container" key={item.id}>
                                <div className="row">
                                    <div className="card mb-2 mt-5" style={{ width: '30rem', margin: 'auto', borderRadius: '15px' }}>
                                        <div className="card-body">
                                            <h5 className='card-text text-center' style={{ color: 'red' }}>{item.id}</h5>
                                            <h5 className="card-title text-center" style={{ textTransform: 'capitalize', fontFamily: "poppins", fontWeight: '600' }}>{item.title}</h5>
                                            <p className="card-text text-center" style={{ fontSize: '13px', fontFamily: 'poppins', color: 'grey' }}>{item.body}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="text-center mt-3">
                            <button disabled={counts === 1} className='btn btn-primary' onClick={() => setCounts(counts - 1)}>Prev</button>
                            <span className='p-3' style={{ color: "white" }}>{counts}</span>
                            <button className='btn btn-primary' onClick={() => setCounts(counts + 1)}>Next</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Fetchdata;
