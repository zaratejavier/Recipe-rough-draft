import React, { useState } from "react"
import { Button } from "semantic-ui-react"
import { Link } from "react-router-dom"
import RecipeForm from "./RecipeForm"

const Recipe = (props) => {
  const [editing, setEditing] = useState(false)

  return (
    <div className="todo-list">
      <h1> {props.title}</h1>
      <img className='character-image' src={props.image} />
      <p> Prep Time: {props.prep_time}</p>
       <Button
          as={Link}
          to={{pathname: `/recipe/${props.id}`}}
        >
        View
        </Button>
        <Button
          onClick={() => props.deleteRecipe(props.id)}
        >
        Delete
        </Button>
      
      <Button
        onClick={() => setEditing(!editing)}>edit
      </Button>
      {editing ? <RecipeForm toggleEdit={setEditing} editRecipe={props.editRecipe} {...props} /> : null}
      <hr/>
      
      
      
    </div>
  )
}

export default Recipe
