import React from "react"
import { Button, Form, Segment, Header, Modal } from "semantic-ui-react"
import { AuthConsumer } from "../providers/AuthProvider"

 class Register extends React.Component{
  state = { email: '', password: '', passwordConfirmation: '', name:'', open: false }
  
   handleSubmit = (e) => {
     e.preventDefault()
     
     const {email, password, passwordConfirmation, name} = this.state
    //we grab the value off of auth, allows us to use handleRegister
    //the register component has history object on it
    const { auth: { handleRegister }, history } = this.props

     if (password === passwordConfirmation)
    // we spread over the state and get email, password, and confirmation and send it to authprovider.js
    // we now pass the history(which is the react router history object) to the handRegister in authprovider.
    handleRegister({email, password, passwordConfirmation, name},history) 
      else alert("Passwords do not match")
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value})
  }
  
  render() {
     const { email, password, passwordConfirmation,name, open } = this.state;
    
    return (
  <div>
        <Header as='h1' textAlign='center'>Register</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Name"
            autoFocus
            required
            name="name"
            value={name}
            placeholder="Name"
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            required
            type="email"
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
            minLength={8}
            type='password'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password Confirmation"
            required
            minLength={8}
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Password Confirmation'
            type='password'
            onChange={this.handleChange}
          />
            <Button primary type='submit'>Submit</Button>
        </Form>
    </div>      
    )
  }
}

export default class ConnectedRegister extends React.Component{
  render() {
    return (
      <AuthConsumer> 
      {/* val gives us access to the authprovider, then we pass it as a props to the register form.
      We also have to spread over props(from connectedRegister) so that we have acces to react router dom history*/}
        {val => <Register {...this.props} auth={val}/>} 
      </AuthConsumer>
    )
  }
}