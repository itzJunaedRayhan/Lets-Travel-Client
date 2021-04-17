import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const {imgURL, name, desc, price,_id} = props.service;
    const id = props.service._id;
    return (
            <div className="service">
                <div className="service-image">
                    <img src={imgURL} alt="" className="img-responsive"/>
                </div>
                <div className="service-content">
                    <h3>{name}</h3>
                    <p><small>{desc}</small></p>
                    <div className="service-footer">
                    <Link to={`/dashboard/book/${id}`}>
                        <button className="service-btn" type="submit">BOOK NOW</button>
                    </Link>
                        <h1>${price}</h1>
                    </div>
                </div>
            </div>
    );
};

export default Service;