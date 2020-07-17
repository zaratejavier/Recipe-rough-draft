import React from "react"
import axios from 'axios'

//create the context
export const AuthContext = React.createContext()

//create the consumer
export const AuthConsumer = AuthContext.Consumer

//create the provider
export default class AuthProvider extends React.Component{
  state = { user: null }

  handleRegister = (user, history) => { // we get the user from the Register function
    console.log("Handle register called")
    // here i want to do an axios call to register a user 
    // user email, password, password, confirm_succes_url
    axios.post('/api/auth', user)
      .then(res => {
        this.setState({user: res.data.data}) // we grab the data and set it to the state
      }).catch((err) => {
        console.log(err)

      })

    //then i want to redirect/go or go to home page on succesful register
  }

  handleLogin = (user, history) => {
    
  }

  handleLogout = (history) => {

  }

  render() {
    return (
      <AuthContext.Provider value={{ 
        ...this.state, //we are spreading over the state
        authenticated: this.state.user !== null, //authenticated is just a boolean
        handleLogin: this.handleLogin,
        handleRegister: this.handleRegister,
        handleLogout: this.handleLogout,
        setUser: (user) => this.setState({user}) 
      }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
