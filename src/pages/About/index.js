import React from 'react';
import FadeIn from 'react-fade-in';

function About() {
    return (
        <div>
            <section id="about" className="about">
                {/* <h2>about</h2> */}
                <div className="intro">
                <FadeIn>
                     <div className="intro-item">
                        <div className="flex-end">
                            <p className="about-intro">Currently working as a Front-end Engineer<br></br> and Web Developer at <a target="_blank" href="https://gulosolutions.com">Gulo</a></p>
                        </div>
                    </div>
                    <div className="intro-item">
                        <div className="flex-end">
                            <div className="about-inner">
                                <h3>Inspiration</h3>
                                <p>What do I think about: technology and spirituality. Current Explorations (Glitch Art)</p>
                                <p>Nature, Nature of life and metamorphosis, translation and transition between mediums </p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
                </div>
            </section>
        </div>
    )
}

export default About;
