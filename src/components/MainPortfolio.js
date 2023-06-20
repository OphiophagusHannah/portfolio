import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { Component } from "react";

import About from "../pages/About";
import Home from "../pages/Home";

import Work from "../pages/Work";
import Projects from "../pages/Projects";

import Nav from "./Nav";
import Footer from "./Footer";

import FadeIn from "react-fade-in";
import Canvas from "./Canvas";

class MainPortfolio extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleDist = this.handleDist.bind(this);
    this.state = {};
  }

  handleClick() {
    this.setState({ isOff: !this.state.isOff });
  }

  handleColor() {
    this.setState({ isLight: !this.state.isLight });
  }
  handleDist() {
    this.setState({ isDist: !this.state.isDist });
  }

  componentDidMount() {}
  render() {
    // const { isOff } = this.state;
    // const { isLight } = this.state;
    // const { isDist } = this.state;

    return (
      <div className={this.state.isLight ? "dark-theme" : "light-theme"}>
        {/* <Canvas /> */}
        <div id="lightcontainer">
              <Canvas />
    </div>
      
        <div
          className={
            this.state.isOff
              ? "site-wrapper center-all-content"
              : "site-wrapper"
          }
        >
          <div className="left-side">
            <FadeIn>
              <Nav />
              <div className="dots">
                <div
                  className="dot dot--border"
                  onClick={this.handleClick}
                ></div>
                <div className="dot dot--red" onClick={this.handleColor}></div>
                {/* <div className="dot dot--red" onClick={this.handleDist}></div> */}
              </div>
            </FadeIn>
            <Footer />
          </div>
          <div className="right-side">
            <div className="main-wrapper">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/expertise" element={<Work />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/about" element={<About />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPortfolio;
