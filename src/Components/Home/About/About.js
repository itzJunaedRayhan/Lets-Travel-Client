import React from 'react';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const About = ({about}) => {
    return (
        <div className="about">
            <div className="about-icon">
                <FontAwesomeIcon icon={about.icon} />
            </div>
            <h4>{about.name}</h4>
            <p>{about.text}</p>
            <button type="submit" className="about-btn">VIEW MORE</button>
        </div>
    );
};

export default About;