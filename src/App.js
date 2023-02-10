import { BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react';
import { Dimensions,Animated} from 'react-native';
import ProgressBar from "react-scroll-progress-bar";
import Main from './components/MainComponent';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';


// let {width:W,height:H} = Dimensions.get("window");

class App extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.state={
    }
  }

  handleClick() {
    this.setState({isOff:!this.state.isOff});
  }

  handleColor() {
    this.setState({isLight:!this.state.isLight});
  }

  componentDidMount(){
  }

  render() {

  const { isOff } = this.state;
  const { isLight } = this.state;

  return (
    // <div className="light-theme">
    <div className={this.state.isLight ? "dark-theme"  :  "light-theme"}>
      <Router>
        <div className={this.state.isOff ? "site-wrapper"  :  "site-wrapper center-all-content"}>
        {/* <div className="site-wrapper center-all-content"> */}

            <div className="left-side">

                <Nav />
                <dev className="dots">
                <div className="dot dot--border" onClick={this.handleClick}></div>
                <div className="dot dot--red" onClick={this.handleColor}></div>
                {/* <div className="dot" onClick={this.handleColor}></div> */}
                </dev>
                <Footer />
            </div>
            <div className="right-side">
                <div className="progress">
                    <ProgressBar />
                </div>
                <Main />
            </div>
        </div>
      </Router>
    </div>
  )
      }
}

export default App;
