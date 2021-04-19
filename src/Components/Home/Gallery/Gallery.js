import React from 'react';
import './Gallery.css'
const Gallery = ({gallery}) => {
    return (
        <div className="gallery">
            <div className="gallery-image">
                <img src={gallery.images} alt=""/>
            </div>
            <div className="gallery-text">
                <h4>{gallery.place}</h4>
                <p>{gallery.date}</p>
            </div>
        </div>
    );
};

export default Gallery;