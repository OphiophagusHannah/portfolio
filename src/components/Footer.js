import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="footer-inner">
                <ul>
                    {/* <Link to="/home" className="nav-link"><li>work</li></Link> */}
                    <Link to="/dev" className="nav-link"><li>dev</li></Link>
                    {/* <Link to="https://github.com/OphiophagusHannah" className="nav-link" ><li>github</li></Link>
                    <Link to="https://codepen.io/ophiophagushannah" className="nav-link" ><li>codepen</li></Link> */}

                </ul>
                <ul>
                    {/* <Link to="https://twitter.com/hannahavgust" className="nav-link" ><li>art portfolio</li></Link> */}
                </ul>

            </div>

        </footer>
    );
}

export default Footer;