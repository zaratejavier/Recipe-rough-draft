import React from "react"
import { Button, Form, Segment, Header } from "semantic-ui-react"

export default class Register extends React.Component{
  state = { email: '', password: '', passwordConfirmation: '' }
  
  handleSubmit = (e) => {
    console.log("submit called")
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value})
  }
  
  render() {
     const { email, password, passwordConfirmation, } = this.state;
    
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Register</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Email"
            required
            autoFocus
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password Confirmation"
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Password Confirmation'
            type='password'
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    )
  }
}
