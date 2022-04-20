import React from "react";
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Features from './components/Features/Features'
import Header from './components/Header/Header'
import TextTr from './components/Header/'

function App() {
  return (
    <div>
      <div className="nav-bg">
        <Navbar />
        <Header />
        <TextTr />

      </div>
       <Features />
    </div>

  );
}

export default App;
