import React from 'react'

const Comment = (props) => {
  return (
    <div key={props.id}>
      <p>{props.comment.created_at}</p>
      <p>{props.comment.body}</p>
      <h1>hey</h1>
    </div>
  )
}

export default Comment
