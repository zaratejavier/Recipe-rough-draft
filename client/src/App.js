import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from "semantic-ui-react"
import { Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"



function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
        
      </Container>
    </>
  );
}

export default App;
