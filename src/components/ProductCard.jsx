import React from "react";

const ProductCard = ({ product, onDelete, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.thumbnail || "https://via.placeholder.com/300x200?text=No+Image"}
        className="card-img-top"
        alt={product.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-muted flex-grow-1">{product.description}</p>
        <p className="fw-bold mb-1">💵 Price: ${product.price}</p>
      </div>
      <div className="card-footer d-flex justify-content-between gap-2">
        <button className="btn btn-danger" onClick={() => onDelete(product.id)}>
          Delete
        </button>
        <button className="btn btn-success" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
        <button
          className="btn btn-warning"
          onClick={() => onRemoveFromCart(product)}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
