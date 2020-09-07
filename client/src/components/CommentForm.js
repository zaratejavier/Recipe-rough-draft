import React, { useState, useEffect } from 'react'
import { Form, FormInput, Button } from 'semantic-ui-react'
import Axios from 'axios'
import { AuthConsumer } from "../providers/AuthProvider"

const CommentForm = (props) => {
  const [body, setBody] = useState('')
  // const [editing, setEditing] = useState(false)



  const comment = { body: body, user_id: props.auth.user.id, user_name: props.auth.user.name }  
  

  useEffect(() => {
    if (props.commentId) {
      setBody(props.comment.body)
      // debugger
    } 
  },[])

  const handleSubmit = (e) => {
  e.preventDefault()
  if (props.editComment) {
      props.editComment(props.commentId, comment)
      // props.changeEdit()
    } else {
      Axios.post(`/api/recipes/${props.recipeId}/comments`, comment)
      .then((res) => {
        props.addComment(res.data)
        console.log(comment)
      })
      .catch((e) => {
        console.log(e)
      })
      setBody('')
    }
    // setOpen(false)    
  }

  // const handleSubmit = (e) => {
  // // e.preventDefault()
  // if (props.editComment) {
  //     props.editComment(props.commentId, comment)
  //     props.changeEdit()
  //   } else {
  //     axios.post(`/api/posts/${props.postId}/comments`, comment)
  //     .then((res) => {
  //       props.addComment(res.data)
  //       console.log(comment)
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })
  //     setDes('')
  //   }
  // }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.TextArea
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
