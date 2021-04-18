import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { userContext } from '../../../../App';
import TravellerSidebar from '../../TravellerSidebar/TravellerSidebar';
import Booked from '../Booked/Booked';

const BookingList = () => {
    const [bookList, setBookList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    useEffect(()=>{
        fetch('http://localhost:3500/bookListByEmail', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => {
            setBookList(data)
        }) 
    },[])
    console.log(bookList, 'Booking List')
    return (
        <section className="booking-list">
            <div className="row">
                <TravellerSidebar/>
                <div className="col-md-8 p-4 booking-details">
                    <h3>Booking List</h3>
                            <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Package</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            {
                            bookList.map(booked => <Booked booked={booked}></Booked>)
                            }
                            </table>
                </div>
            </div>
        </section>
    );
};

export default BookingList;