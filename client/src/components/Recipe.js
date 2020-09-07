import React, { useState } from "react"
import { Button } from "semantic-ui-react"
import { Link } from "react-router-dom"
import RecipeForm from "./RecipeForm"
import paper from "../images/paper.jpg"
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Recipe = (props) => {
  const [editing, setEditing] = useState(false)

    
  return (
    <div className="todo-list" >
      {editing ? <RecipeForm toggleEdit={setEditing} editRecipe={props.editRecipe} {...props} /> :
        
        <div>
          <h1> {props.title}</h1>
          <img className='character-image' src={props.image} /> 
        </div>
      }
      <br/>
       <Button
          as={Link}
          to={{pathname: `/recipe/${props.id}`}}
        >
        <VisibilityIcon/>
        </Button>
      
        <Button
          onClick={() => props.deleteRecipe(props.id)}
        >
        <DeleteIcon/>
        </Button>
    
      <Button
        onClick={() => setEditing(!editing)}>
        <EditIcon/>
      </Button>
      <hr/>
    </div>
  )
}

export default Recipe
