import React from 'react';


const ViewExpertise = ({ expertise }) => {

    const skills = expertise.skills.map((skill, id) => {
        return <div key={id}>
            <span >{skill.skill}</span>
        </div>
    });

    const tag = expertise.tag;

    return (
        <div className="tab competence">
           
            <h3>{expertise.expertiseTitle}</h3>
                <p>{expertise.expertiseDescription}</p>
                <input type="checkbox" id={tag}  />
            <label className="tab-label competence-label" htmlFor={tag}>
                {/* <div className="dot dot--blank"></div> */}
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
