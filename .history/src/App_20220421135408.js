import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Features from './components/Features/Features'
import Header from './components/Header/Header'
import AiSection from './components/AiSection/AiSection'
import BuySection from './components/BuySection/BuySection'
import Supporter from './components/Supporter/Supporter'
import Footer from './components/Footer/Footer'
import Test from './components/Footer/Test'
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs"


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" >
            <div className="nav-bg">
              <Navbar />
              <Header />
            </div>

            <Features />
            <AiSection />
            <BuySection />
            <Supporter />
            <Footer />
            <Test />

          </Route >

          <Route exact path="/contact">
            <ContactUs />
          </Route>
          <Route exact path="/about" component={AboutUs}>
            <AboutUs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
