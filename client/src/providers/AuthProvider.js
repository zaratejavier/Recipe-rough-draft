import React from "react"
import axios from 'axios'

//create the context
export const AuthContext = React.createContext()

//create the consumer
export const AuthConsumer = AuthContext.Consumer

//create the provider
export default class AuthProvider extends React.Component{
  state = { user: null }

  handleRegister = (user, history) => {
    console.log("Handle register called")
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
