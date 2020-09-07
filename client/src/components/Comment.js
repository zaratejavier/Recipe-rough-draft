import React, { useState } from 'react'
import { Button, Dropdown } from 'semantic-ui-react'
import CommentForm from './CommentForm'
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Comment = (props) => {
  const [editing, setEditing] = useState(false)

  return (

    <div >
      {editing ? <CommentForm editComment={props.editComment} comment={props.comment} commentId = {props.comment.id} /> : 
        <div>
          {/* <p>{props.comment.created_at}</p> */}
          <p>{props.comment.body}</p>
        </div>
      }
      <Button onClick={() => setEditing(!editing)}>{editing ? 'Cancel' : 'Edit'}</Button>
      <Button onClick={() => props.deleteComment(props.comment.id)}>Delete</Button>

      {/* <Dropdown>
        <Dropdown.Menu>
          <Dropdown.Item text='Edit'>
            <Button onClick={() => setEditing(!editing)}>{editing ? 'Cancel' : 'Edit'}</Button>
          </Dropdown.Item>
        <Dropdown.Item text='Delete' >
          <Button onClick={() => props.deleteComment(props.comment.id)}>Delete</Button>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}

      <hr/>
    </div>
  )
}




export default Comment
