
import React from 'react';
import FadeIn from 'react-fade-in';
import { Link, useNavigate } from "react-router-dom";
import './geo.css';


function ProjectGeo() {
    const navigate = useNavigate();
    const handleClick = () => {
        // Now you can navigate programmatically to other pages using navigate
        navigate('/projects');
    };

    return (
        <div className="geo-project">
            <button onClick={handleClick}>Navigate to Home</button>
            <FadeIn>
                <div>
                    <nav className="geo-site-wrapper">

                        <ul className="geo-navigation-wrapper">
                            <Link to="/" className="geo-nav-link"><li>concept</li></Link>
                            <Link to="/visual" className="geo-nav-link"><li>visual</li></Link>
                            <Link to="/proto" className="geo-nav-link"><li>design</li></Link>
                        </ul>
                        <h1>geometry of the city</h1>
                    </nav>
                    <section >
                        <div className="intro">
                            <h3>overview</h3>
                            <p>Cities are an important part of our environment and nature at this point of a social development. They hold in themselves history, experiences, culture and social evolution. This project is designed to display aspects of urbanization and portray the variety of the cities and architecture across the world.</p>
                        </div>
                        <div className="keys">

                            <h3>components</h3>
                            <div>
                                <h3>world</h3>
                                <p>This part tells us about the history of architectural distribution around the world and elements that both influenced and were influenced by social progress.</p>
                            </div>
                            <div>
                                <h3>city</h3>
                                <p>This part shows and compares data about cities while representing historical differences and a variety of urban evolution based on environment and social involvement through visualization.</p>
                            </div>
                            <div>
                                <h3>building</h3>
                                <p>Displays landmarks and their elements and changes through history.</p>
                            </div>
                            <div>
                                <h3>walks</h3>
                                <p>Helps to elevate travel experiences and exploration of the environment based on interests and preferences by offering a set of directions.</p>
                            </div>
                        </div>
                    </section>
                </div>

                <div>
                    <section >
                        <div className="intro">
                            <h3>visual concept</h3>
                            <p>The Visual concept of this project targets two purposes: cohesiveness and simple shapes for better information perception and natural textures and colors and simple to support the ideation. Visual design is clean and simple, with geometrical elements that symbolize shapes and forms of landscapes and architecture while not overloading the interface and eloquently visualize the data.
                            </p>
                        </div>
                        <div className="keys">

                            <div>
                                <h3>Circle</h3>
                                <p> - world/earth</p>

                                <h3>Square</h3>
                                <p> - city/map</p>

                                <h3>Triangle</h3>
                                <p> - building/house</p>

                                <h3>Line</h3>
                                <p> - walk/direction</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <section >
                        <div className="keys">

                            <div>
                                <a target="_blank" rel="noreferrer" href="https://www.figma.com/file/iKIoLZeQyhzjTRgT5ktFcp/Geometry-Of-The-City?node-id=3%3A2&t=JL072nxNslXmYywS-1">prototype structure</a>

                                <a target="_blank" rel="noreferrer" href="https://www.figma.com/proto/iKIoLZeQyhzjTRgT5ktFcp/Geometry-Of-The-City?node-id=3%3A14&scaling=scale-down&page-id=3%3A2&starting-point-node-id=3%3A14">desktop prototype</a>

                                <a target="_blank" rel="noreferrer" href="https://www.figma.com/proto/iKIoLZeQyhzjTRgT5ktFcp/Geometry-Of-The-City?node-id=6%3A16&scaling=scale-down&page-id=0%3A1">mobile prototype</a>

                            </div>
                        </div>
                    </section>
                </div>
            </FadeIn>
        </div>
    )
}

export default ProjectGeo;
