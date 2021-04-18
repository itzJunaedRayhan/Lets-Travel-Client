import React from 'react';

const Booked = ({booked}) => {
    return (
        <tbody>
            <tr>
            <td>{booked.Booking.package}</td>
            <td>{booked.package.price}</td>
            <td>{booked.Booking.OrderStatus}</td>
            </tr>
        </tbody>
    );
};

export default Booked;