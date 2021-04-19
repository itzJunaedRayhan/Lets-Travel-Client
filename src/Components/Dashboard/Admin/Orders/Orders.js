import React, { useContext, useState } from 'react';
import './Orders.css'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { userContext } from '../../../../App';

const Orders = (props) => {
    const {name, email, card, OrderStatus} = props.booking.Booking;
    const handleSelect=(e)=>{
        console.log(e)
    }
    return (
        <tbody>
            <tr>
            <td data-label="Name">{name}</td>
            <td data-label="Email">{email}</td>
            <td data-label="Package">{props.booking.package.name}</td>
            <td data-label="Price">1000</td>
            <td data-label="Status">
            <DropdownButton
                alignRight
                title= "select"
                className="d-inline-table"
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
                    >
                        <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                        <Dropdown.Item eventKey="On Going">On Going</Dropdown.Item>
                        <Dropdown.Item eventKey="Done">Done</Dropdown.Item>
            </DropdownButton>
            </td>
            </tr>
        </tbody>
    );
};

export default Orders;