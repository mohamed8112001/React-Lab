import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";

const ProductCard = ({ product, onDelete }) => {
  const { id, title, description, price, rating, brand, thumbnail } = product;

  return (
    <div className="card h-100 shadow-sm">
      <img src={thumbnail} className="card-img-top" alt={title} style={{ height: "200px", objectFit: "cover" }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">{description.slice(0, 100)}...</p>
        <p className="card-text"><strong>Brand:</strong> {brand}</p>
        <p className="card-text"><strong>Rating:</strong> {rating}</p>
        <p className="card-text"><strong>Price:</strong> ${price}</p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button className="btn btn-primary">View</button>
        <button className="btn btn-danger" onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default ProductCard;
