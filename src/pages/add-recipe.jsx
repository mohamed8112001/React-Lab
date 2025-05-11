import React, { useState } from 'react';

export default function AddRecipe() {
  const [recipeForm, setRecipeForm] = useState({
    recipeName: "",
    recipeDescription: ""
  });

  const [recipeFormError, setRecipeFormError] = useState({
    recipeNameError: null,
    recipeDescriptionError: null
  });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;

    setRecipeForm({
      ...recipeForm,
      [name]: value
    });

    if (name === 'recipeName') {
      setRecipeFormError({
        ...recipeFormError,
        recipeNameError:
          value.length === 0
            ? 'Required'
            : value.length < 3
            ? 'Must be more than 3 characters'
            : null
      });
    }

    if (name === 'recipeDescription') {
      setRecipeFormError({
        ...recipeFormError,
        recipeDescriptionError:
          value.length === 0 ? 'Required'  : value.length < 3
          ? 'Must be more than 3 characters'
          : null
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recipeForm);

    setRecipeForm({
      recipeName: "",
      recipeDescription: ""
    });

    setRecipeFormError({
      recipeNameError: null,
      recipeDescriptionError: null
    });
  };

  return (
    <div className='container mb-3'>
      <h2>Add Recipe Form</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="recipeName"  className="label-control" >Recipe Name</label>
          <input
            type="text"
           
            className={`form-control ${recipeFormError.recipeNameError && "border-danger"} `}
            id="recipeName"
            name="recipeName"
            value={recipeForm.recipeName}
            onChange={handleFieldChange}
          />
          {recipeFormError.recipeNameError && (
            <div id="nameHelp" className='form-text text-danger'>
              {recipeFormError.recipeNameError}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="recipeDescription" className="form-label">Description</label>
          <textarea
            // className="form-control"
            className={`form-control ${recipeFormError.recipeDescriptionError && "border-danger"} `}

            id="recipeDescription"
            name="recipeDescription"
            rows={5}git init
            value={recipeForm.recipeDescription}
            onChange={handleFieldChange}
          />
          {recipeFormError.recipeDescriptionError && (
            <div className='form-text text-danger'>
              {recipeFormError.recipeDescriptionError}
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
