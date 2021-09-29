import React from 'react';
import Navbar from "./Components/Navbar"
import './App.css';
import Home from './pages/homePage/Home'
import About from './pages/aboutPage/About'
import Guest from './pages/Guest'
import Contact_Us from './pages/contactPage/Contact_Us'
import My_Account from './pages/accountPage/My_Account'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Components/Footer';


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
            <Route path="/account" exact component={My_Account}/>
          </Switch> 
        </div>
        <Footer />
      </Router>
    </>
    
  );
}

export default App;
