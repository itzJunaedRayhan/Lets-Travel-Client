import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import './ContactSection.css'
const ContactSection = () => {
    return (
        <div className="contact-section">
            <div className="contact-header text-center">
                <h3>CONTACT</h3>
                <h2>GET IN TOUCH</h2>
            </div>
            <div className="contact-wrapper">
                <div className="container d-flex justify-content-center">
                <ContactForm/>
                </div>
            </div>    
        </div>
    );
};

export default ContactSection;