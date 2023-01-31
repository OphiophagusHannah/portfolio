import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {


    return (

        <nav className="nav-wrapper">
            <div className="main-heading">
                <h1>Hi, I am Hannah</h1>
                <h2>Interactive Designer & Developer</h2>
            </div>

            <ul className="nav-list-wrapper">
                <Link to="/home" className="nav-link"><li>home</li></Link>
                <Link to="/expertise" className="nav-link"><li>expertise</li></Link>
                <Link to="/projects" className="nav-link"><li>projects</li></Link>
                <Link to="/about" className="nav-link"><li>about</li></Link>
                <a href="#contact" className="nav-link"><li>contact</li></a>
            </ul>
        </nav>

    );
}

export default Nav;
