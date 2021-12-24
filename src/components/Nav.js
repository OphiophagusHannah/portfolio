import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {


    return (

        <nav className="site-wrapper">
            <ul className="navigation-wrapper">
                <Link to="/home" className="nav-link"><li>hannah avgust</li></Link>
                <Link to="/about" className="nav-link"><li>about</li></Link>
                <Link to="/hannah-b-resume-design-developement.pdf" target="_blank" rel="nonrefferer" className="nav-link-preend"><li>cv</li></Link>
                <Link to="/contact" className="nav-link-end"><li>contact</li></Link>
            </ul>
        </nav>

    );
}

export default Nav;