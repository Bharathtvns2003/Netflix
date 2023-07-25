import React from 'react';
import './App.css';
import Homescreen from './Homescreen';
import {
  BrowserRouter as Router,
  Route,
}  from "react-router-dom";
import { Switch } from 'react-router-dom';
import Loginscr from './Loginscr';


function App() {
  const user=null;

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/'>
          <Homescreen></Homescreen>
          </Route>
        </Switch>
      
        
        
      </Router>
    </div>
  );
}

export default App;
