import React, { useState, useEffect } from "react"
import axios from "axios"

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
      <h1>Title: {recipe.title}</h1>
    ))
 }
 
  return(
  <div>
      <h1>devise auth app</h1>
      {renderRecipes()}
  </div>
  )
}

export default Home