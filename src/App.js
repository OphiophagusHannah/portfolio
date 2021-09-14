import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState, Component } from 'react';
import { View, Dimensions, StyleSheet, Animated} from 'react-native';
import ProgressBar from "react-scroll-progress-bar";
import Main from './components/MainComponent';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

let {width:W,height:H} = Dimensions.get("window");

class App extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state={
      pos: new Animated.ValueXY
    }
  }

  handleClick() {
    this.setState({isOff:!this.state.isOff});
  }

  _loopAnimation(){
      let des = {x:W*Math.random(), y:Math.random()*H};
      Animated.timing(this.state.pos, {
          toValue: des,
          duration: 7000
      }).start(()=>{
          this._loopAnimation();
      });
  }

  componentDidMount(){
      this._loopAnimation();
  }
  
  render() {

  const { isOff } = this.state;

  return (
    <div className={this.state.isOff ? "gradient-text"  :  "site"}>
      <Router>
        <div className="progress">
          <ProgressBar />
        </div>
        <div className="wrapper">
        <Animated.View  onClick={this.handleClick} style={{
            width:30,
            height:30,
            borderRadius:25,
            backgroundColor:"rgba(162, 219, 3, .9)",
            border:"15px solid rgb(162, 219, 3, 0)",
            position:"absolute",
            zIndex: 999,
            cursor: "pointer",
            left:this.state.pos.x,
            top:this.state.pos.y,
           
            
        }} /></div>

        <Nav />
        <Main />
        <Footer />

      </Router>
    </div>
  )
      }
}

export default App;
