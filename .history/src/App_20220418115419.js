import React from "react";
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Features from './components/Features/Features'
import Header from './components/Header/Header'

function App() {
  return (
    <div>
      <div className="nav-bg">
        <di v>
          <Navbar />
          <Header />

        </di>
      </div>
      <Features />
    </div>

  );
}

export default App;
