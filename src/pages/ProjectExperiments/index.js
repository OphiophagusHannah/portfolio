
import React from 'react';
import FadeIn from 'react-fade-in';
import { Routes, Link, Route, useNavigate } from "react-router-dom";
import './experiments.css';


function ProjectExperiments() {
    const navigate = useNavigate();
    const handleClick = () => {
        // Now you can navigate programmatically to other pages using navigate
        navigate('/projects');
      };

    return (
        <div className="experiments-project">
             <button onClick={handleClick}>Navigate to Home</button>
            <iframe src="https://ophiophagushannah.github.io/experiments/"></iframe>
        </div>
    )
}

export default ProjectExperiments;
