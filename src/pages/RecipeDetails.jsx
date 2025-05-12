import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { recipesData } from '../components/utils/data'; 

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

          <h5>Ingredients:</h5>
          <ul>
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h5>Instructions:</h5>
          <ol>
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
