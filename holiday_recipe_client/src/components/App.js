
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router'
import NavBar from './NavBar'
import './App.css'

const App = () => {
        return (
            <div>
                <NavBar />
                <Router />
            </div>
        );
};

export default App;