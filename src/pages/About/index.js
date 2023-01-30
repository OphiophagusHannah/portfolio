import React from 'react';


function About() {
    return (
        <div>
            <section id="about" className="about">
                <div className="intro">
                    <h2>I am a front end engineer with artistic and interactive design background.</h2>
                    <div className="intro-item">
                    <h3>Story</h3>

</div>
<div className="intro-item">
                    <h3>Inspiration</h3>
                    <p>What do I think about: technology and spirituality
Current Explorations (Glitch Art, Holography)</p>
                    <p>Nature, Nature of life and metamorphosis, translation and transition between mediums </p>
                    </div>
<div className="intro-item">
                    <h3>Other Interests</h3>
                    {/* <p>Architecture</p>
                    <p>Holography</p>
                    <p>Visual Art</p>
                    <p>Linguistics</p> */}
                    </div>


                    <div className="intro-item"><h3>Education</h3></div>
                    {/* <div className="intro-item">
                    <h3>Curently Learning</h3>
                            <p>GraphQL</p>
                            <p>Glitch art</p>
                            <p></p>
                            </div> */}
                </div>
            </section>
            <div className="skills intro-item" id="skills">
            <h3>Competence and Skills</h3>
                <div className="proficiency">

                    <div >

                        <ul>
                            <h3>_development proficiency</h3>
                            <li>HTML, CSS/SASS</li>
                            <li>JavaScript, JS Frameworks (React, Next.js, Angular)</li>
                            <li>JSON, PHP </li>
                            <li>Canvas-Sketch, D3, Processing</li>
                            <li>WebGL, Three.js </li>
                            <li>Wordpress, Shopify, Git</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h3>_interactive design and ux techniques </h3>
                            <li>Low and High Fidelity Prototyping</li>
                            <li>Rapid Prototyping</li>
                            <li>Storyboarding</li>
                            <li>Wireframing</li>
                            <li>User Journey Mapping</li>
                            <li>Task Analysis</li>
                            <li>Conversational Interfaces</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h3>_tools</h3>
                            <li>Figma</li>
                            <li>Proto.io</li>
                            <li>Motion.io</li>
                            <li>Framer</li>
                            <li>InVision</li>
                            <li>Sketch</li>
                            <li>Adobe CC</li>
                        </ul>
                    </div>
                    <div>

                     <ul>
                     <h3>_talents</h3>
                         <li>Ambitious Learner</li>
                         <li>Motivated Collaborator</li>
                         <li>Open-minded Experimenter</li>
                         <li>Improvement Oriented Enthusiast</li>
                         <li>Not afraid to be wrong</li>
                     </ul>
                 </div>

                 </div>
            </div>


            <section id="contact">
                <div>
                    <h2>Lets Talk</h2>
                    <a href="mailto: bogdanovahannah@gmail.com">Email Me</a>
                </div>
                <div><a href="">CV</a><a href="">Linkedin</a></div>

                <div><a href="">View Dev Experience</a></div>
            </section>

        </div>



    )
}

export default About;
