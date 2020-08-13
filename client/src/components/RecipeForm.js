import React, { useState } from "react"
import { Form, FormInput, Modal, Button } from "semantic-ui-react"

const RecipeForm = () => {
  const [title, setTitle] = useState('')
  const [ingridients, setIngridients] = useState('')
  const [directions, setDirections] = useState('')
  const [prepTime, setPrepTime] = useState('')
  const [cookTime, setCookTime] = useState('')
  const [open, setOpen] = React.useState(false)
  
  // const [image, setImage] = useState('')


  return (
    <>
      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add Recipe</Button>}
    >
      <Form>
        <FormInput
          label="Title:"
          name="title"
          required
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.TextArea
          label="Ingridients:"
          name="ingridients"
          required
          value={ingridients}
          placeholder="Ingridients"
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
        <FormInput
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
        />
        {/* <FormInput
          label="Ingridients:"
          name="ingridients"
          required
          value={ingridients}
          placeholder="Ingridients"
          onChange={(e) => setingridients(e.target.value)}
        /> */}
        </Form>
        <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => setOpen(false)} positive>
          Ok
        </Button>
      </Modal.Actions>
        </Modal>
    </>
  )
};

export default RecipeForm



