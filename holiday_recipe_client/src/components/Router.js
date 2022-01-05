import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import RecipeList from './RecipeList'

import About from '../components/About'
import Home from '../components/Home'



const Router = () => {
        return (
<Switch>
            <Route exact path= '/' component={Home}/>   
            <Route  path='/about' component={About}/>
            <Route  path='/Recipes' component={RecipeList}/>

</Switch>
//hooks
//swith choose the routes that matches

 )
    };


export default Router;