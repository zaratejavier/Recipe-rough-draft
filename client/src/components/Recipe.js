import React from "react"
import { Button } from "semantic-ui-react"
import { Link } from "react-router-dom"

const Recipe = (props) => {


  return (
    <div>
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
          // size="sm"
          // variant="outline-danger"
          // onClick={() => props.deleteBook(props.id)}
        >
         Delete
        </Button>
      
      
    </div>
  )
}

export default Recipe