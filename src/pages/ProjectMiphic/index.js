
import React from 'react';
import FadeIn from 'react-fade-in';
import { useNavigate } from "react-router-dom";
import './miphic.css';


function ProjectMiphic() {
    const navigate = useNavigate();
    const handleClick = () => {
        // Now you can navigate programmatically to other pages using navigate
        navigate('/projects');
    };

    return (
        <div className="miphic-project">
            <button onClick={handleClick}>Navigate to Home</button>
            <FadeIn>
                <div>

                    <h1>Miphic</h1>
                    <h3>Design</h3>
                    <h4>Identity</h4>
                    Main visual components of the site were chosen based on behavior and structure of mitochondria: gradient, circles, lines.
                    <h4>Logo</h4>
                    Logo is created as a combination of letter "M" and mitochondrial ph spiral
                    <h4>Content Organization</h4>
                    Major challenge of this project was to convey the  idea of the product in the accessible way, even though the content is closely scientiphic.
                    <h4>Visualization</h4>
                    SVG Graph modeled after the functionality of the product and simplifies it

                    <h3>Development</h3>
                    <h4>React and Hygraph</h4>
                    The entire site is developed using React and Hygraph as a CMS to allow flexibility of the content editing

                    <h4>Three.js</h4>



                </div>
            </FadeIn>
        </div>
    )
}

export default ProjectMiphic;
