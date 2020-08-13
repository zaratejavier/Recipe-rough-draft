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
  
  // we pass the recipe object that we get from our form
  // we send it to our state through our setRecipes, 
  // we put it at the begining of the array and then spread the rest of our books after that
  const addRecipe = (recipe) => setRecipes([recipe, ...recipes]) 
  debugger

  // editRecipe Function

  // deleteRecipe function
 
  return(
    <div>
      <h1>Welcome to InstaCook</h1>
      {/* we pass the function addRecipe to our RecipeForm */}
      <RecipeForm addRecipe={addRecipe} hello={"hey there"}/>
      {renderRecipes()}

  </div>
  )
}

export default Home