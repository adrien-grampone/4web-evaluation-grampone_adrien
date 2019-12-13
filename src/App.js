import React from 'react';
import Header from "./layout/Header/Header.js";
import './App.css';
import Login from './Login/Login.js';
import Dashboard from './Dashboard/Dashboard.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>

    </div>
  );
}


export default App;
