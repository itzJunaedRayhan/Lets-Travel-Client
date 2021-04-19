import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ManageBookings = (props) => {
    console.log(props, 'booking')
    const {name, email, card, OrderStatus} = props.manage.Booking;
    const {_id} = props.manage

    const handleDelete = (event, id)=> {
        console.log(event.target.parentNode.parentNode.parentNode)
        fetch(`https://frozen-taiga-77038.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                event.target.parentNode.parentNode.parentNode.style.display = "none";
            }
        })
    }
    return (
        <tbody>
            <tr>
            <td data-label="Name">{name}</td>
            <td data-label="Email">{email}</td>
            <td data-label="Package">{props.manage.package.name}</td>
            <td data-label="Delete">
                <FontAwesomeIcon style={{cursor: 'pointer'}} onClick={(event)=>{handleDelete(event,_id)}} icon={faTrashAlt} />
            </td>
            </tr>
        </tbody>
    );
};

export default ManageBookings;