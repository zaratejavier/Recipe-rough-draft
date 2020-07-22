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
        this.setState({ user: res.data.data }) // we grab the data and set it to the state

        //we get history(react router dom) from Register.js so we can push to the home component
        history.push("/")

      }).catch((err) => {
        console.log(err)

      })
  }

  handleLogin = (user, history) => { // we get the user and history from the Register function
    axios.post("api/auth/sign_in", user)
      .then((res) => {
        this.setState({ user: res.data.data }) //we get the data the user input and add it to the state
        history.push("/") //we send the user to the homepage after they login
      }).catch((err) => {
      console.log(err)
    })
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
