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


function App() {
  return (
    <Router>
      <div>
        <Switch><Route path="/" >
            <div className="nav-bg">
              <Navbar />
              <Header />
            </div>
            
            </Route>
            <Features />
            <AiSection />
            <BuySection />
            <Supporter />
            <Footer />
            <Test />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
