import React from "react";
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Features from './components/Features/Features'
import Header from './components/Header/Header'
import AiSection from './components/AiSection/AiSection'
import BuySection from './components/BuySection/'


function App() {
  return (
    <div>
      <div className="nav-bg">
        <Navbar />
        <Header />


      </div>
      <Features />
      <AiSection />
      <BuySection />
    </div>

  );
}

export default App;
