import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

function Nav() {
    return (

        <nav className="nav-wrapper">
            <FadeIn>
            <div className="main-heading">

                <h1>Hi, I am Hannah</h1>
                <h2>Interactive Designer & Developer</h2>
            </div>

            <ul className="nav-list-wrapper">
                <Link to="/" className="nav-link"><li>home</li></Link>
                <Link to="/expertise" className="nav-link"><li>expertise</li></Link>
                <Link to="/projects" className="nav-link"><li>projects</li></Link>
                <Link to="/about" className="nav-link"><li>about</li></Link>
                {/* <a href="#contact" className="nav-link"><li>contact</li></a> */}
            </ul>
            </FadeIn>
        </nav>
    );
}

export default Nav;
