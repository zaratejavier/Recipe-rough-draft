import React, { useState } from "react"
import { Form, FormInput } from "semantic-ui-react"

const RecipeForm = () => {
  const [title, setTitle] = useState('')
  const [ingridients, setIngridients] = useState('')
  const [directions, setDirections] = useState('')
  const [prepTime, setPrepTime] = useState('')
  const [cookTime, setCookTime] = useState('')
  // const [image, setImage] = useState('')


  return (
    <>
      <Form>
        <FormInput
          label="Title:"
          name="title"
          required
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormInput
          label="Ingridients:"
          name="ingridients"
          required
          value={ingridients}
          placeholder="Ingridients"
          onChange={(e) => setIngridients(e.target.value)}
        />
        <FormInput
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
    </>
  )
};

export default RecipeForm



