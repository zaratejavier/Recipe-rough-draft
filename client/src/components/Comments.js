import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Container } from 'semantic-ui-react'
import { AuthConsumer } from "../providers/AuthProvider"
import Comment from './Comment'
import CommentForm from './CommentForm'

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
      <Comment key={comment.id} comment={comment}/>
    ))
  }

  const addComment = (comment) => {
    debugger
    setComments([comment, ...comments])
  }

  return (
    <div>
      <h2>Recipe Comments</h2>
      <br/>
      {/* {props.auth.user.name}'s */}
      <CommentForm addComment={addComment} commentId={props.recipeId} />
      <br/>
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
