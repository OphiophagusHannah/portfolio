import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Dev from '../pages/Dev';
import Work from '../pages/Work';
import Projects from '../pages/Projects';


class Mobile extends Component {

    render() {

        return (
            <div className="mobile-wrapper">
                <Home />
                <h2 className="mobile-title">expertise</h2>
                <Work />
                <h2 className="mobile-title">projects</h2>
                <Projects />
                <h2 className="mobile-title">about</h2>
                <About />
            </div>

        );
    }
}

export default Mobile;
