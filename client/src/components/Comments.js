import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Container } from 'semantic-ui-react'

const Comments = ({recipeId}) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    Axios.get(`/api/recipes/${recipeId}/comments`)
      .then(res => {
        setComments(res.data)
      })
  },[])

  const renderComments = () => {
    return comments.map(comment => (
      <Container key={comment.id}>
        <p>{comment.body}</p>
      </Container>
    ))
  }
  return (
    <div>
      <h2>Recipe Comments</h2>
      {renderComments()}

    </div>
  )
}

export default Comments
