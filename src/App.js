import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Main from './components/MainComponent';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';


// import history from './services/history';

function App() {
  return (
    <Router>
      <Nav />
      <Main />
      <Footer />
    </Router>
  )
}

export default App;
