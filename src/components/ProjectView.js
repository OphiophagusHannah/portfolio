import React, { useState } from 'react';



const ProjectView = ({ project }) => {


    return (
        <div className="tab projects-item">
            <input type="radio" id="miphic" name="projects" />
            <label className="tab-label project-title" htmlFor="miphic">
                <h4>Design / Dev</h4>
                <h3>{project.projectTitle}</h3>
            </label>
            <div className="tab-content project-content">
                <div className="project-tab-inner">
                    <p>{project.projectDescription}</p>
                    <div className="project-tags">
                        <span>React</span>
                        <span>GraphCMS</span>
                        <span>UX/UI</span>
                    </div>
                    <div className="project-links">
                        <a href="/projects/miphic">concept</a>
                        <a target="_blank" rel="noreferrer" href="https://www.miphic.co/">visit site</a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/OphiophagusHannah/miphic">github</a>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default ProjectView;
