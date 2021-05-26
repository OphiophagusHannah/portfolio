import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div class="footer-inner">
                <ul>
                    <Link to="/home" className="nav-link"><li>gallery</li></Link>
                    <Link to="https://www.instagram.com/hannahavgust/" className="nav-link" ><li>instagram</li></Link>
                    <Link to="https://twitter.com/hannahavgust" className="nav-link" ><li>twitter</li></Link>
                </ul>
                <ul>
                    <Link to="https://twitter.com/hannahavgust" className="nav-link" ><li>art</li></Link>
                </ul>

            </div>

        </footer>
    );
}

export default Footer;