import React, { useState, useEffect } from "react"
import Axios from "axios"

const RecipeView = (props) => {
  const [recipe, setRecipe] = useState({})
  const [ingrediantSplit, setIngrediantSplit] = useState([])
  
  console.log(ingrediantSplit)

  useEffect(() => {
    Axios.get(`/api/recipes/${props.match.params.id}`)
      .then((res) => {
        setRecipe(res.data)
        console.log(res.data)
        // console.log(res.data.ingridients.split(','))
        setIngrediantSplit(res.data.ingridients.split('\n').map(e => e.split(',')))
    })
  }, [])


  const renderIngredients = () => {
    return ingrediantSplit.map(ingredient => (
      <div key={ingredient.id}>
        <p>{ingredient}</p>
      </div>  
    ))
  }
  
  return (
    <div>
      <h1>{recipe.title}</h1>
      {/* {splitting.ingridients} */}
      {/* <p>{splitting.ingridients}</p> */}
    
      
      {renderIngredients()}
        <br />
    
      {/* <p>{recipe.ingridients}</p> */}
      <p>{recipe.directions}</p>
      <p>prep time{recipe.prep_time}</p>
    </div>
  )
}

export default RecipeView
