import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Dev from '../pages/Dev';

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

        return (


            <div className="site-wrapper">

                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/about' component={AboutPage} />
                    <Route exact path='/dev' component={DevPage} />
                
                    <Redirect to="/home" />
                </Switch>
            </div>


        );
    }
}

export default Main;
