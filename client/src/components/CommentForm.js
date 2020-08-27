import React, { useState } from 'react'
import { Form, FormInput, Button } from 'semantic-ui-react'
import Axios from 'axios'

const CommentForm = (props) => {
  const [body, setBody] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`/api/recipes/${props.commentId}/comments`)
      .then((res) => {
      props.addComment(res.data)
    })
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormInput
          label="Comment"
          placeholder="Enter Comment Here"
          value={body}
          autoFocus
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </Form>
      <Button>Submit</Button>
      
    </div>
  )
}

export default CommentForm
