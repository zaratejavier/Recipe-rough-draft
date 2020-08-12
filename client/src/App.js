import React from 'react';
import './App.css';
import { Container } from "semantic-ui-react"
import { Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import FetchUser from "./components/FetchUser"
import ProtectedRoute from "./components/ProtectedRoute"
import profile from './components/Profile';
import RecipeView from './components/RecipeView';
import RecipesApi from './components/RecipesApi'




function App() {
  return (
    <>
      <Navbar />
      {/* what below fetchUser is the children that we are talking about in FetchUser line 18 */}
      <FetchUser>
        <Container>
          <ProtectedRoute exact path='/' component={Home} />
          <ProtectedRoute exact path='/recipe/:id' component={RecipeView} />
          <ProtectedRoute exact path='/profile' component={profile} />
          <ProtectedRoute exact path='/RecipesApi' component={RecipesApi} />


          {/* <Route exact path='/' component={Home} /> */}

          <Route exact path='/register' component={Register}/>
          <Route exact path='/login' component={Login}/>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;
