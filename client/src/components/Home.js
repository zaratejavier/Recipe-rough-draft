import React, { useState, useEffect } from "react"
import axios from "axios"
import RecipeForm from "./RecipeForm"
import Recipe from "./Recipe"

const Home = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes()
  }, [])
  
  const getRecipes = () => {
    axios.get('/api/recipes')
      .then(res => {
        console.log(res.data)
        setRecipes(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const renderRecipes = () => {
    return recipes.map(recipe => (
      <Recipe
        key={recipe.id}
        {...recipe}
      />
    ))
  }
  
  // addRecipe function

  // editRecipe Function

  // deleteRecipe function
 
  return(
    <div>
      <h1>Welcome to InstaCook</h1>
      <RecipeForm/>
      {renderRecipes()}

  </div>
  )
}

export default Home