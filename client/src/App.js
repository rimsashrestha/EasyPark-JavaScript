import React from 'react';
import Navbar from "./Components/Navbar/Navbar"
import './App.css';
import Home from './Home'
import About from './About'
import Guest from './Guest'
import Contact_Us from './Contact_Us'
import My_Account from './My_Account'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/guest" exact component={Guest}/>
            <Route path="/about" exact component={About}/>
            <Route path="/contact_us" exact component={Contact_Us}/>
            <Route path="/my_account" exact component={My_Account}/>
          </Switch> 
        </div>
      </Router>
    </>
    
  );
}

export default App;
