import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CarouselItem.css'
import { Carousel } from 'react-responsive-carousel';
import BannerContent from '../BannerContent/BannerContent';
const CarouselItems = () => {
    return (
        <div className="carousel-section">
            <Carousel>
                <BannerContent/>
                <BannerContent/>
                <BannerContent/>
            </Carousel>
        </div>
    );
};

export default CarouselItems;