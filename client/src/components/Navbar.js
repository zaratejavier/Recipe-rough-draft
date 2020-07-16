import React from "react"
import { AuthConsumer, AuthContext } from '../providers/AuthProvider'
import { Menu, MenuHeader } from "semantic-ui-react"
import { Link, withRouter } from "react-router-dom"

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout }, //we get this from our consumer in AuthProvider.js
      location, //we can get location from react router because of withRouter
    } = this.props
    if(user) {
      return (
        <Menu.Menu position="right">
          <Menu.Item
            name='logout'
            onClick={() => handleLogout(this.props.history)}
          />
        </Menu.Menu>
      )
    } else {
      return(
      <Menu.Menu position="right">
        <Link to='/login'>
          <Menu.Item
            id='login'
            name='login'
            active={location.pathname === '/login'}
          />
        </Link>

         <Link to='/register'>
          <Menu.Item
            id='register'
            name='register'
            active={location.pathname === '/register'}
          />
        </Link>
        </Menu.Menu>
      )
    }
  }


  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={this.props.location.path === '/'}
            />
          </Link>
          
        </Menu>
      </div>
    )
  }
}

class ConnectedNavbar extends React.Component{
  render() {
    return (
      <AuthConsumer>
        {auth => <Navbar {...this.props} auth={auth}/>}
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar) //withRouter function comes with react router dom. so we can have props history, location, etc..