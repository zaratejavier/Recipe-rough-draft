import React from "react"
import axios from "axios"
import { AuthConsumer } from "../providers/AuthProvider"

class FetchUser extends React.Component{
  state = { loaded: false }
  
  componentDidMount() {
    const { auth: { authenticated, setUser }  } = this.props // we are grabbing authenticated and setUser from the authProvider
    
    if (authenticated) {
      this.setState({ loaded: true })
      return
    }
    if (localStorage.getItem('access-token')) { // checking if access-token key is on local storage. localStorage is just key value pairs
      axios.get('/api/auth/validate_token') // if they do have token lets check if it is a valid token 
        .then(res => {
        setUser(res.data.data)
      }).catch((err) => {
        this.setState({loaded: true})
      })
      return;
    }
    this.setState({loaded: true}) // if there is not a user we set loaded to true

  }

  render() {
    return this.state.loaded ? this.props.children : null;
  }
}

export default class ConnectedFetchUser extends React.Component{
  render() {
    return (
      <AuthConsumer>
        {auth => <FetchUser {...this.props} auth={auth}/>}
      </AuthConsumer>
    )
  }
}