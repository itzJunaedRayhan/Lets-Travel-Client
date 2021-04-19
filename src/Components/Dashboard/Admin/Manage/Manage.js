import React from 'react';
import './Manage.css'
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageBookings from '../ManageBookings/ManageBookings';
const Manage = () => {
    const [manageOrder, setManageOrder] = useState([]);
    useEffect(()=>{
        fetch('https://frozen-taiga-77038.herokuapp.com/bookingList')
        .then(res => res.json())
        .then(data => {
            setManageOrder(data)
        }) 
    },[])
    return (
        <section className="manage-section">
            <div className="row">
                <AdminSidebar/>
                <div className="col-md-8 p-4 booking-details">
                    <h3>Booking List</h3>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Package</th>
                                    <th scope="col">status</th>
                                </tr>
                            </thead>
                            {
                                manageOrder.map(manage => <ManageBookings manage={manage}></ManageBookings>)
                            }
                        </table>
                </div>
            </div>
        </section>
    );
};

export default Manage;