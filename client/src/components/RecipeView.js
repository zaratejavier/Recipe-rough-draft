import React, { useState, useEffect } from "react"
import Comments from "./Comments"
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
        // setIngrediantSplit(res.data.ingridients.split('\n').map(e => e.split(',')))
        // setIngrediantSplit(res.data.ingridients.split(',')) this one is working
        // replace(/\n/g, ",").split(",")
        setIngrediantSplit(res.data.ingridients.replace(/\n/g, ",").split(","))

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
      <h3>ingridients</h3>
      {renderIngredients()}
      <br />
      <h3>Directions</h3>
      <p>{recipe.directions}</p>
      {/* <p>prep time{recipe.prep_time}</p> */}
      <hr />
      <Comments recipeId={props.match.params.id}/>
    </div>
  )
}

export default RecipeView
