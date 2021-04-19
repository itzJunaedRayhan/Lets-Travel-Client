import React, { useContext, useEffect, useState } from 'react';
import './AdminSidebar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faList, faUserAlt, faUserEdit,faCartPlus,faListAlt,faComment} from '@fortawesome/free-solid-svg-icons'
import { userContext } from '../../../../App';
const AdminSidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [isAdmin, setAdmin] = useState(false)
    useEffect(()=>{
        fetch('http://localhost:3500/isAdmin',{
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setAdmin(data))
    },[])
    return (
        <div className="col-md-4 admin" style={{position: 'fixed'}}>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand className="brand"><Link to="/home">Let's Travel</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="admin-items">
                    {
                    isAdmin &&<>
                        <Nav.Link><Link to="/admin/addService"><FontAwesomeIcon className="icon" icon={faPlus} />Add Service</Link></Nav.Link>
                        <Nav.Link><Link to="/admin/orderList"><FontAwesomeIcon className="icon" icon={faList} /> Order List</Link></Nav.Link>
                        <Nav.Link><Link to="/admin/makeAdmin"><FontAwesomeIcon className="icon" icon={faUserAlt} />Make Admin</Link></Nav.Link>
                        <Nav.Link><Link to="/admin/manage"><FontAwesomeIcon className="icon" icon={faUserEdit} />Manage Services</Link></Nav.Link>
                    </>
                    }
                        <Nav.Link><Link to={`/dashboard/book/607b1c5db3704f3198a7efd1`}><FontAwesomeIcon className="icon" icon={faCartPlus} />Book</Link></Nav.Link>
                        <Nav.Link><Link to="/dashboard/bookingList"><FontAwesomeIcon className="icon" icon={faListAlt} /> Booking</Link></Nav.Link>
                        <Nav.Link><Link to="/dashboard/addReview"><FontAwesomeIcon className="icon" icon={faComment} />Add Review</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default AdminSidebar;