import React, { useState, useEffect } from "react"
import axios from "axios"
import RecipeForm from "./RecipeForm"
import Recipe from "./Recipe"
import { Button } from "semantic-ui-react"
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';

const Home = () => {
  const [recipes, setRecipes] = useState([])
  const [showForm, setShowForm] = useState(false)


  useEffect(() => {
    getRecipes()
  }, [])
  
  const getRecipes = () => {
    axios.get('/api/recipes')
      .then(res => {
        console.log(res.data)
        setRecipes(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const renderRecipes = () => {
    return recipes.map(recipe => (
      <Recipe
        key={recipe.id}
        {...recipe}
        deleteRecipe={deleteRecipe}
        editRecipe={editRecipe}
      />
    ))
  }

  const deleteRecipe = (id) => { // we get the id from our function being called in recipe component. the id is the user we are on
    axios.delete(`/api/recipes/${id}`)
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  const editRecipe = (id, recipe) => {
    axios.put(`/api/recipes/${id}`, recipe)
      .then(res => {
        const updateRecipe = recipes.map(recipe => {
          if (recipe.id === id)
            return res.data;
          return recipe
        })
        setRecipes(updateRecipe)
    })
  }
  
  // we pass the recipe object that we get from our form
  // we send it to our state through our setRecipes, 
  // we put it at the begining of the array and then spread the rest of our books after that
  const addRecipe = (recipe) => setRecipes([recipe, ...recipes]) 

  return(
    <div>
      <h1>Welcome to InstaCook</h1>
      {/* we pass the function addRecipe to our RecipeForm */}
      {/* <RecipeForm addRecipe={addRecipe} /> */}
     {/* <Button onClick = {() => setShowForm(!showForm)}>Add Recipe</Button> */}
      
      {/* <Button onClick={() => setShowForm(!showForm)}>Add Recipe</Button> */}
      <Button onClick={() => setShowForm(!showForm)}>{showForm ? <ClearIcon/> : <AddIcon/>}</Button>
      

      {showForm ? <RecipeForm addRecipe={addRecipe} /> : null}
      
    {renderRecipes()}


  </div>
  )
}

export default Home