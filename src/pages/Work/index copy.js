import React from 'react';
import FadeIn from 'react-fade-in';


function Work() {
    return (
        <div>
            <section className="expertise" id="keys">
                {/* <h2>expertise & competence</h2> */}
                <div className="tabs competence-wrapper">
                    <FadeIn>
                        <div className="tab competence">
                            <input type="checkbox" id="front-dev" />
                            <label className="tab-label competence-label" htmlFor="front-dev">
                                {/* <div className="dot dot--blank"></div> */}
                                <h3>Frontend & Web Development</h3>
                                <p>Implementing functional and responsive websites and web applications in mind with information architecture and user experience.</p>
                            </label>
                            <div className="tab-content competence-content">
                                <div className="expertise-tags">
                                    <span>JS & JS Frameworks</span>
                                    <span>React</span>
                                    <span>Canvas-Sketch</span>
                                    <span>D3</span>
                                    <span>WebGL</span>
                                    <span>Three.js</span>
                                    <span>CSS/SASS</span>
                                    <span>PHP</span>
                                    <span>eCommerce</span>
                                </div>
                            </div>
                        </div>
                        <div className="tab competence">
                            <input type="checkbox" id="interactive-design" />
                            <label className="tab-label competence-label" htmlFor="interactive-design">
                                {/* <div className="dot dot--blank"></div> */}
                                <h3>Tangible Experience Design</h3>
                                <p>Designing interactive and immersive experiences and interfaces. Exploring Augmented Reality and Machine Learning concepts.</p>
                            </label>
                            <div className="tab-content competence-content">
                                <div className="expertise-tags">
                                    <span>Projected and Tangible Interfaces</span>
                                    <span>Motion Tracking</span>
                                    <span>Immersive Experiences</span>
                                    <span>Data Visualization</span>

                                </div>
                            </div>
                        </div>
                        <div className="tab competence">
                            <input type="checkbox" id="ux" />
                            <label className="tab-label competence-label" htmlFor="ux">
                                {/* <div className="dot dot--blank"></div> */}
                                <h3>Interactive & UI/UX Design</h3>
                                <p>Using a variety of prototyping tools and UX research techniques to create comprehensive  and visually appealing prototypes for interactive media.</p>
                            </label>
                            <div className="tab-content competence-content">
                                <div className="expertise-tags">
                                    <span>Low, High Fidelity, Rapid Prototyping</span>
                                    <span>Wireframing</span>
                                    <span>User Journey Mapping</span>
                                    <span>Storyboarding</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    )
}

export default Work;
