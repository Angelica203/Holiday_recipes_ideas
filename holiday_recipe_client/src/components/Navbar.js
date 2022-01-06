import React from 'react'
import { Link } from 'react-router-dom'

 function Navbar(props) {
    return (
        <div id='navbar'>
        <Link to='/'>
            <button id="home">Home</button>
        </Link>
        <Link to='/recipes'>
            <button id="recipes">Recipe Ideas</button>
        </Link>
        <Link to='/saved_recipes'>
            <button id="saved_recipes">Your Saved Recipes</button>
        </Link>

            
        </div>
    )
}
export default Navbar
