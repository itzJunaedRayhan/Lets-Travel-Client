import React from 'react';
import './Review.css'
const Review = ({review}) => {
    return (
        <div className="review-content">
            <div className="review-header text-center PY-4">
                <h3 className="">OUR REVIEWS</h3>
                <h2>WHAT OUR CLIENTS SAY</h2>
            </div>
            <div className="client-review">
                <h1>{review.name}</h1>
                <h2>{review.company}</h2>
                <p className="pt-4">{review.desc}</p>
            </div>
        </div>
    );
};

export default Review;