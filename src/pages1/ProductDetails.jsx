// rfc for create react functional component
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from '../Apis/config';

export default function ProductDetails() {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null)

  // store the key in url 
  const params = useParams();

  console.log(params)

  useEffect(() => {

    Axios.get(`/${params.id}`)
      .then((response) => setProduct(response.data))
      .catch((err) => {
        // if(err.response.status === 404){
        //   navigate('/')
        // }
      })
  }, [params.id])
  return (
    <>
      <div className="container py-5">
      <h1 className="mb-4 text-center">🛍️ Product Details</h1>

      {product ? (
        <div className="card shadow-lg mx-auto" style={{ maxWidth: '800px' }}>
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="img-fluid rounded-start"
                style={{ height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h3 className="card-title">{product.title}</h3>
                <p className="card-text text-muted">{product.description}</p>
                <h4 className="text-success">💵 ${product.price}</h4>

                <div className="mt-4 d-flex gap-2">
                  <button className="btn btn-primary">
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => navigate(-1)}
                  >
                    ⬅️ Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-3">Loading product...</p>
        </div>
      )}
    </div>
    </>
  );
  
}


