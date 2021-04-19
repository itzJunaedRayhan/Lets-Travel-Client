import React from 'react';
import './OrderList.css'
import { useEffect } from 'react';
import { useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import Orders from '../Orders/Orders';

const OrderList = () => {
    const [bookList, setBookList] = useState([]);
    useEffect(()=>{
        fetch('https://frozen-taiga-77038.herokuapp.com/bookingList')
        .then(res => res.json())
        .then(data => {
            setBookList(data)
        }) 
    },[])
    return (
        <div className="order-list">
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
                                    <th scope="col">Price</th>
                                    <th scope="col">status</th>
                                </tr>
                            </thead>
                            {
                                bookList.map(booking => <Orders booking={booking}></Orders>)
                            }
                        </table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;