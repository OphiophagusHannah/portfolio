import React, { Component } from 'react';
import classnames from 'classnames';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';

class Main extends Component {
    state = { isActive: false };

    hToggle = () => {
        this.setState({ isActive: !this.state.isActive });
    };

    render() {

        const isActive = this.state.isActive;
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

        return (


            <div className="site-wrapper">

                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/about' component={AboutPage} />
                    <Redirect to="/home" />
                </Switch>
            </div>


        );
    }
}

export default Main;
