import React, { useState } from 'react';

const ViewAbout = ({ about }) => {

    const contents = about.infoContent.map((info, id) => {
        return <div className="intro-item" key={id} >
            <div className="flex-end">
                <div className="about-inner">
                    <h3>{info.heading}</h3>
                    <p>{info.content}</p>
                </div>
            </div>
        </div>
    });
    return (
        <div className="intro">
            <div className="intro-item">
                <div className="flex-end">
                    <div className="about-inner">
                        <p>
                            Currently working as a Front-end Web Developer at <a target="_blank" rel="noreferrer" href="https://gulosolutions.com">Gulo</a></p>
                    </div>
                </div>
            </div>
            {contents}
        </div>
    );
};
export default ViewAbout;
