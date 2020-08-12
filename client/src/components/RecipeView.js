import React, { useState, useEffect } from "react"
import Axios from "axios"

const RecipeView = (props) => {
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    Axios.get(`/api/recipes/${props.match.params.id}`)
      .then((res) => {
        setRecipe(res.data)
        console.log(res.data)
        debugger
    })
  },[])
  return (
    <h1>{recipe.title}</h1>
  )
}

export default RecipeView

// /api/recipes/:id