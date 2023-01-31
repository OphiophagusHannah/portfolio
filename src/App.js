import { BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react';
import { Dimensions,Animated} from 'react-native';
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
          duration: 7000,
          useNativeDriver: false
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
        <div className="site-wrapper">
            <div className="left-side">
                <Nav />
                <Footer />
            </div>
            <div className="right-side">
                <Main />
            </div>
        </div>
      </Router>
    </div>
  )
      }
}

export default App;
