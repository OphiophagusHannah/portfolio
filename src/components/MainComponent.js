import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import React, { Component } from 'react';

import About from '../pages/About';
import Home from '../pages/Home';

import Work from '../pages/Work';
import Projects from '../pages/Projects';

import ProjectGeo from '../pages/ProjectGeo';
import ProjectMiphic from '../pages/ProjectMiphic';
import ProjectInterference from '../pages/ProjectInterference';
import ProjectOrbit from '../pages/ProjectOrbit';
import ProjectSol from '../pages/ProjectSol';
import ProjectExperiments from '../pages/ProjectExperiments';
import MainPortfolio from './MainPortfolio';

import Nav from './Nav';
import Footer from './Footer';

import FadeIn from 'react-fade-in';
import Canvas from './Canvas'


class Main extends Component {
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
            <Router>
                <Routes>
                    <Route exact path='/' element={<MainPortfolio/>} >
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/expertise' element={<Work />} />
                        <Route exact path='/projects' element={<Projects />} />
                        <Route exact path='/about' element={<About />} />
                    </Route>
                    <Route exact path='/projects/geo' element={<ProjectGeo />} />
                    <Route exact path='/projects/miphic' element={<ProjectMiphic />} />
                    <Route exact path='/projects/interference' element={<ProjectInterference />} />
                    <Route exact path='/projects/orbit' element={<ProjectOrbit />} />
                    <Route exact path='/projects/sol' element={<ProjectSol />} />
                    <Route exact path='/projects/experiments' element={<ProjectExperiments />} />
                </Routes>
            </Router>
        );
    }
}

export default Main;
