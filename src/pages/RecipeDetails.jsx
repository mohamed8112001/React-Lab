<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { recipesData } from "../components/utils/data";
=======
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { recipesData } from '../components/utils/data'; 
>>>>>>> 46d42822e5ee3844223792f51804b82c2658f2b0

export default function RecipeDetails() {
  const [recipe, setRecipe] = useState(null);
  const params = useParams();

  useEffect(() => {
    const foundRecipe = recipesData.find(
      (item) => item.id === parseInt(params.id)
    );
    setRecipe(foundRecipe);
  }, [params.id]);

  if (!recipe) return null;

  return (
    <div className="container my-5">
<<<<<<< HEAD
      <div className="card shadow-lg border-0 p-4">
        <div className="row g-4">
          <div className="col-md-5">
            <img
              src={recipe.image}
              className="img-fluid rounded"
              alt={recipe.name}
              style={{ maxHeight: "350px", objectFit: "cover", width: "100%" }}
            />
          </div>
          <div className="col-md-7">
            <h2 className="mb-3">{recipe.name}</h2>
            <div className="mb-2">
              <strong>Cuisine:</strong> {recipe.cuisine}
            </div>
            <div className="mb-2">
              <strong>Difficulty:</strong> {recipe.difficulty}
            </div>
            <div className="mb-2">
              <strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins
            </div>
            <div className="mb-2">
              <strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins
            </div>
            <div className="mb-2">
              <strong>Servings:</strong> {recipe.servings}
            </div>
            <div className="mb-2">
              <strong>Calories/Serving:</strong> {recipe.caloriesPerServing}{" "}
              kcal
            </div>
            <div className="mb-2">
              <strong>Rating:</strong>  {recipe.rating} ({recipe.reviewCount}{" "}
              reviews)
            </div>
          </div>
        </div>
=======
      <div className="card shadow-lg border-0">
        {/* <img
          src={recipe.image}
          className="card-img-top d-block"
          alt={recipe.name}
        /> */}
        <div className="card-body">
          <h2 className="card-title">{recipe.name}</h2>
          <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
          <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
          <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
          <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins</p>
          <p><strong>Servings:</strong> {recipe.servings}</p>
          <p><strong>Calories/Serving:</strong> {recipe.caloriesPerServing} kcal</p>
          <p><strong>Rating:</strong> {recipe.rating}  ({recipe.reviewCount} reviews)</p>
>>>>>>> 46d42822e5ee3844223792f51804b82c2658f2b0

        <hr className="my-4" />

        <div className="row">
          <div className="col-md-6">
            <h4> Ingredients</h4>
            <ul className="list-group list-group-flush">
              {recipe.ingredients.map((item, index) => (
                <li className="list-group-item" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h4> Instructions</h4>
            <ol className="list-group list-group-numbered">
              {recipe.instructions.map((step, index) => (
                <li className="list-group-item" key={index}>
                  {step}
                </li>
              ))}
            </ol>
            <Link to="/recipe">
              <button className="btn btn-outline-primary w-100">
                 Back to Recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
