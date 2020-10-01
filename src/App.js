import React, { useEffect, useState } from 'react';
import './App.css';
import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tester from './components/Tester';

function App() {

  useEffect(() => {
    window.localStorage.setItem('stepnum', 0);
    window.localStorage.setItem('points', 0);
  }, [])


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/tester">
            <Tester />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
