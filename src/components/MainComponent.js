import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React, { Component } from 'react';

import About from '../pages/About';
import Home from '../pages/Home';

import Work from '../pages/Work';
import Projects from '../pages/Projects';

import ProjectGeo from '../pages/ProjectGeo';
import ProjectMiphic from '../pages/ProjectMiphic';
import ProjectInterference from '../pages/ProjectInterference';
import MainPortfolio from './MainPortfolio';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }
    render() {

        return (
            <Router>
                <Routes>
                    <Route exact path='/' element={<MainPortfolio />} >
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/expertise' element={<Work />} />
                        <Route exact path='/projects' element={<Projects />} />
                        <Route exact path='/about' element={<About />} />
                    </Route>
                    <Route exact path='/projects/geo' element={<ProjectGeo />} />
                    <Route exact path='/projects/miphic' element={<ProjectMiphic />} />
                    <Route exact path='/projects/interference' element={<ProjectInterference />} />

                </Routes>
            </Router>
        );
    }
}

export default Main;
