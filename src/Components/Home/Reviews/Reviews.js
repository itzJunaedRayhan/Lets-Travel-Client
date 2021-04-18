import React from 'react';
import './Reviews.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Review from '../Review/Review';
import { useEffect } from 'react';
import { useState } from 'react';


const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3500/reviews')
        .then(response => response.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className="reviews-section">
            <Carousel>
                {
                    reviews.map(review => <Review review={review}></Review>)
                }
            </Carousel>
        </div>
    );
};

export default Reviews;