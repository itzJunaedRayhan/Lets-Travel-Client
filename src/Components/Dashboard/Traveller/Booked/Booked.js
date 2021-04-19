import React from 'react';

const Booked = ({booked}) => {
    console.log(booked.OrderStatus, 'From Booklist')
    return (
        <tbody>
            <tr>
            <td data-label="Package">{booked.Booking.package}</td>
            <td data-label="Price">{booked.package.price}</td>
            <td data-label="Status">{booked.OrderStatus}</td>
            </tr>
        </tbody>
    );
};

export default Booked;