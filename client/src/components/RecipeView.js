import React, { useState, useEffect } from "react"
import Axios from "axios"

const RecipeView = (props) => {
  const [recipe, setRecipe] = useState({})
  const [splitting, setSplitting] = useState([])
  
  console.log(splitting)

  useEffect(() => {
    Axios.get(`/api/recipes/${props.match.params.id}`)
      .then((res) => {
        setRecipe(res.data)
        console.log(res.data)
        // console.log(res.data.ingridients.split(','))
        setSplitting(res.data.ingridients.split('\n').map(e => e.split(',')))
    })
  }, [])


  const renderIngrediants = () => {
    return splitting.map(ingridient => (
      <div key={ingridient.id}>
        <p>{ingridient}</p>
      </div>  
    ))
  }
  
  return (
    <div>
      <h1>{recipe.title}</h1>
      {/* {splitting.ingridients} */}
      {/* <p>{splitting.ingridients}</p> */}
    
      
      {renderIngrediants()}
        <br />
    
      {/* <p>{recipe.ingridients}</p> */}
      <p>{recipe.directions}</p>
      <p>prep time{recipe.prep_time}</p>
    </div>
  )
}

export default RecipeView
