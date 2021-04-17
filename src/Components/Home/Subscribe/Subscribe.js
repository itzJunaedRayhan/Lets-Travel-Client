import React from 'react';
import './Subscribe.css'
const Subscribe = () => {
    return (
        <div className="subscribe-section">
            <div className="subscribe text">
                <h2>SUBSCRIBE</h2>
                <h3>LET'S SUBSCRIBE</h3>
            </div>
            <div className="subscribe-form">
                <input type="email" name="email" placeholder="Enter Your Email" />
                <button type="submit" className="subscribe-btn">SUBSCRIBE</button>
            </div>
        </div>
    );
};

export default Subscribe;