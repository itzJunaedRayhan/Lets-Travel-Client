import React, { useState } from 'react';
import './CardForm.css'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const CardForm = ({handlePayment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null)
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        if (!stripe || !elements) {
          return;
        }
        const cardElement = elements.getElement(CardElement);
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
        });
    
        if (error) {
          setPaymentError(error.message)
          setPaymentSuccess(null)
        }else{
          setPaymentSuccess(paymentMethod.id)
          setPaymentError(null)
          handlePayment(paymentMethod.id)
        }
      };
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <CardElement/>
        <button type="submit" disabled={!stripe}>
            Confirm
        </button>
        </form>
        {
            paymentError && <p style={{color: 'red'}}>{paymentError}</p>
        }{
            paymentSuccess && <p style={{color: 'green'}}>Your Payment was successfully Done</p>
        }
        </div>
    );
};

export default CardForm;