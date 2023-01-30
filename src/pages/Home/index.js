import React from 'react';


function Home() {
    return (
        <div>
            <section className="about">

                <div className="intro">
                    <h3>Hello, I am Hannah</h3>
                    <h2>I enjoy interactive design and code. I combine them together. It’s like magic, but it’s real.</h2>
                </div>
                <div className="keys">

                <h3>expertise</h3>
                    <div>
                        <h3>Frontend Engineering & Web Development</h3>
                        <p>Implementing functional and responsive websites and web applications in mind with information architecture and user experience and according to latest frontend techniques.</p>
                    </div>
                    <div>
                        <h3>Interactive & Tangible Design</h3>
                        <p>Designing interactive and immersive experiences and interfaces. Exploring Augmented Reality and Machine Learning concepts.</p>
                    </div>
                    <div>
                        <h3>UI/UX Design</h3>
                        <p>Using a variety of prototyping tools and UX research techniques to create comprehensive  and visually appealing prototypes for interactive media.</p>
                    </div>
                </div>
            </section>
            <section id="projects">
                <h2>currently</h2>
                <div className="projects-item">
                    <div className="third">
                        <a href="https://www.gulosolutions.com/" target="_blank" rel="noreferrer"><h3>Gulo</h3></a>
                        <h4>Front-End Developer and UX Engineer</h4>
                        <p>2017 - Present</p>
                    </div>
                    <div className="two-third">
                        <h3>Responsibilities and Achievements</h3>

                        <p>Developed, launched and supported 15+ responsive cross-browser websites and web
                            applications using the latest front-end technologies.</p>
                        <p>Leading production development and implementing versatile front-end solutions to web
                            development issues. Initiating and advocating the usage of new techniques in order to
                            improve quality of the product and projects workflow.
                        </p>
                        <p>Responsible for implementing custom user interfaces (UIs) to the best UX and SEO practices.
                        </p>
                        <p>Collaborating closely with the design and strategy team and developing meaningful
                            information architecture and user interface and ensuring flawless transition from design
                            to development.</p>
                        <p>Working closely with clients, guiding them through the developed product and providing
                            technical support.
                        </p>
                    </div>
                </div>

                <h2>Projects & Studies</h2>

                <div className="projects-item">
                    <div className="third">
                        <a target="_blank" rel="noreferrer" href="https://hannah-avgust-art.herokuapp.com/"><h3>Miphic</h3></a>
                        <h4>Website</h4>
                        <p>2022</p>

                    </div>
                    <div className="third">
                        <h3>Role</h3>
                        <p>Visual Design and Development</p>
                        <h3>Tools</h3>
                        <p>GraphCMS</p>
                        <p>React</p>

                    </div>
                    <div className="third">
                        <h3>Overview</h3>
                        <p>With this project I am exploring creation of art further than just aa visual aspect. Each interactive sketch contains not only visual aspect of a certain idea, but elevated with interactivity that supports the meaning and allows to explore the concept further.</p>
                    </div>
                </div>
                <div className="projects-item">
                    <div className="third">
                        <a target="_blank" rel="noreferrer" href="https://hannah-avgust-art.herokuapp.com/"><h3>Experiments</h3></a>
                        <h4>Interactive Sketch Playground</h4>
                        <p>2021 (ongoing)</p>
                        <p>Personal Project</p>


                    </div>
                    <div className="third">
                        <h3>Role</h3>
                        <p>Creative and Visual Development</p>
                        <h3>Tools</h3>
                        <p>Canvas-Sketch</p>
                        <p>Processing</p>
                        <p>Various JS Frameworks</p>
                        <p>more...</p>
                    </div>
                    <div className="third">
                        <p></p>
                    </div>
                </div>

                <div className="projects-item">
                    <div className="third">
                        <a target="_blank" rel="noreferrer" href="https://hannah-avgust-art.herokuapp.com/"><h3>Interferance</h3></a>
                        <h4>Interactive Installation</h4>
                        <p>2022 (ongoing)</p>
                        <p>Personal Project</p>
                    </div>
                    <div className="third">
                        <h3>Role</h3>
                        <p>Interactive Concept Design</p>
                        <h3>Field</h3>
                        <p>Emmersive Experience</p>
                        <p>Holography and Lasers</p>
                        <h3>Techniques</h3>
                        <p></p>
                    </div>
                    <div className="third">
                        <p></p>
                    </div>
                </div>

                <div className="projects-item">
                    <div className="third">
                        <a target="_blank" rel="noreferrer" href=""><h3>Geometry of the City</h3></a>
                        <h4>Architecture and Travel Guide</h4>
                        <p>2020 (ongoing)</p>
                        <p>Personal Project</p>
                    </div>
                    <div className="third">
                        <h3>Role</h3>
                        <p>UX/Ui Design, User Experience, Prototyping, Visual design</p>
                        <h3>Tools</h3>
                        <p>Figma</p>
                    </div>
                    <div className="third">
                    <h3>Overview</h3>
                    <p>Inspired by my love to architecture and ergonomics, this project is a journal and</p>
                    <h3>Achievements</h3>
                        <p>Use google maps api to generate map</p>
                        <p>Reorganized history of worlds architecture</p>
                        <p>Great cities of the world</p>
                        <p>Data Visualization with D3.js</p>
                    </div>
                </div>

                {/* <div className="projects-item">
                    <div className="third">
                        <a target="_blank" rel="noreferrer" href="https://hannah-avgust-art.herokuapp.com/"><h3>Create. Enjoy. Destroy.</h3></a>
                        <h4>Personal Interactive Gallery</h4>
                        <p>2021 (ongoing)</p>
                        <p className="mono">is_ongoing: true</p>

                    </div>
                    <div className="third">
                        <h3>Creative development and vizualisation</h3>
                        <p>PIXI</p>
                        <p>WebGL</p>
                        <p>Various JS Frameworks</p>
                    </div>
                    <div className="third">
                        <p>With this project I am exploring creation of art further than just aa visual aspect. Each interactive sketch contains not only visual aspect of a certain idea, but elevated with interactivity that supports the meaning and allows to explore the concept further.</p>
                    </div>
                </div>
                <div className="projects-item">
                    <div className="third">
                        <a target="_blank" rel="noreferrer" href="https://hannah-avgust-art.herokuapp.com/"><h3>Hannah Avgust Art Shop</h3></a>
                        <h4>Personal Art Store</h4>
                        <p>2021 (ongoing)</p>
                        <p>is_ongoing: false</p>

                    </div>
                    <div className="third">
                        <h3>Online Shoping and eCommerce</h3>
                        <p>integrated Commerce.js</p>
                        <p>Ux/Ui and everything else</p>
                        <p>Interactive visualisation gallery</p>
                    </div>
                    <div className="third">
                        <p>Store</p>

                    </div>
                </div> */}

                <div className="projects-item">
                    <div className="third">
                        <a target="_blank" rel="noreferrer" href="https://ophiophagushannah.github.io/gallery/"><h3>Gallery Ink</h3></a>
                        <h4>Interactive Web Gallery</h4>
                        <p>WebGL</p>
                    </div>
                    <div className="third">
                        <h3>Web Develpment</h3>
                        <p>Precision of virtual environment experience in virtual space. Mobility</p>
                    </div>
                    <div className="third">
                        <p>Originally the idea was created as a potential prototype for Web Virtual Reality Gallery, which led towards two paths of possible interactions: 1st Path:Full AR/ VR gallery with gesture control. 2nd Path: Experience with the gallery using mobile phone as controller (main goal within this path is accessibility from anywhere).
                        </p>
                    </div>
                </div>

                <div className="projects-item">
                    <div className="third">
                        <a target="_blank" rel="noreferrer" href="https://ophiophagushannah.github.io/flexible-multi-dimension/"><h3>Multidimension</h3></a>
                        <h4>Information Architecture Study</h4>
                        <p>2018</p>
                        <p>Personal Project</p>

                    </div>
                    <div className="third">
                        <h3>Topic</h3>
                        <p>Information Architecture</p>
                        <h3>Purpose</h3>
                    </div>
                    <div className="third">
                        <p>This study is dedicated to exploring the informational architecture of the human brain as a model and analyzing how memories and associations are stored and retrieved. It has been influenced by my long lasting enthusiasm about architecture (tangible) and my life changing interest in holographic experiments and information storage.

                        </p>
                    </div>
                </div>




                <div className="projects-item">
                    <div className="third">
                        <a target="_blank" rel="noreferrer" href="https://ophiophagushannah.github.io/refract/"><h3>Refract</h3></a>
                        <h4>Web Application</h4>
                        <p>2018</p>

                    </div>
                    <div className="third">
                        <h3>UX Engeneering and interactive Design, Web Development</h3>
                        <p><b>Responsible for:</b> Interface Design and Information Architecture, Prototyping, Front End Development</p>
                    </div>
                    <div className="third">
                        <p>I was involved in three main phases of the project: Research and Ideation, Design and Prototyping, and Development and played a role in each part of the iterative process while working closely with a team to create a collaborative web application for the community of students and organizations.
                        </p>

                    </div>
                </div>


                <div className="projects-item">
                    <div className="third">
                        <h3>MVMJSON</h3>
                        <h4>Interactive Installation, Projected Interface</h4>
                        <p>2017</p>

                    </div>
                    <div className="third">
                        <h3>Concept and Interactive Design</h3>
                        <p> Designed Physical Environment and Projected interface.</p>
                    </div>
                    <div className="third">
                        <p>This interactive projected interface was designed to the solar system in a comprehensive way and create an interactive environment to engage people in accessible learning without intimidation.
                        </p>
                    </div>
                </div>

                <div className="projects-item">
                    <div className="third">
                    <a target="_blank" rel="noreferrer"  href="https://ophiophagushannah.github.io/solar-system/"><h3>Orbit</h3></a>

                        <h4>Data Visualization</h4>
                        <p>D3</p>
                    </div>
                    <div className="third">
                        <h3>Data Visualization and D3 Development</h3>
                    </div>
                    <div className="third">
                        <p>I was working on exloring and learning new techniques of data visualization and information presentation
                        </p>
                    </div>
                </div>





                {/* <div className="projects-item">
                    <div className="third">
                        <a target="_blank" rel="noreferrer" href="https://ophiophagushannah.github.io/workspace/"><h3>Workplace</h3></a>
                        <h4>Physical Interface Prototype</h4>
                        <p>2017</p>

                    </div>
                    <div className="third">
                        <h3>Experience and Interface Design, Product Research</h3>
                        <p>Exploring physical interface as Embodyment and separating concerns between digital and physical controls</p>

                    </div>
                    <div className="third">
                        <p>With the ambition to improve the working or creative environments, i aspired to design a smart desk for wariety of activities to improve not only momentary experience, but with thought of caring about long term physical wellbeing.
                        </p>
                    </div>
                </div> */}
            </section>
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

export default Home;
