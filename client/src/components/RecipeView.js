import React, { useState, useEffect } from "react"
import Axios from "axios"

const RecipeView = (props) => {
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    Axios.get(`/api/recipes/${props.match.params.id}`)
      .then((res) => {
        setRecipe(res.data)
        console.log(res.data)
        // debugger
    })
  },[])
  return (
    <div>
    <h1>{recipe.title}</h1>
    <p>{recipe.ingridients}</p>
    <p>{recipe.directions}</p>
    </div>
  )
}

export default RecipeView
