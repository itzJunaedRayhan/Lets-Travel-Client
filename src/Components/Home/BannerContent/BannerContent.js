import React from 'react';
import './BannerContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const BannerContent = () => {
    return (
        <div className="banner-content">
            <div className="header-text text-center">
                <h2>Book With Us And Book It Out Of Here</h2>
            </div>
            <h3 className="text-center text-white">A Signature Of Excellence and A New Pulse Of Dream</h3>
            <div className="searchbar">
                <div className="search-box">
                    <input type="text" class="search" placeholder="Where would you like to go"/>
                    <button type="submit" class="search-btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
            <Link to="/login">
                <button type="submit" className="banner-btn">Book Now</button>
            </Link>
        </div>
    );
};

export default BannerContent;