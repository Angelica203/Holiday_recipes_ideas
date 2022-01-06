import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import RecipeIdeaList from './RecipeIdeaList'

import About from '../components/About'
import Home from '../components/Home'
import RecipesContainer from './RecipesContainer'



const Router = () => {
        return (
<Switch>
            <Route exact path= '/' component={Home}/>   
            <Route  path='/about' component={About}/>
            <Route  path='/recipes' component={RecipesContainer}/>

</Switch>
//hooks
//swith choose the routes that matches

 )
    };


export default Router;