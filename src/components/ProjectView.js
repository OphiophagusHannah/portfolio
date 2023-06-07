import React, { useState } from 'react';



const ProjectView = ({ post, noImage }) => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current);
    };

    return (
        <div className="tab projects-item">
            <input type="radio" id="miphic" name="projects" />
            <label className="tab-label project-title" htmlFor="miphic">
                <h4>Design / Dev</h4>
                <h3>{post.projectTitle}</h3>
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
                        <a target="_blank" rel="noreferrer" href="https://www.miphic.co/">visit site</a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/OphiophagusHannah/miphic">github</a>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default ProjectView;
