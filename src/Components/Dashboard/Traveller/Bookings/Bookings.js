import React from 'react';
import './Bookings.css'
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { userContext } from '../../../../App';
const Bookings = () => {
    const {id} = useParams()
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [services, setServices] = useState({})
    const [Booking, setBooking] = useState({})
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (paymentInfo) => {
        setBooking(paymentInfo)
        const BookingDetails = {
            ...loggedInUser,
            package : services,
            paymentInfo,
            orderDate : new Date()
        }
        console.log(BookingDetails)
    };
    useEffect(()=>{
        fetch('http://localhost:3500/services/'+id)
        .then(res => res.json())
        .then(data => setServices(data))
    },[id])
    return (
        <div className="col-md-8" style={{padding: '0px'}}>
            <div className="bookings">
                <h1>Book</h1>
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
                    <div className="form-group row">
                        <div className="col-md-6">
                            <div class="form-check">
                                <input class="form-check-input" value="credit" type="radio" name="credit" {...register("card")} checked/>
                                <label class="form-check-label">
                                    Credit Card
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="form-check">
                            <input class="form-check-input" value="paypal" type="radio" name="paypal" {...register("card")}/>
                            <label class="form-check-label">
                                Paypal
                            </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="number" placeholder="Card Number" {...register("cardNumber", { required: true })} />
                    </div>
                    <div className="form-group row">
                        <div className="col-md-6 pr-3">
                            <div className="form-group">
                            <input className="form-control" type="number" placeholder="MM/ YY" {...register("mmYY", { required: true })} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <input className="form-control" type="number" placeholder="CVC" {...register("cvc", { required: true })} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row booking-footer">
                        <p>You Have Charged {services.price}</p>
                        <button type="submit" className="bookingBtn">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Bookings;