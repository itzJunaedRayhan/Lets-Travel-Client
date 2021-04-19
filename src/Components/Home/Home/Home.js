import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Blogs from '../Blogs/Blogs';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';
import GallerySection from '../GallerySection/GallerySection';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';
import TeamMember from '../TeamMember/TeamMember';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <Subscribe/>
            <AboutUs/>
            <GallerySection/>
            <TeamMember/>
            <Reviews/>
            <Blogs/>
            <ContactSection/>
            <Footer/>
        </div>
    );
};

export default Home;