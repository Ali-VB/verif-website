import React from "react";
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Features from './components/Features/Features'
import Header from './components/Features/Features'
function App() {
  return (
    <div className="nav-bg">
      <Navbar />
      <Header />
      <Features />
    </div>
  );
}

export default App;
