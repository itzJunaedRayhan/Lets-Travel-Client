import React from 'react';
import './Member.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faTwitter, faSkype, faGooglePlus} from '@fortawesome/free-brands-svg-icons'

const Member = ({member}) => {
    return (
        <div className="member">
                <div className="member-image">
                    <img src={member.image} alt="" className="img-fluid"/>
                    <div className="social">
                        <ul>
                            <li><a href=""><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href=""><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href=""><FontAwesomeIcon icon={faSkype} /></a></li>
                            <li><a href=""><FontAwesomeIcon icon={faGooglePlus} /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="member-content">
                    <h5>{member.name}</h5>
                    <h6>{member.title}</h6>
                    <p><small>{member.text}</small></p>
                </div>
            </div>
    );
};

export default Member;