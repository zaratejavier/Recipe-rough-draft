import React, { useState } from "react"
import { Form, FormInput, Modal, Button } from "semantic-ui-react"
import Axios from "axios";

const RecipeForm = (props) => {
  const [title, setTitle] = useState(props.title ? props.title : '')
  const [ingridients, setIngridients] = useState(props.ingridients ? props.ingridients : '')
  const [directions, setDirections] = useState(props.directions ? props.directions : '')
  const [prepTime, setPrepTime] = useState(props.prepTime ? props.prepTime : '')
  const [cookTime, setCookTime] = useState(props.cookTime ? props.cookTime : '')
  const [open, setOpen] = useState(false)

  
  // const [image, setImage] = useState('')

  const recipe = {title: title, ingridients: ingridients, directions: directions, prepTime: prepTime, cookTime: cookTime, }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (props.editRecipe) {
      props.editRecipe(props.id, recipe)
      props.toggleEdit()
    }
    else {
      Axios.post('/api/recipes', { title, ingridients, directions, prepTime, cookTime, }) //we tell it what information is going to be added to the database
        .then(res => {
          props.addRecipe(res.data)
      })
    }
      
  }

  return (
    <>
      <Modal
      style={{padding: "20px", margin: "30px", display: "flex", justifyContent: "SpaceAround"}}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add Recipe</Button>}
    >
      <Form onSubmit={handleSubmit}>
        <FormInput
          label="Title:"
          name="title"
          required
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.TextArea
          label="Ingredients:"
          name="ingridients"
          required
          value={ingridients}
          placeholder="Ingredients (Please comman separate)"
          onChange={(e) => setIngridients(e.target.value)}
        />
        <Form.TextArea
          label="Directions:"
          name="directions"
          required
          value={directions}
          placeholder="Directions"
          onChange={(e) => setDirections(e.target.value)}
        />
        {/* <FormInput
          label="Prep Time:"
          name="prepTime"
          required
          value={prepTime}
          placeholder="Prep Time"
          onChange={(e) => setPrepTime(e.target.value)}
        />
        <FormInput
          label="Cook Time:"
          name="cookTime"
          required
          value={cookTime}
          placeholder="Cook Time"
          onChange={(e) => setCookTime(e.target.value)}
        /> */}
        {/* <FormInput
          label="Ingridients:"
          name="ingridients"
          required
          value={ingridients}
          placeholder="Ingridients"
          onChange={(e) => setingridients(e.target.value)}
        /> */}
        <Modal.Actions>
          <Button>Submit</Button>
          <Button onClick={() => setOpen(false)}>Exit</Button>
            
        </Modal.Actions>
      </Form>
    </Modal>
    </>
  )
};

export default RecipeForm



