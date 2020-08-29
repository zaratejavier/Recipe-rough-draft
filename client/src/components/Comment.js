import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import ConnectedCommentForm from './CommentForm'

const Comment = (props) => {
  const [editing, setEditing] = useState(false)

  return (

    <div style={{ width: "25rem" }}>
      {editing ? <ConnectedCommentForm editComment={props.editComment} comment={props.comment} commentId = {props.comment.id} /> : 
        <div>
          <p>{props.comment.created_at}</p>
          <p>{props.comment.body}</p>
        </div>
      }
      <Button onClick={() => setEditing(!editing)}>{editing ? 'Cancel' : 'Edit'}</Button>
      <hr/>
    </div>
  )
}

export default Comment
