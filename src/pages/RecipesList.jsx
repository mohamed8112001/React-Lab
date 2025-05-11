import { useEffect, useState } from "react"
import { recipesData } from "../components/utils/data"
import RecipeCard from "../components/RecipeCard"
import Header from "../components/header/header.component"
import axios from 'axios';
import Axios from "../Apis/config";

const RecipesList = () => {
  const [recipes, setRecipes] = useState(recipesData)

  useEffect(()=>{
    Axios.get(`/recipes`,)
    .then((response)=> setRecipes(response.data.recipes))
    .catch((err)=> console.log(err))
  },[])
    const handleDelete =(id)=>{
        console.log(id)
        const filterItem = recipes.filter(recipe => recipe.id !== id)
        setRecipes(filterItem)
    }
  return (
    <>
    <Header title={'Recipes'}/>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {recipes.map((recipe) => (
          <div className="col" key={recipe.id}>
            {/* pass recipe from parent to child */}
           <RecipeCard recipe={recipe} onDelete={(id) =>handleDelete(id)} />
          </div>
        ))}
      </div>
    </>
  )
}

export default RecipesList
