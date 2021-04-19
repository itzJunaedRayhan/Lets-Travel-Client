import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-wrapper container">
                <div className="copy-right">
                    <h6>&copy; 2021 All Right Reserved by <a href="https://www.facebook.com/JKwebGenesis"><span> WebGenesis</span></a></h6>
                </div>
                <div className="footer-menu">
                    <ul>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="/support">Support</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/Forum">Forum</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;