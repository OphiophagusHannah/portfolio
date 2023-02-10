import React from 'react';


function Work() {
    return (
        <div>
                <section className="expertise" id="keys">
                    {/* <h2>expertise & competence</h2> */}
                    <div className="tabs competence-wrapper">
                        <div className="tab competence">
                            <input type="checkbox" id="front-dev"/>
                            <label class="tab-label" for="front-dev">
                                <h3>Frontend & Web Development</h3>
                                <p>Implementing functional and responsive websites and web applications in mind with information architecture and user experience.</p>
                            </label>
                            <div className="tab-content">
                            <p>CSS/SASS, JS & JS Frameworks, eCommerce, PHP, Canvas-Sketch, D3, Processing, WebGL, Three.js</p>
                            </div>
                        </div>
                        <div className="tab competence">
                            <input type="checkbox" id="interactive-design" />
                            <label class="tab-label" for="interactive-design">

                            <h3>Interactive<br></br>Experience Design</h3>
                            <p>Designing interactive and immersive experiences and interfaces. Exploring Augmented Reality and Machine Learning concepts.</p>
                            </label>
                            <div className="tab-content">
                            <p>Projected and Tangible Interfaces, Motion Tracking, Data Visualization, Storyboarding</p>
                            </div>
                        </div>
                        <div className="tab competence">
                        <input type="checkbox" id="ux" />
                            <label class="tab-label" for="ux">

                            <h3>UI/UX Design</h3>
                            <p>Using a variety of prototyping tools and UX research techniques to create comprehensive  and visually appealing prototypes for interactive media.</p>
                            </label>
                            <div className="tab-content">
                            <p>Low, High Fidelity, Rapid Prototyping, Wireframing, User Journey Mapping</p>
                            </div>

                        </div>
                    </div>
                </section>
        </div>

    )
}

export default Work;
