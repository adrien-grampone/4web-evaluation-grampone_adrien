import React from 'react';
import Header from "./layout/Header/Header.js";
import "./layout/Header/Header.css"
import Login from './Login/Login.container.js';
import Display from './Display/Display';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">

      <Router>
        <Link to="/login">Login </Link>



        <Route path="/login" component={Login} />
        <Route path="/display" component={Display} />
      </Router>


    </div>
  );
}


export default App;
