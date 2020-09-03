import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import CommentForm from './CommentForm'

const Comment = (props) => {
  const [editing, setEditing] = useState(false)

  return (

    <div style={{ width: "25rem" }}>
      {editing ? <CommentForm editComment={props.editComment} comment={props.comment} commentId = {props.comment.id} /> : 
        <div>
          {/* <p>{props.comment.created_at}</p> */}
          <p>{props.comment.body}</p>
        </div>
      }
      <Button onClick={() => setEditing(!editing)}>{editing ? 'Cancel' : 'Edit'}</Button>
      <Button onClick={() => props.deleteComment(props.comment.id)}>Delete</Button>

      <hr/>
    </div>
  )
}

export default Comment
