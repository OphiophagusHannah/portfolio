import React from 'react';


function Projects() {
    return (
        <div>

            <section className="tabs" id="projects">
                <h2>projects & studies</h2>
                <div className="tab projects-item">
                    <input type="checkbox" id="miphic" name="projects"/>
                    <label class="tab-label project-title" for="miphic">
                        <div>
                            <h4>Website / Design / Development</h4>
                        </div>
                        <h3>Miphic</h3>
                    </label>
                    <div className="tab-content project-content">
                        <p>With this project I am exploring creation of art further than just aa visual aspect. Each interactive sketch contains not only visual aspect of a certain idea, but elevated with interactivity that supports the meaning and allows to explore the concept further.</p>
                        <a href="https://hannah-avgust-art.herokuapp.com/">Visit Site</a>
                    </div>
                </div>


                <div className="tab projects-item">
                    <input type="radio" id="experiments" name="projects"/>
                    <label class="tab-label project-title" for="experiments">
                        <div>
                            <h4>Interactive Sketches / Visual Development</h4>
                        </div>
                        <h3>Experiments</h3>
                    </label>
                    <div className="tab-content project-content">
                        <p>Canvas-Sketch</p>
                        <p>Processing</p>
                        <p>Various JS Frameworks</p>
                        <p>more...</p>
                        <a href="https://hannah-avgust-art.herokuapp.com/">Visit Site</a>
                    </div>
                </div>

                <div className="tab projects-item">
                    <input type="radio" id="interferance" name="projects"/>
                    <label class="tab-label project-title" for="interferance">
                        <div>
                            <h4>Exhibition / Interactive Design</h4>
                        </div>
                        <h3>Interferance</h3>
                    </label>
                    <div className="tab-content project-content">
                    <p>Emmersive Experience</p>
                        <p>Holography and Lasers</p>
                        <a href="https://hannah-avgust-art.herokuapp.com/">Visit Site</a>
                    </div>
                </div>

                <div className="tab projects-item">
                    <input type="radio" id="geo" name="projects"/>
                    <label class="tab-label project-title" for="geo">
                        <div>
                            <h4>Prototype/ UX/Ui Design / Identity</h4>
                        </div>
                        <h3>Geometry of the City</h3>
                    </label>
                    <div className="tab-content project-content">
                        <p>Inspired by my love to architecture and ergonomics, this project is a journal and</p>
                        <h3>Achievements</h3>
                        <p>Use google maps api to generate map</p>
                        <p>Reorganized history of worlds architecture</p>
                        <p>Great cities of the world</p>
                        <p>Data Visualization with D3.js</p>

                        <a href="https://hannah-avgust-art.herokuapp.com/">Visit Site</a>
                    </div>
                </div>

                <div className="tab projects-item">
                    <input type="radio" id="ink" name="projects"/>
                    <label class="tab-label project-title" for="ink">
                        <div>
                            <h4>Interactive Web Gallery / Development</h4>
                        </div>
                        <h3>Gallery Ink</h3>
                    </label>
                    <div className="tab-content project-content">
                    <p>Precision of virtual environment experience in virtual space. Mobility</p>
                    <p>Originally the idea was created as a potential prototype for Web Virtual Reality Gallery, which led towards two paths of possible interactions: 1st Path:Full AR/ VR gallery with gesture control. 2nd Path: Experience with the gallery using mobile phone as controller (main goal within this path is accessibility from anywhere).
                        </p>
                        <a href="https://hannah-avgust-art.herokuapp.com/">Visit Site</a>
                    </div>
                </div>


                <div className="tab projects-item">
                    <input type="radio" id="multidimension" name="projects"/>
                    <label class="tab-label project-title" for="multidimension">
                        <div>
                            <h4>Information Architecture Study</h4>
                        </div>
                        <h3>Multidimension</h3>
                    </label>
                    <div className="tab-content project-content">
                    <p>This study is dedicated to exploring the informational architecture of the human brain as a model and analyzing how memories and associations are stored and retrieved. It has been influenced by my long lasting enthusiasm about architecture (tangible) and my life changing interest in holographic experiments and information storage.

                    </p>
                        <a href="https://hannah-avgust-art.herokuapp.com/">Visit Site</a>
                    </div>
                </div>

                <div className="tab projects-item">
                    <input type="radio" id="refract" name="projects"/>
                    <label class="tab-label project-title" for="refract">
                        <div>
                            <h4>Website, UX/UI Design, Development</h4>
                        </div>
                        <h3>Refract</h3>
                    </label>
                    <div className="tab-content project-content">
                    <h3>UX Engeneering and interactive Design, Web Development</h3>
                        <p><b>Responsible for:</b> Interface Design and Information Architecture, Prototyping, Front End Development</p>
                    <p>I was involved in three main phases of the project: Research and Ideation, Design and Prototyping, and Development and played a role in each part of the iterative process while working closely with a team to create a collaborative web application for the community of students and organizations.
                        </p>
                        <a href="https://hannah-avgust-art.herokuapp.com/">Visit Site</a>
                    </div>
                </div>


                <div className="tab projects-item">
                    <input type="radio" id="MVMJSON" name="projects"/>
                    <label class="tab-label project-title" for="MVMJSON">
                        <div>
                            <h4>Interactive Installation, Projected Interface</h4>
                        </div>
                        <h3>MVMJSON</h3>
                    </label>
                    <div className="tab-content project-content">
                    <p> Designed Physical Environment and Projected interface.</p>
                    <p>This interactive projected interface was designed to the solar system in a comprehensive way and create an interactive environment to engage people in accessible learning without intimidation.
                        </p>
                        <a href="https://hannah-avgust-art.herokuapp.com/">Visit Site</a>
                    </div>
                </div>


                <div className="tab projects-item">
                    <input type="radio" id="orbit" name="projects"/>
                    <label class="tab-label project-title" for="orbit">
                        <div>
                            <h4>Data Visualization / D3 Development</h4>
                        </div>
                        <h3>Orbit</h3>
                    </label>
                    <div className="tab-content project-content">
                    <p>I was working on exloring and learning new techniques of data visualization and information presentation
                        </p>
                        <a href="https://hannah-avgust-art.herokuapp.com/">Visit Site</a>
                    </div>
                </div>

            </section>
        </div>

    )
}

export default Projects;
