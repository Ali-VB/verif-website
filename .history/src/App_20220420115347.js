import React from "react";
import ReactDOM from 'react-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Features from './components/Features/Features'
import Header from './components/Header/Header'
import AiSection from './components/AiSection/AiSection'
import BuySection from './components/BuySection/BuySection'
import Supporter from './components/Supporter/Supporter'
import Footer from './components/Footer/Footer'
import Test from './components/Test/Test'


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
      <Supporter />
      <Footer />
      <Test />
    </div>

  );
}

export default App;
