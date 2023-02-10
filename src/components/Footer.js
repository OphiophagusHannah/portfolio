import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer-wrapper">
            <ul>
                <a href="mailto:bogdanovahannah@gmail.com">email</a>
                {/* <a href="https://github.com/OphiophagusHannah">github</a> */}
                <a target="_blank" href="/hannahb-resume.pdf">cv</a>
            </ul>
        </footer>
    );
}

export default Footer;
