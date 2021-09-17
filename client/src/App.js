import React from 'react';
import Navbar from "./Components/Navbar/Navbar"
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Guest from './pages/Guest'
import Contact_Us from './pages/Contact_Us'
import My_Account from './pages/My_Account'

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
