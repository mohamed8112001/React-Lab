import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";

const RecipeCard = ({ recipe, onDelete }) => {
  const navigate = useNavigate();

  const handleDirect = () => {
    navigate(`/recipe-details/${recipe.id}`);
  };

  return (
    <div className="card h-100 shadow-sm">
    <img
      src={recipe.image}
      className="card-img-top object-fit-cover"
      alt={recipe.name}
      style={{ height: "200px", objectFit: "cover" }}
    />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">
        <Link to={`/recipe-details/${recipe.id}`} className="text-decoration-none text-dark">
          {recipe.name}
        </Link>
      </h5>
      <p className="card-text text-muted flex-grow-1 text-truncate" style={{ maxHeight: "80px" }}>
        {recipe.instructions ? `${recipe.instructions.slice(0, 100)}...` : "No instructions provided."}
      </p>
    </div>
    <div className="card-footer d-flex justify-content-between gap-3">
      <button 
        className="btn btn-primary w-100 py-2"
        onClick={handleDirect}
      >
        View Recipe
      </button>
      <button 
        className="btn btn-danger w-100 py-2"
        onClick={() => onDelete(recipe.id)}
      >
        Delete Recipe
      </button>
    </div>
  </div>
  );
};

export default RecipeCard;
