import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from "semantic-ui-react"
import { Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import FetchUser from "./components/FetchUser"
import ProtectedRoute from "./components/ProtectedRoute"




function App() {
  return (
    <>
      <Navbar />
      {/* what below fetchUser is the children that we are talking about in FetchUser line 18 */}
      <FetchUser>
        <Container>
          {/* <ProtectedRoute exact path='/' component={Home} /> */}
          <Route exact path='/' component={Home} />

          <Route exact path='/register' component={Register}/>
          <Route exact path='/login' component={Login}/>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;
