import React, {useState, useEffect} from "react"
import { Header, Form, Button } from "semantic-ui-react"
import Recipe from "./Recipe"
import { APP_ID, APP_key } from '../env'

const Home = () => {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('fish')

  useEffect(() => {
    getRecipes();
  }, [query]) //only updates when we hit the submit. Instead of updating every time we input somethin
  
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_key}`)
    const data = await response.json();
    console.log(data)
    setRecipes(data.hits)
  }


  const updateSearch = e => {
    setSearch(e.target.value) //this allows us to get what the use is typing 
  }      

  const getSearch = e => {
    e.preventDefault() //prevents the page from refreshing
    setQuery(search) //gets the finished updated value from the input
    setSearch('') //once the user is hits submit, it will reset the field to blank 
  }

  return (
    <>
      <Header as='h3' textAlign='center' >InstaCook</Header>
      
      <Form onSubmit={getSearch} className="search-form" style={styles.search}>
        <input className="search-bar"
          type="text"
          placeholder="Search"
          value={search} onChange={updateSearch}
        />
        <Button
          className="search-button"
          style={styles.searchButton}
          type="submit" >
          <i className="search icon"/>
        </Button>
      </Form>
      
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.uri} // just for now
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            // time={recipe.recipe.totalTime}
          />
        ))}
      </div>
     </>
  )
}

const styles = {
  search: {
    display: "flex",
    justifyContent: "space-around"
  },
  searchButton: {
    border: "none",
    padding: "10px 20px",
    color: "black",
  }
}

export default Home