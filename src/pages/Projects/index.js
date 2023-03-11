import React from 'react';
import FadeIn from 'react-fade-in';

function Projects() {
    return (
        <div>
            <section className="tabs" id="projects">
                {/* <h2>projects & studies</h2> */}
                <FadeIn>

                <div className="tab projects-item">
                    <input type="radio" id="meta" name="projects"/>
                    <label className="tab-label project-title" htmlFor="meta">
                        <h4>Gallery / Design / Dev</h4>
                        <h3>Metamorphosis</h3>
                    </label>
                    <div className="tab-content project-content">
                        <div className="project-tab-inner">
                            <p>Personal Art Project dedicated to exploration of emotional transitions and questioning polarity of feelings.</p>
                            <div className="project-tags">
                                <span>React</span>

                                <span>UX/UI Design</span>
                            </div>
                            <div className="project-links">
                                <a target="_blank" href="https://ophiophagushannah.github.io/metamorphosis/">gallery</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab projects-item">
                    <input type="radio" id="experiments" name="projects"/>
                    <label className="tab-label project-title" htmlFor="experiments">
                        <h4>Interactive Sketches / Development</h4>
                        <h3>Experiments</h3>
                    </label>
                    <div className="tab-content project-content">
                        <div className="project-tab-inner">
                            <p>With this project I am exploring creation of art further than just aa visual aspect. Each interactive sketch contains not only visual aspect of a certain idea, but elevated with interactivity that supports the meaning and allows to explore the concept further.</p>
                            <div className="project-tags">
                                <span>Various JS Frameworks</span>
                                <span>canvas-sketch</span>
                                <span>Processing</span>
                                <span>WebGl</span>
                                <span>and more</span>
                            </div>
                            <div className="project-links">
                                <a target="_blank" href="https://github.com/OphiophagusHannah/experiments">github</a>
                                <a target="_blank" href="https://ophiophagushannah.github.io/experiments/">visit site</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab projects-item">
                    <input type="radio" id="miphic" name="projects"/>
                    <label className="tab-label project-title" htmlFor="miphic">
                        <h4>Website / Design / Development</h4>
                        <h3>Miphic</h3>
                    </label>
                    <div className="tab-content project-content">
                        <div className="project-tab-inner">
                            <p>With this project I am exploring creation of art further than just aa visual aspect. Each interactive sketch contains not only visual aspect of a certain idea, but elevated with interactivity that supports the meaning and allows to explore the concept further.</p>
                            <div className="project-tags">
                                <span>React</span>
                                <span>GraphCMS</span>
                                <span>UX/UI Design</span>
                            </div>
                            <div className="project-links">
                                <a target="_blank" href="https://www.miphic.co/">visit site</a>
                                <a target="_blank" href="https://github.com/OphiophagusHannah/miphic">github</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab projects-item">
                    <input type="radio" id="interference" name="projects"/>
                    <label className="tab-label project-title" htmlFor="interference">
                        <h4>Exhibition / Interactive Design</h4>
                        <h3>Interference</h3>
                    </label>
                    <div className="tab-content project-content">
                        <div className="project-tab-inner">
                            <p>The exhibition contains four main installations each of which describes different activities and philosophyc ideas and through representation of holographic concepts and interactive experiences. Since this exhibit covers physical, visual and philosophical aspects, each segment of the audience can find the most enjoyable way to experience the presented information either separately or as a whole</p>
                            <p>Holography and Lasers</p>
                            <div className="project-links">
                                <a target="_blank" href="https://github.com/OphiophagusHannah/interference">github</a>
                                <a target="_blank" href="https://in-interference.herokuapp.com/">visit site</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab projects-item">
                    <input type="radio" id="geo" name="projects"/>
                    <label className="tab-label project-title" htmlFor="geo">
                        <h4>Prototype / UX/Ui Design / Identity</h4>
                        <h3>Geometry</h3>
                    </label>
                    <div className="tab-content project-content">
                        <div className="project-tab-inner">
                            <h3>Geometry of the City</h3>
                            <p>Inspired by my love to architecture and ergonomics, this project is a journal and</p>
                            <h3>Achievements</h3>
                            <p>Use google maps api to generate map</p>
                            <p>Reorganized history of worlds architecture</p>
                            <p>Great cities of the world</p>
                            <p>Data Visualization with D3.js</p>

                            <div className="project-links">
                                <a target="_blank" href="#">documentation</a>
                                <a target="_blank" href="#">prototype</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab projects-item">
                    <input type="radio" id="ink" name="projects"/>
                    <label className="tab-label project-title" htmlFor="ink">
                        <h4>Interactive Web Gallery / Development</h4>
                        <h3>Gallery Ink</h3>
                    </label>
                    <div className="tab-content project-content">
                        <div className="project-tab-inner">
                            <p>Precision of virtual environment experience in virtual space. Mobility</p>
                            <p>Originally the idea was created as a potential prototype for Web Virtual Reality Gallery, which led towards two paths of possible interactions: 1st Path:Full AR/ VR gallery with gesture control. 2nd Path: Experience with the gallery using mobile phone as controller (main goal within this path is accessibility from anywhere).
                            </p>
                            <div className="project-links">
                                <a target="_blank" href="https://github.com/OphiophagusHannah/gallery">github</a>
                                <a target="_blank" href="https://ophiophagushannah.github.io/gallery/">visit site</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab projects-item">
                    <input type="radio" id="multidimension" name="projects"/>
                    <label className="tab-label project-title" htmlFor="multidimension">
                        <h4>Information Architecture Study</h4>
                        <h3>Multidimension</h3>
                    </label>
                    <div className="tab-content project-content">
                        <div className="project-tab-inner">
                            <p>This study is dedicated to exploring the informational architecture of the human brain as a model and analyzing how memories and associations are stored and retrieved. It has been influenced by my long lasting enthusiasm about architecture (tangible) and my life changing interest in holographic experiments and information storage.
                            </p>
                            <a target="_blank" href="https://ophiophagushannah.github.io/flexible-multi-dimension/">design study</a>
                        </div>
                    </div>
                </div>

                <div className="tab projects-item">
                    <input type="radio" id="refract" name="projects"/>
                    <label className="tab-label project-title" htmlFor="refract">
                        <h4>Website / UX/UI Design / Development</h4>
                        <h3>Refract</h3>
                    </label>
                    <div className="tab-content project-content">
                        <div className="project-tab-inner">
                            <h3>UX Engeneering and interactive Design, Web Development</h3>
                            <p><b>Responsible for:</b> Interface Design and Information Architecture, Prototyping, Front End Development</p>
                            <p>I was involved in three main phases of the project: Research and Ideation, Design and Prototyping, and Development and played a role in each part of the iterative process while working closely with a team to create a collaborative web application for the community of students and organizations.
                            </p>
                            <div className="project-links">
                                <a target="_blank" href="https://ophiophagushannah.github.io/refract/documentation/index.html">documentation</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab projects-item">
                    <input type="radio" id="MVMJSON" name="projects"/>
                    <label className="tab-label project-title" htmlFor="MVMJSON">
                        <h4>Interactive Installation / Projected Interface</h4>
                        <h3>MVMJSON</h3>
                    </label>
                    <div className="tab-content project-content">
                        <div className="project-tab-inner">
                            <p> Designed Physical Environment and Projected interface.</p>
                            <p>This interactive projected interface was designed to the solar system in a comprehensive way and create an interactive environment to engage people in accessible learning without intimidation.
                            </p>
                            <div className="project-links">
                                <a target="_blank" href="#">visit site</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab projects-item">
                    <input type="radio" id="orbit" name="projects"/>
                    <label className="tab-label project-title" htmlFor="orbit">
                        <h4>Data Visualization / D3 Development</h4>
                        <h3>Orbit</h3>
                    </label>
                    <div className="tab-content project-content">
                        <div className="project-tab-inner">
                            <p>I was working on exloring and learning new techniques of data visualization and information presentation
                            </p>
                            <div className="project-links">
                                <a target="_blank" href="https://ophiophagushannah.github.io/the-orbit/documentation/index.html">concept</a>
                                <a target="_blank"href="https://ophiophagushannah.github.io/the-orbit">preview</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="codepen-projects">
                    <h3><a target="_blank" href="https://codepen.io/hannahavgust/pens/public">codepen</a></h3>
                </div>
                </FadeIn>
            </section>
        </div>
    )
}

export default Projects;
