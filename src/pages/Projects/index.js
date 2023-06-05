import React from 'react';
import FadeIn from 'react-fade-in';

function Projects() {
    return (
        <div>
            <section className="tabs" id="projects">
                {/* <h2>personal projects & studies</h2> */}
                <FadeIn>


                    <div className="tab projects-item">
                        <input type="radio" id="miphic" name="projects" />
                        <label className="tab-label project-title" htmlFor="miphic">
                            <h4>Design / Dev</h4>
                            <h3>Miphic</h3>
                        </label>
                        <div className="tab-content project-content">
                            <div className="project-tab-inner">
                                <p>Website for the chemical science company that dedicates themself to progressive mitochondrial research. I started with simple identity design and continued with full on development, hosting and support.</p>
                                <div className="project-tags">
                                    <span>React</span>
                                    <span>GraphCMS</span>
                                    <span>UX/UI</span>
                                </div>
                                <div className="project-links">
                                    <a href="/projects/miphic">concept</a>
                                    <a target="_blank" href="https://www.miphic.co/">visit site</a>
                                    <a target="_blank" href="https://github.com/OphiophagusHannah/miphic">github</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab projects-item">
                        <input type="radio" id="meta" name="projects" />
                        <label className="tab-label project-title" htmlFor="meta">
                            <h4>Gallery / Art / Dev</h4>
                            <h3>Metamorphoses</h3>
                        </label>
                        <div className="tab-content project-content">
                            <div className="project-tab-inner">
                                <p>Personal Art Project dedicated to exploration of emotions, fears, desires and their transformation into dreams.</p>
                                <div className="project-tags">
                                </div>
                                <div className="project-links">
                                    <a target="_blank" href="https://ophiophagushannah.github.io/metamorphoses/">view gallery</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab projects-item">
                        <input type="radio" id="experiments" name="projects" />
                        <label className="tab-label project-title" htmlFor="experiments">
                            <h4>Visualization / Dev</h4>
                            <h3>Experiments</h3>
                        </label>
                        <div className="tab-content project-content">
                            <div className="project-tab-inner">
                                <p>My library of sketches where i am exploring graphic development and interactive visualization through various frameworks and languages.</p>
                                <div className="project-tags">
                                </div>
                                <div className="project-links">
                                    <a target="_blank" href="https://ophiophagushannah.github.io/experiments/">visit site</a>
                                    <a target="_blank" href="https://github.com/OphiophagusHannah/experiments">github</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab projects-item">
                        <input type="radio" id="ink" name="projects" />
                        <label className="tab-label project-title" htmlFor="ink">
                            <h4>Web Gallery / Dev</h4>
                            <h3>Ink: Enso</h3>
                        </label>
                        <div className="tab-content project-content">
                            <div className="project-tab-inner">
                                <p>Precision of virtual environment experience in virtual space. Mobility</p>
                                <p>Originally the idea was created as a potential prototype for Web Virtual Reality Gallery, which led towards two paths of possible interactions: 1st Path:Full AR/ VR gallery with gesture control. 2nd Path: Experience with the gallery using mobile phone as controller (main goal within this path is accessibility from anywhere).
                                </p>
                                <div className="project-links">
                                    <a target="_blank" href="https://ophiophagushannah.github.io/enso/">visit site</a>
                                    <a target="_blank" href="https://github.com/OphiophagusHannah/gallery">github</a>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="tab projects-item">
                        <input type="radio" id="interference" name="projects" />
                        <label className="tab-label project-title" htmlFor="interference">
                            <h4>Experience Design / Holography</h4>
                            <h3>Interference</h3>
                        </label>
                        <div className="tab-content project-content">
                            <div className="project-tab-inner">
                                <p>This exhibition concept combines science, visualization, and philosophic allegory based or holographic approach and ideas.  Each part describes aspects of holography and laser work through interactive experiences and artistic visualization.</p>
                                <div className="project-links">
                                    <a href="/projects/interference">concept</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab projects-item">
                        <input type="radio" id="geo" name="projects" />
                        <label className="tab-label project-title" htmlFor="geo">
                            <h4>UX/UI / Identity / Concept</h4>
                            <h3>Geometry</h3>
                        </label>
                        <div className="tab-content project-content">
                            <div className="project-tab-inner">
                                <h3>Geometry of the City</h3>
                                <p>Inspired by my love of architecture, urban design and ergonomics, this project is meant to elevate travel experiences and provide awareness about urban development.</p>
                                <span>Data Visualization / Information Architecture</span>
                                <div className="project-links">
                                    <a href="/projects/geo">concept</a>
                                    <a target="_blank" href="https://www.figma.com/proto/iKIoLZeQyhzjTRgT5ktFcp/Geometry-Of-The-City?node-id=3-14&scaling=scale-down&page-id=3%3A2&starting-point-node-id=3%3A14">prototype</a>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* <div className="tab projects-item">
                    <input type="radio" id="multidimension" name="projects"/>
                    <label className="tab-label project-title" htmlFor="multidimension">
                        <h4>Information Architecture Study</h4>
                        <h3>Multidimension</h3>
                    </label>
                    <div className="tab-content project-content">
                        <div className="project-tab-inner">
                            <p>This study is dedicated to exploring the informational architecture of the human brain as a model and analyzing how memories and associations are stored and retrieved. It has been influenced by my long lasting enthusiasm about architecture (tangible) and my life changing interest in holographic experiments and information storage.
                            </p>
                            <div className="project-links">
                            <a target="_blank" href="https://ophiophagushannah.github.io/flexible-multi-dimension/">design study</a>
                            </div>
                        </div>
                    </div>
                </div> */}

                    <div className="tab projects-item">
                        <input type="radio" id="refract" name="projects" />
                        <label className="tab-label project-title" htmlFor="refract">
                            <h4>UX/UI Design / Dev</h4>
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

                    {/* <div className="tab projects-item">
                        <input type="radio" id="sol" name="projects" />
                        <label className="tab-label project-title" htmlFor="sol">
                            <h4>Interactive Installation / Projected Interfaces</h4>
                            <h3>Sol</h3>
                        </label>
                        <div className="tab-content project-content">
                            <div className="project-tab-inner">
                                <p> Designed Physical Environment and Projected interface.</p>
                                <p>This interactive projected interface was designed to the solar system in a comprehensive way and create an interactive environment to engage people in accessible learning without intimidation.
                                </p>
                                <div className="project-links">
                                    <a href="/projects/sol">concept</a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="tab projects-item">
                        <input type="radio" id="orbit" name="projects" />
                        <label className="tab-label project-title" htmlFor="orbit">
                            <h4>Data Visualization / D3 Development</h4>
                            <h3>Orbit</h3>
                        </label>
                        <div className="tab-content project-content">
                            <div className="project-tab-inner">
                                <p>I was working on exploring and learning new techniques of data visualization and information presentation
                                </p>
                                <div className="project-links">
                                    <a href="/projects/orbit">concept</a>
                                    <a target="_blank" href="https://ophiophagushannah.github.io/the-orbit/documentation/index.html">concept</a>
                                    <a target="_blank" href="https://ophiophagushannah.github.io/the-orbit">preview</a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="codepen-projects">
                        {/* <h3><a target="_blank" href="https://codepen.io/hannahavgust/pens/public">codepen</a></h3> */}
                        <h3><a target="_blank" href="
                    https://www.gulosolutions.com/portfolio/">gulo projects</a></h3>
                    </div>
                </FadeIn>
            </section>
        </div>
    )
}

export default Projects;
