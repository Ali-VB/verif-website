import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Navbar';
import HomeComponent from "./components/HomeComponent/HomeComponent";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs"


function App() {
  return (
    <Router>
      <div className="bg">
        <Switch>
          <div className="nav-bg">
            <Navbar />
          </div>
          <Route exact path="/" >

            <HomeComponent />
          </Route >
          <Route exact path="/contact">
            <ContactUs />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
