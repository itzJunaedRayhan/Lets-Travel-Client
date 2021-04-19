import React from 'react';
import './Bookings.css'
import { set, useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { userContext } from '../../../../App';
import CardForm from '../CardForm/CardForm';
import PaymentSystem from '../PaymentSystem/PaymentSystem';
const Bookings = () => {
    const { id } = useParams()
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [services, setServices] = useState({})
    const [Booking, setBooking] = useState(null)
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        let OrderStatus = 'pending';
        const OrderInfo = {...data, OrderStatus}
        setBooking(OrderInfo)
        const AddStatus = {...loggedInUser, OrderStatus}
        setLoggedInUser(AddStatus);
    }
    console.log(Booking)
    useEffect(() => {
        fetch('https://frozen-taiga-77038.herokuapp.com/services/' + id)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [id])

    const handlePaymentSuccess = (paymentId) => {
        const BookingDetails = {
            ...loggedInUser,
            package: services,
            Booking,
            paymentId,
            orderDate: new Date()
        }
        fetch('https://frozen-taiga-77038.herokuapp.com/addBooking',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(BookingDetails)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                alert('Your Order Placed Successfully')
            }
        })
    }
    return (
            <>
                <div className="col-md-8" style={{ display: Booking ? 'none' : 'block',}}>
                    <div className="bookings">
                        <h3 className="py-4">Book Your Ticket</h3>
                        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input className="form-control" defaultValue={loggedInUser.name} placeholder="Your Name" {...register("name", { required: true })} />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="email" defaultValue={loggedInUser.email} className="form-control" placeholder="Your Email" {...register("email", { required: true })} />
                                {errors.email && <span className="text-danger">This Field is required</span>}
                            </div>
                            <div className="form-group">
                                <input className="form-control" defaultValue={services.name} placeholder="Your Packages" {...register("package", { required: true })} />
                            </div>
                            <div className="form-group row booking-footer">
                                <button type="submit" className="bookingBtn">Next</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-8" style={{ display: Booking ? 'block' : 'none' }}>
                    <p className="text-center text-warning">You Have Charged {services.price}</p>
                    <div className="form-group row">
                                <div className="col-md-6">
                                    <div class="form-check">
                                        <input class="form-check-input" value="credit" type="radio" name="credit" {...register("card")} checked />
                                        <label class="form-check-label">
                                            Credit Card
                                </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="form-check">
                                        <input class="form-check-input" value="paypal" type="radio" name="paypal" {...register("card")} />
                                        <label class="form-check-label">
                                            Paypal
                                        </label>
                                    </div>
                                </div>
                            </div>
                    <PaymentSystem handlePayment={handlePaymentSuccess}></PaymentSystem>
                </div>
            </>
    );
};

export default Bookings;