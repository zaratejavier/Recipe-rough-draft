import React, { useState, useEffect } from "react"
import { Card, CardHeader, Image, Icon, Button } from "semantic-ui-react"

const RecipeApi = ({ title, calories, image, time, ingredients }) => {
  const [likes, setLikes] = useState(0)

  useEffect(() => {
    console.log("effect has been ran")
  }, [likes])
  
const heart = (
  <a>
    <Icon onClick={() => setLikes(likes + 1)} style={{ color: 'red' }} name='heart outline' />

  </a>
)

  return (
    <Card style={styles.containerList}>
      <Image src={image} wrapped ui={false} />
      {heart}
      <p>{likes} likes</p>
      <CardHeader style={{ fontWeight: 'bold' }}>{title}</CardHeader>
      <CardHeader style={{ fontWeight: 'bold' }}>{ingredients.weight}</CardHeader>


      
      <Card.Meta>Calories: {Math.round(calories)}</Card.Meta>
      {/* <Card.Description>
        Cook time: {time}
      </Card.Description> */}
    </Card>
  )
}

const styles = {
   listContainer: {
    display: "flex",
    justifyContent: "space-around"
  }
}
export default RecipeApi