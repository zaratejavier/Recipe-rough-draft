import React from "react"
import { AuthConsumer, AuthContext } from '../providers/AuthProvider'
import { Menu, MenuHeader } from "semantic-ui-react"
import { Link, withRouter } from "react-router-dom"

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout },
      location,
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