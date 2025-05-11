import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from '../Apis/config';
export default function RecipeDetails() {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null)

  // store the key in url 
  const params = useParams();

  console.log(params)

  useEffect(() => {

    Axios.get(`/recipes/${params.id}`)
      .then((response) => setRecipe(response.data))
      .catch((err) => {
        if(err.response.status === 404){
          navigate('/')
        }
      })
  }, [params.id])
  return (
    <div>
      <h1>Hello from RecipeDetails</h1>
      {recipe ?.name}
     
    </div>
  )
}


