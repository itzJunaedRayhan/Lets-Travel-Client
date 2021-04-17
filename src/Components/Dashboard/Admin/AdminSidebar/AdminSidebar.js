import React from 'react';
import './AdminSidebar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faList, faUserAlt, faUserEdit} from '@fortawesome/free-solid-svg-icons'
const AdminSidebar = () => {
    return (
        <div className="col-md-4 admin">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand className="brand"><Link to="/home">Let's Travel</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="admin-items">
                        <Nav.Link><Link to="/addService"><FontAwesomeIcon className="icon" icon={faPlus} />Add Service</Link></Nav.Link>
                        <Nav.Link><Link to="/orderList"><FontAwesomeIcon className="icon" icon={faList} /> Order List</Link></Nav.Link>
                        <Nav.Link><Link to="/makeAdmin"><FontAwesomeIcon className="icon" icon={faUserAlt} />Make Admin</Link></Nav.Link>
                        <Nav.Link><Link to="/manage"><FontAwesomeIcon className="icon" icon={faUserEdit} />Manage Services</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default AdminSidebar;