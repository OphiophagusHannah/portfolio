import React from 'react';
import FadeIn from 'react-fade-in';
import ProjectsQuery from '../../components/ProjectsQuery'

function Projects() {
    return (
        <div>
            <section className="tabs" id="projects">
                <ProjectsQuery />
            </section>
        </div>
    )
}

export default Projects;
