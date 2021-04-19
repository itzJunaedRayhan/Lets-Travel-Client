import React from 'react';
import './GallerySection.css'
import SouthIsland from '../../../images/Gallery/South Islan.jpg'
import Paris from '../../../images/Gallery/Paris.jpg'
import Florance from '../../../images/Gallery/Florance itally.jpg'
import Barcelona from '../../../images/Gallery/Barcelona-Skyline-and-Park.jpg'
import BurjKhalifa from '../../../images/Gallery/Burj Khalifa.jpg'
import Kashmir from '../../../images/Gallery/Kashmir India pakistan.jpg'
import London from '../../../images/Gallery/London.jpg'
import Maldives from '../../../images/Gallery/maldives.jpg'
import Niagra from '../../../images/Gallery/Niagra Falls-Canada.jpg'
import Prague from '../../../images/Gallery/Prague.jpg'
import Rome from '../../../images/Gallery/Rome.jpg'
import Sundarban from '../../../images/Gallery/Sundarban Bangladesh.jpg'
import Sylhet from '../../../images/Gallery/Sylhet Bangladesh.jpg'
import Gallery from '../Gallery/Gallery';
const galleryData = [
    {
        place : 'New Zealand',
        date  : '14 Jan 2017',
        images: SouthIsland
    },
    {
        place : 'Paris, France',
        date  : '02 Feb 2017',
        images: Paris
    },
    {
        place : 'Florance, Italy',
        date  : '05 March 2017',
        images: Florance
    },
    {
        place : 'Barcelona',
        date  : '08 April 2017',
        images: Barcelona
    },
    {
        place : 'Burj Khalifa, Dubai',
        date  : '12 May 2017',
        images: BurjKhalifa
    },
    {
        place : 'Kashmir, India',
        date  : '17 June 2017',
        images: Kashmir
    },
    {
        place : 'London, England',
        date  : '19 July 2017',
        images: London
    },
    {
        place : 'Maldives',
        date  : '21 September 2017',
        images: Maldives
    },
    {
        place : 'Niagra-Waterfall, Canada',
        date  : '24 October 2017',
        images: Niagra
    },
    {
        place : 'Rome, Italy',
        date  : '27 December 2017',
        images: Rome
    },
    {
        place : 'Sundarban, Bangladesh',
        date  : '05 Jan 2018',
        images: Sundarban
    },
    {
        place : 'Sylhet, Bangladesh',
        date  : '17 Feb 1999',
        images: Sylhet
    }
]
const GallerySection = () => {
    return (
        <section className="gallery-section">
            <div className="gallery-header text-center">
                <h3>OUR Gallery</h3>
                <h2>PHOTOS OUR CUSTOMERS</h2>
            </div>
            <div className="gallery-wrapper">
                {
                    galleryData.map(gallery => <Gallery gallery={gallery}></Gallery>)
                }
            </div>
        </section>
    );
};

export default GallerySection;