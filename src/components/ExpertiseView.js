import React from 'react';



const ExpertiseView = ({ expertise }) => {


    return (
        <div className="tab competence">
            <input type="checkbox" id="front-dev" />
            <label className="tab-label competence-label" htmlFor="front-dev">
                {/* <div className="dot dot--blank"></div> */}
                <h3>{expertise.expertiseTitle}</h3>
                <p>{expertise.expertiseDescription}</p>
            </label>
            <div className="tab-content competence-content">
                <div className="expertise-tags">
                    <span>JS & JS Frameworks</span>
                    <span>React</span>
                    <span>Canvas-Sketch</span>
                    <span>D3</span>
                    <span>WebGL</span>
                    <span>Three.js</span>
                    <span>CSS/SASS</span>
                    <span>PHP</span>
                    <span>eCommerce</span>
                </div>
            </div>
        </div>

    );
};
export default ExpertiseView;
