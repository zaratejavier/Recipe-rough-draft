import React, { useState, useEffect } from "react"
import axios from "axios"

const Home = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes()
  }, [])
  
  const getRecipes = () => {
    axios.get('/api/recipes')
      .then(res => {
        console.log(res.data)
        
        debugger
    })
  }
 
  return(
  <div>
    <h1>devise auth app</h1>
  </div>
  )
}

export default Home