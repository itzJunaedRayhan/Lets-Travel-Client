import React from 'react';
import './Menubar.css'
import profile from '../../../images/profile.jpg'
import menuIcon from '../../../images/menu-bar.png'
import {NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../../App';
const Menubar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const closeNav = () => {
        document.getElementById('menu').style.visibility = 'hidden';
    }
    const openNav = () => {
        document.getElementById('menu').style.visibility = 'visible'
    }
    return (
        <>
        <div className="navbar-wrapper">
            <div className="row container-fluid hamburger-section">
                <div className="hamburger-icon">
                    <a href="javascript:void(0)" onClick={openNav} class="openBtn">
                        <img src={menuIcon}  alt=""/>
                    </a>
                </div>
                <div className="hamburger-profile">
                    <img src={profile} alt="" className="profile"/>
                </div>
            </div>
            
            <div className="brand">
                <a href="">
                    Let's Travel
                    {/* <img src={brand} alt="" height="75px" width="75px" className="img-responsive"/> */}
                </a>
            </div>
            <div className="menu-items ml-auto">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="#service" className="mr-4">Service</a></li>
                    <NavDropdown title="Hotel" id="collasible-nav-dropdown" style={{backgroundColor: 'transparent'}}>
                        <NavDropdown.Item href="/urban">Urban Hotels</NavDropdown.Item>
                        <NavDropdown.Item href="/resorts">Beach Resorts</NavDropdown.Item>
                        <NavDropdown.Item href="/sky">Ski Hotels</NavDropdown.Item>
                        <NavDropdown.Item href="/star">star hotel</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Vehicles" id="collasible-nav-dropdown" style={{backgroundColor: 'transparent'}}>
                        <NavDropdown.Item href="/flight">Flight</NavDropdown.Item>
                        <NavDropdown.Item href="/cruises">Cruises</NavDropdown.Item>
                        <NavDropdown.Item href="/train">Train</NavDropdown.Item>
                        <NavDropdown.Item href="/bus">Bus</NavDropdown.Item>
                    </NavDropdown>
                    <li><a href="#about">About</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><Link to="/admin/addService">Admin</Link></li>
                    <li><Link to="/login" className="login">Login</Link></li>
                </ul>  
            </div>
        </div>
        <div className="mobile-menu" id="menu" style={{visibility: 'hidden'}}>
            <a href="javascript:void(0)" onClick={closeNav} class="closeBtn"><span>&times;</span></a>
            <ul>
                <li><a onClick={closeNav} href="/home">Home</a></li>
                <li><a onClick={closeNav} href="/offer">Service</a></li>
                <NavDropdown title="Hotel" id="collasible-nav-dropdown" style={{backgroundColor: 'transparent'}}>
                    <NavDropdown.Item onClick={closeNav} href="/urban">Urban Hotels</NavDropdown.Item>
                    <NavDropdown.Item onClick={closeNav} href="/resorts">Beach Resorts</NavDropdown.Item>
                    <NavDropdown.Item onClick={closeNav} href="/sky">Ski Hotels</NavDropdown.Item>
                    <NavDropdown.Item onClick={closeNav} href="/star">star hotel</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Vehicles" id="collasible-nav-dropdown" style={{backgroundColor: 'transparent'}}>
                    <NavDropdown.Item onClick={closeNav} href="/flight">Flight</NavDropdown.Item>
                    <NavDropdown.Item onClick={closeNav} href="/cruises">Cruises</NavDropdown.Item>
                    <NavDropdown.Item onClick={closeNav} href="/train">Train</NavDropdown.Item>
                    <NavDropdown.Item onClick={closeNav} href="/bus">Bus</NavDropdown.Item>
                </NavDropdown>
                <li><a onClick={closeNav} href="">About</a></li>
                <li><a onClick={closeNav} href="">Blog</a></li>
                <li><a onClick={closeNav} href="/reviews">Reviews</a></li>
                <li onClick={closeNav}><Link to="/admin/addService">Admin</Link></li>
                <li onClick={closeNav}><Link to="/login" className="login">Login</Link></li>
            </ul>   
        </div>
        </>
    );
};

export default Menubar;