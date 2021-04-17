import React from 'react';
import './Reviews.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Review from '../Review/Review';

const reviewsData = [
    {
        name : 'Junaed Islam',
        company : 'Web Genesis',
        desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem impedit error alias repudiandae culpa, nemo quisquam atque dolorem, quidem consectetur eum esse quas nostrum molestiae.'
    },
    {
        name : 'Ragnar Lothbrok',
        company : 'Vikings',
        desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem impedit error alias repudiandae culpa, nemo quisquam atque dolorem, quidem consectetur eum esse quas nostrum molestiae.'
    },
    {
        name : 'Thor Odinson',
        company : 'Avengers',
        desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem impedit error alias repudiandae culpa, nemo quisquam atque dolorem, quidem consectetur eum esse quas nostrum molestiae.'
    }
]
const Reviews = () => {
    return (
        <div className="reviews-section">
            <Carousel>
                {
                    reviewsData.map(review => <Review review={review}></Review>)
                }
            </Carousel>
        </div>
    );
};

export default Reviews;