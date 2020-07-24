import React, { useCallback, useContext } from "react"
import { Route, Redirect, } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider"

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {authenticated} = useContext(AuthContext)

  return(
    <Route
      {...rest}
      render = {(props) =>
      authenticated ? (
        <Component {...props} /> //if we are authenticated we will see our pages
        ) :(
          <Redirect to={{ pathname: '/login' }}/> // else it will take us to the login component
        )
      }
      />
  )
  
}
export default ProtectedRoute