import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./pages/homePage/Home";
import About from "./pages/aboutPage/About";
import Guest from "./pages/Guest";
import Contact_Us from "./pages/contactPage/Contact_Us";
import Login from "./pages/accountPage/Login";
import SignInOutContainer from "./containers/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Errorpage from "./pages/Errorpage";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/guest" exact component={Guest} />
            <Route path="/about" exact component={About} />
            <Route path="/contact_us" exact component={Contact_Us} />

            <Route path="/account" exact component={SignInOutContainer} />
            <Route>
              <Errorpage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
