import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter ,  Route ,Routes} from "react-router-dom";


import './App.css'
import Navbar from './components/Navbar/Navbar';
import HomeComponent from "./components/HomeComponent/HomeComponent";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs"


function App() {
  return (
    <BrowserRouter>
      <div className="bg">
        <div className="nav-bg">
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" >
            <HomeComponent />
          </Route >
          <Route exact path="/contact">
            <ContactUs />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
