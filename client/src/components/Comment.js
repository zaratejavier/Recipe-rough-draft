import React from 'react'

const Comment = (props) => {
  return (
    <div>
      <p>{props.comment.body}</p>
    </div>
  )
}

export default Comment
