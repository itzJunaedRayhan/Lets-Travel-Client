import React, { useContext, useState } from 'react';
import './Orders.css'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const Orders = (props) => {
    console.log(props.booking.OrderStatus)
    const {name, email} = props.booking.Booking;
    const {_id} = props.booking;
    const handleSelect=(event, id)=>{
        const status = event;
        const UpdateInfo = {id, status};
        fetch(`http://localhost:3500/update/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(UpdateInfo)
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('You Have Changed Order Status !')
            }
        })
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
                title= {`${props.booking.OrderStatus}`}
                className="d-inline-table"
                id="dropdown-menu-align-right"
                onSelect={(event)=>{handleSelect(event,_id)}}
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