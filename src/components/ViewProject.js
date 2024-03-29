import React, {useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ViewProject = ({ project }) => {
  const links = project.projectLinks.map((link, id) => {
    return (
      <div key={id}>
        <a href={link.url} target="_blank">
          {link.linkTitle}
        </a>
      </div>
    );
  });
  useEffect(() => {
    AOS.init();
}, [])

  const tag = project.projectTag;

  return (
    <div className="tab projects-item" >
      <input type="radio" id={tag} name="projects" />
      <label className="tab-label project-title" htmlFor={tag} >
        <h4>{project.projectTagline}</h4>
        <h3>{project.projectTitle}</h3>
      </label>
      <div className="tab-content project-content">
        <div className="project-tab-inner">
          <p>{project.projectDescription}</p>
          {/* <div className="project-tags">
                        <span>React</span>
                        <span>GraphCMS</span>
                        <span>UX/UI</span>

                    </div> */}
          <div className="project-links" >{links}</div>
        </div>
      </div>
    </div>
  );
};
export default ViewProject;
