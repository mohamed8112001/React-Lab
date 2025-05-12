import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product, onDelete, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={product.thumbnail }
        className="card-img-top"
        alt={product.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <Link to={`/product-details/${product.id}`} className="text-decoration-none text-dark mb-2">
          <h5 className="card-title">{product.title}</h5>
        </Link>
        <p className="card-text text-muted flex-grow-1">
          {product.description.length > 100
            ? product.description.slice(0, 100) + "..."
            : product.description}
        </p>
        <p className="fw-bold text-success"> ${product.price}</p>
      </div>
      <div className="card-footer bg-white border-0 d-flex justify-content-between flex-wrap gap-2">
        <button className="btn btn-outline-danger w-100" onClick={() => onDelete(product.id)}>
           Delete
        </button>
        <button className="btn btn-outline-success w-100" onClick={() => onAddToCart(product)}>
           Add to Cart
        </button>
        <button className="btn btn-outline-warning w-100" onClick={() => onRemoveFromCart(product)}>
           Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
