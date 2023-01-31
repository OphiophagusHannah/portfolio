import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Dev from '../pages/Dev';
import Work from '../pages/Work';
import Projects from '../pages/Projects';


class Main extends Component {

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        const AboutPage = () => {
            return (
                <About />
            );
        }

        const DevPage = () => {
            return (
                <Dev />
            );
        }

        const WorkPage = () => {
            return (
                <Work />
            );
        }
        const ProjectsPage = () => {
            return (
                <Projects />
            );
        }

        return (


            <div className="main-wrapper">

                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/expertise' component={WorkPage} />
                    <Route exact path='/projects' component={ProjectsPage} />
                    <Route exact path='/about' component={AboutPage} />
                    <Route exact path='/dev' component={DevPage} />

                    <Redirect to="/home" />
                </Switch>
            </div>


        );
    }
}

export default Main;
