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
                                <h3>Story</h3>
                                <p>I started to explore development as a part of my interactive design studies to execute my ideas and prototype them more effectively. Through the time, I grew a big interest in visual development and exploration of ways how to convey complex information with simple visual ways.</p>
                            </div>
                        </div>
                    </div>
                    <div className="intro-item">
                        <div className="flex-end">
                            <div className="about-inner">
                                <h3>Inspiration</h3>
                                <p>My biggest inspiration is the world around me. My ideation is guided by nature of life and connection between matters in their transitions and translation through simplicity.</p>
                            </div>
                        </div>
                    </div>
                    <div className="intro-item">
                        <div className="flex-end">
                            <div className="about-inner">
                                <h3>Current Explorations</h3>
                                <p>Glitch art and distortion. Architecture. Holography.</p>
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
