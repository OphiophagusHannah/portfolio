import { BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react';
import { Dimensions,Animated} from 'react-native';
import ProgressBar from "react-scroll-progress-bar";
import Main from './components/MainComponent';
import Mobile from './components/MobileComponent';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';
import FadeIn from 'react-fade-in';
import Canvas from './components/Canvas'



// let {width:W,height:H} = Dimensions.get("window");

class App extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleDist = this.handleDist.bind(this);
    this.state = {

    }
  }

  handleClick() {
    this.setState({isOff:!this.state.isOff});
  }

  handleColor() {
    this.setState({isLight:!this.state.isLight});
  }
  handleDist() {
    this.setState({isDist:!this.state.isDist});
  }

  componentDidMount(){
  }

  render() {

    const { isOff } = this.state;
    const { isLight } = this.state;
    const { isDist } = this.state;

    return (
        <div className={this.state.isLight ? "dark-theme"  :  "light-theme"}>
        <Canvas />
        <Router>
        <div className={this.state.isDist ? "distort-text"  :  "text"}>
            <svg>
                <filter id="wavy">
                    <feTurbulence id="turbulence" type="turbulence" numOctaves="1" result="NOISE"></feTurbulence>
                    <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="50"></feDisplacementMap>
                    <animate xlink:href="#turbulence" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1"
                    values="0.01 0.02;0.02 0.04;0.01 0.02" repeatCount="indefinite"></animate>
                </filter>
            </svg>
        </div>
            <div className={this.state.isOff ? "site-wrapper center-all-content"  :  "site-wrapper"}>

                <div className="left-side">
                    <FadeIn>
                        <Nav />
                        <div className="dots">

                            <div className="dot dot--border" onClick={this.handleClick}></div>
                            <div className="dot dot--red" onClick={this.handleColor}></div>
                            <div className="dot dot--red" onClick={this.handleDist}></div>

                        </div>
                    </FadeIn>
                    <Footer />
                </div>
                <div className="right-side" >
                    <Main />
                    <Mobile />
                </div>

            </div>
        </Router>
        </div>
    )
  }
}

export default App;
