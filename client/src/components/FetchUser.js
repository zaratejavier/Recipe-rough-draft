import React, { useState, useEffect, useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import axios from 'axios'

export default function FetchUser (props) {
  const [loaded, setLoaded] = useState(false)
  const { authenticated, setUser } = useContext(AuthContext)

  useEffect(() => {
    if (!authenticated) { //if we are not authenicated check for token
      checkLocalToken();
    }
    setLoaded(true) // else set loaded to true

  },[]) //we use [] so it only runs once when its is mounted

  async function checkLocalToken() {
    if (localStorage.getItem("access-token")) { // checking if access-token key is on local storage. localStorage is just key value pairs
      try {
        const res = await axios.get("/api/auth/validate_token") // if they do have token lets check if it is a valid token 
        setUser(res.data.data)
      } catch (e) {
        console.log(e)
      }
    }
  }

  return loaded ? props.children : null; //props.children i just the nested stuff in app.js inside of Fetch user
}