import React, { createContext, useReducer } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./pages/homePage/Home";
import About from "./pages/aboutPage/About";
import Guest from "./pages/guestPage/Guest";
import Contact_Us from "./pages/contactPage/Contact_Us";
import SignInOutContainer from "./containers/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Errorpage from "./pages/Errorpage";
import Logout from "./pages/accountPage/Logout";
import "./App.css";
import { initialState, reducer } from "./reducer/UseReducer";

export const UserContext = createContext();

const Routing = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/guest" exact component={Guest} />
      <Route path="/about" exact component={About} />
      <Route path="/contact_us" exact component={Contact_Us} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/account" exact component={SignInOutContainer} />
      <Route>
        <Errorpage />
      </Route>
    </Switch>
  );
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Router>
        <div className="App">
          <UserContext.Provider value={{ state, dispatch }}>
            <Navbar />
            <Routing />
          </UserContext.Provider>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
