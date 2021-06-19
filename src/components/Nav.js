import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {


    return (

        <nav className="site-wrapper">
            <ul>
                <Link to="/home" className="nav-link"><li>hannah avgust</li></Link>
                <Link to="/about" className="nav-link"><li>about</li></Link>
                <Link to="https://docs.google.com/document/d/1OqvVU_pG3Ui-l3RRB3iG6FvP8MlVD8Ee3qoPP-Vqup8/edit?usp=sharing" className="nav-link-preend"><li>cv</li></Link>
                <Link to="mailto:hannahavgust@gmail.com" className="nav-link-end"><li>contact</li></Link>
            </ul>
        </nav>

    );
}

export default Nav;