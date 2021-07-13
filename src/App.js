import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState } from 'react';
import ProgressBar from "react-scroll-progress-bar";
import Main from './components/MainComponent';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';


// import history from './services/history';

function App() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={!isActive ? "site" : "site gradient-text"}>
      <Router>
        <div className="progress">
          <ProgressBar />
        </div>
        <div className="magic-button" onClick={handleToggle}></div>
        <div className="magic-button-2" onClick={handleToggle}></div>
        <div className="magic-button-3" onClick={handleToggle}></div>
        <Nav />
        <Main />
        <Footer />
      </Router>
    </div>
  )
}

export default App;
