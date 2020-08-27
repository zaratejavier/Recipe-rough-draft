import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Container } from 'semantic-ui-react'
import { AuthConsumer } from "../providers/AuthProvider"
import Comment from './Comment'

const Comments = (props) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    Axios.get(`/api/recipes/${props.recipeId}/comments`)
      .then(res => {
        setComments(res.data)
      })
  },[])

  const renderComments = () => {
    return comments.map(comment => (
      // <Container key={comment.id}>
      //   <p>{comment.body}</p>
      // </Container>
      <Comment key={comment.id} comment={comment}/>
    ))
  }
  return (
    <div>
      <h2>Recipe Comments</h2>
      {/* {props.auth.user.name}'s */}
      {renderComments()}

    </div>
  )
}

const ConnectedComments = (props) => {
  return (
  <AuthConsumer>
    {auth=> (<Comments {...props} auth={auth} />)}
  </AuthConsumer>
  )
}

export default ConnectedComments
