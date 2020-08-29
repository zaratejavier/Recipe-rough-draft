import React, { useState } from 'react'
import { Form, FormInput, Button } from 'semantic-ui-react'
import Axios from 'axios'
import { AuthConsumer } from "../providers/AuthProvider"


const CommentForm = (props) => {
  const [body, setBody] = useState('')

  const comment = {body: body, user_id: props.auth.user.id, user_name: props.auth.user.name}  

  const handleSubmit = (e) => {
    if (props.editComment) {
      props.editComment(props.commentId, comment)
    } else {
      e.preventDefault();
      Axios.post(`/api/recipes/${props.commentId}/comments`, comment)
        .then((res) => {
        props.addComment(res.data)
      }) 
    }
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
        <Button>Submit</Button>

      </Form>
      
    </div>
  )
}


const ConnectedCommentForm = (props) => {
  return (
    <AuthConsumer>
      {auth => (<CommentForm {...props} auth={auth}/>)}
    </AuthConsumer>
      )
}

export default ConnectedCommentForm
