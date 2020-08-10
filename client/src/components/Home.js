import React, { useState, useEffect } from "react"
import axios from "axios"
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
 
  return(
  <div>
      {renderRecipes()}
  </div>
  )
}

export default Home