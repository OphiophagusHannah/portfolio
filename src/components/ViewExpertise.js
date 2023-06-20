import React from 'react';
import FadeIn from 'react-fade-in';


const ViewExpertise = ({ expertise }) => {

    const skills = expertise.skills.map((skill, id) => {
        return <div key={id}>
            <span >{skill.skill}</span>
        </div>
    });

    const tag = expertise.tag;

    return (
        <div className="tab competence">
            <input type="checkbox" id={tag} />
            <label className="tab-label competence-label" htmlFor={tag}>
                {/* <div className="dot dot--blank"></div> */}
                <h3>{expertise.expertiseTitle}</h3>
                <p>{expertise.expertiseDescription}</p>
                <span>{expertise.moreInfo}</span>
            </label>
            <div className="tab-content competence-content">

                <div className="expertise-tags">
                    {skills}
                </div>
            </div>
        </div>
    );
};
export default ViewExpertise;
