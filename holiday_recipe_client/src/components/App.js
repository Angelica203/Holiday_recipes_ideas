
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router'
import NavBar from './NavBar'
import './App.css'

const App = () => {
        return (
            // <header>
            <div>
            {/* <img src="assets/logo.png" alt="logo" class="logo"/> */}
                <NavBar />
                <Router />
            </div>
            // </header>
        );
};

export default App;