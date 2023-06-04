
import React from 'react';
import FadeIn from 'react-fade-in';
import { Routes, Link, Route, useNavigate } from "react-router-dom";
import './inter.css';


function ProjectInterference() {
    const navigate = useNavigate();
    const handleClick = () => {
        // Now you can navigate programmatically to other pages using navigate
        navigate('/projects');
      };

    return (
        <div className="inter-project">
            <button onClick={handleClick}>Navigate to Home</button>
            <FadeIn>
            <div>


<h1>Interference</h1>
<div>https://css-tricks.com/grainy-gradients/</div>

        </div>
            </FadeIn>
        </div>
    )
}

export default ProjectInterference;
