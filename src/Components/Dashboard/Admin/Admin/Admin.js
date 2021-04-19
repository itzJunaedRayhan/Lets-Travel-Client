import React, { useContext, useEffect, useState } from 'react';
import './Admin.css'
import { userContext } from '../../../../App';
import Bookings from '../../Traveller/Bookings/Bookings';
import AddServices from '../AddServices/AddServices';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [isAdmin, setAdmin] = useState(false)
    useEffect(()=>{
        fetch('https://frozen-taiga-77038.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setAdmin(data))
    },[])
    console.log(isAdmin)
    return (
        <section className="admin-section">
            <div className="row">
            <AdminSidebar/>
            {
                isAdmin ? <AddServices/> :  <Bookings/>
            }
            </div>
        </section>
    );
};

export default Admin;