import React from 'react';
import Header from "./layout/Header/Header.js";
import './App.css';
import Login from './Login/Login.js';
import Dashboard from './Dashboard/Dashboard.js';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Login />
      <Dashboard />
    </div>
  );
}


export default App;
